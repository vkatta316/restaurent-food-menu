import React, { useState } from 'react'
import { Form, Container, Row, Col, Button, FloatingLabel } from "react-bootstrap"

function Contact() {

    const[state, setState] = useState({ firstName: "", lastName: "", mobileNumber: "", email: "", message: "", contactFlag:"" })

    const handleInputChange = (e) => {
        console.log({[e.target.name]: e.target.value})
        setState({...state , [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Feedback created", state);
      };
      document.title = "Contact Page"

    return (
        <div>
            <>
                <Container>
                    <h1>Send Us Your Feedback</h1>
                    <Form onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="exampleForm.ControlInput1">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" name = "firstName" placeholder="First Name" onChange={handleInputChange} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="exampleForm.ControlInput1">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Last Name" name = "lastName" onChange={handleInputChange} />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="exampleForm.ControlInput1">
                                <Form.Label>Mobile Number</Form.Label>
                                <Form.Control type="text" name = "mobileNumber" placeholder="999-999-9999" onChange={handleInputChange}/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="exampleForm.ControlInput1">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" name = "email" placeholder="example@gmail.com"  onChange={handleInputChange}/>
                            </Form.Group>
                        </Row>
                        <Form.Label>Message</Form.Label>
                        <FloatingLabel controlId="floatingTextarea" label="Message" className="mb-3" >
                            <Form.Control as="textarea" placeholder="Leave a message here" name = "message" onChange={handleInputChange}/>
                        </FloatingLabel>
                        <Form.Group className="mb-3" id="formGridCheckbox">
                            <Form.Check type='checkbox' label="May we contact you" name = "contactFlag" onChange={handleInputChange}/>
                        </Form.Group>
                        <Button type="submit" variant="dark">Submit</Button>
                    </Form>
                </Container>
            </>

        </div>
    )
}

export default Contact