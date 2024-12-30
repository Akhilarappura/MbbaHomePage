import React from 'react'
import './Header.css'
import Navbar from '../Nav/Navbar'

function Header() {
  return (
  <>
  <div className='header-top'>
  <div className='header'>
    <h1 className='text'>info@iecmbbs.com</h1>
    </div>
  
  <div className='header-bottom'>
      <img className='logo' src='https://iecmbbs.com/wp-content/uploads/2021/09/logo4-1-1.png' />
      <div className='nav'>
      <Navbar />
      </div>
  
    
  
  </div>
  
  </div>
  
  </>
  )
}

export default Header