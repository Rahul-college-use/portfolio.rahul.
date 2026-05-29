import React, { useState, useEffect } from 'react';
import './ScrollToTop.css';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Button displays only if user scrolls past 300px vertical track displacement
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    
    // Clean up event infrastructure on component unmount
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Native fluid frame animations trajectory
    });
  };

  return (
    <>
      <button 
        className={`terminal-scroll-top-btn ${isVisible ? 'visible' : 'hidden'}`}
        onClick={scrollToTop}
        aria-label="Scroll to top of terminal page shell"
        title="Execute SYS_SCROLL_TOP"
      >
        {/* Sleek Technical Upward Pointer Arrow Vector */}
        <svg 
          viewBox="0 0 24 24" 
          width="20" 
          height="20" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <line x1="12" y1="19" x2="12" y2="5"></line>
          <polyline points="5 12 12 5 19 12"></polyline>
        </svg>
        <span className="scroll-btn-glow"></span>
      </button>
    </>
  );
};

export default ScrollToTop;