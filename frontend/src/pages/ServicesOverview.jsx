import React from 'react';
import { Link } from 'react-router-dom';
import { FiLayers, FiPlusCircle, FiAlertCircle, FiHeart, FiActivity, FiArrowRight, FiPhoneCall, FiCalendar } from 'react-icons/fi';
import { motion } from 'framer-motion';

const ServicesOverview = () => {
  const servicesList = [
    {
      title: 'Lab & Radiology',
      route: '/services/lab-radiology',
      icon: <FiLayers size={28} />,
      desc: 'Accurate diagnostic & imaging services using modern laboratory technology.',
      bullets: [
        'Routine & Special Blood Tests',
        'Digital X-Ray & Ultrasound',
        'Fast & Secure Online Reports',
        'Experienced Lab Technicians'
      ]
    },
    {
      title: 'Pharmacy',
      route: '/services/pharmacy',
      icon: <FiPlusCircle size={28} />,
      desc: 'Genuine medicines and professional prescription support available 24/7.',
      bullets: [
        '100% Genuine Medicines',
        'Prescription Verification',
        'Pharmacist Consultation',
        'Emergency Drug Availability'
      ]
    },
    {
      title: 'Emergency',
      route: '/services/emergency',
      icon: <FiAlertCircle size={28} />,
      desc: 'Immediate 24/7 life-saving emergency care for trauma and critical needs.',
      bullets: [
        '24/7 Emergency Response',
        'Accident & Trauma Care',
        'Cardiac & Stroke Management',
        'Emergency Ambulance Services'
      ],
      isEmergency: true
    },
    {
      title: 'Wards',
      route: '/services/wards',
      icon: <FiHeart size={28} />,
      desc: 'Comfortable, hygienic, and caring inpatient recovery spaces.',
      bullets: [
        'Deluxe & Private Cabins',
        '24/7 Dedicated Nursing Care',
        'Nutritional Meal Coordination',
        'Attendant Support Spaces'
      ]
    },
    {
      title: 'ICU / NICU / Modular OT',
      route: '/services/icu-nicu-modular-ot',
      icon: <FiActivity size={28} />,
      desc: 'Advanced critical care units and sterile operation theatres.',
      bullets: [
        'Ventilator & ICU Support',
        'Newborn Intensive Care (NICU)',
        'Infection-Controlled Modular OT',
        'Continuous Vital Monitoring'
      ]
    }
  ];

  return (
    <div style={{ backgroundColor: '#F5FAFF', minHeight: '100vh', fontFamily: 'var(--font-body)' }}>
      {/* Page Header */}
      <section style={{
        background: 'linear-gradient(135deg, #0B4F9F 0%, #083B78 100%)',
        color: '#FFFFFF',
        padding: '5rem 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', color: '#FFFFFF', fontFamily: 'var(--font-headings)' }}
          >
            Our Medical Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto', color: 'rgba(255, 255, 255, 0.9)', lineHeight: 1.6 }}
          >
            Comprehensive healthcare services designed to provide accurate diagnosis, trusted treatment, critical care, and comfortable patient support.
          </motion.p>
        </div>
      </section>

      {/* Services Cards Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-3 gap-6" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
            {servicesList.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  boxShadow: '0 4px 20px rgba(11, 79, 159, 0.05)',
                  padding: '2.25rem',
                  border: service.isEmergency ? '1px solid rgba(237, 32, 36, 0.2)' : '1px solid var(--border-color)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Emergency top subtle highlight */}
                {service.isEmergency && (
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '4px',
                    backgroundColor: 'var(--color-accent)'
                  }} />
                )}

                <div>
                  {/* Service Icon */}
                  <div style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '12px',
                    backgroundColor: service.isEmergency ? 'rgba(237, 32, 36, 0.1)' : 'rgba(11, 79, 159, 0.08)',
                    color: service.isEmergency ? 'var(--color-accent)' : '#0B4F9F',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem'
                  }}>
                    {service.icon}
                  </div>

                  {/* Service Title */}
                  <h3 style={{ fontSize: '1.35rem', color: '#1F2937', fontWeight: 700, marginBottom: '0.75rem', fontFamily: 'var(--font-headings)' }}>
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p style={{ color: '#4B5563', fontSize: '0.925rem', lineHeight: 1.5, marginBottom: '1.5rem' }}>
                    {service.desc}
                  </p>

                  {/* Bullet Points */}
                  <ul style={{ listStyleType: 'none', padding: 0, margin: '0 0 2rem 0' }}>
                    {service.bullets.map((bullet, idx) => (
                      <li key={idx} style={{ 
                        fontSize: '0.875rem', 
                        color: '#4B5563', 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '0.5rem', 
                        marginBottom: '0.5rem' 
                      }}>
                        <span style={{ 
                          width: '6px', 
                          height: '6px', 
                          borderRadius: '50%', 
                          backgroundColor: service.isEmergency ? 'var(--color-accent)' : '#0B4F9F', 
                          display: 'inline-block' 
                        }} />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Learn More Button */}
                <Link
                  to={service.route}
                  className="btn"
                  style={{
                    backgroundColor: service.isEmergency ? 'var(--color-accent)' : '#0B4F9F',
                    color: '#FFFFFF',
                    width: '100%',
                    borderRadius: '8px',
                    padding: '0.75rem 1rem',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    boxShadow: service.isEmergency ? '0 4px 12px rgba(237, 32, 36, 0.2)' : '0 4px 12px rgba(11, 79, 159, 0.2)'
                  }}
                >
                  <span>Learn More</span>
                  <FiArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* General Assistance Banner */}
      <section style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid var(--border-color)', padding: '5rem 0' }}>
        <div className="container text-center" style={{ maxWidth: '750px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#1F2937', marginBottom: '1rem', fontFamily: 'var(--font-headings)' }}>
            Need Medical Assistance?
          </h2>
          <p style={{ color: '#4B5563', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '2.5rem' }}>
            Our healthcare team is ready to support you with compassionate, safe, and reliable care. Reach out to book your clinical visit or contact our round-the-clock help desk.
          </p>
          <div className="flex gap-4 justify-center" style={{ display: 'flex', flexWrap: 'wrap' }}>
            <Link 
              to="/appointment" 
              className="btn btn-primary btn-round" 
              style={{ 
                padding: '0.9rem 2rem', 
                fontSize: '1rem',
                backgroundColor: '#0B4F9F',
                boxShadow: '0 4px 14px rgba(11, 79, 159, 0.3)'
              }}
            >
              <FiCalendar size={18} />
              <span>Book Appointment</span>
            </Link>
            <a 
              href="tel:18005550199" 
              className="btn btn-accent btn-round" 
              style={{ 
                padding: '0.9rem 2rem', 
                fontSize: '1rem',
                backgroundColor: 'var(--color-accent)',
                boxShadow: '0 4px 14px rgba(237, 32, 36, 0.3)'
              }}
            >
              <FiPhoneCall size={18} />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesOverview;
