import React from 'react';
import Project from './Project';

function Portfolio() {
  const projects = [
    {
      title: 'JS Quiz Game',
      image: 'p-img-02.png',
      deployedLink: 'https://nicholewilburn.github.io/JS-Quiz-Game/',
      githubLink: 'https://github.com/nicholewilburn/JS-Quiz-Game',
    },
    {
      title: 'OG Codefolio',
      image: 'p-img-01.png',
      deployedLink: 'https://nicholewilburn.github.io/Coding-Portfolio/',
      githubLink: 'https://github.com/nicholewilburn/Coding-Portfolio',
    },
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div className="project-container">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;