import React from 'react';
import './GovernmentLinksSection.css';

const GovernmentLinksSection = ({ links }) => {
  if (!links || links.length === 0) return null;

  return (
    <div className="government-links-section">
      <div className="section-header">
        <h2 className="section-title">Important Government Job Portals</h2>
        <p className="section-subtitle">Official websites for government job listings</p>
      </div>
      <div className="links-grid">
        {links.map((link) => (
          <a 
            key={link._id} // Changed from index to _id
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="government-link-card"
          >
            <div className="link-content">
              <h3 className="link-title">{link.name}</h3>
              <p className="link-description">{link.description}</p>
              <span className="link-cta">Visit Portal →</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default GovernmentLinksSection;