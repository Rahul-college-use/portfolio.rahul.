import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Background from './components/Background.jsx';
import Timeline from './components/Timeline.jsx';
import Projects from './components/Projects.jsx';
import GitHubProjects from './components/GitHubProjects.jsx';
import Achievements from './components/Achievements.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTopWithChatbot.jsx';
// import Offline from './components/Offline';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  useEffect(() => {
    // Sync dark mode configuration with global data attribute on html element
    if (darkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
      document.body.classList.add('dark-mode');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  return (
    <div className={`portfolio-root ${darkMode ? 'theme-dark' : 'theme-light'}`}>
      
      {/* 📡 Non-intrusive Technical Offline Status Banner */}
      <div className={`system-network-banner ${!isOnline ? 'banner-visible' : ''}`}>
        <div className="banner-content">
          <span className="banner-pulse-icon"></span>
          <p className="banner-text">
            [SYSTEM ALERT]: Network connection dropped. Displaying offline cached application data.
          </p>
        </div>
      </div>

      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <main className="portfolio-main-layout">
        <section id="background">
          <Background darkMode={darkMode} />
        </section>
        
        <section id="timeline">
          <Timeline mode={darkMode} />
        </section>
        
        <section id="projects">
          <Projects darkMode={darkMode} />
        </section>
        
        <section id="github">
          <GitHubProjects darkMode={darkMode} />
        </section>
        
        <section id="achievements">
          <Achievements darkMode={darkMode} />
        </section>
      </main>

      <Footer darkMode={darkMode} />
      
      {/* Only rendering single smart utility option */}
      <ScrollToTop mode={darkMode ? 'dark' : 'light'} />
      
    </div>
  );
}

export default App;