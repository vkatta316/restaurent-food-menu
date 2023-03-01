import React from 'react'
import {useState} from 'react'
import DishDetail from './DishDetail.jsx';
import MenuItem from './MenuItem.jsx'
import { Container, Row } from 'react-bootstrap';

function Menu({menuData, handleClick}) {
    console.log(menuData.length);
    if(!menuData || menuData.length == 0){
        return <p>No Menu Found</p>
    }


  return (
 /*    <Container>
        <Row lg={3} md={3} sm={6} xs={6}>
                {menuData.map((item)=>
                    <MenuItem key={item.id} dish={item}
                    handleClick = {handleClick} />
                )}
        </Row>
    </Container> */
    <div className='container'> 
        <div className='row'>
            <div className='col-6'>
                {menuData.map((item)=>
                    <MenuItem key={item.id} dish={item}
                    handleClick = {handleClick} />
                )}
            </div>
            <div className='col-6'>
                <h1></h1>
                //dishDetails
            </div>
        </div>
    </div>
   
  )
}

export default Menu
    

/*   */


    /* <div className='container'>
            {menuData.map((item)=>
                <MenuItem key={item.id} dish={item}/>
            )}
        </div> */