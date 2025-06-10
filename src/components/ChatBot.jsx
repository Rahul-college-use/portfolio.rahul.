import React, { useState } from 'react';
import './ChatBot.css';

const projects = [
    {
        name: "Rahul Kumar",
        url: "https://www.instagram.com/_rahul_x_4u_/",
        description: "My Name is Rahul. Follow me on Instagram to connect too shortly."
    },
    {
        name: "First Portfolio Website",
        url: "https://github.com/Rahul-college-use/Portfolio",
        description: "A personal portfolio built with HTML and hosted on GitHub Pages.",
    },
    {
        name: "Restuarents-app",
        url: "https://github.com/Rahul-college-use/restuarents-app",
        description: "Built using React JS to showcase a list of restaurants with clean UI, navigation, and dynamic content display.",
    },
    {
        name: "PrimeSource News App",
        url: "https://github.com/Rahul-college-use/PrimeSource",
        description: "News aggregation and reading platform fetching latest news from multiple sources with dark mode support.",
    },
    {
        name: "Finance Tracker",
        url: "https://github.com/Rahul-college-use/Finance-Tracker",
        description: "Personal finance management tool built using C++ for tracking income, expenses, and summaries.",
    },
    {
        name: "Weather App",
        url: "https://github.com/rahul-xyz/weather-app",
        description: "Real-time weather app built with React and OpenWeather API.",
    },
    {
        name: "Tic-Tac-Toe-Game",
        url: "https://github.com/Rahul-college-use/-Tic-Tac-Toe-Game",
        description: "Classic Tic-Tac-Toe game with user-friendly interface and basic AI opponent.",
    },
    {
        name: "ShopCart",
        url: "https://github.com/Rahul-college-use/ShopCart",
        description: "E-commerce shopping cart allowing users to add, remove, and manage products before checkout.",
    },
    {
        name: "Rock-Paper-Scissors-Game",
        url: "https://github.com/Rahul-college-use/Rock-Paper-Scissors-Game-",
        description: "Console-based Rock-Paper-Scissors game with interactive gameplay and score tracking.",
    },
    {
        name: "Fake Payment Gateway",
        url: "https://github.com/rahul-xyz/fake-payment-gateway",
        description: "A real-life styled fake payment system with receipt generation and backend logging.",
    },
    {
        name: "Event Website",
        url: "https://github.com/Rahul-college-use/event-website",
        description: "Responsive event website with event listing and registration functionality.",
    },
];

const ChatBot = () => {
    const [query, setQuery] = useState('');
    const [response, setResponse] = useState('');

    const handleSearch = () => {
        const lowerQuery = query.toLowerCase();
        const result = projects.find((p) =>
            [p.name, p.description].some((field) =>
                field.toLowerCase().includes(lowerQuery)
            )
        );

        if (result) {
            setResponse(
                `💡 *${result.name}*:\n${result.description}\n🔗 Link: ${result.url}`
            );
        } else {
            setResponse("😕 Sorry, I couldn't find a project related to that.");
        }
    };

    const handleVisit = () => {
        const lowerQuery = query.toLowerCase();
        const result = projects.find((p) =>
            [p.name, p.description].some((field) =>
                field.toLowerCase().includes(lowerQuery)
            )
        );
        if (result) {
            window.open(result.url, "_blank");
        }
    };

    return (
        <div className="chatbot-container">
            <h2>🤖 Project ChatBot</h2>
            <input
                type="text"
                value={query}
                placeholder="Ask about a project or 'about Rahul'..."
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                className="chatbot-input"
            />
            <button onClick={handleSearch} className="chatbot-button">Ask</button>

            {!response && (
                <div className="chatbot-hint">
                    💬 Try: "weather", "finance", "portfolio", "about Rahul"
                </div>
            )}

            {response && (
                <div className="chatbot-response" style={{color:"black"}}>
                    {response.split('\n').map((line, idx) => (
                        <p key={idx}>{line}</p>
                    ))}
                    <button onClick={handleVisit} className="chatbot-visit">
                        🔗 Visit Link
                    </button>
                </div>
            )}
        </div>
    );
};

export default ChatBot;
