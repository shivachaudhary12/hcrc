import React, { useState, useEffect } from 'react';
import { FiUpload, FiPhoneCall, FiCheck, FiArrowRight, FiInfo, FiChevronDown, FiChevronUp, FiPlusCircle, FiFileText } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Pharmacy = () => {
  // Set SEO metadata
  useEffect(() => {
    document.title = 'Hospital Pharmacy | HCRC Hospital';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Access genuine medicines, prescription support and pharmacy guidance at HCRC Hospital.');
    }
  }, []);

  const [activeFaq, setActiveFaq] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');

  const medicineCategories = [
    { title: 'Prescription Medicines', desc: 'Critical prescription drugs dispenced safely under clinical supervision.' },
    { title: 'OTC Health Care', desc: 'General healthcare items, vitamins, pain relievers, and hygiene essentials.' },
    { title: 'Chronic Disease Care', desc: 'Sustained drug availability for diabetes, high blood pressure, and cardiovascular health.' },
    { title: 'Post-Surgery Recovery', desc: 'Post-operative recovery tablets, healing ointments, and customized pain management.' },
    { title: 'Mother & Child Care', desc: 'Pediatric drops, baby formula, maternal nutrients, and infant hygiene care.' },
    { title: 'Emergency Medicines', desc: 'Critical lifesaving emergency medicines stocked on high priority.' }
  ];

  const faqs = [
    {
      q: 'Can I upload my prescription online?',
      a: 'Yes, you can upload a photo or PDF of your prescription using our online upload block. Our pharmacists will review, verify, and package your drugs.'
    },
    {
      q: 'Are medicines verified before delivery?',
      a: 'Absolutely. Every prescription goes through a double-check validation process by our certified pharmacists to ensure safety, correctness, and proper dosage guidance.'
    },
    {
      q: 'Is the pharmacy open 24/7?',
      a: 'Yes, the HCRC Hospital pharmacy is open 24 hours a day, 7 days a week for both inpatient needs and walk-in emergency prescription collections.'
    },
    {
      q: 'Do you provide medicine counseling?',
      a: 'Yes, our on-duty pharmacists provide free counseling on dosage instructions, potential side effects, and storage conditions for all prescription medicines.'
    },
    {
      q: 'Is home delivery available?',
      a: 'Home delivery is currently in development. Please contact our pharmacy desk directly at +1 (800) 555-0199 to confirm if special delivery is available in your area.'
    }
  ];

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
      setUploadStatus('');
    }
  };

  const handleUploadSubmit = (e) => {
    e.preventDefault();
    if (!selectedFile) {
      setUploadStatus('Please select a file first.');
      return;
    }
    setUploadStatus('Uploading...');
    setTimeout(() => {
      setUploadStatus(`Prescription "${selectedFile.name}" uploaded successfully! Our pharmacist will review it and call you shortly.`);
      setSelectedFile(null);
    }, 1500);
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
              24/7 In-House Pharmacy
            </span>
            <h1 style={{ fontSize: 'clamp(2.25rem, 4vw, 3.25rem)', fontWeight: 800, marginBottom: '1.25rem', color: '#FFFFFF', fontFamily: 'var(--font-headings)', lineHeight: 1.15 }}>
              Trusted Medicines at Your Fingertips
            </h1>
            <p style={{ fontSize: 'clamp(1rem, 1.2vw, 1.2rem)', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '2.5rem', lineHeight: 1.6 }}>
              Safe, genuine, and convenient pharmacy support for patients and families. Access prescription medicines with expert pharmaceutical advice.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3" style={{ display: 'flex', flexWrap: 'wrap' }}>
              <a href="#prescription-upload" className="btn btn-primary btn-round" style={{ backgroundColor: '#FFFFFF', color: '#0B4F9F', boxShadow: 'var(--shadow-md)' }}>
                <FiUpload size={16} />
                <span>Upload Prescription</span>
              </a>
              <a href="tel:18005550199" className="btn btn-outline-white btn-round">
                <FiPhoneCall size={16} />
                <span>Call Pharmacy</span>
              </a>
              <a href="#categories" className="btn btn-round" style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)', color: '#FFFFFF', border: '1px solid rgba(255,255,255,0.25)' }}>
                <span>Ask Pharmacist</span>
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
                Your Safety is Our Top Priority
              </h2>
              <p style={{ color: '#4B5563', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                The HCRC Hospital pharmacy helps patients access genuine medicines with professional guidance. Our pharmacy team supports safe medicine use by checking prescriptions, guiding patients, and ensuring quality medicine availability.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#4B5563' }}>
                  <FiCheck style={{ color: '#10B981' }} size={20} />
                  <span>100% Genuine Medicines Direct from Manufacturers</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#4B5563' }}>
                  <FiCheck style={{ color: '#10B981' }} size={20} />
                  <span>Temperature-Controlled Cold Storage for Potency</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#4B5563' }}>
                  <FiCheck style={{ color: '#10B981' }} size={20} />
                  <span>Interactive Inpatient & Outpatient Care Integration</span>
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
                Pharmacy Features
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <h4 style={{ fontSize: '1rem', color: '#1F2937', fontWeight: 600, marginBottom: '0.25rem' }}>Prescription Verification</h4>
                  <p style={{ fontSize: '0.875rem', color: '#4B5563' }}>We strictly verify doctor prescriptions to prevent drug misuse and errors.</p>
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', color: '#1F2937', fontWeight: 600, marginBottom: '0.25rem' }}>Pharmacist Counseling</h4>
                  <p style={{ fontSize: '0.875rem', color: '#4B5563' }}>Get on-the-spot consultation on dosage, frequency, and drug interactions.</p>
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', color: '#1F2937', fontWeight: 600, marginBottom: '0.25rem' }}>24/7 Emergency Support</h4>
                  <p style={{ fontSize: '0.875rem', color: '#4B5563' }}>Stocked with critical critical care drugs and emergency vaccines at all times.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Medicine Categories Grid */}
      <section id="categories" className="section-padding">
        <div className="container text-center">
          <h2 style={{ fontSize: '2rem', color: '#1F2937', fontWeight: 800, marginBottom: '3rem', fontFamily: 'var(--font-headings)' }}>
            Medicines We Supply
          </h2>
          <div className="grid grid-cols-3 gap-6" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            {medicineCategories.map((cat, idx) => (
              <div key={idx} className="card" style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
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
                    <FiPlusCircle size={22} />
                  </div>
                  <h3 style={{ fontSize: '1.15rem', color: '#1F2937', fontWeight: 700, marginBottom: '0.5rem' }}>
                    {cat.title}
                  </h3>
                  <p style={{ color: '#4B5563', fontSize: '0.875rem', lineHeight: 1.5 }}>
                    {cat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prescription Upload Block */}
      <section id="prescription-upload" className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '650px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', color: '#1F2937', fontWeight: 800, marginBottom: '1rem', fontFamily: 'var(--font-headings)' }}>
            Upload Prescription Online
          </h2>
          <p style={{ color: '#4B5563', marginBottom: '2rem', fontSize: '0.95rem' }}>
            Upload your prescription photo or document. Our certified pharmacist will verify the order and contact you for collection details.
          </p>

          <form onSubmit={handleUploadSubmit} style={{ 
            border: '2px dashed #0B4F9F', 
            borderRadius: '12px', 
            padding: '2.5rem',
            backgroundColor: '#F5FAFF',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
            position: 'relative'
          }}>
            <input 
              type="file" 
              accept=".pdf,.jpg,.jpeg,.png" 
              onChange={handleFileChange}
              id="file-input"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                opacity: 0,
                cursor: 'pointer'
              }}
            />
            <FiFileText size={40} style={{ color: '#0B4F9F', marginBottom: '0.5rem' }} />
            
            {selectedFile ? (
              <div>
                <p style={{ fontWeight: 600, color: '#1F2937', fontSize: '0.95rem' }}>Selected File:</p>
                <p style={{ fontSize: '0.875rem', color: '#4B5563' }}>{selectedFile.name}</p>
              </div>
            ) : (
              <div>
                <p style={{ fontWeight: 600, color: '#0B4F9F', fontSize: '1.05rem', margin: 0 }}>Click or Drag prescription to upload</p>
                <p style={{ fontSize: '0.8rem', color: '#94A3B8', marginTop: '0.25rem' }}>Accepts PDF, JPG, PNG (Max 5MB)</p>
              </div>
            )}

            <button 
              type="submit" 
              className="btn btn-primary"
              style={{
                position: 'relative',
                zIndex: 10,
                marginTop: '1rem',
                backgroundColor: '#0B4F9F',
                borderRadius: '8px',
                padding: '0.6rem 1.5rem',
                fontSize: '0.9rem'
              }}
            >
              Submit Prescription
            </button>
          </form>

          {uploadStatus && (
            <div style={{ 
              marginTop: '1.5rem', 
              padding: '1rem', 
              borderRadius: '8px', 
              backgroundColor: uploadStatus.includes('successfully') ? '#DEF7EC' : '#FDE8E8',
              color: uploadStatus.includes('successfully') ? '#03543F' : '#9B1C1C',
              fontSize: '0.9rem',
              fontWeight: 500
            }}>
              {uploadStatus}
            </div>
          )}
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

      {/* Bottom CTA Block */}
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, #0B4F9F 0%, #083B78 100%)', color: '#FFFFFF', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '650px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem', color: '#FFFFFF', fontFamily: 'var(--font-headings)' }}>
            Contact Our Pharmacy Team
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '2rem', fontSize: '1.05rem', lineHeight: 1.5 }}>
            Have a question about drug dosage or availability? Contact our round-the-clock pharmacists now.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="tel:18005550199" className="btn btn-round" style={{ backgroundColor: '#FFFFFF', color: '#0B4F9F', padding: '0.8rem 2rem' }}>
              <FiPhoneCall size={16} />
              <span>Call Pharmacy Desk</span>
            </a>
            <a href="#prescription-upload" className="btn btn-outline-white btn-round" style={{ padding: '0.8rem 2rem' }}>
              <span>Upload Prescription</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pharmacy;
