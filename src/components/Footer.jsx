import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="portfolio-footer">
      
      {/* Dynamic Wave Layers — Colored by CSS Variables */}
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
        <div className="footer-brand-summary">
          <h3 className="footer-title">Let's Build Something</h3>
          <p className="footer-subtitle">Seeking software engineering roles and open source collaboration challenges.</p>
        </div>

        {/* Technical Communication Channels */}
        <div className="contact-info-grid">
          <div className="contact-channel" onClick={() => window.location.href='mailto:rahul.cse.kr@gmail.com'}>
            <span className="channel-label">EMAIL_NODE</span>
            <span className="channel-value">rahul.cse.kr@gmail.com</span>
          </div>
          <div className="contact-channel" onClick={() => window.location.href='tel:+919199855936'}>
            <span className="channel-label">PHONE_NODE</span>
            <span className="channel-value">+91 9199 8559 36</span>
          </div>
        </div>

        {/* Social Connection Grid */}
        <div className="footer-social-wrapper">
          <span className="social-grid-title">External Links</span>
          <div className="social-links-matrix">
            <a href="https://github.com/Rahul-college-use" target="_blank" rel="noopener noreferrer" className="social-node">
              GitHub <span>↗</span>
            </a>
            <a href="https://www.linkedin.com/in/rahul-kr-cse/" target="_blank" rel="noopener noreferrer" className="social-node">
              LinkedIn <span>↗</span>
            </a>
            <a href="https://www.instagram.com/_rahul_x_4u_/" target="_blank" rel="noopener noreferrer" className="social-node">
              Instagram <span>↗</span>
            </a>
          </div>
        </div>

        {/* Bottom Ledger Section */}
        <div className="footer-bottom-ledger">
          <p className="copyright-text">&copy; {currentYear} Rahul Kumar // SYS_STATUS: COMPLETE</p>
          <p className="footer-tech-hint">Built with React & CSS Grid Architecture</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;