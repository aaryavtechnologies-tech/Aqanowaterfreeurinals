import React from 'react';

export default function VideoSection({ onOpenDemo }) {
  const videos = [
    {
      id: 1,
      src: '/assets/videos/mollisaqua-video-1.mp4',
      badge: 'Flow Demonstration',
      title: 'High Flow & Zero Pressure Drop',
      desc: 'Real test showcasing pressurized water passing smoothly through the catalytic unit without any loss of line velocity.',
      duration: '0:20',
    },
    {
      id: 2,
      src: '/assets/videos/mollisaqua-video-2.mp4',
      badge: 'Featured Walkthrough',
      title: 'Core Working & Performance Demo',
      desc: 'In-depth demonstration explaining the 26-metal alloy catalytic action and physical descaling mechanism.',
      duration: '0:55',
    },
    {
      id: 3,
      src: '/assets/videos/mollisaqua-video-3.mp4',
      badge: 'Field Test',
      title: 'Conditioned Water & Lathering Test',
      desc: 'Quick visual demonstration of instant soap foaming and mineral crystallization habit modification.',
      duration: '0:12',
    },
    {
      id: 4,
      src: '/assets/videos/mollisaqua-video-4.mp4',
      badge: 'Site Operating Action',
      title: 'Continuous High Flow Delivery',
      desc: 'Live observation of water conditioning output showing consistent crystal clear stream and turbulence-induced redox conditioning.',
      duration: '0:22',
    },
    {
      id: 5,
      src: '/assets/videos/mollisaqua-video-5.mp4',
      badge: 'Real-Time Verification',
      title: 'Direct Inline Conditioning in Action',
      desc: 'Demonstration of water flowing through the inline unit, verifying robust construction and smooth fluid dynamics.',
      duration: '0:15',
    },
  ];

  return (
    <section id="demo-videos" className="section-py video-showcase-section">
      <span id="videos" style={{ display: 'block', position: 'relative', top: '-80px', visibility: 'hidden' }}></span>
      <div className="container">
        <div className="section-header">
          <span className="section-badge">🎥 Live Demonstration Videos (5 Clips)</span>
          <h2 className="section-title">Live Product Demonstration: See It in Action</h2>
          <p className="section-desc">
            Watch real-time catalytic water conditioning demonstrations across these 5 live video clips showing zero pressure drop, instant lathering, and continuous high-velocity flow.
          </p>
        </div>

        <div className="video-grid">
          {videos.map((vid) => (
            <div key={vid.id} className="video-card">
              <div className="video-player-wrapper">
                <video
                  controls
                  preload="metadata"
                  playsInline
                  className="video-player"
                  aria-label={vid.title}
                >
                  <source src={vid.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <span className="video-duration-badge">{vid.duration}</span>
              </div>

              <div className="video-card-body">
                <span className="badge badge-accent" style={{ marginBottom: '0.5rem', display: 'inline-block' }}>
                  {vid.badge}
                </span>
                <h3 className="video-title">{vid.title}</h3>
                <p className="video-desc">{vid.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="video-section-cta" style={{ marginTop: '3rem', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={onOpenDemo}
            >
              📅 Book Live Demo in Shela, Ahmedabad
            </button>
            <a
              href="https://wa.me/917984515685?text=Hello%20Mukeshbhai,%20I%20watched%20the%20demonstration%20videos%20on%20your%20website%20and%20want%20to%20know%20more."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              💬 WhatsApp Video Enquiry
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
