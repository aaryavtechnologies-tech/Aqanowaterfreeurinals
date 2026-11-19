import React from 'react';
import { Link } from 'react-router-dom';

export default function TopBar({ onOpenDemo }) {
  return (
    <aside className="top-bar" aria-label="Quick Contact & Demonstration Info">
      <div className="container">
        <div className="top-bar-left">
          <span className="top-bar-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" style={{ width: 15, height: 15 }}>
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            Ahmedabad, Gujarat
          </span>
          <span className="top-bar-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" style={{ width: 15, height: 15 }}>
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            Live Demo Center: Riviera Springs, Shela
          </span>
        </div>
        <div className="top-bar-right">
          <a href="mailto:envisave24@gmail.com" className="top-bar-item" aria-label="Email envisave24@gmail.com">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" style={{ width: 15, height: 15 }}>
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <span>envisave24@gmail.com</span>
          </a>
          <a href="/#catalogues" className="top-bar-item" style={{ color: 'var(--color-accent)', fontWeight: 600 }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" style={{ width: 15, height: 15 }}>
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Download Catalogues
          </a>
          <a href="tel:+917984515685" className="top-bar-item" aria-label="Call Mukeshbhai Thakkar">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" style={{ width: 15, height: 15 }}>
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <span><strong>+91 79845 15685</strong></span>
          </a>
          <button type="button" className="demo-pill" onClick={onOpenDemo}>Book Live Demo</button>
        </div>
      </div>
    </aside>
  );
}
