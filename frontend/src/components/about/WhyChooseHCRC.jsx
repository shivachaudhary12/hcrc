import React from 'react';
import { FiHeart, FiUsers, FiLayers, FiActivity, FiShield, FiCheckSquare } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { whyChooseHCRC } from '../../data/aboutData';
import '../../styles/about.css';

const WhyChooseHCRC = () => {
  const chooseIcons = [
    <FiCheckSquare size={20} />,
    <FiUsers size={20} />,
    <FiLayers size={20} />,
    <FiActivity size={20} />,
    <FiShield size={20} />,
    <FiHeart size={20} />
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: '#F8FAFC', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container text-center">
        <h2 style={{ fontSize: '2rem', color: '#1F2937', fontWeight: 800, marginBottom: '1rem', fontFamily: 'var(--font-headings)' }}>
          Why Choose HCRC Hospital
        </h2>
        <p style={{ color: '#4B5563', maxWidth: '650px', margin: '0 auto 3.5rem auto' }}>
          We focus on clear communication, coordinated care and a safe hospital environment to support patients and families through every step of their healthcare journey.
        </p>

        <div className="grid grid-cols-3 gap-6">
          {whyChooseHCRC.map((card, index) => (
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
                {chooseIcons[index]}
              </div>
              <h3 style={{ fontSize: '1.2rem', color: '#1F2937', fontWeight: 700, marginBottom: '0.5rem', fontFamily: 'var(--font-headings)' }}>
                {card.title}
              </h3>
              <p style={{ color: '#4B5563', fontSize: '0.875rem', lineHeight: 1.5 }}>
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseHCRC;
