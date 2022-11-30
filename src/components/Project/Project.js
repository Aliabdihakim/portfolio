import React from 'react'
import './Project.css'
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";


const Project = (props) => {

    const renderTech = props.tech.map(tech => <p className='project-tech'>{tech}</p>)
  return ( 
    <div className='project-div'>
        <h1 className='project-loop'>⌘</h1>
        <img className='project-img' src={(props.img)}/>
        <div className='project-img-div'>

        </div>  
        <div className='project-info-div'>
            <h4 className='project-type'>{props.type}</h4>
            <h1 className='project-title'>{props.title}</h1>
            <div className='project-tech-div'>
                {renderTech}
            </div>
            <div className='project-desc-div'>
              <p className='project-desc'>{props.desc}</p>
              <a href={props.github}><FaGithub className='project-icons'/></a>
              <a href={props.link}><FaExternalLinkAlt className='project-icons'/></a>
            </div>
        </div>
    </div>
  )
}

export default Project
