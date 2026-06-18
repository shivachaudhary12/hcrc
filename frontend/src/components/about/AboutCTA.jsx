import React from 'react';
import { Link } from 'react-router-dom';
import { FiCalendar, FiArrowRight, FiPhoneCall } from 'react-icons/fi';
import { motion } from 'framer-motion';
import '../../styles/about.css';

const AboutCTA = () => {
  return (
    <section className="section-padding" style={{ background: 'linear-gradient(135deg, #083B78 0%, #0B4F9F 100%)', color: '#FFFFFF', textAlign: 'center' }}>
      <div className="container" style={{ maxWidth: '750px' }}>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.25rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem', fontFamily: 'var(--font-headings)' }}>
            Need Medical Assistance?
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '2.5rem' }}>
            Our healthcare team is ready to support you with safe, reliable and compassionate care.
          </p>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', width: '100%' }}>
            <Link 
              to="/contact" 
              className="btn btn-primary btn-round focus-ring" 
              style={{ 
                backgroundColor: '#FFFFFF',
                color: '#0B4F9F',
                padding: '0.9rem 2rem', 
                fontSize: '1rem',
                boxShadow: '0 4px 14px rgba(255, 255, 255, 0.15)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <FiCalendar size={18} />
              <span>Book Appointment</span>
            </Link>
            <Link 
              to="/services" 
              className="btn btn-outline-white btn-round focus-ring" 
              style={{ 
                padding: '0.9rem 2rem', 
                fontSize: '1rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <span>View Services</span>
              <FiArrowRight size={18} />
            </Link>
            <Link 
              to="/contact" 
              className="btn btn-round focus-ring" 
              style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                color: '#FFFFFF', 
                border: '1px solid rgba(255, 255, 255, 0.2)',
                padding: '0.9rem 2rem', 
                fontSize: '1rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <FiPhoneCall size={18} />
              <span>Contact Hospital</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCTA;
