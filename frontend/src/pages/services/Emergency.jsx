import React, { useState, useEffect } from 'react';
import { FiPhoneCall, FiAlertCircle, FiCheck, FiArrowRight, FiInfo, FiChevronDown, FiChevronUp, FiNavigation, FiClock } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Emergency = () => {
  // Set SEO metadata
  useEffect(() => {
    document.title = '24/7 Emergency Care | HCRC Hospital';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Immediate emergency care for accidents, trauma, cardiac emergencies, stroke and urgent medical needs.');
    }
  }, []);

  const [activeFaq, setActiveFaq] = useState(null);

  const emergencyCases = [
    { title: 'Accident & Trauma', desc: 'Comprehensive stabilization, stitches, bone fracture alignment, and emergency surgery.' },
    { title: 'Cardiac Emergency', desc: 'Immediate cardiac assessment, ECG analysis, and stabilizing medication for heart attacks.' },
    { title: 'Stroke Management', desc: 'Critical neurological interventions during the golden hours of brain strokes.' },
    { title: 'Breathing Difficulty', desc: 'Oxygen inhalation therapy, nebulization, and urgent ventilator setups.' },
    { title: 'Poisoning Cases', desc: 'Immediate gastric lavage, poison neutralizers, and intensive toxicology support.' },
    { title: 'Maternal Emergency', desc: 'Specialized urgent labor care and immediate obstetrics assessment.' }
  ];

  const facilities = [
    '24/7 Specialized Trauma Care Team',
    'Dedicated Trauma/Surgical ICU Beds',
    'Instant Ventilator & Life Support Setups',
    'State-of-the-Art Emergency Operation Theatre',
    'Advanced Cardiac Monitor Equipment',
    'Ambulance Fleet Equipped with Oxygen & Vitals Care'
  ];

  const timelineSteps = [
    { number: '1', title: 'Patient Arrival', desc: 'Rapid patient intake at the emergency bay by our triage nurses.' },
    { number: '2', title: 'Triage Assessment', desc: 'Immediate evaluation of vitals to categorize condition urgency.' },
    { number: '3', title: 'Immediate Treatment', desc: 'Stabilizing care delivered by emergency physicians and nurses.' },
    { number: '4', title: 'Diagnostics (If needed)', desc: 'Fast-track laboratory samples and X-rays processed on high priority.' },
    { number: '5', title: 'ICU / Admission', desc: 'Transfer to intensive care units or wards for sustained recovery.' }
  ];

  const faqs = [
    {
      q: 'What should I do during a medical emergency?',
      a: 'Remain calm. Immediately call our emergency response number at 1-800-555-0199 or seek immediate transport to the HCRC Hospital emergency wing. Avoid administering unprescribed medication.'
    },
    {
      q: 'Is emergency care available 24/7?',
      a: 'Yes. HCRC Hospital emergency unit operates 24 hours a day, 365 days a year, with trauma doctors and critical care nursing staff present on all shifts.'
    },
    {
      q: 'Does HCRC Hospital provide ambulance service?',
      a: 'Yes, we have a fleet of emergency ambulances available. Call +1 (800) 555-0199 to request ambulance dispatch.'
    },
    {
      q: 'What emergency cases do you handle?',
      a: 'We handle all major medical emergencies including severe trauma/accidents, heart attacks, stroke symptoms, acute respiratory distress, pediatric crises, and pregnancy emergencies.'
    },
    {
      q: 'Is ICU support available for emergency patients?',
      a: 'Yes, patients requiring advanced clinical monitoring and organ support are directly transitioned from emergency to our Intensive Care Units (ICU/NICU).'
    }
  ];

  return (
    <div style={{ backgroundColor: '#F7F9FC', minHeight: '100vh', fontFamily: 'var(--font-body)' }}>
      {/* Hero Banner */}
      <section style={{
        background: 'linear-gradient(135deg, #ED2024 0%, #B91C1C 100%)',
        color: '#FFFFFF',
        padding: '6rem 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative alert circles background */}
        <div style={{
          position: 'absolute',
          top: '-20%',
          right: '-5%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 70%)',
          pointerEvents: 'none'
        }} />

        <div className="container">
          <div style={{ maxWidth: '800px', textAlign: 'left' }}>
            <span style={{
              color: '#FECACA',
              fontWeight: 700,
              fontSize: '0.85rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '0.75rem'
            }}>
              <FiClock />
              <span>24/7 Life-Saving Critical Care</span>
            </span>
            <h1 style={{ fontSize: 'clamp(2.25rem, 4vw, 3.25rem)', fontWeight: 800, marginBottom: '1.25rem', color: '#FFFFFF', fontFamily: 'var(--font-headings)', lineHeight: 1.15 }}>
              24/7 Emergency Care Unit
            </h1>
            <p style={{ fontSize: 'clamp(1rem, 1.2vw, 1.2rem)', color: 'rgba(255, 255, 255, 0.95)', marginBottom: '2.5rem', lineHeight: 1.6 }}>
              Fast response, immediate treatment, and critical care support when every second matters. Our specialized trauma team is prepared around the clock.
            </p>

            {/* Above the fold phone display */}
            <div style={{
              display: 'inline-flex',
              flexDirection: 'column',
              backgroundColor: '#FFFFFF',
              padding: '1rem 1.5rem',
              borderRadius: '12px',
              boxShadow: 'var(--shadow-lg)',
              marginBottom: '2.5rem'
            }}>
              <span style={{ fontSize: '0.75rem', color: '#B91C1C', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Emergency Hotline (Click to Call)
              </span>
              <a href="tel:18005550199" style={{ fontSize: '1.75rem', fontWeight: 800, color: '#ED2024', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FiPhoneCall size={26} />
                <span>1-800-555-0199</span>
              </a>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3" style={{ display: 'flex', flexWrap: 'wrap' }}>
              <a href="tel:18005550199" className="btn btn-accent btn-round" style={{ backgroundColor: '#FFFFFF', color: '#ED2024', boxShadow: 'var(--shadow-md)' }}>
                <span>CALL EMERGENCY NOW</span>
              </a>
              <a href="tel:18005550199" className="btn btn-outline-white btn-round">
                <span>Request Ambulance</span>
              </a>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-round" 
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)', color: '#FFFFFF', border: '1px solid rgba(255,255,255,0.25)' }}
              >
                <FiNavigation size={16} />
                <span>Get Directions</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro section */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div className="grid grid-cols-2 gap-8 items-center" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
            <div>
              <h2 style={{ fontSize: '2rem', color: '#1F2937', fontWeight: 800, marginBottom: '1.5rem', fontFamily: 'var(--font-headings)' }}>
                Accredited Trauma Care Center
              </h2>
              <p style={{ color: '#4B5563', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                HCRC Hospital emergency care is designed to provide immediate medical attention for urgent and life-threatening conditions. Our team focuses on quick assessment, stabilization, and timely treatment support for patients in critical situations.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {facilities.map((fac, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#4B5563' }}>
                    <FiCheck style={{ color: '#ED2024' }} size={20} />
                    <span>{fac}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Quick Info Block */}
            <div style={{
              backgroundColor: '#FFF5F5',
              borderRadius: '20px',
              padding: '2.5rem',
              border: '1px solid rgba(237, 32, 36, 0.15)',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <h3 style={{ fontSize: '1.25rem', color: '#ED2024', fontWeight: 700, marginBottom: '1.5rem', fontFamily: 'var(--font-headings)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FiAlertCircle />
                <span>Triage Protocol</span>
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#4B5563', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                Upon arrival, patients undergo a rapid Triage assessment. Life-threatening cases (such as cardiac arrest or severe respiratory failures) are transferred to the trauma bay immediately, bypassing documentation steps.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.875rem' }}>
                <div style={{ padding: '0.5rem 1rem', borderRadius: '6px', backgroundColor: 'rgba(237, 32, 36, 0.1)', color: '#B91C1C', fontWeight: 600 }}>
                  Priority 1: Red (Immediate Lifesaving Interventions)
                </div>
                <div style={{ padding: '0.5rem 1rem', borderRadius: '6px', backgroundColor: '#FEF3C7', color: '#92400E', fontWeight: 600 }}>
                  Priority 2: Yellow (Urgent care within 30 minutes)
                </div>
                <div style={{ padding: '0.5rem 1rem', borderRadius: '6px', backgroundColor: '#D1FAE5', color: '#065F46', fontWeight: 600 }}>
                  Priority 3: Green (Non-urgent clinical cases)
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Cases Grid */}
      <section className="section-padding">
        <div className="container text-center">
          <h2 style={{ fontSize: '2rem', color: '#1F2937', fontWeight: 800, marginBottom: '3rem', fontFamily: 'var(--font-headings)' }}>
            Medical Emergencies We Handle
          </h2>
          <div className="grid grid-cols-3 gap-6" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            {emergencyCases.map((cs, idx) => (
              <div key={idx} className="card" style={{ textAlign: 'left', borderLeft: '4px solid #ED2024' }}>
                <h3 style={{ fontSize: '1.2rem', color: '#1F2937', fontWeight: 700, marginBottom: '0.5rem', fontFamily: 'var(--font-headings)' }}>
                  {cs.title}
                </h3>
                <p style={{ color: '#4B5563', fontSize: '0.9rem', lineHeight: 1.5 }}>
                  {cs.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Process Timeline */}
      <section style={{ backgroundColor: '#FFFFFF', padding: '5rem 0' }}>
        <div className="container text-center">
          <h2 style={{ fontSize: '2.5rem', color: '#1F2937', fontWeight: 800, marginBottom: '1.25rem', fontFamily: 'var(--font-headings)' }}>
            Patient Treatment Flow
          </h2>
          <p style={{ color: '#4B5563', maxWidth: '600px', margin: '0 auto 4rem auto' }}>
            Our streamlined emergency process ensures critical cases receive lifesaving medical attention as fast as possible.
          </p>

          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            position: 'relative',
            flexWrap: 'wrap',
            gap: '2rem'
          }}>
            {/* Desktop connecting line */}
            <div className="hide-md" style={{
              position: 'absolute',
              top: '28px',
              left: '5%',
              right: '5%',
              height: '3px',
              backgroundColor: '#ED2024',
              zIndex: 1
            }} />

            {timelineSteps.map((step, idx) => (
              <div key={idx} style={{ 
                flex: '1 1 180px', 
                position: 'relative', 
                zIndex: 2, 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center' 
              }}>
                <div style={{ 
                  width: '56px', 
                  height: '56px', 
                  borderRadius: '50%', 
                  backgroundColor: '#ED2024', 
                  color: '#FFFFFF', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  fontSize: '1.25rem', 
                  fontWeight: 800,
                  boxShadow: '0 4px 10px rgba(237,32,36,0.3)',
                  marginBottom: '1rem'
                }}>
                  {step.number}
                </div>
                <h4 style={{ fontWeight: 700, color: '#1F2937', fontSize: '1.05rem', marginBottom: '0.25rem' }}>{step.title}</h4>
                <p style={{ fontSize: '0.8rem', color: '#4B5563', maxWidth: '160px', margin: '0 auto', lineHeight: 1.4 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding" style={{ borderTop: '1px solid var(--border-color)' }}>
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
                    backgroundColor: '#FFFFFF'
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
                      backgroundColor: '#F7F9FC', 
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

      {/* Bottom Urgent Call CTA */}
      <section className="section-padding" style={{ background: '#ED2024', color: '#FFFFFF', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '650px' }}>
          <FiAlertCircle size={44} style={{ color: '#FFFFFF', marginBottom: '1rem' }} />
          <h2 style={{ fontSize: '2.25rem', fontWeight: 800, marginBottom: '1rem', color: '#FFFFFF', fontFamily: 'var(--font-headings)' }}>
            Emergency Ambulance Dispatch
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.95)', marginBottom: '2rem', fontSize: '1.1rem', lineHeight: 1.5 }}>
            Do you need an immediate ambulance response? Contact HCRC Hospital dispatch center. Our vehicles are equipped with oxygen and cardiac care monitors.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="tel:18005550199" className="btn btn-round" style={{ backgroundColor: '#FFFFFF', color: '#ED2024', padding: '0.9rem 2.5rem', fontSize: '1.1rem', fontWeight: 800 }}>
              <FiPhoneCall size={18} />
              <span>Call 1-800-555-0199</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Emergency;
