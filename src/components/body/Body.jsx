import {useState} from 'react'
import React from 'react'
import Menu from './Menu'
import MENU from '../../data/menu.js'

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './Home'
import AboutPage from './AboutPage'
import Contact from './Contact'
import Header from '../header/Header'
import Footer from '../footer/Footer'


function Body({menuData, handleClick, selectedDish, showDialog , handleClose }) {
 

  return (
    
    <Router>
        <Routes>
          
          <Route exact path='/menu' element = {
              <>
                <Header />
                
                <div className="bodyContainer">
                    <Menu menuData = {menuData} 
                    handleClick={handleClick}
                    selectedDish = {selectedDish}
                    showDialog={showDialog}
                    handleClose={handleClose}
                    />
                </div>
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
    </Router>

   
  )
}

export default Body