import React, { useState, useEffect } from 'react';
import { FiActivity, FiPhoneCall, FiCheck, FiArrowRight, FiInfo, FiChevronDown, FiChevronUp, FiShield, FiHeart } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const IcuNicuOt = () => {
  // Set SEO metadata
  useEffect(() => {
    document.title = 'ICU, NICU & Modular OT | HCRC Hospital';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Advanced critical care, newborn intensive care and modern operation theatre support at HCRC Hospital.');
    }
  }, []);

  const [activeFaq, setActiveFaq] = useState(null);

  const icuServices = [
    'Sustained Ventilator & Life Support',
    'Continuous Patient Vital Monitoring',
    'On-Duty Critical Care Specialists',
    'Rapid Emergency Intubations',
    'Post-Operative Trauma Monitoring',
    'Rigid Infection Prevention Protocols'
  ];

  const nicuServices = [
    'Advanced Infant Incubator Support',
    'Precise Neonatal Oxygen Therapy',
    'Specialized Premature Baby Care',
    'Continuous Neonatal Vital Tracking',
    'Experienced Pediatrician Team',
    'Mother-Infant Bond Support Rooms'
  ];

  const otServices = [
    '100% Sterile Modular Infrastructure',
    'Advanced High-Precision Surgical Equipment',
    'Laparoscopic & Minimally Invasive Setups',
    '24/7 Prepared Emergency OT Teams',
    'Class-100 HEPA Air Filtration Systems',
    'Coordinated Pre/Post-Op Nursing Teams'
  ];

  const faqs = [
    {
      q: 'When does a patient need ICU care?',
      a: 'Patients require Intensive Care Unit (ICU) admission if they suffer from life-threatening conditions, require organ support (such as ventilators), or need continuous post-operative/post-trauma monitoring.'
    },
    {
      q: 'What is NICU used for?',
      a: 'The Neonatal Intensive Care Unit (NICU) is dedicated to the care of newborns who are born prematurely, have low birth weight, or suffer from medical complications requiring specialized incubator and respiratory support.'
    },
    {
      q: 'Is modular OT available for surgery?',
      a: 'Yes, HCRC Hospital features fully sterile Modular Operation Theatres (Modular OTs) equipped with HEPA air filtration and high-definition laparoscopic surgery units to minimize infection risks.'
    },
    {
      q: 'Do you provide ventilator support?',
      a: 'Yes, our ICU beds are equipped with modern mechanical ventilators and high-flow oxygen setups managed by critical care specialists.'
    },
    {
      q: 'How can I ask about ICU admission?',
      a: 'For emergency admissions, please call +1 (800) 555-0199 or report directly to our emergency triage desk. Our critical care coordinator manages bed transfers.'
    }
  ];

  return (
    <div style={{ backgroundColor: '#F7F9FC', minHeight: '100vh', fontFamily: 'var(--font-body)' }}>
      {/* Hero Banner */}
      <section style={{
        background: 'linear-gradient(135deg, #0B4F9F 0%, #083B78 100%)',
        color: '#FFFFFF',
        padding: '5rem 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container">
          <div style={{ maxWidth: '800px', textAlign: 'left' }}>
            <span style={{
              color: '#60A5FA',
              fontWeight: 700,
              fontSize: '0.85rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '0.5rem'
            }}>
              Critical Care & Surgical Center
            </span>
            <h1 style={{ fontSize: 'clamp(2.25rem, 4vw, 3.25rem)', fontWeight: 800, marginBottom: '1.25rem', color: '#FFFFFF', fontFamily: 'var(--font-headings)', lineHeight: 1.15 }}>
              Advanced Critical Care & Surgical Excellence
            </h1>
            <p style={{ fontSize: 'clamp(1rem, 1.2vw, 1.2rem)', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '2.5rem', lineHeight: 1.6 }}>
              Life-saving intensive care and modern surgical support with safety-focused clinical systems. Guided by top critical care specialists.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3" style={{ display: 'flex', flexWrap: 'wrap' }}>
              <Link to="/appointment" className="btn btn-primary btn-round" style={{ backgroundColor: '#FFFFFF', color: '#0B4F9F', boxShadow: 'var(--shadow-md)' }}>
                <span>Book Consultation</span>
              </Link>
              <button 
                onClick={() => alert('Checking bed availability... Please contact our ICU coordinator desk.')}
                className="btn btn-outline-white btn-round"
              >
                <span>ICU Admission Inquiry</span>
              </button>
              <a href="tel:18005550199" className="btn btn-round" style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)', color: '#FFFFFF', border: '1px solid rgba(255,255,255,0.25)' }}>
                <FiPhoneCall size={16} />
                <span>Call Critical Care Desk</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro section */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <h2 style={{ fontSize: '2rem', color: '#1F2937', fontWeight: 800, marginBottom: '1rem', textAlign: 'center', fontFamily: 'var(--font-headings)' }}>
            Overview of Critical Services
          </h2>
          <p style={{ color: '#4B5563', textAlign: 'center', maxWidth: '750px', margin: '0 auto 4rem auto', lineHeight: 1.6 }}>
            HCRC Hospital critical care and surgical facilities are planned to support patients who require close monitoring, intensive treatment, newborn care, or advanced surgical procedures.
          </p>

          <div className="grid grid-cols-3 gap-8" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            {/* ICU Block */}
            <div className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <h3 style={{ fontSize: '1.25rem', color: '#0B4F9F', fontWeight: 700, marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-headings)' }}>
                <FiActivity />
                <span>Intensive Care (ICU)</span>
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#4B5563', lineHeight: 1.5, marginBottom: '1.5rem' }}>
                Equipped for patients requiring active life support. Monitored continuously by a dedicated ICU nursing ratio of 1:1 or 1:2.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: 'auto' }}>
                {icuServices.map((srv, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#4B5563' }}>
                    <FiCheck style={{ color: '#10B981', flexShrink: 0 }} />
                    <span>{srv}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* NICU Block */}
            <div className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <h3 style={{ fontSize: '1.25rem', color: '#0B4F9F', fontWeight: 700, marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-headings)' }}>
                <FiHeart />
                <span>Newborn Care (NICU)</span>
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#4B5563', lineHeight: 1.5, marginBottom: '1.5rem' }}>
                Specialized intensive care for premature infants and critical newborns. Maintained in high sterile conditions.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: 'auto' }}>
                {nicuServices.map((srv, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#4B5563' }}>
                    <FiCheck style={{ color: '#10B981', flexShrink: 0 }} />
                    <span>{srv}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modular OT Block */}
            <div className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <h3 style={{ fontSize: '1.25rem', color: '#0B4F9F', fontWeight: 700, marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-headings)' }}>
                <FiShield />
                <span>Modular OT (Operation Theatre)</span>
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#4B5563', lineHeight: 1.5, marginBottom: '1.5rem' }}>
                Ultra-sterile surgical rooms built with anti-bacterial panels and laminar airflow systems to eliminate airborne contaminants.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: 'auto' }}>
                {otServices.map((srv, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#4B5563' }}>
                    <FiCheck style={{ color: '#10B981', flexShrink: 0 }} />
                    <span>{srv}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infection Control Section */}
      <section style={{ backgroundColor: '#F5FAFF', padding: '5rem 0', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div className="grid grid-cols-2 gap-8 items-center" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
            <div>
              <h2 style={{ fontSize: '2rem', color: '#1F2937', fontWeight: 800, marginBottom: '1rem', fontFamily: 'var(--font-headings)' }}>
                Sterility & Infection Control
              </h2>
              <p style={{ color: '#4B5563', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                We prioritize infection control by incorporating state-of-the-art HVAC systems and air-filtering HEPA barriers inside ICU and OT wards. Sanitization audits are done after every procedure to guarantee maximum client safety.
              </p>
              <ul style={{ paddingLeft: '1.25rem', color: '#4B5563', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.925rem' }}>
                <li>Continuous Positive Air Pressure to prevent external air drafts inside modular suites.</li>
                <li>Biochemical autoclave systems for sterilizing surgical kits.</li>
                <li>Restricted visitor entry protocols inside ICU corridors to minimize pathogen exposure.</li>
              </ul>
            </div>
            <div style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '20px',
              padding: '2.5rem',
              border: '1px solid var(--border-color)',
              boxShadow: 'var(--shadow-sm)',
              textAlign: 'center'
            }}>
              <FiShield size={44} style={{ color: '#0B4F9F', marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.25rem', color: '#1F2937', fontWeight: 700, marginBottom: '0.75rem', fontFamily: 'var(--font-headings)' }}>
                Zero Tolerance Infection Policy
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#4B5563', lineHeight: 1.6 }}>
                Following international healthcare parameters (NABH / JCI aligned), our surgical units maintain clinical sterility logs to ensure a near-zero post-surgical infection rate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid var(--border-color)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: '2rem', color: '#1F2937', fontWeight: 800, marginBottom: '2rem', textAlign: 'center', fontFamily: 'var(--font-headings)' }}>
            Frequently Asked Questions
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div 
                  key={index} 
                  style={{ 
                    border: '1px solid var(--border-color)', 
                    borderRadius: '8px',
                    overflow: 'hidden',
                    backgroundColor: '#F7F9FC'
                  }}
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    style={{
                      width: '100%',
                      padding: '1.25rem 1.5rem',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                      fontWeight: 600,
                      color: '#1F2937',
                      fontSize: '1rem'
                    }}
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
                  </button>
                  {isOpen && (
                    <div style={{ 
                      padding: '1.25rem 1.5rem', 
                      backgroundColor: '#FFFFFF', 
                      borderTop: '1px solid var(--border-color)',
                      color: '#4B5563',
                      fontSize: '0.925rem',
                      lineHeight: 1.6
                    }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA Block */}
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, #0B4F9F 0%, #083B78 100%)', color: '#FFFFFF', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '650px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem', color: '#FFFFFF', fontFamily: 'var(--font-headings)' }}>
            Dedicated Surgical Consultation
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '2rem', fontSize: '1.05rem', lineHeight: 1.5 }}>
            To consult a senior surgeon regarding planned laparoscopic, cardiac, or general surgery operations, book your visit.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/appointment" className="btn btn-round" style={{ backgroundColor: '#FFFFFF', color: '#0B4F9F', padding: '0.8rem 2rem' }}>
              Book Appointment
            </Link>
            <a href="tel:18005550199" className="btn btn-outline-white btn-round" style={{ padding: '0.8rem 2rem' }}>
              Call ICU Desk
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IcuNicuOt;
