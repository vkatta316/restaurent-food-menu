import React, { useState, useEffect, useContext } from 'react'
import { Form, Container, Row, Col, FloatingLabel } from "react-bootstrap"
import FeedbackContext from '../feedback/context/FeedbackContext'
import FeedbackForm from '../feedback/FeedbackForm'
import FeedbackList from '../feedback/FeedbackList'
import FeedbackStats from '../feedback/FeedbackStats'
import RatingSelect from '../feedback/RatingSelect'
import Card from '../feedback/shared/Card'
import Button from '../feedback/shared/Button'

function Contact() {

    const [state, setState] = useState({ firstName: "", lastName: "", mobileNumber: "", email: "", message: "", contactFlag: "" })

    const handleInputChange = (e) => {
        console.log({ [e.target.name]: e.target.value })
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const [text, setText] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    const [rating, setRating] = useState('')

    const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext)

    useEffect(() => {
        if (feedbackEdit.edit === true) {
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)

        }
        console.log('Hellow')
    }, [feedbackEdit])

    const handleInputText = (e) => {
        console.log(e.target.value)
        if (text === '') {
            setBtnDisabled(true)
            setMessage(null)
        } else if (text !== '' && text.trim().length < 10) {
            setMessage('Text must be atleast 10 characters')
            setBtnDisabled(true)
        }
        else {
            setBtnDisabled(false)
            setMessage(null)
        }

        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Feedback created", state);
        if (text.trim().length > 10) {
            const newFeedBack = {
                text,
                rating
            }

            if (feedbackEdit.edit === true) {
                updateFeedback(feedbackEdit.item.id, newFeedBack)
            } else {
                addFeedback(newFeedBack);
            }
            setText('')
        }
    }

    /* const handlePrimarySubmit = (e) => {
        e.preventDefault();
        console.log("Feedback created", state);
      }; */
    document.title = "Contact Page"

    return (
        <div>
            <>
                <Container >
                    <h1>Send Us Your Feedback</h1>
                    <Form onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="exampleForm.ControlInput1">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" name="firstName" placeholder="First Name" onChange={handleInputChange} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="exampleForm.ControlInput1">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Last Name" name="lastName" onChange={handleInputChange} />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="exampleForm.ControlInput1">
                                <Form.Label>Mobile Number</Form.Label>
                                <Form.Control type="text" name="mobileNumber" placeholder="999-999-9999" onChange={handleInputChange} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="exampleForm.ControlInput1">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" name="email" placeholder="example@gmail.com" onChange={handleInputChange} />
                            </Form.Group>
                        </Row>
                        <Form.Group className="mb-3" id="formGridCheckbox">
                            <Form.Check type='checkbox' label="Do you want to receive notifications and emails ?" name="contactFlag" onChange={handleInputChange} />
                        </Form.Group>

                        <Card>
                            {/* <form onSubmit={handleSubmit}> */}
                                <h2>How would you rate our restaurant ?</h2>
                                <RatingSelect select={(rating) => setRating(rating)} />
                                <div className='input-group'>
                                    <input onChange={handleInputText} type="text" placeholder='Write a Review' value={text} />
                                    <Button type='submit' isDisabled={btnDisabled}>
                                        Send</Button>
                                </div>

                                {message && <div className='message'>{message}</div>}
                            {/* </form> */}
                        </Card>
                        <FeedbackStats />
                        <FeedbackList  />
                        {/*   <Form.Label>Message</Form.Label>
                        <FloatingLabel controlId="floatingTextarea" label="Message" className="mb-3" >
                            <Form.Control as="textarea" placeholder="Leave a message here" name = "message" onChange={handleInputChange}/>
                        </FloatingLabel>
                         */}



                        
                       {/*  <Button onClick= {handlePrimarySubmit} type="submit" variant="dark">Submit</Button> */}
                    </Form>
                </Container>
            </>

        </div>
    )
}

export default Contact