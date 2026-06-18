import React, { useEffect } from 'react';
import AboutHero from '../components/about/AboutHero';
import AboutIntro from '../components/about/AboutIntro';
import OurJourney from '../components/about/OurJourney';
import MissionVisionValues from '../components/about/MissionVisionValues';
import CoreValues from '../components/about/CoreValues';
import WhyChooseHCRC from '../components/about/WhyChooseHCRC';
import CareApproach from '../components/about/CareApproach';
import PatientJourney from '../components/about/PatientJourney';
import FacilitiesSnapshot from '../components/about/FacilitiesSnapshot';
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
      
      {/* 2. Who We Are / Main Copy */}
      <AboutIntro />

      {/* 3. Our Journey */}
      <OurJourney />
      
      {/* 4. Mission, Vision and Values */}
      <MissionVisionValues />
      
      {/* 5. Core Values */}
      <CoreValues />
      
      {/* 6. Why Choose HCRC Hospital */}
      <WhyChooseHCRC />
      
      {/* 7. Care Approach, Safety and Quality */}
      <CareApproach />
      
      {/* 8. Patient Journey */}
      <PatientJourney />
      
      {/* 9. Facilities Snapshot */}
      <FacilitiesSnapshot />
      
      {/* 10. FAQ Section */}
      <AboutFAQ />
      
      {/* 11. Final CTA Section */}
      <AboutCTA />
    </main>
  );
};

export default AboutUs;
