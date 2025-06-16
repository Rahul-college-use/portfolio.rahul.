import React, { useState, useEffect, useRef } from 'react';
import Project from './Project';
import './Projects.css';
import allProjects from '../data/Data';

const Projects = ({ darkMode }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [projects, setProjects] = useState([]); // initially empty
  const [loading, setLoading] = useState(true); // loading shimmer
  const projectsContainerRef = useRef(null);

  // Simulate loading delay (2 seconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      setProjects(allProjects);
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const renderProjects = () => {
    // While loading, show shimmer cards
    const skeletons = new Array(4).fill(null); // 4 shimmer cards
    return (loading ? skeletons : projects).map((project, index) => (
      <Project
        key={project?.id || index}
        project={project}
        onClick={() => !loading && setSelectedProject(project)}
      />
    ));
  };

  return (
    <section
      id="projects"
      className="projects-section"
      style={darkMode ? { background: "rgba(74, 98, 132, 0.34)" } : {}}
    >
      <h2 style={darkMode ? { color: "rgba(244, 244, 244, 0.64)" } : {}}>
        My Projects
      </h2>

      <div className="projects-container" ref={projectsContainerRef}>
        <div className="projects-track">{renderProjects()}</div>
      </div>

      {selectedProject && (
        <div className="project-modal">
          <div className="modal-content">
            <h3>{selectedProject.title}</h3>
            <img src={selectedProject.image} alt={selectedProject.title} />
            <p>{selectedProject.details}</p>
            <button onClick={() => window.open(selectedProject.link, '_blank')}>
              🔗 Visit Project
            </button>
            <button onClick={() => setSelectedProject(null)}>❌ Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
