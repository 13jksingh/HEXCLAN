import { useState } from "react";
import useEth from "../../contexts/EthContext/useEth";

function EHR({ setValue }) {
    const { state: { contract, accounts } } = useEth();
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [Dlist, setDlist] = useState([]);

    function handleChange(e) {
        const who = e.target.name;
        if (who === "name") {
            setName(e.target.value);
        } else if (who === "age") {
            setAge(e.target.value);
        }
    }
    async function registerDoctor() {
        await contract.methods.addDoctor(name, age).send({ from: accounts[0] });
    }

    async function registerPatient() {
        await contract.methods.addDoctor(name, age).send({ from: accounts[0] });
    }

    async function display() {
        const detail = await contract.methods.mapDoctor(accounts[0]).call();
        console.log(detail);
    }

    async function listDoctor() {
        const count = await contract.methods.readCount().call();
        var arr = [];
        for (var i = 0; i < count; i++) {
            const doctor_i = await contract.methods.listDoctor(i).call();
            console.log(doctor_i);
            arr.push(doctor_i.name);
        }
        console.log(arr);
        setDlist(arr);
    }

    async function registerPatient() {
        await contract.methods.addPatient(name, age).send({ from: accounts[0] });
    }

    return (
        <div className="btns">
            <input type="text" placeholder="Name" name="name" onChange={handleChange} value={name} />
            <input type="number" placeholder="Age" name="age" onChange={handleChange} value={age} />
            <button onClick={registerDoctor}>Register as Doctor</button>
            <button onClick={registerPatient}>Register as Patient</button>
            <button onClick={listDoctor}>Display</button>
            {/* {Dlist.forEach((e)=>console.log(e.name))} */}
            <h3>Doctor</h3>
            {Dlist.map((d) => (
                <p >{d}</p>
            ))}
            <h3>Patient</h3>
            
        </div>
    );
}

export default EHR;