import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-links">
            <a href="https://github.com/nicholewilburn" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/yourname" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </div>
          <div className="footer-text">
            &copy; {new Date().getFullYear()} Nichole W. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;