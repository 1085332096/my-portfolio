import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experience';
import Avatar from './components/Avatar';
import './styles/main.css'; // Archivo CSS para los estilos

function App() {
  return (
    <div>
      <Navbar />
      <div className="main-container">
        <div className="left-column">
          <section id="about">
            <Avatar />
            <About />
          </section>
        </div>
        <div className="right-column">
          <section id="education">
            <Education />
          </section>
          <section id="experience">
            <Experience />
          </section>
          <section id="projects">
            <Projects />
          </section>
        </div>
      </div>
      
    </div>
  );
}

export default App;
