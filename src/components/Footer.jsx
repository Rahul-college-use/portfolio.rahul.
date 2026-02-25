import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="portfolio-footer">
      {/* Space Gradient Definition */}
      <svg width="0" height="0">
        <defs>
          <linearGradient id="spaceGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00c6ff" />
            <stop offset="50%" stopColor="#0072ff" />
            <stop offset="100%" stopColor="#001e3c" />
          </linearGradient>
        </defs>
      </svg>

      {/* Orbital Wave Layers */}
      <div className="wave-container">
        <svg viewBox="0 0 1200 100" preserveAspectRatio="none" className="wave wave1">
          <path d="M0,40 Q150,0 300,40 T600,40 T900,40 T1200,40 L1200,0 L0,0 Z" />
        </svg>
        <svg viewBox="0 0 1200 100" preserveAspectRatio="none" className="wave wave2">
          <path d="M0,40 Q150,0 300,40 T600,40 T900,40 T1200,40 L1200,0 L0,0 Z" />
        </svg>
        <svg viewBox="0 0 1200 100" preserveAspectRatio="none" className="wave wave3">
          <path d="M0,40 Q150,0 300,40 T600,40 T900,40 T1200,40 L1200,0 L0,0 Z" />
        </svg>
      </div>

      <div className="footer-content">
        <div className="contact-info">
          <h3>Get In Touch</h3>
          <p>Email: rahul.cse.kr@gmail.com</p>
          <p>Phone: +91 9199 8559 36</p>
          <div className="social-links">
            <a href="https://github.com/Rahul-college-use" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/rahul-kr-cse/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://www.instagram.com/_rahul_x_4u_/" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} Rahul Kumar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
