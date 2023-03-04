import React from 'react'
import { useState, createContext } from 'react'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) =>{
    const[feedback, setFeedback] = useState([
      {  id: 1,
        rating: 9,
        text: 'Test' 
        }
    ])



  const[feedbackEdit, setFeedbackEdit]  = useState({
    item: {},
    edit: false
  })

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    console.log('Vinay', newFeedback)
    setFeedback([newFeedback, ...feedback])
  }

  const editFeedback = (item) =>{
    setFeedbackEdit({
        item,
        edit:true
    });

  }

  const deleteFeedback = (id) => {
    console.log('App', id);
    if (window.confirm('Are you sure you want to delete ?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  const updateFeedback = (id, updateItem) =>{
    setFeedback(feedback.map((item) => item.id === id ? {...item,...updateItem} : item))
    console.log(id,updateItem);
  }

    return <FeedbackContext.Provider 
        value={{feedback, deleteFeedback,addFeedback, editFeedback, feedbackEdit,updateFeedback,
        }}
    >
        {children}
    </FeedbackContext.Provider>


}


export default FeedbackContext