import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="navbar">
      <nav className="container">
        <Link to="/" className="navbar-logo">
          Your Logo/Name
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