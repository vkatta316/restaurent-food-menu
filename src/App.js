import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

import PropTypes from 'prop-types'
import Body from './components/body/Body'
import AboutPage from './components/body/AboutPage'
import Home from './components/body/Home'
import Contact from './components/body/Contact'
import {useState} from 'react'
import MENU from '../src/data/menu.js'


function App() {

  const[menuData, setMenuData] = useState(MENU)
  const[selectDish, setSelectDish] = useState({})
  const [show, setShow] = useState(false);

  //let dishDetails = null;
  const handleSelectedDish = (Dish ) =>{
    console.log('Dish' , {Dish})
    setSelectDish(Dish)
    setShow(true);
    //selectedDist= menuData(Dish)
    //dishDetails = <DishDetail dish = {Dish}/>
  }

  const handleClose = () => setShow(false);

  return (

    <div className="bodyContainer">
        <Body menuData = {menuData} 
        handleClick={handleSelectedDish}
        selectedDish = {selectDish}
        showDialog={show}
        handleClose={handleClose}
        />
    </div>
   /*  <Router>
        <Routes>
          
          <Route exact path='/menu' element = {
              <>
                <Header />
                <Body/>
                <Footer />
              </>
            }>
          </Route>
            
       
          <Route path='/' element = {
               <>
                <Header />
                <Home/>
                <Footer />
              
               </> 
                
              }>

          </Route>

          <Route path='/about' element = {
               <>
                <Header />
                <AboutPage/>
                <Footer />
              
               </> 
                
              }>

          </Route>

          <Route path='/contact' element = {
               <>
                <Header />
                <Contact/>
                <Footer />
              
               </> 
                
              }>

          </Route>
          
         
        </Routes>
        
    </Router> */
    
  )
}

export default App