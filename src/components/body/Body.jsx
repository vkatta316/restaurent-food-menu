import { useState } from 'react'
import React from 'react'
import Menu from './Menu'
import MENU from '../../data/menu.js'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home'
import AboutPage from './AboutPage'
import Contact from './Contact'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import '../../CSS/main.css'


function Body({ menuData, handleClick, selectedDish, showDialog, handleClose }) {


  return (
    <div className="bodyContainer">
      <Menu menuData={menuData}
        handleClick={handleClick}
        selectedDish={selectedDish}
        showDialog={showDialog}
        handleClose={handleClose}
      />
    </div>     
  )
}

export default Body