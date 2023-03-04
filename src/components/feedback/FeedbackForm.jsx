import React, { useState , useContext, useEffect} from 'react'
import Button from './shared/Button'
import Card from './shared/Card'
import '../../CSS/main.css'
import RatingSelect from './RatingSelect'
import FeedbackContext from './context/FeedbackContext'

function FeedbackForm() {

    const [text, setText] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [rating, setRating] = useState('')
    const [message, setMessage] = useState('')
    

    const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)

    useEffect (()=>{
        if(feedbackEdit.edit === true){
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

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(text.trim().length > 10){
            const newFeedBack = {
                text,
                rating
            }
            
            if(feedbackEdit.edit === true){
                updateFeedback(feedbackEdit.item.id, newFeedBack)
            }else{
                addFeedback(newFeedBack);
            }
            setText('')
        }
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would rate our restaurant ?</h2>
                <RatingSelect select={(rating) => setRating(rating) }/>
                <div className='input-group'>
                    <input onChange={handleInputText} type="text" placeholder='Write a Review' value={text} />
                    <Button type='submit' isDisabled={btnDisabled}>
                        Send</Button>
                </div>

                {message && <div className='message'>{message}</div>}
            </form>
        </Card>
    )
}

export default FeedbackForm