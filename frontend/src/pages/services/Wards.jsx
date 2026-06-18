import React, { useState, useEffect } from 'react';
import { FiHome, FiPhoneCall, FiCheck, FiArrowRight, FiInfo, FiChevronDown, FiChevronUp, FiAward, FiShield } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Wards = () => {
  // Set SEO metadata
  useEffect(() => {
    document.title = 'Inpatient Wards | HCRC Hospital';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Comfortable and hygienic inpatient ward facilities with nursing care and admission support.');
    }
  }, []);

  const [activeFaq, setActiveFaq] = useState(null);

  const wardTypes = [
    {
      name: 'General Ward',
      desc: 'Shared patient spaces equipped with curtains for personal privacy, bedside tables, and centralized nursing care.',
      features: ['Shared Bathroom', 'Attendant Chair', 'AC Ventilation', 'Nurse Calling System']
    },
    {
      name: 'Semi-Private Room',
      desc: 'Shared room for two patients, offering balanced privacy, attached common bathroom, and comfortable patient beds.',
      features: ['Two Patients Limit', 'Television & Cable', 'Attendant Recliner', 'Shared Wardrobe']
    },
    {
      name: 'Private Cabin',
      desc: 'Fully independent patient cabin with attached clean toilet, comfortable guest seating area, and individual controls.',
      features: ['Attached Bathroom', 'Smart TV & WiFi', 'Attendant Couch / Bed', 'Personal Refrigerator']
    },
    {
      name: 'Deluxe Suite',
      desc: 'Premium suite containing a patient room, separate visitor lounge area, luxury furniture, and round-the-clock service.',
      features: ['Private Visitor Lounge', 'Dining Table & Pantry', 'Premium Toiletries', 'Dedicated Nurse Support']
    }
  ];

  const facilities = [
    '24/7 Compassionate Nursing Care',
    'Rigid Infection Control & Hygiene Checks',
    'Dedicated Space for Patient Attendant',
    'Nutritional Diet Meals Approved by Dieticians',
    'Twice-Daily Senior Physician Rounds',
    'Direct Medicine & Diagnostics Delivery Coordination'
  ];

  const admissionSteps = [
    { title: '1. Admission Order', desc: 'A doctor recommendation is required to initiate the inpatient admission process.' },
    { title: '2. Bed Selection', desc: 'Choose from General, Semi-private, Private or Deluxe cabins at the reception desk.' },
    { title: '3. Form & Deposit', desc: 'Complete admission forms, submit insurance documents, or process initial deposit.' },
    { title: '4. Ward Escort', desc: 'HCRC staff will escort the patient to the allocated room and brief the attendant.' }
  ];

  const faqs = [
    {
      q: 'What types of wards are available?',
      a: 'We offer multiple inpatient room classes: General Wards (shared spaces), Semi-Private Rooms (shared by two patients), Private Cabins, and Deluxe Suites.'
    },
    {
      q: 'Can I book a private cabin?',
      a: 'Yes, Private Cabins and Deluxe Suites can be booked during admission, subject to availability. You can also send a pre-booking inquiry online.'
    },
    {
      q: 'What is the admission process?',
      a: 'Admissions require a doctor order. You select the ward type, complete the registration files, submit insurance details (or process billing deposits), and our staff will guide you to your room.'
    },
    {
      q: 'Are meals available for patients?',
      a: 'Yes, we provide dietician-approved healthy meals for patients during their stay, which is included in the ward charges.'
    },
    {
      q: 'Are visitors allowed?',
      a: 'Yes, visitors are allowed during designated hours (11:00 AM - 1:00 PM and 5:00 PM - 7:00 PM). One attendant pass is issued per patient for continuous stay.'
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
              Inpatient Wards & Suites
            </span>
            <h1 style={{ fontSize: 'clamp(2.25rem, 4vw, 3.25rem)', fontWeight: 800, marginBottom: '1.25rem', color: '#FFFFFF', fontFamily: 'var(--font-headings)', lineHeight: 1.15 }}>
              Comfortable & Hygienic Inpatient Care
            </h1>
            <p style={{ fontSize: 'clamp(1rem, 1.2vw, 1.2rem)', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '2.5rem', lineHeight: 1.6 }}>
              Safe, clean, and caring recovery spaces supported by professional nursing care. Helping patients heal under constant expert monitoring.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3" style={{ display: 'flex', flexWrap: 'wrap' }}>
              <button 
                onClick={() => alert('For admission inquiry, please call HCRC helpdesk at +1 (800) 555-0199 or visit the front desk.')}
                className="btn btn-primary btn-round" 
                style={{ backgroundColor: '#FFFFFF', color: '#0B4F9F', boxShadow: 'var(--shadow-md)' }}
              >
                <span>Admission Inquiry</span>
              </button>
              <a href="tel:18005550199" className="btn btn-outline-white btn-round">
                <FiPhoneCall size={16} />
                <span>Call Reception</span>
              </a>
              <a href="#room-options" className="btn btn-round" style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)', color: '#FFFFFF', border: '1px solid rgba(255,255,255,0.25)' }}>
                <span>View Room Options</span>
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
              <h2 style={{ fontSize: '2rem', color: '#1F2937', fontWeight: 800, marginBottom: '1rem', fontFamily: 'var(--font-headings)' }}>
                Hygienic Facilities for Safe Recovery
              </h2>
              <p style={{ color: '#4B5563', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                HCRC Hospital provides inpatient ward facilities designed for patient comfort, safety, and recovery. Our nursing team supports admitted patients with continuous care, hygiene-focused rooms, and coordinated treatment support.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {facilities.map((fac, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#4B5563' }}>
                    <FiCheck style={{ color: '#10B981' }} size={20} />
                    <span>{fac}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Inpatient details block */}
            <div style={{
              backgroundColor: '#F5FAFF',
              borderRadius: '20px',
              padding: '2.5rem',
              border: '1px solid var(--border-color)',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <h3 style={{ fontSize: '1.25rem', color: '#0B4F9F', fontWeight: 700, marginBottom: '1.5rem', fontFamily: 'var(--font-headings)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FiAward />
                <span>Quality Standards</span>
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#4B5563', lineHeight: 1.6, marginBottom: '1rem' }}>
                Our wards undergo regular clinical audits for hygiene, air purification (HEPA filters in high-care units), and quiet healing environments. Cleanliness schedules are maintained hourly.
              </p>
              <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0B4F9F', fontWeight: 600 }}>
                <FiShield />
                <span>Attendant Pass Policy: 1 Attendant allowed per patient</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ward Types Cards Grid */}
      <section id="room-options" className="section-padding">
        <div className="container text-center">
          <h2 style={{ fontSize: '2rem', color: '#1F2937', fontWeight: 800, marginBottom: '1rem', fontFamily: 'var(--font-headings)' }}>
            Choose Your Accommodation
          </h2>
          <p style={{ color: '#4B5563', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
            We provide multiple room formats to suit patient convenience, medical monitoring requirements, and budget specifications.
          </p>
          <div className="grid grid-cols-2 gap-6" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
            {wardTypes.map((ward, idx) => (
              <div key={idx} className="card" style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '1.3rem', color: '#0B4F9F', fontWeight: 700, marginBottom: '0.75rem', fontFamily: 'var(--font-headings)' }}>
                    {ward.name}
                  </h3>
                  <p style={{ color: '#4B5563', fontSize: '0.925rem', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                    {ward.desc}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                    {ward.features.map((ft, fidx) => (
                      <span 
                        key={fidx} 
                        style={{ 
                          fontSize: '0.75rem', 
                          backgroundColor: '#EFF6FF', 
                          color: '#0B4F9F', 
                          padding: '0.25rem 0.6rem', 
                          borderRadius: '4px',
                          fontWeight: 600
                        }}
                      >
                        {ft}
                      </span>
                    ))}
                  </div>
                </div>
                <button 
                  onClick={() => alert(`Inquiring about ${ward.name}... Our admission desk will connect soon.`)}
                  className="btn btn-outline-accent" 
                  style={{ width: '100%', borderRadius: '8px', fontSize: '0.85rem' }}
                >
                  Book / Inquire
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Process Timeline */}
      <section style={{ backgroundColor: '#FFFFFF', padding: '5rem 0' }}>
        <div className="container">
          <h2 style={{ fontSize: '2rem', color: '#1F2937', fontWeight: 800, marginBottom: '3rem', textAlign: 'center', fontFamily: 'var(--font-headings)' }}>
            Admission Process Guide
          </h2>
          <div className="grid grid-cols-4 gap-6" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
            {admissionSteps.map((step, idx) => (
              <div key={idx} style={{ 
                backgroundColor: '#F7F9FC', 
                border: '1px solid var(--border-color)', 
                borderRadius: '12px', 
                padding: '1.5rem' 
              }}>
                <h4 style={{ color: '#0B4F9F', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>{step.title}</h4>
                <p style={{ fontSize: '0.875rem', color: '#4B5563', lineHeight: 1.5 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inpatient Information Blocks */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-2 gap-8" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
            {/* Visitor Guidelines */}
            <div style={{ backgroundColor: '#FFFFFF', padding: '2.5rem', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
              <h3 style={{ fontSize: '1.35rem', color: '#1F2937', fontWeight: 700, marginBottom: '1rem', fontFamily: 'var(--font-headings)' }}>
                Visitor Guidelines
              </h3>
              <ul style={{ paddingLeft: '1.25rem', color: '#4B5563', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.925rem' }}>
                <li>Designated visiting hours: <strong>11:00 AM - 1:00 PM</strong> and <strong>5:00 PM - 7:00 PM</strong> daily.</li>
                <li>Only one visitor is permitted in patient cabins at a time.</li>
                <li>Children under 12 years are not encouraged inside inpatient wards for health and safety.</li>
                <li>Please sanitize your hands at the entry of each ward.</li>
              </ul>
            </div>

            {/* Insurance Support */}
            <div style={{ backgroundColor: '#FFFFFF', padding: '2.5rem', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
              <h3 style={{ fontSize: '1.35rem', color: '#1F2937', fontWeight: 700, marginBottom: '1rem', fontFamily: 'var(--font-headings)' }}>
                Insurance & Cashless Support
              </h3>
              <p style={{ color: '#4B5563', fontSize: '0.925rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                We support cashless facilities with leading health insurance providers and Third Party Administrators (TPAs).
              </p>
              <ul style={{ paddingLeft: '1.25rem', color: '#4B5563', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.925rem' }}>
                <li>Submit pre-authorization forms at least 24 hours prior to planned admissions.</li>
                <li>Provide copy of insurance card and government ID at the admission desk.</li>
                <li>Co-payments or non-medical exclusions must be cleared before patient discharge.</li>
              </ul>
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

      {/* Bottom Admission Inquiry CTA */}
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, #0B4F9F 0%, #083B78 100%)', color: '#FFFFFF', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '650px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem', color: '#FFFFFF', fontFamily: 'var(--font-headings)' }}>
            Inpatient Booking Assistance
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '2rem', fontSize: '1.05rem', lineHeight: 1.5 }}>
            To pre-book cabins or check the active bed availability, connect with our administrative desk.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button 
              onClick={() => alert('Admission Inquiry Request Sent. Contacting administrative desk...')} 
              className="btn btn-round" 
              style={{ backgroundColor: '#FFFFFF', color: '#0B4F9F', padding: '0.8rem 2rem' }}
            >
              Inquire Admission
            </button>
            <a href="tel:18005550199" className="btn btn-outline-white btn-round" style={{ padding: '0.8rem 2rem' }}>
              Call Admission Office
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Wards;
