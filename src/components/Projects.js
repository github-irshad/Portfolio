import React, { useState } from 'react';
import axios from 'axios';
import mockProjects from "../data/projects.json";

// const mockProjects = await import('../data/projects.json');

function Projects() {
  const [projects, setProjects] = useState(mockProjects.mockProjects);

  return (
    <section id="projects" className="py-5">
      <div className="container">
        <h2>Projects</h2>
        <div className="row">
          {projects.map((project) => (
            <div className="col-md-3 mb-4" key={project.id}>
              <div className="card" style={{ width: '18rem' }}>
                <img 
                  src={project.image} 
                  className="card-img-top" 
                  alt={project.title} 
                  style={{ height: '200px', objectFit: 'cover' }} 
                />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">Tech Stacks: {project.techStacks.join(", ")}</p>
                  <a href={project.liveDemo} className="btn btn-primary me-2">Live Demo</a>
                  <a href={project.github} className="btn btn-secondary">GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;