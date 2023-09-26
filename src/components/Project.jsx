import React, { useState } from 'react';

function Project({ project }) {
  const { title, image, deployedLink, githubLink } = project;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={`project ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="project-info">
        <h3>{title}</h3>
        <div className={`project-links ${isHovered ? 'show' : ''}`}>
          <a href={deployedLink} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            GitHub Repository
          </a>
        </div>
      </div>
      <img src={`/images/${image}`} alt={title} className="project-image" />
    </div>
  );
}

export default Project;