import React, { useEffect, useState } from 'react';
import './Background.css';

const Background = ({ darkMode }) => {
    const studentImageUrl = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80";

    const fullText = `sMy journey in computer science began in 2023, driven by curiosity about how technology works. Since then, I’ve explored programming, built projects, and developed a passion for solving problems. It’s been a path of learning, challenges, and growth — and I’m excited to keep moving forward in this field.`; // (same as before)
    const [displayedText, setDisplayedText] = useState('');
    const [typing, setTyping] = useState(true);
    const [loading, setLoading] = useState(true);
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const loadingTimer = setTimeout(() => {
            setLoading(false);
            let i = 0;
            const interval = setInterval(() => {
                if (i < fullText.length) {
                    setDisplayedText(prev => prev + fullText.charAt(i));
                    i++;
                } else {
                    clearInterval(interval);
                    setTyping(false);
                }
            }, 20);
        }, 3000);
        return () => clearTimeout(loadingTimer);
    }, [fullText]);

    return (
        <section id="background" className="background-section" style={darkMode ? { background: "#1F2932" } : {}}>
            <div className="background-content">
                <div className="profile-intro">

                    {/* Image Shimmer Effect */}
                    <div className="image-container">
                        {!imageLoaded && <div className="image-loading"></div>}
                        <img
                            src={studentImageUrl}
                            alt="Student"
                            className="shimmer-image"
                            style={{ opacity: imageLoaded ? 1 : 0 }}
                            onLoad={() => setImageLoaded(true)}
                        />
                    </div>

                    <div className="intro-text">
                        <h2>My Journey in Computer Science</h2>

                        {loading ? (
                            <div>
                                <div className="shimmer-wrapper shimmer-box"></div>
                                <div className="shimmer-wrapper shimmer-box"></div>
                                <div className="shimmer-wrapper shimmer-box"></div>
                            </div>
                        ) : (
                            <p className="typewriter">
                                {displayedText}
                                {typing && <span className="blinking-cursor">|</span>}
                            </p>
                        )}

                        {!loading && (
                            <div className="student-details">
                                <h3>Details</h3>
                                <ul>
                                    <li><strong>University:</strong> BEU University</li>
                                    <li><strong>Degree:</strong> B.Tech in Computer Science</li>
                                    <li><strong>Skills:</strong> JavaScript, React, Node.js, Python</li>
                                    <li><strong>Interests:</strong> AI, Web Development, Open Source</li>
                                    <li><strong>Email:</strong> rahul.cse.kr@gmail.com</li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Background;
