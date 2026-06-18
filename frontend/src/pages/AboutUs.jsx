import React, { useEffect } from 'react';
import AboutHero from '../components/about/AboutHero';
import AboutIntro from '../components/about/AboutIntro';
import MissionVisionValues from '../components/about/MissionVisionValues';
import CoreValues from '../components/about/CoreValues';
import WhyChooseHCRC from '../components/about/WhyChooseHCRC';
import CareApproach from '../components/about/CareApproach';
import PatientJourney from '../components/about/PatientJourney';
import FacilitiesSnapshot from '../components/about/FacilitiesSnapshot';
import MedicalTeamPreview from '../components/about/MedicalTeamPreview';
import QualitySafety from '../components/about/QualitySafety';
import AboutFAQ from '../components/about/AboutFAQ';
import AboutCTA from '../components/about/AboutCTA';

const AboutUs = () => {
  // Set SEO metadata dynamically on mount
  useEffect(() => {
    document.title = 'About HCRC Hospital | Trusted Healthcare Services';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Learn about HCRC Hospital, our patient-focused care approach, medical services, facilities, values and commitment to safe, reliable healthcare.');
    }
  }, []);

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#F5FAFF' }}>
      {/* 1. Hero Section */}
      <AboutHero />
      
      {/* 2. Who We Are Section */}
      <AboutIntro />
      
      {/* 3. Mission, Vision and Values */}
      <MissionVisionValues />
      
      {/* 4. Core Values */}
      <CoreValues />
      
      {/* 5. Why Choose HCRC Hospital */}
      <WhyChooseHCRC />
      
      {/* 6. Our Care Approach */}
      <CareApproach />
      
      {/* 7. Patient Journey */}
      <PatientJourney />
      
      {/* 8. Facilities Snapshot */}
      <FacilitiesSnapshot />
      
      {/* 9. Medical Team Preview */}
      <MedicalTeamPreview />
      
      {/* 10. Quality and Safety */}
      <QualitySafety />
      
      {/* 11. FAQ Section */}
      <AboutFAQ />
      
      {/* 12. Final CTA Section */}
      <AboutCTA />
    </main>
  );
};

export default AboutUs;
