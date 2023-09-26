import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';


function Header() {
  return (
    <header className="navbar">
       <Helmet>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <nav className="container">
        <Link to="/" className="navbar-logo">
        <img src="/images/logo.png" alt="My Image" />
          Nichole Wilburn
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink exact to="/" activeClassName="active">
              About Me
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/portfolio" activeClassName="active">
              Portfolio
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" activeClassName="active">
              Contact
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/resume" activeClassName="active">
              Resume
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;