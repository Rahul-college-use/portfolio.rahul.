import React, { useState } from 'react';
import './ChatBot.css';
import { projects1 } from '../data/Data';

const ChatBot = () => {
    const [query, setQuery] = useState('');
    const [displayedResults, setDisplayedResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

   const handleSearch = async () => {
    const lowerQuery = query.toLowerCase();

    const filtered = projects1.filter((p) => {
        // Normalize all tags to lowercase
        const tags = Array.isArray(p.tag)
            ? p.tag.map((t) => t.toLowerCase())
            : [p.tag?.toLowerCase()];

        // 1. Check if query exactly matches a tag
        const exactMatch = tags.includes(lowerQuery);

        // 2. Check if there's 50%+ tag match by keyword overlap
        const queryWords = lowerQuery.split(' ');
        const matchCount = tags.filter((tag) =>
            queryWords.some((qWord) => tag.includes(qWord))
        ).length;

        const matchRatio = matchCount / tags.length;

        return exactMatch || matchRatio >= 0.5;
    });

    setDisplayedResults([]);
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    if (filtered.length > 0) {
        for (let i = 0; i < filtered.length; i++) {
            await new Promise((resolve) => setTimeout(resolve, 1500));
            setDisplayedResults((prev) => [...prev, filtered[i]]);
        }
    }

    setIsLoading(false);
};


    const handleVisit = (url) => {
        if (url) window.open(url, '_blank');
    };

    const tagSuggestions = ['weather', 'finance', 'portfolio', 'about Rahul'];

    return (
        <div className="chatbot-container">
            <h2>🤖 Project ChatBot</h2>

            {/* Tag Suggestions */}
            <div className="chatbot-tags">
                {tagSuggestions.map((tag, index) => (
                    <button
                        key={index}
                        className="chatbot-tag-btn"
                        onClick={() => {
                            setQuery(tag);
                            handleSearch();
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
                <div className="chatbot-response typing" style={{ color: "gray" }}>
                    ⌛ Thinking...
                </div>
            )}

            {/* Hint Message */}
            {!isLoading && displayedResults.length === 0 && (
                <div className="chatbot-hint">
                    💬 Try: "weather", "finance", "portfolio", "about Rahul"
                </div>
            )}

            {/* Results */}
            <div className="chatbot-response" style={{ color: "black" }}>
                {displayedResults.map((result, idx) => (
                    <div key={idx} className="chatbot-result">
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
