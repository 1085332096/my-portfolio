import React, { useState, useEffect } from 'react';
import '../styles/main.css';

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    
    fetch('https://api.github.com/users/1085332096/repos')
      .then(response => response.json())
      .then(data => setProjects(data));
  }, []);

  return (
    <div className="component-container">
      <h2>Mis Proyectos</h2>
      <ul>
        {projects.map(project => (
          <li key={project.id}>
            <a href={project.html_url} target="_blank" rel="noopener noreferrer">
              {project.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
