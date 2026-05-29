import React from 'react';
import './Offline.css';

const Offline = ({ message }) => {
  return (
    <div className="offline-console-wrapper">
      <div className="offline-terminal-box">
        
        {/* Decorative Top Terminal Header */}
        <div className="offline-top-bar">
          <div className="offline-window-dots">
            <span className="o-dot o-red"></span>
            <span className="o-dot o-yellow"></span>
            <span className="o-dot o-green"></span>
          </div>
          <span className="offline-terminal-title">network_diagnostics.log</span>
        </div>

        {/* Content Body */}
        <div className="offline-body-content">
          <div className="alert-icon-pulse">
            <svg 
              viewBox="0 0 24 24" 
              width="32" 
              height="32" 
              stroke="currentColor" 
              strokeWidth="2" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
              <line x1="12" y1="9" x2="12" y2="13"></line>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
          </div>

          <h3 className="offline-headline">[HARDWARE_ALERT]: CONNECTION_LOST</h3>
          <p className="offline-description">
            {message || "The application architecture was unable to establish a handshake sequence with live remote servers. Please review your device internet configuration registry."}
          </p>

          <div className="offline-system-footer">
            <span className="ping-retry-ticker">STANDBY // AUTO_RETRY_ACTIVE</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Offline;