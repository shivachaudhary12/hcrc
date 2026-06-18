import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FiMenu, FiX, FiActivity, FiArrowRight, FiPhoneCall, 
  FiChevronDown, FiChevronUp, FiPlusCircle, 
  FiAlertCircle, FiHeart, FiLayers 
} from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import TopBar from './TopBar';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  
  const dropdownRef = useRef(null);
  const location = useLocation();

  // Handle scroll effect for sticky nav border/shadow adjustments
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer and dropdown on route change
  useEffect(() => {
    setIsOpen(false);
    setIsDropdownOpen(false);
    setIsMobileServicesOpen(false);
  }, [location]);

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const serviceItems = [
    {
      name: 'Lab & Radiology',
      desc: 'Accurate diagnostics & imaging services',
      path: '/services/lab-radiology',
      icon: <FiLayers size={18} />
    },
    {
      name: 'Pharmacy',
      desc: 'Genuine medicines with expert guidance',
      path: '/services/pharmacy',
      icon: <FiPlusCircle size={18} />
    },
    {
      name: 'Emergency',
      desc: '24/7 life-saving emergency care',
      path: '/services/emergency',
      icon: <FiAlertCircle size={18} />,
      isEmergency: true
    },
    {
      name: 'Wards',
      desc: 'Comfortable inpatient recovery rooms',
      path: '/services/wards',
      icon: <FiHeart size={18} />
    },
    {
      name: 'ICU / NICU / Modular OT',
      desc: 'Advanced critical care & surgical units',
      path: '/services/icu-nicu-modular-ot',
      icon: <FiActivity size={18} />
    }
  ];

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Specialities', path: '/specialities' },
    { name: 'Services', path: '/services', isDropdown: true },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <div style={{ width: '100%', zIndex: 1000, position: 'relative' }}>
      {/* Top Bar */}
      <TopBar />
      
      {/* Sticky Navigation Bar */}
      <header style={{
        position: 'sticky',
        top: 0,
        backgroundColor: 'var(--color-bg-white)',
        boxShadow: isScrolled ? 'var(--shadow-md)' : 'var(--shadow-sm)',
        borderBottom: '1px solid var(--border-color)',
        transition: 'all var(--transition-normal)',
        zIndex: 999,
        width: '100%'
      }}>
        <div className="container flex justify-between items-center" style={{ padding: '1.1rem 1.5rem' }}>
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2" style={{ color: 'var(--color-primary)' }}>
            <div style={{ 
              width: '42px', 
              height: '42px', 
              background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))', 
              borderRadius: '10px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              color: 'white',
              boxShadow: '0 4px 10px rgba(43, 57, 144, 0.2)'
            }}>
              <FiActivity size={22} style={{ strokeWidth: 2.5 }} />
            </div>
            <div className="flex flex-col">
              <span style={{ 
                fontFamily: 'var(--font-headings)',
                fontSize: '1.35rem', 
                fontWeight: '800', 
                lineHeight: 1.1,
                letterSpacing: '-0.025em',
                background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                HCRC
              </span>
              <span style={{ 
                fontSize: '0.65rem', 
                fontWeight: '700', 
                letterSpacing: '0.15em', 
                textTransform: 'uppercase',
                color: 'var(--color-text-secondary)',
                lineHeight: 1
              }}>
                Hospital
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hide-md flex gap-6 items-center" style={{ height: '100%' }}>
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path || (link.isDropdown && location.pathname.startsWith('/services'));
              
              if (link.isDropdown) {
                return (
                  <div 
                    key={link.name} 
                    ref={dropdownRef}
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                    style={{ position: 'relative', display: 'inline-block', height: '100%' }}
                  >
                    <button
                      aria-expanded={isDropdownOpen}
                      aria-haspopup="true"
                      style={{ 
                        color: isActive ? 'var(--color-primary)' : 'var(--color-text-secondary)', 
                        fontWeight: isActive ? 600 : 500,
                        fontSize: '0.95rem',
                        padding: '0.5rem 0',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.25rem',
                        fontFamily: 'var(--font-body)'
                      }}
                      className="nav-link-hover focus-ring"
                    >
                      <span>{link.name}</span>
                      {isDropdownOpen ? <FiChevronUp size={14} /> : <FiChevronDown size={14} />}
                    </button>

                    {/* Desktop Mega Menu Dropdown */}
                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 15 }}
                          transition={{ duration: 0.2 }}
                          style={{
                            position: 'absolute',
                            top: '100%',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '540px',
                            backgroundColor: '#FFFFFF',
                            borderRadius: '12px',
                            boxShadow: 'var(--shadow-xl)',
                            border: '1px solid var(--border-color)',
                            padding: '1.25rem',
                            display: 'grid',
                            gridTemplateColumns: 'repeat(2, 1fr)',
                            gap: '0.5rem',
                            marginTop: '0.5rem',
                            zIndex: 1000
                          }}
                        >
                          {serviceItems.map((item) => {
                            const isSubActive = location.pathname === item.path;
                            return (
                              <Link
                                key={item.name}
                                to={item.path}
                                style={{
                                  display: 'flex',
                                  alignItems: 'flex-start',
                                  gap: '0.75rem',
                                  padding: '0.75rem',
                                  borderRadius: '8px',
                                  textDecoration: 'none',
                                  borderLeft: '3px solid transparent',
                                  backgroundColor: item.isEmergency 
                                    ? 'rgba(237, 32, 36, 0.03)' 
                                    : isSubActive ? 'rgba(11, 79, 159, 0.03)' : 'transparent',
                                  transition: 'all var(--transition-fast)'
                                }}
                                className={item.isEmergency ? "mega-item-emergency focus-ring" : "mega-item focus-ring"}
                              >
                                <div style={{
                                  width: '32px',
                                  height: '32px',
                                  borderRadius: '6px',
                                  backgroundColor: item.isEmergency ? 'rgba(237, 32, 36, 0.1)' : 'rgba(11, 79, 159, 0.08)',
                                  color: item.isEmergency ? 'var(--color-accent)' : '#0B4F9F',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  flexShrink: 0
                                }}>
                                  {item.icon}
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                                  <span style={{ 
                                    fontSize: '0.9rem', 
                                    fontWeight: 700, 
                                    color: item.isEmergency ? 'var(--color-accent)' : '#1F2937' 
                                  }}>
                                    {item.name}
                                  </span>
                                  <span style={{ fontSize: '0.75rem', color: '#4B5563', lineHeight: 1.25, marginTop: '2px' }}>
                                    {item.desc}
                                  </span>
                                </div>
                              </Link>
                            );
                          })}

                          {/* Footer link in mega menu */}
                          <div style={{
                            gridColumn: 'span 2',
                            borderTop: '1px solid var(--border-color)',
                            paddingTop: '0.75rem',
                            marginTop: '0.25rem',
                            display: 'flex',
                            justifyContent: 'flex-end'
                          }}>
                            <Link 
                              to="/services" 
                              style={{ 
                                fontSize: '0.825rem', 
                                color: '#0B4F9F', 
                                fontWeight: 600, 
                                display: 'flex', 
                                alignItems: 'center', 
                                gap: '0.25rem' 
                              }}
                              className="focus-ring"
                            >
                              <span>View All Services</span>
                              <FiArrowRight size={12} />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <div key={link.name} style={{ position: 'relative' }}>
                  <Link 
                    to={link.path} 
                    style={{ 
                      color: isActive ? 'var(--color-primary)' : 'var(--color-text-secondary)', 
                      fontWeight: isActive ? 600 : 500,
                      fontSize: '0.95rem',
                      padding: '0.5rem 0',
                      transition: 'color var(--transition-fast)'
                    }}
                    className="nav-link-hover focus-ring"
                  >
                    {link.name}
                  </Link>
                  {/* Underline for active state */}
                  {isActive && (
                    <motion.div 
                      layoutId="activeNavIndicator"
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '2px',
                        backgroundColor: 'var(--color-primary)',
                        borderRadius: '2px'
                      }}
                    />
                  )}
                </div>
              );
            })}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hide-md flex gap-3 items-center">
            <Link to="/services/emergency" className="btn btn-outline-accent btn-round focus-ring" style={{ padding: '0.6rem 1.2rem', fontSize: '0.875rem' }}>
              <FiPhoneCall size={14} />
              <span>Emergency</span>
            </Link>
            <Link to="/appointment" className="btn btn-primary btn-round focus-ring" style={{ padding: '0.6rem 1.4rem', fontSize: '0.875rem' }}>
              <span>Book Appointment</span>
              <FiArrowRight size={14} />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            style={{
              display: 'none',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--color-primary)',
              padding: '0.5rem',
              borderRadius: '8px',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            className="mobile-menu-btn focus-ring"
          >
            {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                backgroundColor: 'rgba(15, 23, 42, 0.4)',
                backdropFilter: 'blur(4px)',
                zIndex: 10000
              }}
            />

            {/* Side Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              style={{
                position: 'fixed',
                top: 0,
                right: 0,
                width: '320px',
                height: '100vh',
                backgroundColor: '#FFFFFF',
                boxShadow: '-10px 0 30px rgba(0, 0, 0, 0.1)',
                zIndex: 10001,
                padding: '2rem 1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                overflowY: 'auto'
              }}
            >
              <div>
                {/* Drawer Header */}
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-2">
                    <div style={{ 
                      width: '36px', 
                      height: '36px', 
                      background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))', 
                      borderRadius: '8px', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      color: 'white'
                    }}>
                      <FiActivity size={18} />
                    </div>
                    <span style={{ fontWeight: 700, color: 'var(--color-primary)', fontSize: '1.2rem' }}>HCRC Hospital</span>
                  </div>
                  <button 
                    onClick={() => setIsOpen(false)}
                    aria-label="Close Menu"
                    style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--color-text-secondary)' }}
                    className="focus-ring"
                  >
                    <FiX size={24} />
                  </button>
                </div>

                {/* Drawer Links */}
                <nav className="flex flex-col gap-2" style={{ marginTop: '2rem' }}>
                  {navLinks.map((link) => {
                    const isActive = location.pathname === link.path || (link.isDropdown && location.pathname.startsWith('/services'));
                    
                    if (link.isDropdown) {
                      return (
                        <div key={link.name} style={{ width: '100%' }}>
                          <button
                            onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                            style={{
                              padding: '0.8rem 1rem',
                              borderRadius: '8px',
                              backgroundColor: isActive ? 'var(--color-bg-gray)' : 'transparent',
                              color: isActive ? 'var(--color-primary)' : 'var(--color-text-secondary)',
                              fontWeight: isActive ? 600 : 500,
                              fontSize: '1.05rem',
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              width: '100%',
                              border: 'none',
                              background: 'none',
                              cursor: 'pointer',
                              textAlign: 'left'
                            }}
                            className="focus-ring"
                          >
                            <span>{link.name}</span>
                            {isMobileServicesOpen ? <FiChevronUp size={16} /> : <FiChevronDown size={16} />}
                          </button>
                          
                          {/* Mobile Services Accordion Items */}
                          <AnimatePresence>
                            {isMobileServicesOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                style={{ overflow: 'hidden', paddingLeft: '1rem', display: 'flex', flexDirection: 'column', gap: '0.25rem', marginTop: '0.25rem' }}
                              >
                                {/* General Services Index link */}
                                <Link
                                  to="/services"
                                  style={{
                                    padding: '0.6rem 1rem',
                                    borderRadius: '6px',
                                    color: '#0B4F9F',
                                    fontSize: '0.925rem',
                                    fontWeight: 600,
                                    display: 'block'
                                  }}
                                  className="focus-ring"
                                >
                                  Overview page
                                </Link>

                                {serviceItems.map((subItem) => {
                                  const isSubActive = location.pathname === subItem.path;
                                  return (
                                    <Link
                                      key={subItem.name}
                                      to={subItem.path}
                                      style={{
                                        padding: '0.6rem 1rem',
                                        borderRadius: '6px',
                                        backgroundColor: isSubActive ? 'rgba(11, 79, 159, 0.05)' : 'transparent',
                                        color: subItem.isEmergency ? 'var(--color-accent)' : '#4B5563',
                                        fontSize: '0.925rem',
                                        fontWeight: isSubActive ? 600 : 500,
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem'
                                      }}
                                      className="focus-ring"
                                    >
                                      {subItem.icon}
                                      <span>{subItem.name}</span>
                                    </Link>
                                  );
                                })}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    }

                    return (
                      <Link
                        key={link.name}
                        to={link.path}
                        style={{
                          padding: '0.8rem 1rem',
                          borderRadius: '8px',
                          backgroundColor: isActive ? 'var(--color-bg-gray)' : 'transparent',
                          color: isActive ? 'var(--color-primary)' : 'var(--color-text-secondary)',
                          fontWeight: isActive ? 600 : 500,
                          fontSize: '1.05rem',
                          display: 'block'
                        }}
                        className="focus-ring"
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Drawer Action Buttons */}
              <div className="flex flex-col gap-3" style={{ marginTop: '3rem' }}>
                <Link to="/services/emergency" className="btn btn-outline-accent btn-round focus-ring" style={{ width: '100%' }}>
                  <FiPhoneCall size={16} />
                  <span>Emergency Help</span>
                </Link>
                <Link to="/appointment" className="btn btn-primary btn-round focus-ring" style={{ width: '100%' }}>
                  <span>Book Appointment</span>
                  <FiArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Dropdown Hover styling & global accessibility styling */}
      <style>{`
        @media (max-width: 768px) {
          .mobile-menu-btn {
            display: flex !important;
          }
        }
        .nav-link-hover:hover {
          color: var(--color-primary) !important;
        }
        
        /* Dropdown Mega Menu items styles */
        .mega-item {
          border-left: 3px solid transparent;
        }
        .mega-item:hover {
          background-color: #F5FAFF !important;
          border-left: 3px solid #ED2024 !important;
        }
        
        .mega-item-emergency {
          border-left: 3px solid transparent;
        }
        .mega-item-emergency:hover {
          background-color: #FFF5F5 !important;
          border-left: 3px solid #ED2024 !important;
          box-shadow: 0 0 8px rgba(237, 32, 36, 0.08);
        }
        
        /* Keyboard visible focus states */
        .focus-ring:focus-visible {
          outline: 2px solid #0B4F9F !important;
          outline-offset: 2px;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
};

export default Header;
