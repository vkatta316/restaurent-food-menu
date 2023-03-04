import React from 'react'
import { useState } from 'react'
import DishDetail from './DishDetail.jsx';
import MenuItem from './MenuItem.jsx'
import { Container, Row , Modal, Button} from 'react-bootstrap';
import '../../CSS/main.css'

function Menu({ menuData, handleClick, selectedDish, showDialog , handleClose}) {

    document.title = "Menu"
    console.log(menuData.length);
    if (!menuData || menuData.length == 0) {
        return <p>No Menu Found</p>
    }

  


    return (
        <Container>
            <Row lg={3} md={3} sm={6} xs={6}>
                {menuData.map((item) =>
                    <MenuItem key={item.id} dish={item}
                        handleClick={handleClick} />
                )}
            </Row>

            <Modal show={showDialog} onHide={handleClose}>
                
                <Modal.Body>
                    {selectedDish.name ? <DishDetail key={selectedDish.id} dish={selectedDish} /> : 'Nothing Selected '}  
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
        /* <div className='container'> 
            <div className='row'>
                <div className='col-6'>
                    {menuData.map((item)=>
                        <MenuItem key={item.id} dish={item}
                        handleClick = {handleClick} />
                    )}
                </div>
                <div className='col-6'>
                   {selectedDish.name ? <DishDetail key={selectedDish.id} dish={selectedDish} /> : 'Nothing Selected '}  
                </div>
            </div>
        </div> */

    )
}

export default Menu


/*   */


/* <div className='container'>
        {menuData.map((item)=>
            <MenuItem key={item.id} dish={item}/>
        )}
    </div> */