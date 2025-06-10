import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Background from './components/Background';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import GitHubProjects from './components/GitHubProjects';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check if dark mode preference is saved in localStorage
    return localStorage.getItem('darkMode') === 'true' || false;
  });

  useEffect(() => {
    // Add or remove dark-mode class on the body
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    // Save the preference
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  // Toggle function to switch dark mode on/off
  const toggleDarkMode = () => setDarkMode(prev => !prev);

  return (
    <div className="portfolio-container">
      {/* Pass darkMode and toggleDarkMode as props */}
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Background darkMode={darkMode}/>
      <Projects darkMode={darkMode}/>
      <GitHubProjects darkMode={darkMode}/>
      <Achievements darkMode={darkMode}/>
      <Footer darkMode={darkMode}/>
      <ScrollToTop />
    </div>
  );
}

export default App;
