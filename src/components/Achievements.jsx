import React from 'react';
import './Achievements.css';

const achievementsData = [
  {
    title: "Hackathon Champion & Coordinator",
    subtitle: "🥇 1st Place — College Coding Challenge",
    description: "Designed and engineered an automated Hostel Mess Management solution, optimizing inventory tracking and student billing metrics.",
    tag: "Full-Stack / Innovation"
  },
  {
    title: "TCS CodeVita Competitor",
    subtitle: "🚀 Round 1 Qualifier — Global Coding Contest",
    description: "Competed in Tata Consultancy Services' flagship global competitive programming tournament, solving complex algorithmic data structure obstacles.",
    tag: "Competitive Programming"
  }
];

const Achievements = () => {
  return (
    <section className="achievements-section">
      <div className="section-header-tag">
        <span className="code-accent">&lt;</span>
        <h2>System Accolades & Credentials</h2>
        <span className="code-accent">/&gt;</span>
      </div>

      <div className="achievements-matrix-grid">
        {achievementsData.map((item, index) => (
          <div className="achievement-terminal-card" key={index}>
            
            {/* Top row badge and categorization meta */}
            <div className="achievement-card-header">
              <span className="achievement-scope-tag">{item.tag}</span>
              <div className="trophy-glow-icon">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v3c0 2.44 1.72 4.48 4 4.92v2.08l-5 2.5V21h16v-1.5l-5-2.5v-2.08c2.28-.44 4-2.48 4-4.92V7c0-1.1-.9-2-2-2zm-12 5V7h2v3c0 .55-.45 1-1 1s-1-.45-1-1zm10 0c0 .55-.45 1-1 1s-1-.45-1-1V7h2v3z"/>
                </svg>
              </div>
            </div>

            {/* Core textual block information */}
            <div className="achievement-card-body">
              <h3 className="achievement-main-title">{item.title}</h3>
              <h4 className="achievement-subtitle-metric">{item.subtitle}</h4>
              <p className="achievement-log-desc">{item.description}</p>
            </div>

            {/* Decorative bottom terminal status ledger line */}
            <div className="achievement-card-footer">
              <span className="verification-status">VERIFIED_LOG_SECURE // OK</span>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;