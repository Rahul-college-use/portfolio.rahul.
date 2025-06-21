import React, { useState } from 'react';
import ChatBot from './ChatBot';
import './ScrollToTop.css';

const ScrollToTopWithChatbot = ({ mode }) => {
  const [chatbotOpen, setChatbotOpen] = useState(false);

  const toggleChatbot = () => {
    setChatbotOpen(!chatbotOpen);
  };

  return (
    <>
      <div className="avatar-container" onClick={toggleChatbot}>
        <img
          src="https://avataaars.io/?avatarStyle=Transparent&topType=LongHairBigHair&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Light"
          alt="ChatBot Avatar"
          className="scroll-to-top-btn"
        />
        <span className="chat-badge">💬</span>
      </div>

      <div className={`chatbot-sidebar ${chatbotOpen ? 'open' : ''} ${mode==='light'?'bg-color':''}` }>
        {console.log(mode)}
        <button onClick={toggleChatbot} className="close-btn">✖</button>
        <ChatBot mode={mode} /> {/* ✅ pass mode here */}
      </div>
    </>
  );
};

export default ScrollToTopWithChatbot;
