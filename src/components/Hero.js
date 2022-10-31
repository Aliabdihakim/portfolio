import React, {useContext} from 'react'
import "./Hero.css"
import TypeWriter from "typewriter-effect"
import ReactSwitch from "react-switch"
import { ThemeContext } from '../App';


function Hero() {

  const theme = useContext(ThemeContext);
 
  
  return (
    <>
        <div className="hero-container">
            
            <div className='img-div'>
              <img src={require("../img/alibild2.png")} className="hero-img"/>
            </div>

            <h1 className="hero-name" id={theme.theme}>
                <TypeWriter 
                onInit={(typewriter) => {
                typewriter.typeString("Ali Abdihakim")
                .start()
              }}
              />
            </h1>
            <h2 className="hero-title" style={{marginBottom:"0"}}>
              <TypeWriter 
              onInit={(typewriter) => {
                typewriter.typeString("Frontend Developer")
                .start()
              }}/>
            </h2> 
            <h3 className="hero-title" style={{fontWeight:"100", fontSize: "20px"}}>
              <TypeWriter 
              onInit={(typewriter) => {
                typewriter.typeString("With ❤ for UI")
                .start()
              }}/>
            </h3> 
            <button className="hero-button" id={theme.theme}>Contact me</button>

            <div className="hero-switch-div">
              <label htmlFor='switch'>
                {theme.theme=="light" ? "Light Mode" : "Dark Mode"}
              </label>

              <ReactSwitch 
              id="switch"
              onChange={theme.toggleTheme} 
              checked={theme.theme==="dark"}
              />
            </div>
        </div>

    </>
  )
}

export default Hero
