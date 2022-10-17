import React from 'react'
import "./OtherProjects.css"
import { FaFolder, FaExternalLinkAlt } from "react-icons/fa";

function OtherProjects(props) {
    console.log(props);
  return (
    <div className='other-div'>
        <div className='other-content-div'>
            <FaFolder className='other-icons' style={{fontSize: "40px"}}/>
            <h2 className='other-title'>{props.title}</h2>
            <p className='other-desc'>{props.desc}</p>
            <p className='other-tech'>
                {(props.tech).map(item => {
                        return(<span style={{paddingRight: "10px"}}>{item}</span>)
                    })}
            </p>
        </div>
    </div>
  )
}

export default OtherProjects