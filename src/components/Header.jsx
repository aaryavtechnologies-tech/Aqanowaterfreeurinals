import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

export default function Header({ onOpenDemo }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile drawer when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="site-header">
      <div className="container">
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo" aria-label="MOLLISAQUA Home">
            <img src="/assets/images/logo.svg" alt="MOLLISAQUA Water Conditioning Systems" width="220" height="55" />
          </Link>

          <button
            type="button"
            className="menu-toggle"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            aria-controls="primaryNav"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav id="primaryNav" aria-label="Main Navigation">
            <ul className={`nav-menu ${isMenuOpen ? 'is-open' : ''}`}>
              <li className="nav-item">
                <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                  About Product
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/features" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                  Features &amp; Benefits
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/applications" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                  Applications
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/how-it-works" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                  How It Works
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/live-demo" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                  Live Demo
                </NavLink>
              </li>
              <li className="nav-item">
                <a href="/#catalogues" className="nav-link">
                  Brochures
                </a>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="nav-cta-group">
            <a href="/#catalogues" className="btn btn-outline btn-sm">
              <span>📥</span> Brochure
            </a>
            <button type="button" className="btn btn-secondary btn-sm" onClick={onOpenDemo}>
              Request Demo
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
