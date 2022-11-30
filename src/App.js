import React, {useState, createContext, useEffect} from 'react'
import projects from './assets/content/projects'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Project from './components/Project/Project'
import "./App.css"
import Stack from './components/Stack/Stack'



 
export const ThemeContext = createContext(null);

function App() {

  const [loading, setLoading] = useState(true)
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  useEffect(()=> {
    setTimeout(() => setLoading(false), 3000);
    if(theme=="dark"){
      document.body.style.backgroundColor = "#0a192f";
    }
    else{
      document.body.style.backgroundColor = "#f3ebf6";
    }
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
            <div className='stack-div'>
              <div>
              <h1 className='about-header' id="about"><span className='about-header-number'>01.</span>About</h1>
                <p className='about-text'>
                  Hello! My name is Ali and I am a software engineer with a M.sc in Computer Science (Teknisk Fysik, M.sc Datateknik).
                  I enjoy building and designing digital products. My main focus these days has been building products and digital experiences for a variety of clients, 
                  you can view some of them below. Here are a few technologies I've been working with recently:
                </p>
              </div> 
              <Stack />
            </div>

            <div style={{paddingTop:"150px"}}>
              <h1 className='about-header' id="projects"><span className='about-header-number'>02.</span>Projects</h1>
              <div className='project-container'>
                {renderProjects}
              </div>
            </div>

            <div style={{paddingTop:"150px"}}>
              <h1 className='about-header'><span className='about-header-number'>03.</span>Contact</h1>
              <div className='contact-div' id="contact">
                <h1 className='contact-header'>Get in touch</h1>
                <p className='contact-text'>
                  My inbox is always open. Whether you have a question or just want to say hi, I'll do my best to get back to you!
                </p>
                <p className='contact-email'>ali.abdihakim.ali1@gmail.com</p>
              </div>
            </div>

            <Footer />
          </div>}
      </div>
    </ThemeContext.Provider>
  )
}

export default App
