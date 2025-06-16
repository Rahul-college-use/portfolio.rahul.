import React, { useState, useRef} from 'react';
import Project from './Project';
import './Projects.css';

const Projects = ({darkMode}) => {
    // Initialize with empty array if undefined
    const [projects] = useState([
           {
  id: 3,
  title: "Weather Application Platform",
  description: "A real-time weather application with live data using Weather API.",
  technologies: ["React", "Node.js", "WeatherAPI"],
  image: "https://i.ibb.co/DHKMM9Ht/brave-screenshot-localhost.png",
  details: "Designed and developed a responsive weather application that provides real-time weather updates based on user input. Utilized React for frontend rendering, WeatherAPI for live data fetching, and Node.js for integration. The app includes features like current temperature, humidity, wind speed, weather icons, and animated UI elements. Added support for city search, error handling, and dark/light theme toggle. Optimized for both mobile and desktop screens.",
  link: "https://weather-app-8xf6.vercel.app/"
},
      {
  id: 4,
  title: "Fake User Details Fetch",
  description: "A responsive web app that fetches and displays fake user details using an external API.",
  technologies: ["HTML", "CSS", "JavaScript"],
  image: "https://i.ibb.co/7tJb6t7g/Screenshot-2025-06-16-121822.png",
  details: "Built a responsive web application that fetches random user information from the Random User API and displays details like name, email, phone number, location, date of birth, and profile image. Implemented error handling, UI feedback on button click, copy/select restriction for basic data security, and mobile-friendly design. The project demonstrates DOM manipulation, async API calls, and basic front-end security tricks.",
  link: "https://fake-user-details-fetch.vercel.app/"
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

       {
  id: 1,
  title: "Restaurant Platform",
  description: "A full-stack restaurant application with payment gateway integration.",
  technologies: ["React", "Node.js"],
  image: "https://i.ibb.co/vCTZfsPR/Screenshot-2025-06-08-154500.png",
  details: "Designed and developed a full-stack restaurant web platform that allows users to browse menus, place orders, and complete payments securely. Implemented user authentication, dynamic menu rendering, and interactive cart functionality. Integrated a secure payment gateway for smooth checkout experience. Built using React on the frontend and Node.js on the backend with full responsiveness across devices. Ensured real-time updates, validation, and smooth UX across the application.",
  link: "https://restuarents-app-h-git-main-rahul-college-uses-projects.vercel.app/"
}


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
