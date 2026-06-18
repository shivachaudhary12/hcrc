import React from 'react';
import { FiShield, FiCheckSquare, FiGlobe } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { careApproach } from '../../data/aboutData';
import '../../styles/about.css';

const CareApproach = () => {
  const icons = [
    <FiShield size={20} />,
    <FiCheckSquare size={20} />,
    <FiGlobe size={20} />
  ];

  const subsections = [
    careApproach.safety,
    careApproach.quality,
    careApproach.community
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          
          {/* Left Column: Heading and Intro copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ textAlign: 'left' }}
          >
            <h2 style={{ fontSize: '2rem', color: '#1F2937', fontWeight: 800, marginBottom: '1.25rem', fontFamily: 'var(--font-headings)' }}>
              {careApproach.heading}
            </h2>
            <p style={{ color: '#4B5563', lineHeight: 1.75, fontSize: '1.025rem' }}>
              {careApproach.intro}
            </p>
          </motion.div>

          {/* Right Column: 3 Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
          >
            {subsections.map((sub, index) => (
              <div 
                key={index} 
                className="card"
                style={{ 
                  padding: '1.5rem', 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  gap: '1rem',
                  textAlign: 'left',
                  borderRadius: '20px'
                }}
              >
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '6px',
                  backgroundColor: 'rgba(11, 79, 159, 0.08)',
                  color: '#0B4F9F',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  {icons[index]}
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', color: '#1F2937', fontWeight: 700, marginBottom: '0.25rem', fontFamily: 'var(--font-headings)' }}>
                    {sub.title}
                  </h4>
                  <p style={{ color: '#4B5563', fontSize: '0.875rem', lineHeight: 1.5 }}>
                    {sub.text}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CareApproach;
