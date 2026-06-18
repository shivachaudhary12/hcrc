import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp, FiHelpCircle } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { faqs } from '../../data/aboutData';
import '../../styles/about.css';

const AboutFAQ = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <section className="section-padding" style={{ backgroundColor: '#F8FAFC', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '3rem' }}>
          <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            backgroundColor: 'rgba(11, 79, 159, 0.08)',
            color: '#0B4F9F',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1rem'
          }}>
            <FiHelpCircle size={22} />
          </div>
          <h2 style={{ fontSize: '2rem', color: '#1F2937', fontWeight: 800, margin: 0, fontFamily: 'var(--font-headings)' }}>
            Frequently Asked Questions
          </h2>
          <p style={{ color: '#4B5563', fontSize: '0.95rem', marginTop: '0.5rem' }}>
            Find answers to common questions regarding HCRC Hospital services.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = activeFaq === index;
            return (
              <div 
                key={index} 
                className="faq-item"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                  style={{
                    width: '100%',
                    padding: '1.25rem 1.75rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    fontWeight: 600,
                    color: '#1F2937',
                    fontSize: '1.05rem',
                    fontFamily: 'var(--font-headings)'
                  }}
                  className="focus-ring"
                >
                  <span>{faq.q}</span>
                  {isOpen ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className="faq-content">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default AboutFAQ;
