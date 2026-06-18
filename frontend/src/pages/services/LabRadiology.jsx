import React, { useState, useEffect } from 'react';
import { FiCalendar, FiPhoneCall, FiDownload, FiCheck, FiArrowRight, FiInfo, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { motion } from 'framer-motion';

const LabRadiology = () => {
  // Set SEO metadata
  useEffect(() => {
    document.title = 'Lab & Radiology Services | HCRC Hospital';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Get reliable lab tests, radiology, ultrasound, X-ray and diagnostic support at HCRC Hospital.');
    }
  }, []);

  const [activeFaq, setActiveFaq] = useState(null);

  const coreServices = [
    { title: 'Blood Tests', items: ['Complete Blood Count (CBC)', 'Blood Sugar (Fasting & PP)', 'Lipid Profile', 'Thyroid Profile (T3, T4, TSH)'] },
    { title: 'Organ Function Panels', items: ['Liver Function Test (LFT)', 'Kidney Function Test (KFT)', 'Thyroid Panel', 'Electrolyte Balance'] },
    { title: 'Radiology & Imaging', items: ['Digital X-Ray', 'Ultrasound (Abdominal/Pelvic)', 'Pregnancy Growth Scan', 'ECG & Echocardiography (ECHO)'] }
  ];

  const packages = [
    { name: 'Basic Health Checkup', price: '$49', features: ['CBC (Blood Count)', 'Blood Glucose', 'Urine Routine', 'Physical Consultation'] },
    { name: 'Executive Cardiac Checkup', price: '$129', features: ['Lipid Profile', 'ECG & ECHO', 'Kidney & Liver Tests', 'Cardiologist Consultation'] },
    { name: 'Comprehensive Senior Panel', price: '$179', features: ['Thyroid Panel', 'Bone & Joint Markers', 'Blood Sugar & HbA1c', 'Radiologist Review'] }
  ];

  const faqs = [
    {
      q: 'What lab tests are available at HCRC Hospital?',
      a: 'We offer a wide range of tests including routine blood counts, organ function panels (liver, kidney, thyroid), sugar testing, digital X-Ray, ultrasound scans, and specialized health packages.'
    },
    {
      q: 'How can I collect my report?',
      a: 'Reports can be collected physically from our diagnostic desk, downloaded securely online from our patient portal, or sent directly to your registered phone number via PDF on WhatsApp.'
    },
    {
      q: 'Do you provide ultrasound and X-Ray services?',
      a: 'Yes, we are equipped with state-of-the-art digital X-ray machines and advanced ultrasound imaging equipment. Please note that ultrasound scans require a prior appointment.'
    },
    {
      q: 'Can I book a lab test online?',
      a: 'Yes! You can use our "Book Test" online intake form to request sample collection or schedule your radiology slot.'
    },
    {
      q: 'Are health checkup packages available?',
      a: 'Yes, we offer multiple customized health packages starting from basic screenings to comprehensive senior citizen profiles at discounted rates.'
    }
  ];

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

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
              Diagnostic & Imaging Centre
            </span>
            <h1 style={{ fontSize: 'clamp(2.25rem, 4vw, 3.25rem)', fontWeight: 800, marginBottom: '1.25rem', color: '#FFFFFF', fontFamily: 'var(--font-headings)', lineHeight: 1.15 }}>
              Modern Diagnostic Services
            </h1>
            <p style={{ fontSize: 'clamp(1rem, 1.2vw, 1.2rem)', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '2.5rem', lineHeight: 1.6 }}>
              Fast, accurate, and reliable reports for better diagnosis and treatment planning. Trusted medical analysis by certified lab experts.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3" style={{ display: 'flex', flexWrap: 'wrap' }}>
              <Link to="/appointment" className="btn btn-primary btn-round" style={{ backgroundColor: '#FFFFFF', color: '#0B4F9F', boxShadow: 'var(--shadow-md)' }}>
                <FiCalendar size={16} />
                <span>Book Test</span>
              </Link>
              <a href="tel:18005550199" className="btn btn-outline-white btn-round">
                <FiPhoneCall size={16} />
                <span>Call Lab Desk</span>
              </a>
              <button 
                onClick={() => alert('Redirecting to report portal... Please enter your Reference ID.')} 
                className="btn btn-round" 
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)', color: '#FFFFFF', border: '1px solid rgba(255,255,255,0.25)' }}
              >
                <FiDownload size={16} />
                <span>Download Report</span>
              </button>
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
                Accurate Diagnosis for Effective Treatment
              </h2>
              <p style={{ color: '#4B5563', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                HCRC Hospital provides reliable laboratory and radiology services to support fast and accurate diagnosis. Our diagnostic team uses modern equipment and safe testing practices to help doctors plan effective treatment for every patient.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#4B5563' }}>
                  <FiCheck style={{ color: '#10B981' }} size={20} />
                  <span>Fully Automated Clinical Laboratory</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#4B5563' }}>
                  <FiCheck style={{ color: '#10B981' }} size={20} />
                  <span>High-Resolution Digital X-Ray Imaging</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#4B5563' }}>
                  <FiCheck style={{ color: '#10B981' }} size={20} />
                  <span>Experienced Lab Technicians & Radiologists</span>
                </div>
              </div>
            </div>
            <div style={{
              backgroundColor: '#F5FAFF',
              borderRadius: '20px',
              padding: '2.5rem',
              border: '1px solid var(--border-color)',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <h3 style={{ fontSize: '1.25rem', color: '#0B4F9F', fontWeight: 700, marginBottom: '1.5rem', fontFamily: 'var(--font-headings)' }}>
                Our Facilities & Features
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <h4 style={{ fontSize: '1rem', color: '#1F2937', fontWeight: 600, marginBottom: '0.25rem' }}>Automated Laboratory System</h4>
                  <p style={{ fontSize: '0.875rem', color: '#4B5563' }}>Minimizes human error and provides reports in record turn-around time.</p>
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', color: '#1F2937', fontWeight: 600, marginBottom: '0.25rem' }}>Fast Report Delivery</h4>
                  <p style={{ fontSize: '0.875rem', color: '#4B5563' }}>Access your reports directly online, via WhatsApp PDF, or registered email.</p>
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', color: '#1F2937', fontWeight: 600, marginBottom: '0.25rem' }}>Hygiene & Safety Centred</h4>
                  <p style={{ fontSize: '0.875rem', color: '#4B5563' }}>Sample collections are processed under strict clinical safety guidelines.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Diagnostic Services Cards */}
      <section className="section-padding">
        <div className="container text-center">
          <h2 style={{ fontSize: '2rem', color: '#1F2937', fontWeight: 800, marginBottom: '3rem', fontFamily: 'var(--font-headings)' }}>
            Available Diagnostic Tests
          </h2>
          <div className="grid grid-cols-3 gap-6" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            {coreServices.map((srv, idx) => (
              <div key={idx} className="card" style={{ textAlign: 'left', display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.2rem', color: '#0B4F9F', fontWeight: 700, marginBottom: '1.25rem', borderBottom: '2px solid #F0F4F8', paddingBottom: '0.5rem', fontFamily: 'var(--font-headings)' }}>
                  {srv.title}
                </h3>
                <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {srv.items.map((item, id) => (
                    <li key={id} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.9rem', color: '#4B5563' }}>
                      <FiCheck style={{ color: '#0B4F9F', marginTop: '3px', flexShrink: 0 }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Report Delivery Process */}
      <section style={{ backgroundColor: '#FFFFFF', padding: '5rem 0' }}>
        <div className="container text-center">
          <h2 style={{ fontSize: '2.5rem', color: '#1F2937', fontWeight: 800, marginBottom: '1rem', fontFamily: 'var(--font-headings)' }}>
            Digital Report Delivery
          </h2>
          <p style={{ color: '#4B5563', maxWidth: '600px', margin: '0 auto 4rem auto' }}>
            Get test reports conveniently through multiple digital options. No long queues required.
          </p>
          <div className="grid grid-cols-3 gap-6" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            <div style={{ padding: '1.5rem', border: '1px solid var(--border-color)', borderRadius: '12px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#EFF6FF', color: '#0B4F9F', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', fontWeight: 800, margin: '0 auto 1rem auto' }}>1</div>
              <h4 style={{ fontWeight: 700, marginBottom: '0.5rem', color: '#1F2937' }}>WhatsApp Delivery</h4>
              <p style={{ fontSize: '0.85rem', color: '#4B5563' }}>Recieve secure PDF copy on your registered WhatsApp phone number instantly.</p>
            </div>
            <div style={{ padding: '1.5rem', border: '1px solid var(--border-color)', borderRadius: '12px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#EFF6FF', color: '#0B4F9F', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', fontWeight: 800, margin: '0 auto 1rem auto' }}>2</div>
              <h4 style={{ fontWeight: 700, marginBottom: '0.5rem', color: '#1F2937' }}>Online Download</h4>
              <p style={{ fontSize: '0.85rem', color: '#4B5563' }}>Log in to the HCRC portal using patient ID & credentials to download reports.</p>
            </div>
            <div style={{ padding: '1.5rem', border: '1px solid var(--border-color)', borderRadius: '12px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#EFF6FF', color: '#0B4F9F', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', fontWeight: 800, margin: '0 auto 1rem auto' }}>3</div>
              <h4 style={{ fontWeight: 700, marginBottom: '0.5rem', color: '#1F2937' }}>Physical Collection</h4>
              <p style={{ fontSize: '0.85rem', color: '#4B5563' }}>Pick up hard-copy medical printouts from HCRC lab desk at any time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Health Package Cards */}
      <section className="section-padding">
        <div className="container text-center">
          <h2 style={{ fontSize: '2rem', color: '#1F2937', fontWeight: 800, marginBottom: '1rem', fontFamily: 'var(--font-headings)' }}>
            Preventative Health Packages
          </h2>
          <p style={{ color: '#4B5563', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
            Book pre-configured diagnostic profiles designed to assess body health and cardiac indicators.
          </p>
          <div className="grid grid-cols-3 gap-6" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            {packages.map((pkg, idx) => (
              <div key={idx} className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', textAlign: 'left' }}>
                <div>
                  <h4 style={{ fontSize: '1.15rem', color: '#1F2937', fontWeight: 700, marginBottom: '0.25rem' }}>{pkg.name}</h4>
                  <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0B4F9F', margin: '0.5rem 0 1.25rem 0' }}>{pkg.price}</div>
                  <ul style={{ listStyleType: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {pkg.features.map((ft, fidx) => (
                      <li key={fidx} style={{ fontSize: '0.85rem', color: '#4B5563', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#0B4F9F' }}></span>
                        {ft}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link to="/appointment" className="btn btn-primary" style={{ width: '100%', borderRadius: '8px', padding: '0.6rem', fontSize: '0.85rem', textAlign: 'center' }}>
                  Book Package
                </Link>
              </div>
            ))}
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
                    onClick={() => toggleFaq(index)}
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
            Schedule Your Diagnostics Today
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '2rem', fontSize: '1.05rem', lineHeight: 1.5 }}>
            Don't delay your diagnostics. Fast reports help your physician plan accurate treatment.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/appointment" className="btn btn-round" style={{ backgroundColor: '#FFFFFF', color: '#0B4F9F', padding: '0.8rem 2rem' }}>
              Book Appointment Now
            </Link>
            <a href="tel:18005550199" className="btn btn-outline-white btn-round" style={{ padding: '0.8rem 2rem' }}>
              Call Diagnostic Center
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LabRadiology;
