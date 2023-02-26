import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import useEth from "../contexts/EthContext/useEth";

function Patientehr() {
    const { state: { contract, accounts } } = useEth();
    const [Dlist, setDlist] = useState([]);

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
    async function handleClick() {
        await listDoctor();
    }

    return (
        <>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Form.Select aria-label="Default select example" onClick={handleClick}>
                    <option>Open this select menu</option>
                    {Dlist.map((d) => (
                        <option value="1">{d.name}</option>
                    ))}
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
            </Form>

        </>
    )
}

export default Patientehr