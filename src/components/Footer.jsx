import React from 'react';
import { Link } from 'react-router-dom';
import SocialPills from './SocialPills';
import { SOCIAL_LINKS } from '../config/socialLinks';

export default function Footer({ onOpenDemo }) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img
              src="/assets/images/logo.svg"
              alt="MOLLISAQUA Logo"
              width="220"
              height="55"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
            <p>
              Gujarat's trusted eco-friendly catalytic water conditioner solution. Eliminating hard water scaling without salt, power, or recurring maintenance.
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '1rem' }}>
              <button type="button" className="btn btn-whatsapp btn-sm" onClick={onOpenDemo}>
                Book Live Demonstration
              </button>
              <a href="/#catalogues" className="btn btn-outline-white btn-sm">
                <span>📥</span> Download Brochure
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Product</Link></li>
              <li><Link to="/features">Features &amp; Benefits</Link></li>
              <li><Link to="/applications">Applications</Link></li>
              <li><Link to="/how-it-works">How It Works</Link></li>
              <li><Link to="/live-demo">Live Demonstration</Link></li>
              <li><Link to="/products" style={{ color: 'var(--color-accent)', fontWeight: 600 }}>🏢 Other Products (10 Solutions)</Link></li>
              <li><a href="/#videos">📹 Watch Product Videos</a></li>
              <li><a href="/#catalogues">📥 Download Catalogues (ENG/GUJ)</a></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Applications</h4>
            <ul className="footer-links">
              <li><Link to="/applications#societies">Housing Societies &amp; Borewells</Link></li>
              <li><Link to="/applications#residential">Flats &amp; Luxury Bungalows</Link></li>
              <li><Link to="/applications#industrial">Factories, Boilers &amp; Chillers</Link></li>
              <li><Link to="/applications#agriculture">Farming &amp; Drip Irrigation</Link></li>
              <li><Link to="/about#specs">Technical Specifications</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact Information</h4>
            <div className="footer-contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 18, height: 18 }}>
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <div>
                <strong>Mukeshbhai Thakkar</strong>
                <p style={{ margin: 0, color: '#94A3B8', fontSize: '0.85rem' }}>Param Industries, Ahmedabad</p>
              </div>
            </div>

            <div className="footer-contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 18, height: 18 }}>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <div>
                <a href="tel:+917984515685" style={{ color: '#FFFFFF', fontWeight: 700 }}>+91 79845 15685</a>
              </div>
            </div>

            <div className="footer-contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 18, height: 18 }}>
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <div>
                <a href={SOCIAL_LINKS.emailNirali.url} style={{ color: '#FFFFFF', fontWeight: 600, display: 'block' }}>{SOCIAL_LINKS.emailNirali.label}</a>
                <a href={SOCIAL_LINKS.emailEnvisave.url} style={{ color: '#CBD5E1', fontSize: '0.88rem' }}>{SOCIAL_LINKS.emailEnvisave.label}</a>
              </div>
            </div>

            <div className="footer-contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 18, height: 18 }}>
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <div>
                <strong>Live Demonstration Address:</strong>
                <address style={{ fontStyle: 'normal', fontSize: '0.85rem', color: '#CBD5E1', marginTop: '0.2rem' }}>
                  A/1501, Riviera Springs, Skycity, Club O7 Road, Shela, Ahmedabad – 58.
                </address>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Social, Reviews, & Map Directions Pill Bar */}
        <div className="footer-social-bar">
          <div className="footer-social-bar-heading">
            <span className="footer-social-badge">Quick Connect &amp; Location</span>
            <p>Locate our demo center, leave Google reviews, follow our social handles, or write directly:</p>
          </div>
          <SocialPills variant="footer" />
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 MOLLISAQUA® Water Conditioning Solutions. All rights reserved.</p>
          <p>Param Industries • Mukeshbhai Thakkar • Ahmedabad, Gujarat</p>
        </div>
      </div>
    </footer>
  );
}
