import React from 'react';
import { FiCheckSquare, FiAward, FiHeart, FiShield } from 'react-icons/fi';
import { motion } from 'framer-motion';
import '../../styles/about.css';

const AboutIntro = () => {
  const highlights = [
    { title: "Patient-Focused Care", icon: <FiHeart style={{ color: '#0B4F9F' }} /> },
    { title: "Coordinated Support", icon: <FiCheckSquare style={{ color: '#0B4F9F' }} /> },
    { title: "Clean Environment", icon: <FiShield style={{ color: '#0B4F9F' }} /> },
    { title: "Respectful Dialogue", icon: <FiAward style={{ color: '#0B4F9F' }} /> }
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'flex-start' }}>
          
          {/* Left Column: Who We Are copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
          >
            <h2 style={{ fontSize: '2rem', color: '#1F2937', fontWeight: 800, marginBottom: '0.5rem', fontFamily: 'var(--font-headings)' }}>
              Who We Are
            </h2>
            
            <p style={{ color: '#4B5563', lineHeight: 1.75, fontSize: '0.975rem' }}>
              HCRC Hospital is a healthcare institution focused on providing accessible, compassionate and reliable medical care for patients and families. Our goal is to support every patient with proper guidance, timely diagnosis, safe treatment and respectful communication throughout their healthcare journey.
            </p>
            
            <p style={{ color: '#4B5563', lineHeight: 1.75, fontSize: '0.975rem' }}>
              With a team-based approach, HCRC Hospital brings together doctors, nurses, technicians and support staff to deliver coordinated care across outpatient consultation, diagnostics, pharmacy, emergency support, inpatient wards, critical care and surgical services where available.
            </p>
            
            <p style={{ color: '#4B5563', lineHeight: 1.75, fontSize: '0.975rem' }}>
              Our hospital environment is designed to help patients feel supported, informed and cared for. From the reception desk to consultation rooms, diagnostic services and inpatient facilities, we aim to maintain professionalism, cleanliness, patient safety and a human touch in every interaction.
            </p>
            
            <p style={{ color: '#4B5563', lineHeight: 1.75, fontSize: '0.975rem' }}>
              HCRC Hospital continues to grow with a strong focus on quality healthcare, modern facilities, ethical practice and community trust. We believe good healthcare is not only about treatment, but also about listening, explaining, guiding and caring with responsibility.
            </p>
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
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
              {highlights.map((hl, index) => (
                <div 
                  key={index} 
                  style={{
                    backgroundColor: '#FFFFFF',
                    padding: '1.25rem',
                    borderRadius: '12px',
                    border: '1px solid rgba(11, 79, 159, 0.05)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
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
                    justifyContent: 'center'
                  }}>
                    {hl.icon}
                  </div>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#1F2937', lineHeight: 1.3 }}>
                    {hl.title}
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
