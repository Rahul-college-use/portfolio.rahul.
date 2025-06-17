// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Background from './components/Background';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTopWithChatbot';
import GitHubProjects from './components/GitHubProjects';
import ScrollToTop2 from './components/ScrollToTop2';
import Offline from './components/Offline';
import SecurityBlocker from './components/SecurityBlocker';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true' || false;
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
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  if (!isOnline) {
    return <Offline />;
  }

  return (

    <div className="portfolio-container">
      <SecurityBlocker/>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Background darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <GitHubProjects darkMode={darkMode} />
      <Achievements darkMode={darkMode} />
      <Footer darkMode={darkMode} />
      <ScrollToTop />
      <ScrollToTop2 />
    </div>
  );
}

export default App;
