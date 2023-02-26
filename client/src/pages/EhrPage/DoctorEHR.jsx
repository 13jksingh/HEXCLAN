import React, { useState } from "react";
import useEth from "../../contexts/EthContext/useEth";

export default function DoctorEHR() {
    const { state: { contract, accounts } } = useEth();
    const [Dlist, setDlist] = useState([]);

    async function listDoctor() {
        const count = await contract.methods.readCount().call();
        var arr = [];
        for (var i = 0; i < count; i++) {
            const doctor_i = await contract.methods.listDoctor(i).call();
            console.log(doctor_i);
            arr.push(doctor_i);
        }
        setDlist(arr);
    }
     async function giveAccess(props){
        const doctorA = await contract.methods.listDoctor(props.id).call();
        console.log(doctorA);
        const doctorB = await contract.methods.giveAccess(doctorA.publicKey).call({from:accounts[0]});
        // const doctorB = await contract.methods.mapDoctor(doctorA.publicKey).call();
        console.log(doctorB)
     }

    return (
        <>
            <h1>Doctor EHR</h1>
            <button onClick={listDoctor}>Display Doctors</button>
            {Dlist.map((d) => (
                <>
                    <p key={d.id}>{d.name}</p>
                    <button onClick={()=>giveAccess(d)}>Give Access</button>
                </>

            ))}
        </>
    )
}