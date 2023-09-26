import React from 'react';

function Project({ project }) {
  const { title, image, deployedLink, githubLink } = project;

  return (
    <div className="project">
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <div className="project-links">
        <a href={deployedLink} target="_blank" rel="noopener noreferrer">
          Live Demo
        </a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          GitHub Repository
        </a>
      </div>
    </div>
  );
}

export default Project;