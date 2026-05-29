import React from 'react';
import './Project.css';

const Project = ({ project, onClick }) => {
  // ⏳ If project is null/undefined (during loading state), render matching technical shimmer skeleton
  if (!project) {
    return (
      <div className="project-card-skeleton">
        <div className="skeleton-media-box shimmer-pulse" />
        <div className="skeleton-body">
          <div className="skeleton-line line-h3 shimmer-pulse" />
          <div className="skeleton-line line-p1 shimmer-pulse" />
          <div className="skeleton-line line-p2 shimmer-pulse" />
          <div className="skeleton-tags-row">
            <div className="skeleton-pill shimmer-pulse" />
            <div className="skeleton-pill shimmer-pulse" />
            <div className="skeleton-pill shimmer-pulse" />
          </div>
        </div>
      </div>
    );
  }

  // Safely extract properties with clean operational default fallbacks
  const {
    title = "System Deployment Node",
    description = "Operational diagnostic documentation logs are currently empty for this specific database index array item slot.",
    technologies = [],
    imageUrl,
    image,
    // vercel,
    // link
  } = project;

  // Resolve image fields safely across API updates
  const activeImage = imageUrl || image || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80";

  return (
    <div className="technical-project-card" onClick={onClick} title="Click to view full operational logs">
      
      {/* Card Header Media Window */}
      <div className="card-media-window">
        <img src={activeImage} alt={`${title} UI Display`} className="card-display-img" />
        
        {/* Technical Top Badges Overlay */}
        <div className="media-overlay-ledger">
          <span className="deployment-badge-pill">
            <span className="live-pulse-dot"></span>
            PROD_READY
          </span>
        </div>
      </div>

      {/* Card Meta Content Info */}
      <div className="card-technical-body">
        <div className="card-title-row">
          <h3 className="card-main-title">{title}</h3>
        </div>
        
        <p className="card-main-desc">{description}</p>
        
        {/* Technologies List Matrix */}
        {technologies.length > 0 && (
          <div className="card-tech-pill-group">
            {technologies.map((tech, index) => (
              <span key={index} className="card-meta-pill">
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Visual Indicator Footer */}
      <div className="card-interactive-footer">
        <span className="inspection-action-hint">Inspect Parameters <span>→</span></span>
      </div>
    </div>
  );
};

export default Project;