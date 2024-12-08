import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectList = [
    { title: "Project 1", description: "A React-based project.", link: "#" },
    { title: "Project 2", description: "A responsive web design.", link: "#" },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-cards">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link}>View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
