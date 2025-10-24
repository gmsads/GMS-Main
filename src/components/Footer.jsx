import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  ArrowUp,
  Heart
} from 'lucide-react';

const Footer = ({ setCurrentView }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    { name: 'ATL Advertising', id: 'atl' },
    { name: 'BTL Marketing', id: 'btl' },
    { name: 'Digital Marketing', id: 'digital' },
    { name: 'Web Development', id: 'webdev' },
    { name: 'Logo Design', id: 'designing' },
    { name: 'Graphic Design', id: 'designing' },
    { name: 'Event Management', id: 'btl' },
    { name: 'Printing Services', id: 'printing' }
  ];

  const quickLinks = [
    { name: 'Home', action: 'scrollToTop' },
    { name: 'About', action: 'about' },
    { name: 'Services', action: 'services' },
    { name: 'Portfolio', action: 'portfolio' },
    { name: 'Clients', action: 'clients' },
    { name: 'Contact', action: 'contact' }
  ];

  const clients = [
    'Swiggy', 'Blinkit', 'Euro Kids', 'CMR Group',
    'Kubera', 'Roop Sagar', 'Kaam Hain Na'
  ];

  const handleNavigation = (action, serviceId = null) => {
    if (action === 'scrollToTop') {
      scrollToTop();
      return;
    }

    if (serviceId) {
      // Navigate to service page
      setCurrentView(serviceId);
      scrollToTop();
    } else {
      // Scroll to section on main page
      const element = document.getElementById(action);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Handle social media clicks - prevent React from intercepting
  const handleSocialClick = (e, url) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const footerStyle = {
    backgroundColor: '#1e40af',
    color: 'white',
    paddingTop: '60px',
    position: 'relative'
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px'
  };

  const footerGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '40px',
    marginBottom: '40px'
  };

  const columnTitleStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '25px',
    color: 'white'
  };

  const linkStyle = {
    color: 'rgba(255, 255, 255, 0.8)',
    textDecoration: 'none',
    fontSize: '14px',
    lineHeight: '1.8',
    transition: 'color 0.3s ease',
    display: 'block',
    cursor: 'pointer'
  };

  const socialLinksStyle = {
    display: 'flex',
    gap: '15px',
    marginTop: '20px'
  };

  const socialLinkStyle = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  };

  const contactItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '15px',
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: '14px'
  };

  const bottomBarStyle = {
    borderTop: '1px solid rgba(255, 255, 255, 0.2)',
    paddingTop: '30px',
    paddingBottom: '30px',
    marginTop: '40px'
  };

  const bottomContentStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '20px',
    textAlign: 'center'
  };

  const copyrightStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '5px',
    fontSize: '14px',
    color: 'rgba(255, 255, 255, 0.8)',
    flexWrap: 'wrap'
  };

  const policyLinksStyle = {
    display: 'flex',
    gap: '30px',
    fontSize: '14px',
    justifyContent: 'center',
    flexWrap: 'wrap'
  };

  const policyLinkStyle = {
    color: 'rgba(255, 255, 255, 0.8)',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
    cursor: 'pointer'
  };

  const scrollTopButtonStyle = {
    position: 'fixed',
    bottom: '30px',
    right: '30px',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: '#3b82f6',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 20px rgba(59, 130, 246, 0.4)',
    transition: 'all 0.3s ease',
    zIndex: 1000
  };

  // Media query for larger screens
  const mediaQuery = '@media (min-width: 768px)';
  
  // Apply responsive styles
  const responsiveBottomContentStyle = {
    ...bottomContentStyle,
    [mediaQuery]: {
      flexDirection: 'row',
      textAlign: 'left'
    }
  };

  const responsiveCopyrightStyle = {
    ...copyrightStyle,
    [mediaQuery]: {
      justifyContent: 'flex-start'
    }
  };

  const responsivePolicyLinksStyle = {
    ...policyLinksStyle,
    [mediaQuery]: {
      justifyContent: 'flex-end'
    }
  };

  return (
    <>
      <footer style={footerStyle}>
        <div style={containerStyle}>
          <div style={footerGridStyle}>
            {/* Company Info */}
            <div>
              <h3 style={columnTitleStyle}>Global Marketing Solutions</h3>
              <p style={{
                color: 'rgba(255, 255, 255, 0.8)',
                lineHeight: '1.6',
                fontSize: '14px',
                marginBottom: '20px'
              }}>
                Your trusted partner in comprehensive marketing, advertising, and brand solutions with 8+ years of excellence in the industry.
              </p>

              <div style={socialLinksStyle}>
                <div
                  style={socialLinkStyle}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#3b5998';
                    e.target.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                    e.target.style.transform = 'translateY(0)';
                  }}
                  onClick={(e) => handleSocialClick(e, 'https://www.facebook.com/balabrahma.chary.376/')}
                >
                  <Facebook size={18} />
                </div>
                
                <div
                  style={socialLinkStyle}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#E4405F';
                    e.target.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                    e.target.style.transform = 'translateY(0)';
                  }}
                  onClick={(e) => handleSocialClick(e, 'https://www.instagram.com/gms_ads')}
                >
                  <Instagram size={18} />
                </div>
                <div
                  style={socialLinkStyle}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#0077B5';
                    e.target.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                    e.target.style.transform = 'translateY(0)';
                  }}
                  onClick={(e) => handleSocialClick(e, 'https://www.linkedin.com/in/rudraram-bala-brahma-chary-483788345?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app')}
                >
                  <Linkedin size={18} />
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 style={columnTitleStyle}>Our Services</h3>
              {services.map((service, index) => (
                <span
                  key={index}
                  style={linkStyle}
                  onMouseEnter={(e) => e.target.style.color = '#60a5fa'}
                  onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.8)'}
                  onClick={() => handleNavigation('service', service.id)}
                >
                  {service.name}
                </span>
              ))}
            </div>

            {/* Quick Links */}
            <div>
              <h3 style={columnTitleStyle}>Quick Links</h3>
              {quickLinks.map((link, index) => (
                <span
                  key={index}
                  style={linkStyle}
                  onMouseEnter={(e) => e.target.style.color = '#60a5fa'}
                  onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.8)'}
                  onClick={() => handleNavigation(link.action)}
                >
                  {link.name}
                </span>
              ))}

              <div style={{ marginTop: '20px' }}>
                <h4 style={{
                  color: 'white',
                  fontSize: '16px',
                  marginBottom: '10px',
                  fontWeight: '600'
                }}>
                  Notable Clients
                </h4>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px'
                }}>
                  {clients.slice(0, 4).map((client, index) => (
                    <span
                      key={index}
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        padding: '4px 8px',
                        borderRadius: '4px',
                        fontSize: '12px',
                        color: 'rgba(255, 255, 255, 0.9)'
                      }}
                    >
                      {client}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 style={columnTitleStyle}>Contact Info</h3>

              <div style={contactItemStyle}>
                <Phone size={16} style={{ flexShrink: 0 }} />
                <span>+91 9985330008</span>
              </div>

              <div style={contactItemStyle}>
                <Mail size={16} style={{ flexShrink: 0 }} />
                <span>adinfo.gms@gmail.com</span>
              </div>

              <div style={contactItemStyle}>
                <MapPin size={16} style={{ flexShrink: 0, alignSelf: 'flex-start', marginTop: '2px' }} />
                <span style={{ lineHeight: '1.4' }}>
                  2ndd floor, Plot no 204,<br />
                  Kamineni Hospital Bypass Rd,<br />
                  Suvidha Arcade, RTC Colony,<br />
                  L. B. Nagar, Hyderabad,<br />
                  Telangana 500060
                </span>
              </div>

              <div style={{
                marginTop: '20px',
                padding: '15px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '8px'
              }}>
                <h4 style={{
                  color: 'white',
                  fontSize: '14px',
                  marginBottom: '8px',
                  fontWeight: '600'
                }}>
                  Leadership
                </h4>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: '13px',
                  margin: 0
                }}>
                  Mr. Bala Bharma Chari<br />
                  <span style={{ opacity: 0.7 }}>Chief Executive Officer</span>
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar - Updated for mobile responsiveness */}
          <div style={bottomBarStyle}>
            <div style={responsiveBottomContentStyle}>
              <div style={responsiveCopyrightStyle}>
                <span>© 2025 Global Marketing Solutions.</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  Made with
                  <Heart size={16} style={{ color: '#ef4444' }} />
                  in Hyderabad
                </span>
              </div>

              <div style={responsivePolicyLinksStyle}>
                <span
                  style={policyLinkStyle}
                  onMouseEnter={(e) => e.target.style.color = '#60a5fa'}
                  onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.8)'}
                >
                  Privacy Policy
                </span>
                <span
                  style={policyLinkStyle}
                  onMouseEnter={(e) => e.target.style.color = '#60a5fa'}
                  onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.8)'}
                >
                  Terms of Service
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        style={scrollTopButtonStyle}
        onClick={scrollToTop}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = '#2563eb';
          e.target.style.transform = 'translateY(-3px)';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = '#3b82f6';
          e.target.style.transform = 'translateY(0)';
        }}
      >
        <ArrowUp size={20} />
      </button>
    </>
  );
};

export default Footer;