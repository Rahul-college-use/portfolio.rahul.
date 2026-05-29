import React, { useState, useEffect, useRef } from 'react';
import Project from './Project.jsx';
import './Projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const projectsContainerRef = useRef(null);

  useEffect(() => {
    // Shimmer delay emulation
    const timer = setTimeout(() => {
      fetch('https://portfolio-rahul-api.vercel.app/data')
        .then(res => {
          if (!res.ok) throw new Error("Network response was not ok");
          return res.json();
        })
        .then(data => {
          const formattedData = Array.isArray(data) ? data : [];
          setProjects([...formattedData].reverse());
          setLoading(false);
        })
        .catch(err => {
          setError("Infrastructure nodes unreachable. Please review deployment strings later.");
          setProjects([]);
          setLoading(false);
        });
    }, 1200); // Crisper transition speed than 2000ms

    return () => clearTimeout(timer);
  }, []);

  // Structural body handler for rendering skeletons or live arrays
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
    <section className="projects-section">
      <div className="section-header-tag">
        <span className="code-accent">&lt;</span>
        <h2>Production Deployments</h2>
        <span className="code-accent">/&gt;</span>
      </div>

      {/* Structured Technical System Error Alert */}
      {error && (
        <div className="api-error-console">
          <span className="error-badge">STATUS_ERR</span>
          <p className="error-message">{error}</p>
        </div>
      )}

      {/* Grid Dashboard Container */}
      <div className="projects-grid-container" ref={projectsContainerRef}>
        <div className="projects-matrix-grid">
          {renderProjects()}
        </div>
      </div>

      {/* Premium Glassmorphism Detail Backdrop Modal */}
      {selectedProject && (
        <div className="project-modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div className="modal-terminal-card" onClick={(e) => e.stopPropagation()}>
            
            {/* Terminal Card Header Top Bar */}
            <div className="modal-top-bar">
              <div className="modal-dots">
                <span className="m-dot m-red" onClick={() => setSelectedProject(null)}></span>
                <span className="m-dot m-yellow"></span>
                <span className="m-dot m-green"></span>
              </div>
              <span className="modal-system-title">project_inspector.exe</span>
            </div>

            <div className="modal-body-layout">
              <div className="modal-media-frame">
                <img
                  src={selectedProject.imageUrl || selectedProject.image}
                  alt={selectedProject.title}
                  className="modal-preview-img"
                />
              </div>

              <div className="modal-info-panel">
                <h3 className="modal-project-title">{selectedProject.title}</h3>
                <p className="modal-project-details">{selectedProject.details || "No operational log description details appended inside target endpoint data structure fields."}</p>
                
                <div className="modal-action-row">
                  <button
                    className="modal-btn btn-primary"
                    onClick={() => window.open(selectedProject.link, '_blank')}
                  >
                    <span>🔗 Launch Live Deployment</span>
                  </button>
                  <button className="modal-btn btn-secondary" onClick={() => setSelectedProject(null)}>
                    Close Terminal
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;