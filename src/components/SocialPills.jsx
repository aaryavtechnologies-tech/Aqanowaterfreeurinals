import React from 'react';
import { SOCIAL_PILLS_PRIMARY } from '../config/socialLinks';

export default function SocialPills({
  className = '',
  variant = 'default',
  title = null,
  subtitle = null,
  items = SOCIAL_PILLS_PRIMARY,
}) {
  return (
    <div className={`social-pills-wrapper ${variant ? `social-pills-${variant}` : ''} ${className}`}>
      {title && (
        <div className="social-pills-header">
          <h4 className="social-pills-title">{title}</h4>
          {subtitle && <p className="social-pills-subtitle">{subtitle}</p>}
        </div>
      )}
      <div className="social-pills-list" role="list">
        {items.map((item) => (
          <a
            key={item.id}
            href={item.url}
            target={item.isExternal ? '_blank' : undefined}
            rel={item.isExternal ? 'noopener noreferrer' : undefined}
            className="social-pill-btn"
            aria-label={item.ariaLabel || item.label}
            role="listitem"
          >
            <span className="social-pill-icon" aria-hidden="true">{item.icon}</span>
            <span className="social-pill-text">{item.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
