import React, {useState, createContext, useEffect} from 'react'
import ProjectCard from './components/ProjectCard'
import OtherProjects from './components/OtherProjects'
import projects from './content/projects'
import otherprojects from './content/otherprojects'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AppRed from './components/AppRed'
import "./App.css"

export const ThemeContext = createContext(null);


function App() {



  const [project, setProject] = useState(projects)
  const [otherproj, setOtherproj] = useState(otherprojects)
  const [loading, setLoading] = useState(true)
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  useEffect(()=> {
    setTimeout(() => setLoading(false), 3000);
  })

  const renderProjects = project.map(item => {
    return(
      <ProjectCard 
      key={item.id}
      id={item.id}
      type={item.type}
      title={item.title}
      desc={item.desc}
      tech={item.tech}
      img={item.img}
      github={item.github}
      link={item.link}
      />
    )
  })

  const renderOtherProjects = otherproj.map(item => {
    return(
      <OtherProjects 
      key={item.id}
      id={item.id}
      title={item.title}
      desc={item.desc}
      tech={item.tech}
      github={item.github}
      link={item.link}
      />
    )
  })

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className='App' id={theme}>
        
          {loading==true && 
          <div className="loader-container">
            <div className="spinner"></div>
          </div>}

          {loading==false&&
          <div>
            <AppRed />
            <Navbar />
            <Hero />
            <div className='project-header'>
              <h1 style={{fontSize:"2rem"}}>Projects</h1>
              <hr />
            </div>
            {renderProjects}
            <div>
              <h1 style={{textAlign:"center", padding:"20px 0"}}>Other projects</h1>
              <div className='app-other-div'>
                {renderOtherProjects}
              </div>
            </div>
            <Footer />
          </div>}
      </div>
    </ThemeContext.Provider>
  )
}

export default App
