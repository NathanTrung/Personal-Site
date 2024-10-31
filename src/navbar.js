import React, { useState, useEffect, useRef } from 'react'; // Import useState from React
import { Link, useLocation } from 'react-router-dom';
import logo from './images/razor.png';
import './navbar.css';
import MenuIcon from '@mui/icons-material/Menu';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false); // Define state here
  const dropdownRef = useRef(null);
  const menuButtonRef = useRef(null); // Reference for the menu button
  const location = useLocation();

  const toggleMenu = () => {
    if (isOpen) {
      handleLinkClick(); // Call handleLinkClick if the menu is already open
    }
    setIsOpen((prev) => !prev); // Toggle the menu state
  };

  // Close menu when clicking outside or when the menu icon is pressed
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target) && 
        menuButtonRef.current && 
        !menuButtonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close the menu and navigate
  const handleLinkClick = () => {
    setIsOpen(false); // Close the menu
  };

  return (
    <nav>
      <div className="navbar-left">
        <a href="/">
          <img src={logo} alt="Logo" className="Logo button-press" />
        </a>
        <ul>
          <div className='navbar-right'>
            <div className="navtoggle">
            <li>
              <Link to="/about" className="button-press navitems" onClick={handleLinkClick}>About Me</Link>
            </li>
            <li>
              <Link to="/contact" className="button-press navitems" onClick={handleLinkClick}>Contact</Link>
            </li>
            <li>
              <Link to="/projects" className="button-press navitems" onClick={handleLinkClick}>Projects</Link>
            </li>
            </div>
            <li>
              <button className='menuicon-button' onClick={toggleMenu} ref={menuButtonRef}>
                <MenuIcon className='menuicon' /> {/* Tailwind-compatible 3-line icon */}
              </button>
              {isOpen && (
                <div className="nav-items button-press" ref={dropdownRef}>
                  <Link to="/" className={location.pathname === '/' ? 'active unselectable' : ''} onClick={handleLinkClick}>Home</Link>
                  <Link to="/about" className={location.pathname === '/about' ? 'active' : ''} onClick={handleLinkClick}>About</Link>
                  <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''} onClick={handleLinkClick}>Contact</Link>
                  <Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''} onClick={handleLinkClick}>Projects</Link>
                </div>
              )}
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
