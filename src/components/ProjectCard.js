import React, {useContext} from 'react'
import "./ProjectCard.css"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { ThemeContext } from '../App';

function ProjectCard(props) {

const oddId = props.id%2!=0 ? "" : "-odd"

const theme = useContext(ThemeContext);
console.log(theme.theme);

  return (
    <section>
        <div className={"project-div-container"+oddId}>
            <div>
                <div className="project-img-overlay"></div>
                <img src={props.img} className="project-img"/>
            </div>
            <div>
                <div className={"project-type-title"+oddId}>
                    <h4 className="project-type">{props.type}</h4>
                    <h1 className="project-title">{props.title}</h1>
                </div>
                <div className="project-desc">
                    <p>{props.desc}</p>
                </div>
                <div className={"project-tech"+oddId}>
                    <p>{(props.tech).map(item => {
                        return(<span style={{paddingLeft: "15px"}}>{item}</span>)
                    })}</p>
                    <div >
                        <a href={props.github}>
                            <FaGithub className="project-icons"/>
                        </a>
                        <a href={props.link}>
                            <FaExternalLinkAlt className="project-icons"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProjectCard
