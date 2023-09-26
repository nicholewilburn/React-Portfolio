import React from 'react';

function Resume() {
  return (
    <div>
      <h2>Resume</h2>
      <p>
        You can download my resume <a href="your-resume-url.pdf">here</a>.
      </p>
      <h3>Proficiencies</h3>
      <ul>
        <li>JavaScript</li>
        <li>React.js</li>
        <li>HTML/CSS</li>
        <li>Node.js</li>
        <li>SQL/Database Management</li>
        {/* Add more proficiencies as needed */}
      </ul>
    </div>
  );
}

export default Resume;