import React, { useState, useEffect } from 'react';
import './ScrollToTop2.css';

const ScrollToTop2 = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const ScrollToTop2 = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    visible && (
      <button className="scroll-to-top" onClick={ScrollToTop2}>
        ⬆️
      </button>
    )
  );
};

export default ScrollToTop2;
