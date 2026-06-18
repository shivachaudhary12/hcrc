import React from 'react';
import { FiUsers } from 'react-icons/fi';
import { motion } from 'framer-motion';
import '../../styles/about.css';

const MedicalTeamPreview = () => {
  return (
    <section className="section-padding" style={{ backgroundColor: '#F8FAFC', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container text-center" style={{ maxWidth: '650px' }}>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <div style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            backgroundColor: 'rgba(11, 79, 159, 0.08)',
            color: '#0B4F9F',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1.5rem'
          }}>
            <FiUsers size={24} />
          </div>

          <h2 style={{ fontSize: '2rem', color: '#1F2937', fontWeight: 800, marginBottom: '1rem', fontFamily: 'var(--font-headings)' }}>
            Meet Our Medical Team
          </h2>
          <p style={{ color: '#4B5563', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '2rem' }}>
            Our doctors, nurses, technicians and support staff work together to provide coordinated and compassionate care.
          </p>

          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '12px',
            padding: '1.5rem 2.5rem',
            border: '1px solid var(--border-color)',
            boxShadow: 'var(--shadow-sm)',
            fontSize: '0.9rem',
            fontWeight: 600,
            color: 'var(--color-primary)'
          }}>
            Our medical team information will be updated soon after hospital approval.
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MedicalTeamPreview;
