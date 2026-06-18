import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { qualitySafety } from '../../data/aboutData';
import '../../styles/about.css';

const QualitySafety = () => {
  return (
    <section className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container text-center">
        <h2 style={{ fontSize: '2rem', color: '#1F2937', fontWeight: 800, marginBottom: '1.25rem', fontFamily: 'var(--font-headings)' }}>
          {qualitySafety.heading}
        </h2>
        <p style={{ color: '#4B5563', maxWidth: '650px', margin: '0 auto 3.5rem auto', lineHeight: 1.6 }}>
          {qualitySafety.paragraph}
        </p>

        <div className="grid grid-cols-4 gap-6" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
          {qualitySafety.cards.map((cardName, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              style={{
                backgroundColor: '#F7F9FC',
                borderRadius: '16px',
                padding: '2rem 1.5rem',
                border: '1px solid var(--border-color)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                color: '#10B981',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <FiCheckCircle size={20} />
              </div>
              <h3 style={{ fontSize: '1rem', color: '#1F2937', fontWeight: 700, lineHeight: 1.3 }}>
                {cardName}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualitySafety;
