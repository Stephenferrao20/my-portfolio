import React from 'react';
import './DeveloperCard.css';

export default function DeveloperCard() {
  return (
    <div className="developer-container">
      <div className="status-indicator"></div>

      <div className="developer-avatar">
        <div className="avatar-circle">
          <div className="avatar-inner">👨‍💻</div>
          <div className="code-lines">
            <div className="code-line"></div>
            <div className="code-line"></div>
            <div className="code-line"></div>
            <div className="code-line"></div>
          </div>
        </div>
      </div>

      <div className="developer-title">Full Stack Dev</div>
      <div className="developer-subtitle">Building the future, one commit at a time</div>

      <div className="skills-container">
        <div className="skill-tag">React</div>
        <div className="skill-tag">Next.js</div>
        <div className="skill-tag">Node.js</div>
        <div className="skill-tag">TypeScript</div>
        <div className="skill-tag">Python</div>
        <div className="skill-tag">Docker</div>
      </div>

      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-dot red"></div>
          <div className="terminal-dot yellow"></div>
          <div className="terminal-dot green"></div>
        </div>
        <div className="terminal-content">
          <div className="typing-text">npm run dev --turbo</div>
        </div>
      </div>
    </div>
  );
}
