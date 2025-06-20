import React from 'react';
import './Timeline.css';

const timelineData = [
  {
    year: '',
    title: 'Staring On',
  },
  {
    year: '2020',
    title: 'High School',
    description: 'Completed 10th Grade with a focus on Mathematics and Science.',
  },
  {
    year: '2022',
    title: 'Senior Secondary',
    description: 'Completed 12th Grade in PCM (Physics, Chemistry, Math).',
  },
  {
    year: '2023',
    title: "Bachelor's Degree",
    description: 'Started B.Tech in Computer Science and Engineering.',
  },
  {
    year: '2025',
    title: 'Internships',
    description: 'Completed web development internships and built portfolio projects.',
  },
  {
    year: '',
    title: 'Running On',
  },
];

const Timeline = ({ mode }) => {
  return (
    <section
      className="timeline-section"
      style={
        mode
          ? { background: 'rgba(74, 98, 132, 0.34)', color: '#fff' }
          : { background: '#f0f4f8', color: '#333' }
      }
    >
      <h2 className="timeline-title">🎓 My Study Journey</h2>
      <div className="timeline-container">
        {timelineData.map((item, index) =>
          item.year === '' ? (
            <div className="timeline-marker" key={index}>
              <div className="marker-title">{item.title}</div>
            </div>
          ) : (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h3 className="timeline-year">{item.year}</h3>
                <h4 className="timeline-heading">{item.title}</h4>
                <p className="timeline-desc">{item.description}</p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Timeline;
