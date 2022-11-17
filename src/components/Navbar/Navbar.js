import React, { useContext } from 'react'
import "./Navbar.css"
import { ThemeContext } from '../../App'
import {Link} from "react-scroll"

function Navbar() {

  const {theme} = useContext(ThemeContext)
  console.log(theme);

  return (
    <div>
        <nav className='navbar-nav'>
            <img src={require("../../assets/img/logo.png")} className="navbar-logo" alt="logo"/>
            <div className='navbar-links' id={theme}>
                <p className='navbar-link navbar-about'>
                  <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
                    01. About
                  </Link>
                </p>
                <p className='navbar-link navbar-projects'>
                  <Link to="projects" spy={true} smooth={true} offset={50} duration={500}>
                    02. Projects
                  </Link>
                </p>
                <p className='navbar-link navbar-contact'>
                  <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>
                    03. Contact
                  </Link>
                </p>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
