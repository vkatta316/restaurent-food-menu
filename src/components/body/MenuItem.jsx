import React from 'react'
import {Card, Container, Col} from "react-bootstrap"

function MenuItem({dish, handleClick}) {
    console.log(dish);

  return (

    <div>
        <>
            <Container>
                <Col>
                <Card style={{ width: '25rem' }}>          
                    <Card.Img variant="top" src={dish.image} />
                        <Card.Body>
                            <Card.Title style={{ cursor: 'pointer' }} onClick = {() => handleClick(dish)} >
                                {dish.name}
                            </Card.Title>
                            <Card.Text>
                                {dish.description}
                            </Card.Text>
                    
                        </Card.Body>
                </Card>
                </Col>

            </Container>
        </>
        
    </div>
  )
}

export default MenuItem


 {/* <div className='container'> 
        <div className='row'>
            <div className='col-6'>
                <h1>{dish.menu}</h1>
            </div>
            <div className='col-6'>
                <h1>{dish.Category}</h1>
            </div>
        </div>
    </div> */}