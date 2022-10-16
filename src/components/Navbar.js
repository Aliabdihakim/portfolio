import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
    <div>
        <nav className='navbar-nav'>
            <img src={require("../img/logo.png")} className="navbar-logo" alt="logo"/>
            <div className='navbar-links'>
                <p className='navbar-link navbar-about'>01. About</p>
                <p className='navbar-link navbar-projects'>02. Projects</p>
                <p className='navbar-link navbar-contact'>03. Contact</p>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
