import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiActivity, FiPlusCircle, FiAlertTriangle, FiHome, FiShield } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { facilitiesSnapshot } from '../../data/aboutData';
import '../../styles/about.css';

const FacilitiesSnapshot = () => {
  const facilityIcons = [
    <FiActivity size={18} />,
    <FiPlusCircle size={18} />,
    <FiAlertTriangle size={18} />,
    <FiHome size={18} />,
    <FiShield size={18} />
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container text-center">
        <h2 style={{ fontSize: '2rem', color: '#1F2937', fontWeight: 800, marginBottom: '1rem', fontFamily: 'var(--font-headings)' }}>
          Facilities and Services at a Glance
        </h2>
        <p style={{ color: '#4B5563', maxWidth: '600px', margin: '0 auto 3.5rem auto' }}>
          HCRC Hospital brings together essential healthcare services to support diagnosis, treatment, recovery and patient care.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
          {facilitiesSnapshot.map((fc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -5 }}
              className="card"
              style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', borderRadius: '20px', padding: '2rem' }}
            >
              <div>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '6px',
                  backgroundColor: 'rgba(11, 79, 159, 0.08)',
                  color: '#0B4F9F',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }}>
                  {facilityIcons[index] || <FiActivity size={18} />}
                </div>
                <h3 style={{ fontSize: '1.15rem', color: '#1F2937', fontWeight: 700, marginBottom: '0.5rem', fontFamily: 'var(--font-headings)' }}>
                  {fc.title}
                </h3>
                <p style={{ color: '#4B5563', fontSize: '0.875rem', lineHeight: 1.5, marginBottom: '1.5rem' }}>
                  {fc.desc}
                </p>
              </div>
              
              <Link 
                to={fc.route} 
                style={{ 
                  fontSize: '0.85rem', 
                  fontWeight: 700, 
                  color: '#0B4F9F', 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '0.25rem',
                  alignSelf: 'flex-start',
                  marginTop: 'auto'
                }}
                className="learn-more-link focus-ring"
              >
                <span>Learn More</span>
                <FiArrowRight size={14} className="arrow-icon" style={{ transition: 'transform var(--transition-fast)' }} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSnapshot;
