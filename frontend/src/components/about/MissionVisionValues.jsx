import React from 'react';
import { FiTarget, FiEye, FiHeart } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { missionVisionValues } from '../../data/aboutData';
import '../../styles/about.css';

const MissionVisionValues = () => {
  const items = [
    {
      title: missionVisionValues.mission.title,
      text: missionVisionValues.mission.text,
      icon: <FiTarget size={24} />,
      color: 'rgba(11, 79, 159, 0.08)',
      iconColor: '#0B4F9F'
    },
    {
      title: missionVisionValues.vision.title,
      text: missionVisionValues.vision.text,
      icon: <FiEye size={24} />,
      color: 'rgba(11, 79, 159, 0.08)',
      iconColor: '#0B4F9F'
    },
    {
      title: missionVisionValues.carePromise.title,
      text: missionVisionValues.carePromise.text,
      icon: <FiHeart size={24} />,
      color: 'rgba(237, 32, 36, 0.08)',
      iconColor: '#ED2024'
    }
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: '#F5FAFF', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="card"
              style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', height: '100%', borderRadius: '20px', padding: '2.5rem' }}
            >
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '10px',
                backgroundColor: item.color,
                color: item.iconColor,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem'
              }}>
                {item.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', color: '#1F2937', fontWeight: 700, marginBottom: '0.75rem', fontFamily: 'var(--font-headings)' }}>
                {item.title}
              </h3>
              <p style={{ color: '#4B5563', fontSize: '0.925rem', lineHeight: 1.55 }}>
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVisionValues;
