import React from 'react';
import './Header.css';

const Header = ({ darkMode, toggleDarkMode }) => {

  const profileImageUrl = darkMode ? `https://i.ibb.co/Gv1T33nt/Whats-App-Image-2025-06-05-at-21-21-03-e0ff578d.jpg` : `https://avatars.githubusercontent.com/u/181213962?v=4`;
  return (
    <header className="portfolio-header" style={darkMode ? { background: "#1F2932" } : {}}>
      <div className="header-content">
        <div className="profile-image-container">
          <img
            src={profileImageUrl}
            alt="Profile"
            className={`profile-image ${darkMode ? "dark" : "light"} fade-in`}
            title='Hi Everyone , Follow on Instagram'
            onClick={()=>window.open('https:/instagram.com/_rahul_x_4u_')}
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
