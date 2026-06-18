import React from 'react';
import { motion } from 'framer-motion';
import { FiTrendingUp, FiCheckCircle, FiShield } from 'react-icons/fi';
import { ourJourney } from '../../data/aboutData';
import '../../styles/about.css';

const OurJourney = () => {
  return (
    <section className="section-padding" style={{ backgroundColor: '#F5FAFF', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          
          {/* Left Column: Journey copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
          >
            <span className="section-badge">
              <FiTrendingUp size={14} style={{ marginRight: '4px' }} />
              {ourJourney.heading}
            </span>
            
            <h2 style={{ fontSize: '2.25rem', color: '#1F2937', fontWeight: 800, marginBottom: '0.5rem', fontFamily: 'var(--font-headings)' }}>
              How We Moved Forward
            </h2>
            
            {ourJourney.paragraphs.map((p, idx) => (
              <p key={idx} style={{ color: '#4B5563', lineHeight: 1.75, fontSize: '0.975rem', margin: 0 }}>
                {p}
              </p>
            ))}
          </motion.div>

          {/* Right Column: Visual Trust Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card"
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '20px',
              padding: '2.5rem',
              border: '1px solid var(--border-color)',
              boxShadow: 'var(--shadow-lg)',
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Top decorative blue band */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '6px',
              backgroundColor: '#0B4F9F'
            }} />
            
            <h3 style={{ fontSize: '1.25rem', color: '#083B78', fontWeight: 700, margin: 0, fontFamily: 'var(--font-headings)' }}>
              Core Commitments
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(11, 79, 159, 0.08)',
                  color: '#0B4F9F',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <FiCheckCircle size={16} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#1F2937', margin: '0 0 0.25rem 0' }}>Patient-First Promise</h4>
                  <p style={{ fontSize: '0.85rem', color: '#4B5563', margin: 0, lineHeight: 1.4 }}>To listen, explain, and support with responsibility.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(11, 79, 159, 0.08)',
                  color: '#0B4F9F',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <FiShield size={16} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#1F2937', margin: '0 0 0.25rem 0' }}>Ethical Practice</h4>
                  <p style={{ fontSize: '0.85rem', color: '#4B5563', margin: 0, lineHeight: 1.4 }}>Ensuring transparent treatments and honest guidance.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(11, 79, 159, 0.08)',
                  color: '#0B4F9F',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <FiTrendingUp size={16} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#1F2937', margin: '0 0 0.25rem 0' }}>Coordinated Care</h4>
                  <p style={{ fontSize: '0.85rem', color: '#4B5563', margin: 0, lineHeight: 1.4 }}>Continuous optimization of consultation, diagnostics and treatment.</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default OurJourney;
