import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = ({ darkMode, toggleDarkMode }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [dateTime, setDateTime] = useState(new Date());
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu toggle state

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => date.toISOString().split('T')[0];
  const formatTime = (date) => date.toTimeString().split(' ')[0];

  const profileImageUrl = darkMode
    ? 'https://i.ibb.co/BHL13Ygr/502349514-18031885781679541-7069903802214821239-n.jpg'
    : 'https://avatars.githubusercontent.com/u/181213962?v=4';

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`portfolio-header ${darkMode ? "dark" : "light"}`}>
      <div className="header-container">
        
        {/* Left Side: System Profile & Branding */}
        <div className="header-brand">
          <div className="profile-image-container">
            {!isImageLoaded && <div className="image-skeleton" />}
            <img
              src={profileImageUrl}
              alt="Rahul Kumar"
              className={`profile-image ${isImageLoaded ? 'fade-in' : 'hidden'}`}
              title="Click to visit Instagram"
              onClick={() => window.open('https://www.instagram.com/_rahul_x_4u_/')}
              onLoad={() => setIsImageLoaded(true)}
            />
            <span className="status-indicator"></span>
          </div>
          
          <div className="brand-meta">
            <h1 className="brand-name">Rahul Kumar</h1>
            <p className="brand-title">Computer Science Engineer</p>
          </div>
        </div>

        {/* Center: Live Technical Metric / Clock */}
        <div className="header-status-panel">
          <span className="status-label">SYS_STATUS: RUNNING</span>
          <p className="datetime-display">
            <span className="date-segment">{formatDate(dateTime)}</span>
            <span className="separator">@</span>
            <span className="time-segment">{formatTime(dateTime)}</span>
          </p>
        </div>

        {/* Right Side: Navigation & Actions */}
        <nav className={`nav-links ${isMenuOpen ? 'mobile-active' : ''}`}>
          <a href="#background" className="nav-item" onClick={closeMenu}>Background</a>
          <a href="#projects" className="nav-item" onClick={closeMenu}>Projects</a>
          <a href="#github" className="nav-item" onClick={closeMenu}>Git Projects</a>
          <a href="#achievements" className="nav-item" onClick={closeMenu}>Achievements</a>
          <a href="#contact" className="nav-item" onClick={closeMenu}>Contact</a>
          
          <button className="theme-toggle-btn" onClick={toggleDarkMode} aria-label="Toggle Theme">
            {darkMode ? (
              <>
                <span className="btn-icon">🌞</span>
                <span className="btn-text">Light</span>
              </>
            ) : (
              <>
                <span className="btn-icon">🌙</span>
                <span className="btn-text">Dark</span>
              </>
            )}
          </button>
        </nav>

        {/* Mobile Hamburger Menu Toggle Button */}
        <button 
          className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu navigation"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

      </div>
    </header>
  );
};

export default Header;