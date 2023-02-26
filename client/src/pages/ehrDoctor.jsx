import React, { useState } from 'react'
import useEth from "../contexts/EthContext/useEth";
import CardGroup from 'react-bootstrap/CardGroup';
import PatientCard from '../components/PatientCard';

function EhrDoctor() {
    const { state: { contract, accounts } } = useEth();

    const [Dlist, setDlist] = useState([]);

    async function PatientsList() {
        const doctor = await contract.methods.mapDoctor(accounts[0]).call();
        console.log(doctor.pAccess);
    }
    PatientsList();
    return (
        <>
            <CardGroup>
                <PatientCard />
                <PatientCard />
                <PatientCard />
                
            </CardGroup>

            
        </>
    )
}

export default EhrDoctor

