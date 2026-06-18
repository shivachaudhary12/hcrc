import React from 'react';
import { Link } from 'react-router-dom';
import { FiCheck, FiArrowRight, FiCalendar, FiHeart } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { aboutPreview } from '../../data/aboutData';
import '../../styles/about.css';

const AboutPreview = () => {
  return (
    <section className="about-preview">
      <div className="about-container">
        <div className="about-grid">
          
          {/* Left Column: Image Wrap with Floating Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="about-image-wrap"
          >
            <div style={{ position: 'relative', overflow: 'visible' }}>
              <img 
                src="/patient-care-environment.png" 
                alt="HCRC Hospital patient care environment" 
                style={{
                  width: '100%',
                  height: '460px',
                  objectFit: 'cover',
                  borderRadius: '20px',
                  boxShadow: 'var(--shadow-lg)'
                }}
              />
              <div className="about-floating-card" style={{
                position: 'absolute',
                bottom: '-20px',
                right: '-20px',
                backgroundColor: '#FFFFFF',
                padding: '1.25rem 2rem',
                borderRadius: '16px',
                boxShadow: '0 10px 30px rgba(11, 79, 159, 0.12)',
                borderLeft: '5px solid #0B4F9F',
                display: 'flex',
                flexDirection: 'column',
                zIndex: 10,
                textAlign: 'left'
              }}>
                <span style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: '#4B5563', letterSpacing: '0.05em', fontWeight: 600 }}>Patient-first care</span>
                <strong style={{ fontSize: '1.1rem', color: '#083B78', fontWeight: 700, marginTop: '0.25rem', fontFamily: 'var(--font-headings)' }}>Trusted Medical Support</strong>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Copy Content & Trust Points */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="about-content"
          >
            <span className="section-badge">
              <FiHeart size={14} style={{ marginRight: '4px' }} />
              {aboutPreview.badge}
            </span>
            
            <h2>{aboutPreview.heading}</h2>
            
            <p className="about-subheading">
              {aboutPreview.subheading}
            </p>
            
            <p style={{ marginBottom: '1rem', color: '#4B5563', lineHeight: 1.7 }}>
              {aboutPreview.paragraph}
            </p>

            <p style={{ marginBottom: '1.5rem', color: '#4B5563', lineHeight: 1.7 }}>
              {aboutPreview.journey}
            </p>

            <div className="about-points">
              {aboutPreview.trustPoints.map((point, index) => (
                <div key={index} className="about-point-item">
                  <div className="about-point-icon">
                    <FiCheck size={14} style={{ strokeWidth: 3 }} />
                  </div>
                  <span className="about-point-text">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            <div className="about-actions">
              <Link to="/about-us" className="btn btn-primary btn-round focus-ring" style={{ backgroundColor: '#0B4F9F', color: '#FFFFFF', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                <span>{aboutPreview.primaryCTA}</span>
                <FiArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn btn-outline-accent btn-round focus-ring" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                <FiCalendar size={16} />
                <span>{aboutPreview.secondaryCTA}</span>
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
