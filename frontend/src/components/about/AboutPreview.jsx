import React from 'react';
import { Link } from 'react-router-dom';
import { FiCheck, FiArrowRight, FiCalendar, FiHeart } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { aboutPreview } from '../../data/aboutData';
import '../../styles/about.css';

const AboutPreview = () => {
  return (
    <section className="section-padding" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid var(--border-color)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          
          {/* Left Column: Copy Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col text-left"
          >
            <div className="about-badge">
              <FiHeart size={14} style={{ color: '#0B4F9F' }} />
              <span>{aboutPreview.badge}</span>
            </div>
            
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.5rem)', color: '#1F2937', fontWeight: 800, marginBottom: '1.25rem', fontFamily: 'var(--font-headings)' }}>
              {aboutPreview.heading}
            </h2>
            
            <p className="font-semibold" style={{ color: '#0B4F9F', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '1rem' }}>
              {aboutPreview.subheading}
            </p>
            
            <p style={{ color: '#4B5563', lineHeight: 1.7, marginBottom: '2rem' }}>
              {aboutPreview.paragraph}
            </p>

            <div className="flex flex-wrap gap-4" style={{ display: 'flex', flexWrap: 'wrap' }}>
              <Link to="/about-us" className="btn btn-primary btn-round focus-ring" style={{ backgroundColor: '#0B4F9F' }}>
                <span>{aboutPreview.primaryCTA}</span>
                <FiArrowRight size={16} />
              </Link>
              <Link to="/appointment" className="btn btn-outline-accent btn-round focus-ring">
                <FiCalendar size={16} />
                <span>{aboutPreview.secondaryCTA}</span>
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Trust Card & Points */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              backgroundColor: '#F5FAFF',
              borderRadius: '20px',
              padding: '2.5rem',
              border: '1px solid rgba(11, 79, 159, 0.08)',
              boxShadow: 'var(--shadow-md)'
            }}
          >
            <h3 style={{ fontSize: '1.25rem', color: '#083B78', fontWeight: 700, marginBottom: '1.5rem', fontFamily: 'var(--font-headings)' }}>
              Why Patients Trust Us
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left' }}>
              {aboutPreview.trustPoints.map((point, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <div style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    color: '#10B981',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px'
                  }}>
                    <FiCheck size={14} style={{ strokeWidth: 3 }} />
                  </div>
                  <span style={{ color: '#4B5563', fontSize: '0.95rem', fontWeight: 500, lineHeight: 1.4 }}>
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* Optional Stats placeholders (Condition check safe) */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              marginTop: '2.5rem', 
              borderTop: '1px solid rgba(11, 79, 159, 0.1)',
              paddingTop: '1.5rem'
            }}>
              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0B4F9F' }}>10+</div>
                <div style={{ fontSize: '0.75rem', color: '#4B5563', fontWeight: 600 }}>Departments</div>
              </div>
              <div style={{ width: '1px', backgroundColor: 'rgba(11, 79, 159, 0.1)' }}></div>
              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0B4F9F' }}>50+</div>
                <div style={{ fontSize: '0.75rem', color: '#4B5563', fontWeight: 600 }}>Clinicians</div>
              </div>
              <div style={{ width: '1px', backgroundColor: 'rgba(11, 79, 159, 0.1)' }}></div>
              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ED2024' }}>24/7</div>
                <div style={{ fontSize: '0.75rem', color: '#4B5563', fontWeight: 600 }}>Emergency Care</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
