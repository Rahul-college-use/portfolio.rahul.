import React, { useState } from 'react';
import './ChatBot.css';
import { projects1 } from '../data/Data';

const ChatBot = () => {
  const [query, setQuery] = useState('');
  const [displayedResults, setDisplayedResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (customQuery) => {
    const searchTerm = String(customQuery || query).trim().toLowerCase();

    if (searchTerm === '') {
      setDisplayedResults([]);
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 800));
      for (let i = 0; i < projects1.length; i++) {
        await new Promise((res) => setTimeout(res, 200));
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
    await new Promise((resolve) => setTimeout(resolve, 800));

    for (let i = 0; i < filtered.length; i++) {
      await new Promise((res) => setTimeout(res, 200));
      setDisplayedResults((prev) => [...prev, filtered[i]]);
    }

    setIsLoading(false);
  };

  const handleVisit = (url) => {
    if (url) window.open(url, '_blank');
  };

  const tagSuggestions = ['weather', 'finance', 'portfolio', 'about Rahul', 'about projects'];

  return (
    <div className="chatbot-terminal-container">
      
      {/* Mini Terminal Header Controls */}
      <div className="chatbot-terminal-top">
        <div className="chatbot-dots">
          <span className="c-dot c-red"></span>
          <span className="c-dot c-yellow"></span>
          <span className="c-dot c-green"></span>
        </div>
        <span className="chatbot-title">system_query_agent.sh</span>
      </div>

      <div className="chatbot-terminal-body">
        <h3 className="chatbot-welcome-text">
          <span className="prompt-arrow">&gt;</span> Initialize Assistant AI Node...
        </h3>

        {/* Tag Suggestion Command Badges */}
        <div className="chatbot-tags-panel">
          {tagSuggestions.map((tag, index) => (
            <button
              key={index}
              className="chatbot-tag-badge-btn"
              onClick={() => {
                setQuery(tag);
                handleSearch(tag);
              }}
            >
              #{tag}
            </button>
          ))}
        </div>

        {/* Dynamic Interactive Input Section */}
        <div className="chatbot-input-group">
          <span className="terminal-prefix-symbol">rahul@portfolio:~$</span>
          <input
            type="text"
            value={query}
            placeholder="Query keyword (e.g., 'weather', 'finance')..."
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            className="chatbot-console-input"
          />
          <button onClick={() => handleSearch()} className="chatbot-execute-btn">
            Execute
          </button>
        </div>

        {/* Diagnostic States & Loading Logs */}
        {isLoading && (
          <div className="chatbot-computing-state">
            <span className="computing-spinner"></span>
            <p className="computing-text">Parsing data chunks. Compiling layout maps...</p>
          </div>
        )}

        {!isLoading && displayedResults.length === 0 && (
          <div className="chatbot-idle-hint-box">
            <p className="hint-text">// Standby. Input terminal parameters or tap a macro hashtag above to parse indexes.</p>
          </div>
        )}

        {/* Streamed Results Output Window */}
        {displayedResults.length > 0 && (
          <div className="chatbot-response-stream">
            {displayedResults.map((result, idx) => (
              <div key={idx} className="chatbot-stream-card">
                <div className="stream-card-header">
                  <span className="stream-index-label">NODE_0{idx + 1}</span>
                  <h4 className="stream-project-name">{result.name}</h4>
                </div>
                
                <p className="stream-project-desc">{result.description}</p>

                {Array.isArray(result.tag) && (
                  <div className="stream-inline-tags">
                    {result.tag.map((t, i) => (
                      <span key={i} className="stream-chip">#{t}</span>
                    ))}
                  </div>
                )}

                <div className="stream-action-links">
                  {result.url && (
                    <button onClick={() => handleVisit(result.url)} className="stream-btn src-code-btn">
                      Source Repository ↗
                    </button>
                  )}
                  {result.vercel && (
                    <button onClick={() => handleVisit(result.vercel)} className="stream-btn deployment-btn">
                      ▲ Production Live
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatBot;