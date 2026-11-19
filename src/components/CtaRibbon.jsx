import React from 'react';

export default function CtaRibbon({ onOpenDemo }) {
  return (
    <section className="section-py-sm">
      <div className="container">
        <div className="cta-ribbon">
          <div className="cta-ribbon-content">
            <div>
              <span className="hero-tagline" style={{ marginBottom: '0.75rem' }}>
                Experience It Live in Ahmedabad
              </span>
              <h2>Book a Live Working Demonstration Today</h2>
              <p>
                Visit our live demonstration center in Shela, Ahmedabad, or schedule a personal visit. See the catalytic transformation and descaling results with your own eyes before ordering!
              </p>
              <p style={{ marginTop: '0.5rem', color: '#7DD3FC', fontSize: '0.95rem' }}>
                📍 <strong>Demo Center:</strong> A/1501, Riviera Springs, Skycity, Club O7 Road, Shela, Ahmedabad – 58.
              </p>
            </div>
            <div className="cta-ribbon-actions">
              <button type="button" className="btn btn-accent btn-lg" onClick={onOpenDemo}>
                <span>📅</span> Book Demo Slot
              </button>
              <a href="tel:+917984515685" className="btn btn-outline-white btn-lg">
                <span>📞</span> Call +91 79845 15685
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
