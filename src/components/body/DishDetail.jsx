import React from 'react'
import {Card} from "react-bootstrap"

function DishDetail({dish}) {
    console.log('dishDetails' +dish)
  return (
    <div>
        <Card style={{ width: '29rem' }}>
            <Card.Img variant="top" src={dish.image} />
            <Card.Body>
                <Card.Title style={{ cursor: 'pointer' }}>{dish.name}</Card.Title>
                <Card.Text>
                {dish.description}
                </Card.Text>
               
            </Card.Body>
        </Card>
    </div>
  )
}

export default DishDetail