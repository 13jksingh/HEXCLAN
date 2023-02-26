import React, { useState } from 'react'
import {
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBBtn,
    MDBIcon,
    MDBInput,
    MDBCheckbox
} from 'mdb-react-ui-kit';
import useEth from "../contexts/EthContext/useEth";
import { redirect } from "react-router-dom";

function Login() {
    const { state: { contract, accounts } } = useEth();
    const [owner,setOwner] = useState(false);
    const [name, setName] = useState("");
    const [age, setAge] = useState();
    const [addr,setAddr] = useState("")

    function handleChange(e) {
        const who = e.target.name;
        console.log(who);
        if (who === "name") {
            setName(e.target.value);
        } else if (who === "age") {
            setAge(e.target.value);
        }else if (who === "Public"){
            setAddr(e.target.value);
        }
    }

    async function isOwner(){
        const o = await contract.methods.owner().call({from:accounts[0]});
        console.log(o,accounts[0]);
        if (o=== accounts[0]){
            setOwner(true)
        }
        else{
            setOwner(false);
        }
    }

    async function register() {
        if (owner){
            await contract.methods.addDoctor(name, age,addr).send({ from: accounts[0]});  
            redirect("/home");
        }else{
            await contract.methods.addPatient(name, age).send({ from: accounts[0]});
        }
    }

    isOwner();

    return (

        <MDBContainer fluid className="p-3 my-5">

            <MDBRow>

                <MDBCol col='10' md='6'>
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" class="img-fluid" alt="Phone image" />
                </MDBCol>

                <MDBCol col='4' md='6'>
                    { owner
                    ? <h1>Register Doctor</h1> :
                    <h1>Register Patient</h1>}

                    <MDBInput wrapperClass='mb-4' label='Name' id='formControlLg' type='text' size="lg" onChange={handleChange} value={name} name="name"/>
                    <MDBInput wrapperClass='mb-4' label='Age' id='formControlLg' type='text' size="lg" onChange={handleChange} value={age} name="age" />
                    {owner ? <MDBInput wrapperClass='mb-4' label='Public Key' id='formControlLg' type='text' size="lg" onChange={handleChange} value={addr} name="Public" /> : null}

                    <MDBBtn className="mb-4 w-100" size="lg" onClick={register}>Sign in</MDBBtn>


                </MDBCol>

            </MDBRow>

        </MDBContainer>
    );
}

export default Login;