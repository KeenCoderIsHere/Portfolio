import React, { useState } from 'react'
import '../css/Navbar.css'
import '@fontsource/geist';
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <nav className='top-navbar'>
          <span className='name'></span> <span className='susheeth-portfolio'>Susheeth Venkatraman S</span>
          <div className='nav-items-wrapper'>
            <Link to='/'><div className='navbar-items'>Home</div></Link>
            <Link to='/about'><div className='navbar-items'>About</div></Link>
            <Link to='/skills'><div className='navbar-items'>Skills</div></Link>
            <Link to='/projects'><div className='navbar-items'>Projects</div></Link>
            <Link to='/contact'><div className='navbar-items'>Contact</div></Link>
          </div>
      </nav>
    </>
  )
}

export default Navbar