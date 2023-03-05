import React from 'react'
import { useState, createContext ,useEffect} from 'react'

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) =>{

  //const [isLoading, setIsLoading] = useState(true)

    const[feedback, setFeedback] = useState([
      
    ])

  const[feedbackEdit, setFeedbackEdit]  = useState({
    item: {},
    edit: false
  })

  useEffect(() => {
    fetchFeedback()
  },[])

  const fetchFeedback = async() =>{
    const response  = await fetch(
      `/feedback?_sort=id&_order=desc`
      )
      
    const feedbackInfo = await response.json()
    
    console.log(feedbackInfo)
    setFeedback(feedbackInfo)
  }

  const addFeedback = async (newFeedback) => {

    const response = await fetch('/feedback', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(newFeedback),
    })

    const data = await response.json()
    setFeedback([data, ...feedback])
  }

  const editFeedback = (item) =>{
    setFeedbackEdit({
        item,
        edit:true
    });

  }

  const deleteFeedback = async (id) => {
    console.log('App', id);
    if (window.confirm('Are you sure you want to delete ?')) {

      await fetch(`/feedback/${id}`, {method:'DELETE'})
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  const updateFeedback = async (id, updateItem) =>{
  const response = await fetch(`/feedback/${id}`,{
   method:'PUT',
   headers: {
    'Content-Type':'application/json'
   },
   body: JSON.stringify(updateItem)
  }
  )
    const data = await response.json()
    setFeedback(feedback.map((item) => item.id === id ? {...item, ...data} : item))
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