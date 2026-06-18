import React from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiArrowRight, FiShield, FiUsers, FiAward, FiPhoneCall } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Home = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const imageVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 20,
        delay: 0.3,
      },
    },
  };

  const stats = [
    { icon: <FiAward size={20} />, title: 'Clinical Excellence', desc: 'Top-tier medical safety' },
    { icon: <FiUsers size={20} />, title: '500+ Specialists', desc: 'Experienced doctors' },
    { icon: <FiShield size={20} />, title: '99% Success Rate', desc: 'Dedicated patient care' },
  ];

  const specialities = [
    { title: 'Cardiology', desc: 'Heart care, angioplasty, and bypass surgeries.', code: 'CARD' },
    { title: 'Neurology', desc: 'Expert treatment for brain, spine, and nerve disorders.', code: 'NEUR' },
    { title: 'Orthopedics', desc: 'Advanced bone, joint, and joint replacement services.', code: 'ORTH' },
    { title: 'Pediatrics', desc: 'Compassionate medical care for infants and children.', code: 'PEDI' },
    { title: 'Gynecology', desc: 'Comprehensive women\'s health and maternity support.', code: 'GYNE' },
    { title: 'Oncology', desc: 'Advanced cancer screening, chemotherapy, and surgery.', code: 'ONCO' },
  ];

  return (
    <div style={{ overflowX: 'hidden' }}>
      {/* Hero Section */}
      <section 
        style={{
          background: 'linear-gradient(135deg, #2B3990 0%, #1E5CB3 100%)',
          color: 'var(--color-bg-white)',
          position: 'relative',
          padding: '6rem 0 8rem 0',
          overflow: 'hidden'
        }}
      >
        {/* Soft Background Decorative Bubbles */}
        <div style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 70%)',
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-20%',
          left: '-10%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 70%)',
          pointerEvents: 'none'
        }} />

        <div className="container">
          <div className="grid grid-cols-2 gap-8 items-center">
            {/* Left Content Column */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col text-left"
            >
              {/* Welcome Badge */}
              <motion.div 
                variants={itemVariants}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  alignSelf: 'flex-start',
                  gap: '0.5rem',
                  padding: '0.4rem 1rem',
                  borderRadius: '30px',
                  background: 'rgba(255, 255, 255, 0.12)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  color: 'rgba(255, 255, 255, 0.95)',
                  marginBottom: '1.5rem',
                  backdropFilter: 'blur(4px)'
                }}
              >
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10B981', display: 'inline-block' }}></span>
                <span>World-Class Healthcare Excellence</span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1 
                variants={itemVariants}
                style={{
                  color: 'var(--color-bg-white)',
                  fontSize: 'clamp(2.5rem, 4.5vw, 3.75rem)',
                  fontWeight: 800,
                  lineHeight: 1.15,
                  letterSpacing: '-0.02em',
                  marginBottom: '1.25rem',
                  fontFamily: 'var(--font-headings)'
                }}
              >
                Compassionate Care.<br />
                <span style={{ color: '#60A5FA' }}>Advanced Medicine.</span>
              </motion.h1>

              {/* Tagline */}
              <motion.p 
                variants={itemVariants}
                style={{
                  fontSize: 'clamp(1rem, 1.25vw, 1.15rem)',
                  color: 'rgba(255, 255, 255, 0.85)',
                  lineHeight: 1.6,
                  marginBottom: '2.5rem',
                  maxWidth: '540px'
                }}
              >
                At HCRC Hospital, we combine cutting-edge medical technologies with highly skilled, caring specialists to prioritize your health and well-being.
              </motion.p>

              {/* CTAs */}
              <motion.div 
                variants={itemVariants}
                className="flex flex-wrap gap-4"
                style={{ marginBottom: '3.5rem' }}
              >
                <Link to="/appointment" className="btn btn-accent btn-round" style={{ padding: '0.9rem 2rem', fontSize: '1rem' }}>
                  <FiCalendar size={18} />
                  <span>Book Appointment</span>
                </Link>
                <Link to="/contact" className="btn btn-outline-white btn-round" style={{ padding: '0.9rem 2rem', fontSize: '1rem' }}>
                  <span>Contact Us</span>
                  <FiArrowRight size={18} />
                </Link>
              </motion.div>

              {/* Stats badges */}
              <motion.div 
                variants={itemVariants}
                className="grid grid-cols-3 gap-4"
                style={{ 
                  borderTop: '1px solid rgba(255, 255, 255, 0.15)',
                  paddingTop: '2rem'
                }}
              >
                {stats.map((stat, idx) => (
                  <div key={idx} className="flex flex-col text-left">
                    <div style={{ color: '#60A5FA', marginBottom: '0.25rem' }}>{stat.icon}</div>
                    <span style={{ fontSize: '0.95rem', fontWeight: 700, color: '#FFFFFF' }}>{stat.title}</span>
                    <span style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.65)' }}>{stat.desc}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Image Column */}
            <motion.div 
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}
            >
              {/* Main Image Container */}
              <div style={{
                position: 'relative',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.5)',
                border: '6px solid rgba(255, 255, 255, 0.1)',
                width: '100%',
                maxWidth: '480px',
                aspectRatio: '1',
              }}>
                <img 
                  src="/hero-doctors.png" 
                  alt="HCRC Hospital Professional Healthcare Specialists" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                
                {/* Soft blue overlay gradient to match backgrounds */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(43, 57, 144, 0.3) 0%, rgba(43, 57, 144, 0) 50%)',
                  pointerEvents: 'none'
                }} />
              </div>

              {/* Floating Glass Badges */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
                className="glass-card"
                style={{
                  position: 'absolute',
                  top: '15%',
                  left: '-5%',
                  borderRadius: '16px',
                  padding: '0.75rem 1.2rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  color: 'var(--color-text-primary)'
                }}
              >
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: '#FEF08A',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#CA8A04'
                }}>
                  ★
                </div>
                <div className="flex flex-col text-left">
                  <span style={{ fontSize: '0.85rem', fontWeight: 800 }}>4.9/5 Rating</span>
                  <span style={{ fontSize: '0.65rem', color: 'var(--color-text-secondary)' }}>Trusted Patient Reviews</span>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut', delay: 0.5 }}
                className="glass-card"
                style={{
                  position: 'absolute',
                  bottom: '10%',
                  right: '-5%',
                  borderRadius: '16px',
                  padding: '0.8rem 1.4rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  color: 'var(--color-text-primary)'
                }}
              >
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(43, 57, 144, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-primary)'
                }} className="flex justify-center items-center">
                  <FiPhoneCall size={16} />
                </div>
                <div className="flex flex-col text-left">
                  <span style={{ fontSize: '0.85rem', fontWeight: 800 }}>Emergency Call</span>
                  <span style={{ fontSize: '0.65rem', color: 'var(--color-accent)', fontWeight: 'bold' }}>24/7 Response Unit</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specialities Preview Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-white)' }}>
        <div className="container text-center">
          <div style={{ maxWidth: '600px', margin: '0 auto 4rem auto' }}>
            <span style={{
              color: 'var(--color-secondary)',
              fontWeight: 700,
              fontSize: '0.9rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '0.5rem'
            }}>
              Our Specialities
            </span>
            <h2 style={{ fontSize: '2.25rem', color: 'var(--color-text-primary)', fontWeight: 800 }}>
              Specialized Medical Care
            </h2>
            <p style={{ color: 'var(--color-text-secondary)', marginTop: '0.5rem' }}>
              We offer comprehensive patient-centered medical programs equipped with world-class facilities and expert departments.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {specialities.map((spec, index) => (
              <div key={index} className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(43, 57, 144, 0.08)',
                  color: 'var(--color-primary)',
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                  letterSpacing: '0.05em'
                }}>
                  {spec.code}
                </div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--color-text-primary)', fontWeight: 700, marginBottom: '0.75rem' }}>
                  {spec.title}
                </h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', flexGrow: 1, marginBottom: '1.5rem', lineHeight: 1.5 }}>
                  {spec.desc}
                </p>
                <Link to="/specialities" style={{ fontSize: '0.85rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--color-primary)' }} className="learn-more-link">
                  <span>Learn More</span>
                  <FiArrowRight size={14} className="arrow-icon" style={{ transition: 'transform var(--transition-fast)' }} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .learn-more-link:hover .arrow-icon {
          transform: translateX(3px);
        }
        @media (max-width: 900px) {
          section {
            padding: 4rem 0 5rem 0 !important;
          }
          .grid-cols-2 {
            grid-template-columns: repeat(1, minmax(0, 1fr)) !important;
            gap: 4rem !important;
          }
          .text-left {
            text-align: center !important;
          }
          .flex-col {
            align-items: center !important;
          }
          .flex-wrap {
            justify-content: center !important;
          }
          .grid-cols-3 {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }
        @media (max-width: 600px) {
          .grid-cols-3 {
            grid-template-columns: repeat(1, minmax(0, 1fr)) !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
