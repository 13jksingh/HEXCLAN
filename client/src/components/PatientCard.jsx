import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';

export default function PatientCard() {
    return (
        <Card border="info" style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Vanshika Garg</Card.Title>
                <Card.Text>
                    Sneezing from past 10 days
                </Card.Text>
                <Button variant="secondary">See History</Button>{' '}
                {/* <Button variant="primary">Add Dignosis</Button>{' '} */}
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Add Dignosis
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Form>
                            <Form.Group className="mb-3" >
                                <Form.Control type="text" placeholder="Enter your remarks" />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Control type="text" placeholder="Enter Medicine" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control type="text" placeholder="Enter medical digniosis" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Dropdown.Menu>
                </Dropdown>
            </Card.Body>
        </Card>
    )
}
