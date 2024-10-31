import React from 'react';
import './css/footer.css'; // Import your footer CSS
import logo from './images/razor.png'; // Import your logo image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faInstagram, faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
    
    <footer className="footer-background">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"/>

      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="Logo" className="Logo2 button-press"/>
          <p style = {{maxWidth: '600px', wordWrap: 'break-word', lineHeight: '1.6', margin: '15px' }} className="footerText">Hi there! I'm Nathan Trung, a Software Development Student at Swinburne University of Technology. I’m passionate about leveraging technology to create innovative, scalable & robust solutions. Whether you want to collaborate on a project or just chat about the latest trends in software development, feel free to reach out! Let's build something great together. 
          </p>
        </div>
        <div className="footer-links">
          <h2>Quick Links</h2> {/* Add the header for Quick Links */}
          <ul>
            <li><a href="/" className="button-press">Home</a></li>
            <li><a href="/about" className="button-press">About Me</a></li>
            <li><a href="/contact" className="button-press">Contact</a></li>
            <li><a href="/projects" className="button-press">Projects</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h2>Contact Me</h2>
          <ul>
          <li><a href="https://www.facebook.com/NaifanTrung" className="button-press">Facebook</a></li>
          <li><a href="https://github.com/NathanTrung" className="button-press">GitHub</a></li>
          <li><a href="https://www.instagram.com/nathantrung/" className="button-press">Instagram</a></li>
          <li><a href="https://www.linkedin.com/in/nathan-trung/" className="button-press">LinkedIn</a></li>
          <li><a href="https://x.com/NaifTrung" className="button-press">X</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-social">
        <ul>
          <li><a href="https://www.facebook.com/NaifanTrung" className="button-press"><FontAwesomeIcon icon={faFacebook} /></a></li>
          <li><a href="https://github.com/NathanTrung" className="button-press"><FontAwesomeIcon icon={faGithub} /></a></li>
          <li><a href="https://www.instagram.com/nathantrung/" className="button-press"><FontAwesomeIcon icon={faInstagram}/></a></li>
          <li><a href="https://www.linkedin.com/in/nathan-trung/" className="button-press"><FontAwesomeIcon icon={faLinkedin}/></a></li>
          <li><a href="https://x.com/NaifTrung" className="button-press"><FontAwesomeIcon icon={faXTwitter} /></a></li>
        </ul>
      </div>
      <div className="footer-copyright">Site Accessed At: {new Date().getHours()}:{new Date().getMinutes()}:{new Date().getSeconds()} {new Date().getUTCDate()}/{new Date().getUTCMonth()+1}/{new Date().getUTCFullYear()} <br/>&copy; Nathan Trung
      </div>
    </footer>
  );
};

export default Footer;
