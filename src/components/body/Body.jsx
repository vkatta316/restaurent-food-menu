import {useState} from 'react'
import React from 'react'
import Menu from './Menu'
import MENU from '../../data/menu.js'
import DishDetail from './DishDetail'


function Body() {
  const[menuData, setMenuData] = useState(MENU)
  //const[selectedDist, setSelectedDist] = null
  
  let dishDetails = null;
  const setSelectedDish = (Dish ) =>{
    console.log('Dish' , {Dish})
    //selectedDist= menuData(Dish)
    dishDetails = <DishDetail dish = {Dish}/>
  }

  return (
   
    <div className="bodyContainer">
        <Menu menuData = {menuData} 
        handleClick = {setSelectedDish}
        />
    </div>
   
  )
}

export default Body