import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import ServicesOverview from './pages/ServicesOverview';
import ServicePage from './pages/ServicePage';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="specialities" element={<div className="container section-padding text-center"><h2>Our Specialities</h2><p>Coming Soon</p></div>} />
        
        {/* Dynamic Services Routes */}
        <Route path="services" element={<ServicesOverview />} />
        <Route path="services/:slug" element={<ServicePage />} />

        <Route path="contact" element={<div className="container section-padding text-center"><h2>Contact Us</h2><p>Coming Soon</p></div>} />
        <Route path="*" element={<div className="container section-padding text-center"><h2>404 - Not Found</h2></div>} />
      </Route>
    </Routes>
  );
}

export default App;
