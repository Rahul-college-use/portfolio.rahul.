import React, { useState, useEffect, useRef } from 'react';
import Project from './Project';
import './Projects.css';

const Projects = ({ darkMode }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(""); // ✅ FIXED (state instead of variable)

  const projectsContainerRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetch('https://portfolio-rahul-api.vercel.app/data')
        .then(res => {
          if (!res.ok) {
            throw new Error("Network response was not ok");
          }
          return res.json();
        })
        .then(data => {
          // ✅ Safe handling if API structure changes
          const formattedData = Array.isArray(data) ? data : [];

          setProjects([...formattedData].reverse());
          setLoading(false);
        })
        .catch(err => {
          // console.error("Error fetching projects:", err);
          setError("Failed to load projects. Please try again later.");
          setProjects([]);
          setLoading(false);
        });
    }, 2000); // keep shimmer delay

    return () => clearTimeout(timer);
  }, []);

  const renderProjects = () => {
    const skeletons = new Array(4).fill(null);

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

      {/* Error Message */}
      <div style={{textAlign:'center'}}>
        <h2 style={{color:'red'}}>
      { error && <p className="error-message">API not responding: {error}</p>}

        </h2>

      </div>

      <div className="projects-container" ref={projectsContainerRef}>
        <div className="projects-track">{renderProjects()}</div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="project-modal">
          <div className="modal-content">
            <h3>{selectedProject.title}</h3>

            {/* fallback for image field */}
            <img
              src={selectedProject.imageUrl || selectedProject.image}
              alt={selectedProject.title}
            />

            <p>{selectedProject.details}</p>

            <button
              onClick={() =>
                window.open(selectedProject.link, '_blank')
              }
            >
              🔗 Visit Project
            </button>

            <button onClick={() => setSelectedProject(null)}>
              ❌ Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
