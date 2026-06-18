import React from 'react';
import { FiHeart, FiShield, FiCheckSquare, FiUsers, FiAward, FiGlobe } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { coreValues } from '../../data/aboutData';
import '../../styles/about.css';

const CoreValues = () => {
  const valueIcons = [
    <FiHeart size={20} />,
    <FiShield size={20} />,
    <FiCheckSquare size={20} />,
    <FiUsers size={20} />,
    <FiAward size={20} />,
    <FiGlobe size={20} />
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container text-center">
        <h2 style={{ fontSize: '2rem', color: '#1F2937', fontWeight: 800, marginBottom: '1rem', fontFamily: 'var(--font-headings)' }}>
          Our Core Values
        </h2>
        <p style={{ color: '#4B5563', maxWidth: '600px', margin: '0 auto 3.5rem auto' }}>
          These fundamental values guide our medical decisions, daily actions, and patient interactions.
        </p>

        <div className="grid grid-cols-3 gap-6">
          {coreValues.map((val, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -5 }}
              className="card"
              style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', height: '100%', borderRadius: '20px', padding: '2.5rem' }}
            >
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '8px',
                backgroundColor: 'rgba(11, 79, 159, 0.08)',
                color: '#0B4F9F',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem'
              }}>
                {valueIcons[index]}
              </div>
              <h3 style={{ fontSize: '1.2rem', color: '#1F2937', fontWeight: 700, marginBottom: '0.5rem', fontFamily: 'var(--font-headings)' }}>
                {val.title}
              </h3>
              <p style={{ color: '#4B5563', fontSize: '0.875rem', lineHeight: 1.5 }}>
                {val.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
