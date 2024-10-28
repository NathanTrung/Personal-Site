import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/razor.png';
import './navbar.css';

const NavBar = () => {
  return (
    <nav>
      <div className="navbar-left">
        <a href="/">
        <img src={logo} alt="Logo" className="Logo button-press"/>
        </a>
        <ul>
          
          <div className='navbar-right'>
          <li>
              <Link to="/about" className="button-press">About Me</Link>
            </li>
            <li>
              <Link to="/contact" className="button-press">Contact</Link>
            </li>
            <li>
              <Link to="/projects" className="button-press">Projects</Link>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
