import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';
import ATLService from './services/ATLService';
import BTLService from './services/BTLService';
import DigitalService from './services/DigitalService';
import WebDevService from './services/WebDevService';
import DesigningService from './services/DesigningService';
import PrintingService from './services/PrintingService';
import logo from "../assets/logo.png";

const Header = ({ currentView, setCurrentView }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [activeService, setActiveService] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { name: 'ATL', component: 'atl' },
    { name: 'BTL', component: 'btl' },
    { name: 'Digital', component: 'digital' },
    { name: 'Web Development', component: 'webdev' },
    { name: 'Designing', component: 'designing' },
    { name: 'Printing', component: 'printing' }
  ];

  const handleServiceClick = (serviceComponent) => {
    setCurrentView(serviceComponent);
    setIsServicesOpen(false);
    setIsMenuOpen(false);
  };

  const handleNavClick = (section) => {
    if (currentView !== 'main') {
      setCurrentView('main');
      setTimeout(() => {
        document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEmailClick = () => {
    // Open Gmail directly with the new email address
    window.open('https://mail.google.com/mail/?view=cm&fs=1&to=adinfo.gms@gms.com', '_blank');
  };

  const headerStyle = {
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 1000,
    backgroundColor: isScrolled ? 'rgba(30, 64, 175, 0.98)' : 'rgba(30, 64, 175, 0.95)',
    backdropFilter: 'blur(10px)',
    transition: 'all 0.3s ease',
    borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
    boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.1)' : 'none'
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '70px'
  };

  const logoStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: 'white',
    textDecoration: 'none',
    transition: 'transform 0.3s ease'
  };

  const navStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '30px'
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontWeight: '500',
    transition: 'color 0.3s ease',
    position: 'relative'
  };

  const servicesDropdownStyle = {
    position: 'relative',
    display: 'inline-block'
  };

  const dropdownContentStyle = {
    position: 'absolute',
    top: '100%',
    left: '0',
    backgroundColor: 'white',
    minWidth: '200px',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    padding: '10px 0',
    marginTop: '10px',
    opacity: isServicesOpen ? 1 : 0,
    visibility: isServicesOpen ? 'visible' : 'hidden',
    transform: isServicesOpen ? 'translateY(0)' : 'translateY(-10px)',
    transition: 'all 0.3s ease'
  };

  const dropdownItemStyle = {
    display: 'block',
    padding: '12px 20px',
    color: '#1e40af',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '500',
    transition: 'background-color 0.3s ease'
  };

  const contactInfoStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    color: 'white',
    fontSize: '14px'
  };

  const mobileMenuStyle = {
    position: 'fixed',
    top: '70px',
    left: 0,
    width: '100%',
    backgroundColor: '#1e40af',
    transform: isMenuOpen ? 'translateX(0)' : 'translateX(-100%)',
    transition: 'transform 0.3s ease',
    padding: '20px',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)'
  };

  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        <a href="logo" style={logoStyle}>
          <img src={logo} alt='GMS logo' style={logoStyle} height={"35px"} width={"auto"} />
        </a>

        {/* Desktop Navigation */}
        <nav style={{ ...navStyle, display: window.innerWidth > 768 ? 'flex' : 'none' }}>
          <a href="#home" style={linkStyle} onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>Home</a>
          <a href="#about" style={linkStyle} onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}>About</a>
          
          <div 
            style={servicesDropdownStyle}
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <a 
              href="#services" 
              style={{ ...linkStyle, display: 'flex', alignItems: 'center', gap: '5px' }}
            >
              Services <ChevronDown size={16} />
            </a>
            <div style={dropdownContentStyle}>
              {services.map((service) => (
                <a
                  key={service.name}
                  href="#"
                  style={{
                    ...dropdownItemStyle,
                    backgroundColor: activeService === service.name ? '#f0f9ff' : 'transparent'
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleServiceClick(service.component);
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#f0f9ff';
                    setActiveService(service.name);
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    setActiveService('');
                  }}
                >
                  {service.name}
                </a>
              ))}
            </div>
          </div>
          
          <a href="#portfolio" style={linkStyle} onClick={(e) => { e.preventDefault(); handleNavClick('portfolio'); }}>Portfolio</a>
          <a href="#clientele" style={linkStyle} onClick={(e) => { e.preventDefault(); handleNavClick('clientele'); }}>Clientele</a>
          <a href="#contact" style={linkStyle} onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>Contact</a>
        </nav>

        {/* Contact Info */}
        <div style={{ ...contactInfoStyle, display: window.innerWidth > 1024 ? 'flex' : 'none' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <Phone size={14} />
            <span>+91 9985330008</span>
          </div>
          <div 
            style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}
            onClick={handleEmailClick}
          >
            <Mail size={14} />
            <span>adinfo.gms@gmail.com</span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          style={{
            display: window.innerWidth <= 768 ? 'block' : 'none',
            background: 'none',
            border: 'none',
            color: 'white',
            cursor: 'pointer'
          }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div style={mobileMenuStyle}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <a href="#home" style={{ color: 'white', textDecoration: 'none' }} onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>Home</a>
          <a href="#about" style={{ color: 'white', textDecoration: 'none' }} onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}>About</a>
          <a href="#services" style={{ color: 'white', textDecoration: 'none' }} onClick={(e) => { e.preventDefault(); handleNavClick('services'); }}>Services</a>
          <a href="#portfolio" style={{ color: 'white', textDecoration: 'none' }} onClick={(e) => { e.preventDefault(); handleNavClick('portfolio'); }}>Portfolio</a>
          <a href="#clientele" style={{ color: 'white', textDecoration: 'none' }} onClick={(e) => { e.preventDefault(); handleNavClick('clientele'); }}>Clientele</a>
          <a href="#contact" style={{ color: 'white', textDecoration: 'none' }} onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>Contact</a>
        </div>
      </div>
    </header>
  );
};

export default Header;