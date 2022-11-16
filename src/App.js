import React, {useState, createContext, useEffect} from 'react'
import projects from './content/projects'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Project from './components/Project/Project'
import "./App.css"

export const ThemeContext = createContext(null);


function App() {

  const [loading, setLoading] = useState(true)
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  useEffect(()=> {
    setTimeout(() => setLoading(false), 3000);
  })

  const renderProjects = projects.map(project => {
    return(
      <Project
      key={project.id}
      type={project.type}
      title={project.title}
      desc={project.desc}
      tech={project.tech}
      img={project.img}
      github={project.github}
      link={project.link}
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
            <Navbar />
            <Hero />
            <div className='project-container'>
              {renderProjects}
            </div>
            <Footer />
          </div>}
      </div>
    </ThemeContext.Provider>
  )
}

export default App
