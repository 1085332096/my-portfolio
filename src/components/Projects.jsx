import React, { useState, useEffect } from 'react';

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Llamada a la API (aquí puedes integrar cualquier API)
    fetch('https://api.github.com/users/1085332096/repos')
      .then(response => response.json())
      .then(data => setProjects(data));
  }, []);

  return (
    <section id="projects">
      <h2>My Projects</h2>
      <ul>
        {projects.map(project => (
          <li key={project.id}>
            <a href={project.html_url} target="_blank" rel="noopener noreferrer">
              {project.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
