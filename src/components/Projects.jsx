import React, { useState, useRef} from 'react';
import Project from './Project';
import './Projects.css';

const Projects = ({darkMode}) => {
    // Initialize with empty array if undefined
    const [projects] = useState([
        {
            id: 1,
            title: "Resturarent Platform",
            description: "A full-stack Resturarents application with payment integration",
            technologies: ["React", "Node.js"],
            //   image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
            image: 'https://i.ibb.co/vCTZfsPR/Screenshot-2025-06-08-154500.png',
            details: "Developed a complete Resturarents solution with user authentication...",
            link: "https://restuarents-app-h-git-main-rahul-college-uses-projects.vercel.app/"
        },
        {
            id: 2,
            title: "News Platform",
            description: "A full-stack Prime News  application with payment integration",
            technologies: ["React", "Node.js","newsApi"],
            //   image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
            image: 'https://i.ibb.co/ZRXNbXWs/Screenshot-2025-06-08-163813.png',
            details: "Developed a complete News solution...",
            link: "https://prime-source-ttt.vercel.app/"
        },

        // Add more projects as needed
    ]);

    const [selectedProject, setSelectedProject] = useState(null);
    const projectsContainerRef = useRef(null);

    // Safe rendering of projects
    const renderProjects = () => {
        if (!projects || projects.length === 0) {
            return <div className="no-projects">No projects to display</div>;
        }

        return (
            <>
                {projects.map(project => (
                    <Project
                        key={project.id}
                        project={project}
                        onClick={() => setSelectedProject(project)}
                    />
                ))}
            </>
        );
    };

    return (
        <section id="projects" className="projects-section" style={darkMode ? { background: "rgba(74, 98, 132, 0.34)"} : {}} >
            <h2 style={darkMode ? { color: "rgba(244, 244, 244, 0.64)" } : {}}>My Projects</h2>
            <div
                className="projects-container"
                ref={projectsContainerRef}
            >
                <div className="projects-track">
                    {renderProjects()}
                </div>
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