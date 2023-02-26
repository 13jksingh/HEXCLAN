import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import useEth from "../contexts/EthContext/useEth";
import Button from 'react-bootstrap/Button';

function Patientehr() {
    const { state: { contract, accounts } } = useEth();
    const [Dlist, setDlist] = useState([]);

    async function listDoctor() {
        // const count = await contract.methods.readCount().call();
        var arr = [];
        for (var i = 0; i < 2; i++) {
            const doctor_i = await contract.methods.listDoctor(i).call();
            arr.push(doctor_i);
        }
        setDlist(arr);
    }
    async function handleClick() {
        await listDoctor();
    }

    return (
        <>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Describe Your Problem</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Select aria-label="Default select example" onClick={handleClick}>
                    <option>Select Doctor</option>
                    {Dlist.map((d) => (
                        <option value={d.publicKey} key={d.publicKey}>{d.name}</option>
                    ))}
                </Form.Select>
                <br></br>
                <Button variant="primary">Submit</Button>{' '}
            </Form>

        </>
    )
}

export default Patientehr