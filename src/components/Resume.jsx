import React from 'react';

function Resume() {
  return (
    <section>
      <h2>Resume</h2>
      <p>
        You can download my resume <a href="your-resume-url.pdf">here</a>.
      </p>
      <h3>Proficiencies</h3>
      <div className="resume-container">
      <h2 className="resume-title">Front-end Proficiencies</h2>
      <ul className="proficiency-list front-end-list">
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Vite</li>
        <li>Webpack</li>
        <li>RegEx</li>
        <li>GraphQL</li>
        <li>Bootstrap</li>
        <li>Jest</li>
        {/* Add more front-end proficiencies */}
      </ul>

      <h2 className="resume-title">Back-end Proficiencies</h2>
      <ul className="proficiency-list back-end-list">
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MongoDB</li>
        <li>MySQL2</li>
        <li>MongoDB</li>
        <li>Insomnia</li>
        <li>Apollo</li>
        <li>GraphQL API</li>
        <li>RESTful API</li>
        <li>Cache</li>
        {/* Add more back-end proficiencies */}
      </ul>

      <h2 className="resume-title">Full-stack Proficiencies</h2>
      <ul className="proficiency-list full-stack-list">
        <li>MERN</li>
        {/* Add more back-end proficiencies */}
      </ul>
    </div>
    </section>
  );
}

export default Resume;