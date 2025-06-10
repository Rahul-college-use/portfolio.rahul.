import React from 'react';
import './GitHubProjects.css';

const projects = [
  {
    name: "First Portfolio Website",
    url: "https://github.com/Rahul-college-use/Portfolio",
    description: "A personal portfolio built with Html and hosted on GitHub Pages.",
  },
  {
    name: "Restuarents-app",
    url: "https://github.com/Rahul-college-use/restuarents-app",
    description: "Built using React JS to showcase a list of restaurants with clean UI, navigation, and dynamic content display. Ideal for food directories or local listings.",
  },
  {
    name: "PrimeSource News App",
    url: "https://github.com/Rahul-college-use/PrimeSource",
    description: "News aggregation and reading platform. Developed a news app to fetch and display latest news from multiple sources with user-friendly interface and dark mode support.",
  },
  {
    name: "Finance Tracker",
    url: "https://github.com/Rahul-college-use/Finance-Tracker",
    description: "Personal finance management tool using C++. Created a console-based application to track income, expenses, and generate financial summaries using C++.",
  },
  {
    name: "Weather App",
    url: "https://github.com/rahul-xyz/weather-app",
    description: "Real-time weather app using OpenWeather API and React.",
  },
  {
    name: "Tic-Tac-Toe-Game",
    url: "https://github.com/Rahul-college-use/-Tic-Tac-Toe-Game",
    description: "Implemented a classic Tic-Tac-Toe game with a user-friendly interface and basic AI opponent.",
  },
  {
    name: "ShopCart",
    url: "https://github.com/Rahul-college-use/ShopCart",
    description: "Developed an e-commerce shopping cart system allowing users to add, remove, and manage products before checkout.",
  },
  {
    name: "Rock-Paper-Scissors-Game",
    url: "https://github.com/Rahul-college-use/Rock-Paper-Scissors-Game-",
    description: "Created a console-based Rock-Paper-Scissors game with interactive gameplay and score tracking.",
  },
  {
    name: "Fake Payment Gateway",
    url: "https://github.com/rahul-xyz/fake-payment-gateway",
    description: "A real-life styled fake payment system with receipt and backend logging.",
  },
  {
    name: "Event Website",
    url: "https://github.com/Rahul-college-use/event-website",
    description: "Built a responsive event website to showcase upcoming events with registration functionality.",
  },
];

const GitHubProjects = ({ darkMode }) => {
  return (
    <section
      id="github"
      className="github-projects-section"
      style={darkMode ? { background: "#1F2932", borderBottom: "2px solid #fff" } : {}}
    >
      <h2 style={darkMode ? { color: "rgba(244, 244, 244, 0.64)" } : {}}>GitHub Projects</h2>
      <div className="github-projects-list">
        {projects.map((project, index) => (
          <div
            key={index}
            className="github-project-card"
            style={darkMode ? { background: "#000", color: "#fff" } : {}}
          >
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              View on GitHub 🔗
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GitHubProjects;
