import React from 'react';
import { FiPhone, FiMail, FiClock, FiMapPin, FiUser } from 'react-icons/fi';

const TopBar = () => {
  return (
    <div style={{
      backgroundColor: 'var(--color-dark-slate)',
      color: 'rgba(255, 255, 255, 0.85)',
      fontSize: '0.825rem',
      padding: '0.5rem 0',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      fontFamily: 'var(--font-body)',
    }} className="hide-md">
      <div className="container flex justify-between items-center">
        {/* Left Info Links */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <FiPhone style={{ color: 'var(--color-accent)' }} />
            <span>Emergency: <a href="tel:18005550199" style={{ color: '#FFFFFF', fontWeight: '600' }}>1-800-555-0199</a></span>
          </div>
          <div style={{ width: '1px', height: '12px', backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
          <div className="flex items-center gap-2">
            <FiMail style={{ color: 'var(--color-primary-light)' }} />
            <span>info@hcrchospital.com</span>
          </div>
          <div style={{ width: '1px', height: '12px', backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
          <div className="flex items-center gap-2">
            <FiClock style={{ color: 'var(--color-primary-light)' }} />
            <span>Open 24/7 Operations</span>
          </div>
        </div>

        {/* Right Quick Links */}
        <div className="flex items-center gap-4">
          <a href="/locations" style={{ color: 'rgba(255, 255, 255, 0.85)', display: 'flex', alignItems: 'center', gap: '0.25rem' }} className="hover-link">
            <FiMapPin size={13} />
            <span>Locations</span>
          </a>
          <a href="/portal" style={{ color: 'rgba(255, 255, 255, 0.85)', display: 'flex', alignItems: 'center', gap: '0.25rem' }} className="hover-link">
            <FiUser size={13} />
            <span>Patient Portal</span>
          </a>
        </div>
      </div>
      <style>{`
        .hover-link:hover {
          color: #FFFFFF !important;
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default TopBar;
