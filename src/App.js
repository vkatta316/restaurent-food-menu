import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

import PropTypes from 'prop-types'
import Body from './components/body/Body'
import AboutPage from './components/body/AboutPage'
import Home from './components/body/Home'
import Contact from './components/body/Contact'
import { useState } from 'react'
import MENU from '../src/data/menu.js'
import '../src/CSS/main.css'

import FeedbackData from '../src/components/feedback/data/FeedbackData'
import FeedbackList from './components/feedback/FeedbackList'
import FeedbackStats from './components/feedback/FeedbackStats'
import FeedbackForm from './components/feedback/FeedbackForm'
import { FeedbackProvider } from './components/feedback/context/FeedbackContext'




function App() {

  const [menuData, setMenuData] = useState(MENU)
  const [selectDish, setSelectDish] = useState({})
  const [show, setShow] = useState(false);


  const handleSelectedDish = (Dish) => {
    console.log('Dish', { Dish })
    setSelectDish(Dish)
    setShow(true);

  }


  const handleClose = () => setShow(false);

  return (
    <FeedbackProvider>
      <>
        <Router>
          <Routes>

            <Route exact path='/menu' element={
              <>
                <Header />
                <div className="bodyContainer" >
                  <Body menuData={menuData}
                    handleClick={handleSelectedDish}
                    selectedDish={selectDish}
                    showDialog={show}
                    handleClose={handleClose}
                  />
                </div>
                <Footer />
              </>

            }>

            </Route>

            <Route path='/feedback/*' element={
              <>
                <Header />
                <div className="container">
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList  />
                </div>
                <Footer />
              </>
            }>

            </Route>





            <Route path='/' element={
              <>
                <Header />
                <Home />
                <Footer />

              </>

            }>

            </Route>

            <Route path='/about' element={
              <>
                <Header />
                <AboutPage />
                <Footer />

              </>

            }>

            </Route>

            <Route path='/contact' element={
              <>
                <Header />
                <div className="bodyContainer" >
                <Contact />
                </div>
                
                <Footer />

              </>

            }>

            </Route>

          </Routes>

        </Router>
      </>
    </FeedbackProvider>



  )
}

export default App