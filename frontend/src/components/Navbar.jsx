import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone, Mail, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';
import logo from "../assets/global-marketing-solutions-gms-logo.png";

const Navbar = ({ currentView, navigateTo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [activeService, setActiveService] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 992) {
        setIsMenuOpen(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isHomePage = currentView === 'main';
  const shouldBeTransparent = isHomePage && !isScrolled;

  const services = [
    { name: 'ATL', component: 'atl' },
    { name: 'BTL', component: 'btl' },
    { name: 'Digital', component: 'digital' },
    { name: 'Web Development', component: 'webdev' },
    { name: 'Designing', component: 'designing' },
    { name: 'Printing', component: 'printing' },
    { name: 'Auto Tops & Branding', component: 'auto-rickshaw-advertising-hyderabad' }
  ];

  const handleServiceClick = (serviceComponent) => {
    navigateTo(serviceComponent);
    setIsServicesOpen(false);
    setIsMenuOpen(false);
  };

  const handleNavClick = (section) => {
    setIsMenuOpen(false);
    if (section === 'home') {
      navigateTo('main');
    } else if (['about', 'portfolio', 'clientele', 'blog', 'blog-detail', 'blog-admin', 'admin-login', 'blog-write', 'blog-login', 'contact'].includes(section)) {
      navigateTo(section);
    } else {
      navigateTo('main', section);
    }
  };

  const handleEmailClick = () => {
    window.open('https://mail.google.com/mail/?view=cm&fs=1&to=adinfo.gms@gmail.com', '_blank');
  };

  const WhatsAppIcon = ({ size = 20, color = 'white' }) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21z"/>
      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"/>
    </svg>
  );

  const PinterestIcon = ({ size = 14, color = 'white' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} stroke="none">
      <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12C24 5.372 18.627 0 12 0z"/>
    </svg>
  );

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Top Bar - Contact & Social */}
      <div style={{
        backgroundColor: shouldBeTransparent ? 'rgba(0, 0, 0, 0.2)' : 'rgba(30, 64, 175, 0.95)',
        color: 'white',
        fontSize: '13px',
        fontWeight: '500',
        padding: '8px 0',
        display: windowWidth < 768 ? 'none' : 'block',
        transition: 'all 0.3s ease',
        borderBottom: '1px solid rgba(255,255,255,0.15)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          {/* Left: Contact Info */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <a href="tel:+919985330008" style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'white', textDecoration: 'none' }}>
              <Phone size={14} />
              <span>+91 9985330008</span>
            </a>
            <span style={{ color: 'rgba(255,255,255,0.4)' }}>|</span>
            <div onClick={handleEmailClick} style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'white', cursor: 'pointer' }}>
              <Mail size={14} />
              <span>adinfo.gms@gmail.com</span>
            </div>
          </div>

          {/* Right: Social Icons */}
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <a href="https://www.facebook.com/GlobalMarketingSolutionsAds" target="_blank" rel="noopener noreferrer" style={{ width: '26px', height: '26px', backgroundColor: '#3b5998', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', textDecoration: 'none' }}>
              <Facebook size={14} />
            </a>
            <a href="https://www.instagram.com/gms_ads" target="_blank" rel="noopener noreferrer" style={{ width: '26px', height: '26px', background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', textDecoration: 'none' }}>
              <Instagram size={14} />
            </a>
            <a href="https://www.pinterest.com/GlobalMarketingSolutionsAds" target="_blank" rel="noopener noreferrer" style={{ width: '26px', height: '26px', backgroundColor: '#E60023', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', textDecoration: 'none' }}>
              <PinterestIcon size={14} />
            </a>
            <a href="https://www.linkedin.com/in/rudraram-bala-brahma-chary-483788345" target="_blank" rel="noopener noreferrer" style={{ width: '26px', height: '26px', backgroundColor: '#0077b5', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', textDecoration: 'none' }}>
              <Linkedin size={14} />
            </a>
            <a href="https://www.youtube.com/@gms-ads2016/" target="_blank" rel="noopener noreferrer" style={{ width: '26px', height: '26px', backgroundColor: '#FF0000', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', textDecoration: 'none' }}>
              <Youtube size={14} />
            </a>
            <a href="https://wa.me/919985330008?text=Hi!%20I'm%20interested%20in%20your%20advertising%20services.%20Please%20contact%20me." target="_blank" rel="noopener noreferrer" style={{ width: '26px', height: '26px', backgroundColor: '#25D366', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', textDecoration: 'none' }}>
              <WhatsAppIcon size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div style={{
        backgroundColor: shouldBeTransparent ? 'transparent' : 'rgba(30, 64, 175, 0.98)',
        backdropFilter: shouldBeTransparent ? 'none' : 'blur(10px)',
        boxShadow: shouldBeTransparent ? 'none' : '0 4px 20px rgba(0, 0, 0, 0.2)',
        transition: 'all 0.3s ease',
        borderBottom: shouldBeTransparent ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
        width: '100%'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '75px',
          position: 'relative'
        }}>
          {/* Logo (Left) */}
          <a href="/" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img src={logo} alt='GMS Logo' height="40px" style={{ objectFit: 'contain' }} />
          </a>

          {/* Menu (Center) - Desktop */}
          <nav style={{
            display: windowWidth > 992 ? 'flex' : 'none',
            alignItems: 'center',
            gap: '30px',
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)'
          }}>
            <a href="/" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }} style={{ color: 'white', textDecoration: 'none', fontWeight: '600', fontSize: '15px', transition: 'color 0.3s' }} onMouseEnter={(e)=>e.target.style.color='#93c5fd'} onMouseLeave={(e)=>e.target.style.color='white'}>Home</a>
            <a href="/about" onClick={(e) => { e.preventDefault(); handleNavClick('about'); }} style={{ color: 'white', textDecoration: 'none', fontWeight: '600', fontSize: '15px', transition: 'color 0.3s' }} onMouseEnter={(e)=>e.target.style.color='#93c5fd'} onMouseLeave={(e)=>e.target.style.color='white'}>About</a>
            
            {/* Services Dropdown */}
            <div 
              style={{ position: 'relative', display: 'inline-block' }}
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <a href="/services" onClick={(e) => e.preventDefault()} style={{ color: 'white', textDecoration: 'none', fontWeight: '600', fontSize: '15px', display: 'flex', alignItems: 'center', gap: '4px', transition: 'color 0.3s' }} onMouseEnter={(e)=>e.target.style.color='#93c5fd'} onMouseLeave={(e)=>e.target.style.color='white'}>
                Services <ChevronDown size={14} />
              </a>
              
              <div style={{
                position: 'absolute',
                top: '100%',
                left: '50%',
                transform: isServicesOpen ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(-10px)',
                backgroundColor: 'white',
                minWidth: '220px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                borderRadius: '8px',
                padding: '12px 0',
                marginTop: '15px',
                opacity: isServicesOpen ? 1 : 0,
                visibility: isServicesOpen ? 'visible' : 'hidden',
                transition: 'all 0.3s ease',
                zIndex: 100
              }}>
                <div style={{position:'absolute', top:'-15px', height:'15px', width:'100%'}}></div>
                
                {services.map((service) => {
                  const isRootService = service.component === 'auto-rickshaw-advertising-hyderabad';
                  return (
                  <a
                    key={service.name}
                    href={isRootService ? `/${service.component}` : `/services/${service.component}`}
                    style={{
                      display: 'block',
                      padding: '10px 24px',
                      color: activeService === service.name ? '#1e40af' : '#444',
                      textDecoration: 'none',
                      fontSize: '14px',
                      fontWeight: '500',
                      transition: 'all 0.2s ease',
                      backgroundColor: activeService === service.name ? '#f8fafc' : 'transparent'
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleServiceClick(service.component);
                    }}
                    onMouseEnter={() => setActiveService(service.name)}
                    onMouseLeave={() => setActiveService('')}
                  >
                    {service.name}
                  </a>
                  );
                })}
              </div>
            </div>

            <a href="/portfolio" onClick={(e) => { e.preventDefault(); handleNavClick('portfolio'); }} style={{ color: 'white', textDecoration: 'none', fontWeight: '600', fontSize: '15px', transition: 'color 0.3s' }} onMouseEnter={(e)=>e.target.style.color='#93c5fd'} onMouseLeave={(e)=>e.target.style.color='white'}>Portfolio</a>
            <a href="/clientele" onClick={(e) => { e.preventDefault(); handleNavClick('clientele'); }} style={{ color: 'white', textDecoration: 'none', fontWeight: '600', fontSize: '15px', transition: 'color 0.3s' }} onMouseEnter={(e)=>e.target.style.color='#93c5fd'} onMouseLeave={(e)=>e.target.style.color='white'}>Clientele</a>
            <a href="/blog" onClick={(e) => { e.preventDefault(); handleNavClick('blog'); }} style={{ color: 'white', textDecoration: 'none', fontWeight: '600', fontSize: '15px', transition: 'color 0.3s' }} onMouseEnter={(e)=>e.target.style.color='#93c5fd'} onMouseLeave={(e)=>e.target.style.color='white'}>Blog</a>
          </nav>

          {/* Contact Us Button (Right) */}
          <div style={{ display: windowWidth > 992 ? 'block' : 'none' }}>
            <a 
              href="/contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}
              style={{
                backgroundColor: 'white',
                color: '#1e40af',
                padding: '10px 26px',
                borderRadius: '30px',
                fontWeight: '600',
                fontSize: '14px',
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 14px rgba(0, 0, 0, 0.1)',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#f0f9ff';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'white';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 14px rgba(0, 0, 0, 0.1)';
              }}
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            style={{
              display: windowWidth <= 992 ? 'flex' : 'none',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'none',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              padding: '5px'
            }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div style={{
        position: 'fixed',
        top: isScrolled ? '75px' : (windowWidth < 768 ? '75px' : '117px'),
        left: 0,
        width: '100%',
        height: isScrolled ? 'calc(100vh - 75px)' : (windowWidth < 768 ? 'calc(100vh - 75px)' : 'calc(100vh - 117px)'),
        backgroundColor: 'white',
        transform: isMenuOpen ? 'translateX(0)' : 'translateX(-100%)',
        transition: 'transform 0.3s ease-in-out',
        zIndex: 999,
        overflowY: 'auto',
        boxShadow: '4px 0 20px rgba(0,0,0,0.05)',
        display: windowWidth <= 992 ? 'block' : 'none'
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', padding: '20px' }}>
          <a href="/" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }} style={{ color: '#333', textDecoration: 'none', fontSize: '18px', fontWeight: '600', padding: '15px 0', borderBottom: '1px solid #f0f0f0' }}>Home</a>
          <a href="/about" onClick={(e) => { e.preventDefault(); handleNavClick('about'); }} style={{ color: '#333', textDecoration: 'none', fontSize: '18px', fontWeight: '600', padding: '15px 0', borderBottom: '1px solid #f0f0f0' }}>About</a>
          
          <div style={{ padding: '15px 0', borderBottom: '1px solid #f0f0f0' }}>
            <div onClick={() => setIsServicesOpen(!isServicesOpen)} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#333', fontSize: '18px', fontWeight: '600', cursor: 'pointer' }}>
              Services
              <ChevronDown size={20} style={{ transform: isServicesOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s' }} />
            </div>
            
            <div style={{
              maxHeight: isServicesOpen ? '300px' : '0',
              overflow: 'hidden',
              transition: 'max-height 0.3s ease',
              marginTop: isServicesOpen ? '10px' : '0'
            }}>
              {services.map((service) => {
                const isRootService = service.component === 'auto-rickshaw-advertising-hyderabad';
                return (
                <a
                  key={service.name}
                  href={isRootService ? `/${service.component}` : `/services/${service.component}`}
                  style={{
                    display: 'block',
                    padding: '10px 0 10px 20px',
                    color: '#666',
                    textDecoration: 'none',
                    fontSize: '16px',
                    fontWeight: '500'
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleServiceClick(service.component);
                  }}
                >
                  {service.name}
                </a>
                );
              })}
            </div>
          </div>
          
          <a href="/portfolio" onClick={(e) => { e.preventDefault(); handleNavClick('portfolio'); }} style={{ color: '#333', textDecoration: 'none', fontSize: '18px', fontWeight: '600', padding: '15px 0', borderBottom: '1px solid #f0f0f0' }}>Portfolio</a>
          <a href="/clientele" onClick={(e) => { e.preventDefault(); handleNavClick('clientele'); }} style={{ color: '#333', textDecoration: 'none', fontSize: '18px', fontWeight: '600', padding: '15px 0', borderBottom: '1px solid #f0f0f0' }}>Clientele</a>
          <a href="/blog" onClick={(e) => { e.preventDefault(); handleNavClick('blog'); }} style={{ color: '#333', textDecoration: 'none', fontSize: '18px', fontWeight: '600', padding: '15px 0', borderBottom: '1px solid #f0f0f0' }}>Blog</a>
          <a href="/contact" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }} style={{ color: '#333', textDecoration: 'none', fontSize: '18px', fontWeight: '600', padding: '15px 0', borderBottom: '1px solid #f0f0f0' }}>Contact</a>

          {/* Mobile contact info at bottom */}
          <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#f8fafc', borderRadius: '12px' }}>
            <p style={{ margin: '0 0 15px 0', fontWeight: '600', color: '#1e40af' }}>Get in touch</p>
            <a href="tel:+919985330008" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#555', textDecoration: 'none', marginBottom: '15px' }}>
              <Phone size={18} />
              <span>+91 9985330008</span>
            </a>
            <div onClick={handleEmailClick} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#555', cursor: 'pointer' }}>
              <Mail size={18} />
              <span>adinfo.gms@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
