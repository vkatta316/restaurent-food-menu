import React from 'react'
import PropTypes from 'prop-types'
import Navigation from './Navigation'
import '../../CSS/main.css'

function Header({bgColor, textColor}) {

  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,

}
  return (
        <div style={headerStyles}>
            <Navigation />
        </div>
  )
}


Header.defaultProps = {
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#ff6a95',
}


export default Header