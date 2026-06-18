import React from 'react';
import { FiLogIn, FiUser, FiLayers, FiClipboard, FiHome, FiHeart } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { patientJourney } from '../../data/aboutData';
import '../../styles/about.css';

const PatientJourney = () => {
  const stepsIcons = [
    <FiLogIn size={18} />,
    <FiUser size={18} />,
    <FiLayers size={18} />,
    <FiClipboard size={18} />,
    <FiHome size={18} />,
    <FiHeart size={18} />
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: '#F8FAFC', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container text-center">
        <h2 style={{ fontSize: '2rem', color: '#1F2937', fontWeight: 800, marginBottom: '1rem', fontFamily: 'var(--font-headings)' }}>
          Your Care Journey at HCRC Hospital
        </h2>
        <p style={{ color: '#4B5563', maxWidth: '600px', margin: '0 auto 3.5rem auto' }}>
          We guide you step-by-step through our clinical workflow to ensure comfort, accuracy, and timely healing.
        </p>

        {/* Timeline container */}
        <div className="journey-timeline">
          {patientJourney.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="journey-step"
            >
              {/* Step circle */}
              <div className="journey-num">
                {step.step}
              </div>

              {/* Step info */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontWeight: 700,
                  color: '#1F2937',
                  fontSize: '0.975rem',
                  fontFamily: 'var(--font-headings)',
                  marginTop: '0.5rem'
                }}>
                  <span style={{ color: '#0B4F9F', display: 'inline-flex', alignItems: 'center' }}>{stepsIcons[index]}</span>
                  <span>{step.title}</span>
                </div>
                <p style={{ fontSize: '0.825rem', color: '#4B5563', maxWidth: '170px', marginTop: '0.25rem', lineHeight: 1.45 }}>
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PatientJourney;
