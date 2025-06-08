import React from 'react';
import './Header.css';

const Header = ({ darkMode, toggleDarkMode }) => {
  const profileImageUrl = "https://avatars.githubusercontent.com/u/181213962?v=4";

  return (
    <header className="portfolio-header" style={darkMode ? { background: "#1F2932" } : {}}>
      <div className="header-content">
        <div className="profile-image-container">
          <img
            src={profileImageUrl}
            alt="Profile"
            className="profile-image"
          />
        </div>
        <h1>Rahul Kumar</h1>
        <p>Computer Science Engineer</p>
        <nav className="nav-links">
          <a href="#background">Background</a>
          <a href="#projects">Projects</a>
          <a href="#github">Git Projects</a>
          <a href="#achievements">Achievements</a>
          <a href="#contact">Contact</a>
          <button
            className="theme-toggle-btn"
            onClick={toggleDarkMode}
          >
            {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
