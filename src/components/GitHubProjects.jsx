import React from 'react';
import './GitHubProjects.css';

const projects = [
  {
    name: "First Portfolio Website",
    url: "https://github.com/Rahul-college-use/Portfolio",
    description: "A personal portfolio built with HTML and hosted on GitHub Pages.",
    language: "HTML",
    langColor: "#e34c26"
  },
  {
    name: "restuarents-app",
    url: "https://github.com/Rahul-college-use/restuarents-app",
    description: "Built using React JS to showcase a list of restaurants with clean UI, navigation, and dynamic content display.",
    language: "JavaScript",
    langColor: "#f1e05a"
  },
  {
    name: "PrimeSource News App",
    url: "https://github.com/Rahul-college-use/News",
    description: "News aggregation and reading platform. Fetches and displays latest news from multiple sources with dark mode support.",
    language: "JavaScript",
    langColor: "#f1e05a"
  },
  {
    name: "Finance Tracker",
    url: "https://github.com/Rahul-college-use/Finance-Tracker",
    description: "Personal finance management tool using C++. Created a console-based application to track income and expenses.",
    language: "C++",
    langColor: "#f34b7d"
  },
  {
    name: "Weather App",
    url: "https://github.com/Rahul-college-use/Weather-App",
    description: "Real-time weather application fetching and displaying meteorological diagnostics using OpenWeather API and React.",
    language: "JavaScript",
    langColor: "#f1e05a"
  },
  {
    name: "Tic-Tac-Toe-Game",
    url: "https://github.com/Rahul-college-use/-Tic-Tac-Toe-Game",
    description: "Implemented a classic Tic-Tac-Toe game with a user-friendly interface and basic AI opponent.",
    language: "JavaScript",
    langColor: "#f1e05a"
  },
  {
    name: "ShopCart",
    url: "https://github.com/Rahul-college-use/ShopCart",
    description: "Developed an e-commerce shopping cart system allowing users to add, remove, and manage products before checkout.",
    language: "JavaScript",
    langColor: "#f1e05a"
  },
  {
    name: "Rock-Paper-Scissors-Game",
    url: "https://github.com/Rahul-college-use/Rock-Paper-Scissors-Game-",
    description: "Created a console-based Rock-Paper-Scissors game with interactive gameplay and live session score tracking.",
    language: "C++",
    langColor: "#f34b7d"
  },
  {
    name: "Fake Payment Gateway",
    url: "https://github.com/rahul-xyz/fake-payment-gateway",
    description: "A real-life styled simulation payment processing engine with secure mockup receipt routing and backend transaction log handling.",
    language: "JavaScript",
    langColor: "#f1e05a"
  },
  {
    name: "Event Website",
    url: "https://github.com/Rahul-college-use/event-website",
    description: "Built a responsive event website to showcase upcoming events with integrated student registration functionality.",
    language: "HTML",
    langColor: "#e34c26"
  }
];

const GitHubProjects = () => {
  return (
    <section className="github-projects-section">
      <div className="section-header-tag">
        <span className="code-accent">&lt;</span>
        <h2>Open Source Repositories</h2>
        <span className="code-accent">/&gt;</span>
      </div>

      <div className="github-grid-layout">
        {projects.map((project, index) => (
          <div key={index} className="github-repo-card" onClick={() => window.open(project.url, '_blank')}>
            
            {/* Top Row: SVG Repo Icon & Title Link */}
            <div className="repo-card-top">
              <div className="repo-title-wrapper">
                <svg className="repo-icon" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
                  <path fill="currentColor" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
                </svg>
                <h3 className="repo-name">{project.name}</h3>
              </div>
              <span className="repo-visibility-badge">Public</span>
            </div>

            {/* Middle Row: Project Meta Info */}
            <p className="repo-description">{project.description}</p>

            {/* Bottom Row: Language Indicators & Link Indicators */}
            <div className="repo-card-footer">
              <div className="repo-lang-metric">
                <span className="lang-color-dot" style={{ backgroundColor: project.langColor }} />
                <span className="lang-text-label">{project.language}</span>
              </div>
              
              <span className="repo-action-link">
                Code base <span>→</span>
              </span>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default GitHubProjects;