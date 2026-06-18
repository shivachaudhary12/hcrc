import React from 'react';
import { FiCheckSquare, FiAward, FiHeart, FiShield, FiTrendingUp } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { aboutMainCopy } from '../../data/aboutData';
import '../../styles/about.css';

const AboutIntro = () => {
  const highlightsIcons = [
    <FiHeart style={{ color: '#0B4F9F' }} />,
    <FiAward style={{ color: '#0B4F9F' }} />,
    <FiTrendingUp style={{ color: '#0B4F9F' }} />,
    <FiCheckSquare style={{ color: '#0B4F9F' }} />,
    <FiShield style={{ color: '#0B4F9F' }} />
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'flex-start' }}>
          
          {/* Left Column: Main copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
          >
            <span className="section-badge">
              <FiHeart size={14} style={{ marginRight: '4px' }} />
              Who We Are
            </span>
            
            <h2 style={{ fontSize: '2.25rem', color: '#1F2937', fontWeight: 800, marginBottom: '0.5rem', fontFamily: 'var(--font-headings)' }}>
              {aboutMainCopy.heading}
            </h2>
            
            {aboutMainCopy.paragraphs.map((para, index) => (
              <p key={index} style={{ color: '#4B5563', lineHeight: 1.75, fontSize: '0.975rem', margin: 0 }}>
                {para}
              </p>
            ))}
          </motion.div>

          {/* Right Column: Highlights Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              backgroundColor: '#F7F9FC',
              borderRadius: '20px',
              padding: '2.5rem',
              border: '1px solid var(--border-color)',
              boxShadow: 'var(--shadow-sm)',
              textAlign: 'left'
            }}
          >
            <h3 style={{ fontSize: '1.25rem', color: '#083B78', fontWeight: 700, marginBottom: '1.5rem', fontFamily: 'var(--font-headings)' }}>
              Our Care Highlights
            </h3>
            <p style={{ fontSize: '0.9rem', color: '#4B5563', lineHeight: 1.6, marginBottom: '2rem' }}>
              We follow rigorous hospital parameters to optimize patient wellness, clinical safety, and timely treatment execution.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {aboutMainCopy.highlights.map((hl, index) => (
                <div 
                  key={index} 
                  style={{
                    backgroundColor: '#FFFFFF',
                    padding: '1rem 1.25rem',
                    borderRadius: '12px',
                    border: '1px solid rgba(11, 79, 159, 0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
                  }}
                >
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(11, 79, 159, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    {highlightsIcons[index] || highlightsIcons[0]}
                  </div>
                  <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#1F2937', lineHeight: 1.3 }}>
                    {hl}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
