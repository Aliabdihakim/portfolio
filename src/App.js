import React, {useState, createContext, useEffect} from 'react'
import ProjectCard from './components/ProjectCard'
import projects from './content/projects'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import "./App.css"

export const ThemeContext = createContext(null);

function App() {

  


  const [project, setProject] = useState(projects)
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
            {renderProjects}
          </div>}
      </div>
    </ThemeContext.Provider>
  )
}

export default App
