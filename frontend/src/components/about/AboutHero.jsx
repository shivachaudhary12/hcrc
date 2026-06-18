import React from 'react';
import { Link } from 'react-router-dom';
import { FiCalendar, FiArrowRight, FiInfo, FiActivity } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { aboutHero } from '../../data/aboutData';
import '../../styles/about.css';

const AboutHero = () => {
  return (
    <section className="about-hero">
      <div className="container">
        <div className="about-hero-grid">
          
          {/* Left Column: Hero Copy */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="about-hero-content"
          >
            <div className="about-badge about-badge-light">
              <FiActivity size={14} />
              <span>{aboutHero.badge}</span>
            </div>
            
            <h1>{aboutHero.heading}</h1>
            
            <p className="about-hero-sub">
              {aboutHero.subheading}
            </p>

            <div className="flex flex-wrap gap-3" style={{ display: 'flex', flexWrap: 'wrap' }}>
              <Link to="/appointment" className="btn btn-primary btn-round focus-ring" style={{ backgroundColor: '#FFFFFF', color: '#0B4F9F', boxShadow: 'var(--shadow-md)' }}>
                <FiCalendar size={16} />
                <span>{aboutHero.primaryCTA}</span>
              </Link>
              <Link to="/services" className="btn btn-outline-white btn-round focus-ring">
                <span>{aboutHero.secondaryCTA}</span>
                <FiArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn btn-round focus-ring" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#FFFFFF', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
                <FiInfo size={16} />
                <span>{aboutHero.tertiaryCTA}</span>
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}
            className="hide-md"
          >
            <div style={{
              width: '100%',
              maxWidth: '380px',
              aspectRatio: '1',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
              border: '4px solid rgba(255, 255, 255, 0.15)',
              position: 'relative'
            }}>
              <img 
                src="/hero-doctors.png" 
                alt="HCRC Hospital Clinical Excellence Team" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(8, 59, 120, 0.4) 0%, rgba(8, 59, 120, 0) 50%)',
                pointerEvents: 'none'
              }} />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutHero;
