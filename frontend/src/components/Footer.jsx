import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--color-primary-dark)', color: 'var(--color-text-white)', padding: '4rem 0 2rem 0' }}>
      <div className="container grid grid-cols-4 gap-6 mb-5">
        <div>
          <h3 style={{ color: 'var(--color-text-white)' }} className="mb-3">HCRC Hospital</h3>
          <p style={{ color: 'var(--color-text-light)', fontSize: '0.9rem' }}>
            Compassionate Care. Advanced Medicine. Trusted Doctors.
          </p>
        </div>
        
        <div>
          <h4 style={{ color: 'var(--color-text-white)' }} className="mb-3">Quick Links</h4>
          <ul style={{ listStyle: 'none', padding: 0 }} className="flex flex-col gap-2">
            <li><Link style={{ color: 'var(--color-text-light)' }} to="/">Home</Link></li>
            <li><Link style={{ color: 'var(--color-text-light)' }} to="/about-us">About Us</Link></li>
            <li><Link style={{ color: 'var(--color-text-light)' }} to="/services">Services</Link></li>
            <li><Link style={{ color: 'var(--color-text-light)' }} to="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 style={{ color: 'var(--color-text-white)' }} className="mb-3">Specialities</h4>
          <ul style={{ listStyle: 'none', padding: 0 }} className="flex flex-col gap-2">
            <li><Link style={{ color: 'var(--color-text-light)' }} to="/specialities/ivf">IVF & Fertility</Link></li>
            <li><Link style={{ color: 'var(--color-text-light)' }} to="/specialities/pediatrics">Pediatrics</Link></li>
            <li><Link style={{ color: 'var(--color-text-light)' }} to="/specialities/orthopedics">Orthopedics</Link></li>
            <li><Link style={{ color: 'var(--color-text-light)' }} to="/specialities">View All</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 style={{ color: 'var(--color-text-white)' }} className="mb-3">Contact</h4>
          <ul style={{ listStyle: 'none', padding: 0, color: 'var(--color-text-light)', fontSize: '0.9rem' }} className="flex flex-col gap-2">
            <li>123 Hospital Ave, Medical City</li>
            <li>Emergency: (123) 456-7890</li>
            <li>Email: info@hcrchospital.com</li>
          </ul>
        </div>
      </div>
      
      <div className="container text-center" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', color: 'var(--color-text-light)', fontSize: '0.8rem' }}>
        <p>&copy; {new Date().getFullYear()} HCRC Hospital. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
