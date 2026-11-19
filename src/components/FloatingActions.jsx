import React from 'react';

export default function FloatingActions() {
  const businessPhone = '917984515685';

  return (
    <aside className="floating-actions" aria-label="Quick Communication">
      <a href={`tel:+${businessPhone}`} className="float-btn float-phone" aria-label="Call Mukeshbhai Thakkar">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 26, height: 26 }}>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
        <span className="float-tooltip">Call Now</span>
      </a>
      <a
        href={`https://wa.me/${businessPhone}?text=Hello%20Mukeshbhai,%20I%20would%20like%20more%20details%20about%20the%20Mollisaqua%20Water%20Conditioner.`}
        className="float-btn float-whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 32, height: 32 }}>
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.04 20.16C10.61 20.16 9.2 19.78 7.97 19.05L7.68 18.88L4.56 19.7L5.39 16.66L5.2 16.36C4.4 15.08 3.97 13.51 3.97 11.91C3.97 7.37 7.67 3.67 12.05 3.67ZM8.86 7.47C8.66 7.47 8.33 7.54 8.05 7.84C7.78 8.14 7.02 8.85 7.02 10.3C7.02 11.75 8.08 13.15 8.22 13.35C8.37 13.55 10.3 16.53 13.26 17.81C13.97 18.11 14.52 18.3 14.95 18.43C15.66 18.66 16.31 18.63 16.82 18.55C17.39 18.47 18.57 17.84 18.82 17.14C19.06 16.44 19.06 15.83 18.99 15.71C18.92 15.59 18.72 15.52 18.42 15.37C18.12 15.22 16.65 14.5 16.38 14.4C16.1 14.3 15.91 14.25 15.71 14.55C15.51 14.85 14.95 15.52 14.77 15.71C14.6 15.91 14.43 15.93 14.13 15.78C13.83 15.63 12.87 15.32 11.73 14.3C10.84 13.51 10.25 12.53 10.07 12.23C9.9 11.93 10.05 11.77 10.2 11.62C10.34 11.49 10.5 11.27 10.65 11.1C10.8 10.93 10.85 10.81 10.95 10.61C11.05 10.41 11 10.24 10.92 10.09C10.85 9.94 10.25 8.47 10.01 7.87C9.77 7.29 9.53 7.37 9.35 7.36C9.18 7.35 8.99 7.47 8.86 7.47Z" />
        </svg>
        <span className="float-tooltip">Chat on WhatsApp</span>
      </a>
    </aside>
  );
}
