import React from 'react';
import './Achievements.css';

const Achievements = ({ darkMode }) => {
  const achievementsData = [
  {
     title: "Hackathon Coordinator",
    subtitle: "1st Place at Coding Challenge 2023 in our College",
    description: "Developed an Hostel Mess solution for Mess management"
  },
   
  
];

  return (
    <section
      id="achievements"
      className="achievements-section"
      style={darkMode ? { background: "#1F2932" } : {}}
    >
      <h2>My Achievements</h2>
      <div className="achievements-grid">
        {achievementsData.map((item, index) => (
          <div className="achievement-card" key={index}>
            <h3>{item.title}</h3>
            <p>{item.subtitle}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
