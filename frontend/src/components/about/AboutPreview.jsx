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
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="about-image-wrap"
          >
            <img 
              src="/patient-care-environment.png" 
              alt="HCRC Hospital patient care environment" 
            />
            <div className="about-floating-card">
              <span>Patient-first care</span>
              <strong>Trusted Medical Support</strong>
            </div>
          </motion.div>

          {/* Right Column: Copy Content & Trust Points */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
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
            
            <p style={{ marginBottom: '1rem' }}>
              {aboutPreview.paragraph1}
            </p>

            <p style={{ marginBottom: '1.5rem' }}>
              {aboutPreview.paragraph2}
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
              <Link to="/about-us" className="btn btn-primary btn-round focus-ring" style={{ backgroundColor: '#0B4F9F', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                <span>{aboutPreview.primaryCTA}</span>
                <FiArrowRight size={16} />
              </Link>
              <Link to="/appointment" className="btn btn-outline-accent btn-round focus-ring" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
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
