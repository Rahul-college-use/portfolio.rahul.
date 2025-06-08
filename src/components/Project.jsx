import React from 'react';
import './Project.css';

const Project = ({ project = {}, onClick }) => {
  // Safely access project properties
  const { 
    title = "Untitled Project", 
    description = "No description available",
    technologies = [],
    image = "https://via.placeholder.com/400x250?text=Project+Image" 
  } = project;

  return (
    <div className="project-card" onClick={onClick}>
      <img src={image} alt={title} />
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="tech-tags">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;