import React, { useEffect, useState } from 'react';
import './Background.css';

const Background = ({ darkMode }) => {
  const studentImageUrl = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80";

  // Cleaned up the leading typo "s" from your original text string
  const fullText = ` My journey in computer science began in 2023, fueled by a deep curiosity about how technology works and how software shapes the world around us. Since then, I’ve explored various programming languages, strengthened my problem-solving skills, and built full-stack applications that combine functionality with user-focused design. Along the way, I’ve developed a strong passion for software engineering and creating practical solutions to real-world problems.

Each project and challenge has helped me grow both technically and creatively, teaching me the importance of consistency, adaptability, and continuous learning in tech. From frontend development with React and Tailwind CSS to backend development using Node.js, databases, and APIs, I enjoy transforming ideas into complete digital experiences.

What started as curiosity has now become a long-term commitment to learning, building, and innovating. I’m constantly exploring new technologies, improving my development skills, and pushing myself to create better and more impactful solutions every day. I’m excited to continue this journey, contribute to open source projects, and collaborate with other developers to make a positive impact through technology. I’m eager to see where this path takes me and how I can contribute to the ever-evolving world of software development. I’m passionate about using technology to solve problems and create meaningful experiences, and I look forward to the opportunities and challenges that lie ahead in my software engineering career. I’m committed to continuous learning and growth, and I’m excited to see where this journey takes me in the world of software development. `;
  
  const [displayedText, setDisplayedText] = useState('');
  const [typing, setTyping] = useState(true);
  const [loading, setLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

useEffect(() => {
  const loadingTimer = setTimeout(() => {
    setLoading(false);
    
    // Explicitly reset the baseline text array first to clear placeholders
    setDisplayedText(''); 
    
    let i = 0;
    const interval = setInterval(() => {
      if (i < fullText.length) {
        // Use fullText[i] directly for clean, stable array index parsing
        setDisplayedText(prev => prev + fullText[i]);
        i++;
      } else {
        clearInterval(interval);
        setTyping(false);
      }
    }, 15);
  }, 1500);
  
  return () => clearTimeout(loadingTimer);
}, [fullText]);
  return (
    <section className="background-section">
      <div className="section-header-tag">
        <span className="code-accent">&lt;</span>
        <h2>About Me</h2>
        <span className="code-accent">/&gt;</span>
      </div>

      <div className="background-card-container">
        {/* Terminal Header Bar Simulation */}
        <div className="terminal-header">
          <div className="terminal-dots">
            <span className="dot dot-red"></span>
            <span className="dot dot-yellow"></span>
            <span className="dot dot-green"></span>
          </div>
          <span className="terminal-title">profile_manifest.json</span>
        </div>

        <div className="background-content">
          {/* Left Block: Shimmer Image Presentation Frame */}
          <div className="image-frame-wrapper">
            {!imageLoaded && <div className="image-loading-shimmer"></div>}
            <img
              src={studentImageUrl}
              alt="Engineering Student Workspace"
              className={`shimmer-image ${imageLoaded ? 'loaded' : 'loading'}`}
              onLoad={() => setImageLoaded(true)}
            />
          </div>

          {/* Right Block: Content Panels */}
          <div className="intro-text-panel">
            <h3 className="console-subtitle">System Biography</h3>

            {loading ? (
              <div className="skeleton-container">
                <div className="shimmer-line line-long"></div>
                <div className="shimmer-line line-medium"></div>
                <div className="shimmer-line line-short"></div>
              </div>
            ) : (
              <p className="typewriter-body">
                {displayedText}
                {typing && <span className="blinking-terminal-cursor">█</span>}
              </p>
            )}

            {!loading && (
              <div className="student-details-grid">
                <h4 className="details-heading">Developer Metadata</h4>
                <div className="meta-grid">
                  <div className="meta-item">
                    <span className="meta-label">University:</span>
                    <span className="meta-value">BEU University</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">Degree:</span>
                    <span className="meta-value">B.Tech in Computer Science</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">Email:</span>
                    <span className="meta-value link" onClick={() => window.location.href='mailto:rahul.cse.kr@gmail.com'}>
                      rahul.cse.kr@gmail.com
                    </span>
                  </div>
                  <div className="meta-item full-width">
                    <span className="meta-label">Core Tech Stack:</span>
                    <div className="tech-tags-group">
                      {['JavaScript', 'React', 'Node.js', 'Express.js', 'MongoDB', 'Python', 'MySQL', 'Java', 'C/C++'].map(tech => (
                        <span key={tech} className="tech-pill">{tech}</span>
                      ))}
                    </div>
                  </div>
                  <div className="meta-item full-width">
                    <span className="meta-label">Interests:</span>
                    <span className="meta-value text-highlight">AI, Web Architecture, Open Source Contribution</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Background;