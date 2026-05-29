import React from 'react';
import './Timeline.css';

const timelineData = [
  {
    year: '',
    title: 'INIT_BRANCH',
    description: 'Repository Initialized: Journey Started',
    status: 'origin/main'
  },
  {
    year: '2020',
    title: 'High School Matriculation',
    description: 'Completed 10th Grade with a core focus on Mathematics and Fundamental Sciences.',
    hash: 'fe9a412'
  },
  {
    year: '2022',
    title: 'Senior Secondary Education',
    description: 'Completed 12th Grade in PCM (Physics, Chemistry, Mathematics stream).',
    hash: 'b4c7102'
  },
  {
    year: '2023',
    title: "Bachelor's Degree Matriculation",
    description: 'Started B.Tech in Computer Science and Engineering. Deep dive into algorithms and systems.',
    hash: 'a8e91f4'
  },
  {
    year: '2025',
    title: 'Full Stack Internships',
    description: 'Engineered responsive web applications, debugged production APIs, and deployed live builds.',
    hash: '7c3b2e5'
  },
  {
    year: '',
    title: 'HEAD -> main',
    description: 'Actively compiling and pushes new updates daily...',
    status: 'running'
  },
];

const Timeline = () => {
  return (
    <section className="timeline-section">
      <div className="section-header-tag">
        <span className="code-accent">&lt;</span>
        <h2>System Git Log</h2>
        <span className="code-accent">/&gt;</span>
      </div>

      <div className="git-log-container">
        {/* Mock Terminal Header */}
        <div className="git-terminal-top">
          <span className="terminal-prompt">rahul@kumar-portfolio:~$ git log --graph --oneline</span>
        </div>

        <div className="git-graph-body">
          {timelineData.map((item, index) => {
            const isMarker = item.year === '';
            
            return (
              <div className={`git-commit-row ${isMarker ? 'git-marker-row' : ''}`} key={index}>
                
                {/* Left Graph Column (The visual line and dots) */}
                <div className="git-graph-line-col">
                  <div className={`git-node-dot ${isMarker ? 'marker-node' : 'commit-node'}`} />
                  {index !== timelineData.length - 1 && <div className="git-line-connector" />}
                </div>

                {/* Right Content Column */}
                <div className="git-commit-content">
                  {isMarker ? (
                    <div className="git-status-tag-wrapper">
                      <span className={`git-branch-tag ${item.status === 'running' ? 'pulse-tag' : ''}`}>
                        {item.title}
                      </span>
                      <span className="git-branch-desc">{item.description}</span>
                    </div>
                  ) : (
                    <div className="git-log-card">
                      <div className="git-log-meta">
                        <span className="git-hash">commit {item.hash}</span>
                        <span className="git-timestamp">[{item.year}]</span>
                      </div>
                      <h3 className="git-commit-title">{item.title}</h3>
                      <p className="git-commit-desc">{item.description}</p>
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;