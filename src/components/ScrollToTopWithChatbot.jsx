import React, { useState } from 'react';
import ChatBot from './ChatBot';
import './ScrollToTop.css';

const ScrollToTopWithChatbot = () => {
  const [chatbotOpen, setChatbotOpen] = useState(false);

  const toggleChatbot = () => {
    setChatbotOpen(prev => !prev);
  };

  return (
    <>
      {/* Floating Interactive Trigger Widget */}
      <div 
        className={`floating-chatbot-trigger ${chatbotOpen ? 'trigger-active' : ''}`} 
        onClick={toggleChatbot}
        title="Open System Query Agent"
        aria-label="Toggle Chatbot Console"
      >
        <div className="avatar-frame">
          <img
            src="https://avataaars.io/?avatarStyle=Transparent&topType=LongHairBigHair&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Light"
            alt="AI Assistant Avatar"
            className="chatbot-avatar-img"
          />
        </div>
        
        {/* Core Pulsing Activity Badge */}
        <span className="live-chat-ping">
          <span className="ping-wave"></span>
          <span className="ping-dot">💬</span>
        </span>
      </div>

      {/* Sliding Glassmorphism Panel Drawer Tray */}
      <div className={`chatbot-side-drawer ${chatbotOpen ? 'drawer-expanded' : ''}`}>
        <div className="drawer-actions-header">
          <span className="drawer-status-diagnostic">SECURE_CHANNEL // CONNECTED</span>
          <button onClick={toggleChatbot} className="drawer-close-btn" aria-label="Close panel">
            ✖
          </button>
        </div>
        
        <div className="drawer-content-scroll-box">
          <ChatBot />
        </div>
      </div>

      {/* Click-Away Overlay Backdrop: Closes drawer smoothly if clicking main page content */}
      {chatbotOpen && <div className="drawer-blur-overlay" onClick={toggleChatbot} />}
    </>
  );
};

export default ScrollToTopWithChatbot;