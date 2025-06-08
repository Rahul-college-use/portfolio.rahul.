import React from 'react';
import './Background.css';

const Background = ({ darkMode, toggleDarkMode }) => {
    const studentImageUrl = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80";

    return (
        <section id="background" className="background-section"  style={darkMode ? { background: "#1F2932" } : {}}>
            <div className="background-content">
                <div className="profile-intro">
                    <img
                        src={studentImageUrl}
                        alt="Student working"
                        className="student-image"
                    />
                    <div className="intro-text">
                        <h2>My Journey in Computer Science</h2>
                        <p>My journey in computer science began in 2023, driven by curiosity about how technology works. Since then, I’ve explored programming, built projects, and developed a passion for solving problems. It’s been a path of learning, challenges, and growth — and I’m excited to keep moving forward in this field.</p>

                        <div className="student-details">
                            <h3>Details</h3>
                            <ul>
                                <li><strong>University:</strong> BEU University</li>
                                <li><strong>Degree:</strong> Bachelor of Technology Computer Science (Bech)</li>
                                <li><strong>Skills:</strong> JavaScript, React, Node.js, Python</li>
                                <li><strong>Interests:</strong> AI, Web Development, Open Source</li>
                                <li><strong>Email:</strong> rahul.cse.kr@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Rest of the timeline code remains the same */}
            </div>
        </section>
    );
};

export default Background;
