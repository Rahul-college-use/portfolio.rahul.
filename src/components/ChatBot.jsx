import React, { useState } from 'react';
import './ChatBot.css';
import { projects1 } from '../data/Data';

const ChatBot = ({ mode }) => {
  const [query, setQuery] = useState('');
  const [displayedResults, setDisplayedResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (customQuery) => {
    const searchTerm = String(customQuery || query).trim().toLowerCase();

    if (searchTerm === '') {
      setDisplayedResults([]);
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      for (let i = 0; i < projects1.length; i++) {
        await new Promise((res) => setTimeout(res, 300));
        setDisplayedResults((prev) => [...prev, projects1[i]]);
      }
      setIsLoading(false);
      return;
    }

    const searchWords = searchTerm.split(/\s+/);

    const filtered = projects1.filter((p) => {
      const tags = Array.isArray(p.tag)
        ? p.tag.map((t) => t.toLowerCase())
        : [String(p.tag || '').toLowerCase()];

      const matchCount = searchWords.filter((word) =>
        tags.some((tag) => tag.includes(word))
      ).length;

      return matchCount / searchWords.length >= 0.5;
    });

    setDisplayedResults([]);
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    for (let i = 0; i < filtered.length; i++) {
      await new Promise((res) => setTimeout(res, 300));
      setDisplayedResults((prev) => [...prev, filtered[i]]);
    }

    setIsLoading(false);
  };

  const handleVisit = (url) => {
    if (url) window.open(url, '_blank');
  };

  const tagSuggestions = ['weather', 'finance', 'portfolio', 'about Rahul','about projects'];

  return (
    <div className={`chatbot-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
      <h2>🤖 Project ChatBot</h2>

      {/* Tag Suggestions */}
      <div className="chatbot-tags">
        {tagSuggestions.map((tag, index) => (
          <button
            key={index}
            className="chatbot-tag-btn"
            onClick={() => {
              setQuery(tag);
              handleSearch(tag);
            }}
          >
            #{tag}
          </button>
        ))}
      </div>

      {/* Input Field */}
      <input
        type="text"
        value={query}
        placeholder="Ask about a project or 'about Rahul'..."
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        className="chatbot-input"
      />

      {/* Ask Button */}
      <button onClick={handleSearch} className="chatbot-button">Ask</button>

      {/* Loading Indicator */}
      {isLoading && (
        <div className="typing">⌛ Thinking...</div>
      )}

      {/* Hint Message */}
      {!isLoading && displayedResults.length === 0 && (
        <div className="chatbot-hint">
          💬 Try: "weather", "finance", "portfolio", "about Rahul"
        </div>
      )}

      {/* Results Section */}
      <div className={`chatbot-response`}>
        {displayedResults.map((result, idx) => (
          <div key={idx} className="chatbot-result" >
            <p>🔹 <strong>{idx + 1}. {result.name}</strong></p>
            <p>📝 {result.description}</p>

            {Array.isArray(result.tag) && (
              <div className="chatbot-tags-inline">
                {result.tag.map((t, i) => (
                  <span key={i} className="chatbot-tag-chip">#{t}</span>
                ))}
              </div>
            )}

            <div className="chatbot-links">
              {result.url && (
                <button onClick={() => handleVisit(result.url)} className="chatbot-visit">
                  🔗 Visit Link
                </button>
              )}
              {result.vercel && (
                <a href={result.vercel} target="_blank" rel="noopener noreferrer" className="chatbot-vercel">
                  ▲ View on Vercel
                </a>
              )}
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatBot;
