import React, { useState, useEffect } from 'react';
import { ArrowLeft, Palette, Brush, Layers, Zap, Phone, MessageCircle, Video } from 'lucide-react';
import Footer from '../Footer';

const DesigningService = ({ onBack, navigateTo }) => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleWhatsApp = () => {
    window.open('https://wa.me/919985330008?text=Hi! I\'m interested in your Designing services. Can you help me?', '_blank');
  };

  const handleGoogleMeet = () => {
    window.open('https://meet.google.com/new', '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+919985330008';
  };

  // Handle navigation from footer


  const containerStyle = {
    minHeight: '100vh',
    backgroundColor: '#f8fafc',
    fontFamily: 'Archivo, sans-serif'
  };

  const contentStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: windowWidth < 768 ? '20px 16px 40px' : '30px 20px 60px'
  };

  const backButtonStyle = {
    background: 'transparent',
    border: 'none',
    borderRadius: '50px',
    padding: '6px 12px',
    color: '#1e40af',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '13px',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    marginBottom: '20px',
    fontFamily: 'Archivo, sans-serif'
  };

  const headerIconStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '70px',
    height: '70px',
    background: 'linear-gradient(135deg, #1e40af, #3b82f6)',
    borderRadius: '50%',
    marginBottom: '20px',
    boxShadow: '0 10px 30px rgba(30, 64, 175, 0.3)'
  };

  const titleStyle = {
    fontSize: windowWidth < 768 ? '32px' : '48px',
    fontWeight: '700',
    color: '#1e40af',
    marginBottom: '15px',
    textAlign: 'center'
  };

  const subtitleStyle = {
    fontSize: windowWidth < 768 ? '16px' : '18px',
    color: '#6b7280',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: '1.6',
    textAlign: 'center'
  };

  const servicesGridStyle = {
    display: 'grid',
    gridTemplateColumns: windowWidth < 768 ? '1fr' : 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '30px',
    marginBottom: '60px'
  };

  const serviceCardStyle = {
    background: 'white',
    borderRadius: '16px',
    padding: '30px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    transition: 'all 0.3s ease',
    border: '1px solid #e5e7eb'
  };

  const ctaSectionStyle = {
    background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
    borderRadius: '20px',
    padding: windowWidth < 768 ? '30px 20px' : '50px',
    textAlign: 'center',
    color: 'white'
  };

  const buttonStyle = {
    border: 'none',
    padding: windowWidth < 768 ? '12px 24px' : '15px 30px',
    borderRadius: '50px',
    fontSize: windowWidth < 768 ? '14px' : '16px',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    transition: 'all 0.3s ease',
    fontFamily: 'Archivo, sans-serif'
  };

  const services = [
    {
      icon: <Brush size={28} />,
      title: 'Logo Design',
      description: 'Unique and memorable logos that represent your brand identity perfectly',
      features: ['Custom Logo Creation', 'Brand Guidelines', 'Multiple Formats', 'Unlimited Revisions']
    },
    {
      icon: <Layers size={28} />,
      title: 'Brand Identity',
      description: 'Complete brand identity packages including colors, typography, and visual elements',
      features: ['Brand Strategy', 'Visual Identity', 'Brand Guidelines', 'Stationery Design']
    },
    {
      icon: <Palette size={28} />,
      title: 'Graphic Design',
      description: 'Professional graphic design for all your marketing and promotional materials',
      features: ['Brochures & Flyers', 'Social Media Graphics', 'Packaging Design', 'Advertisement Design']
    },
    {
      icon: <Zap size={28} />,
      title: 'UI/UX Design',
      description: 'User-centered design solutions for websites and mobile applications',
      features: ['User Interface Design', 'User Experience Design', 'Wireframing', 'Prototyping']
    }
  ];

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        

        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={headerIconStyle}>
            <Palette size={32} color="white" />
          </div>
          <h1 style={titleStyle}>Designing Services</h1>
          <p style={subtitleStyle}>
            Creative design solutions that bring your brand to life with stunning visuals and memorable experiences
          </p>
        </div>

        {/* Services Grid */}
        <div style={servicesGridStyle}>
          {services.map((service, index) => (
            <div 
              key={index} 
              style={serviceCardStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '20px',
                color: '#1e40af'
              }}>
                {service.icon}
                <h3 style={{
                  fontSize: windowWidth < 768 ? '20px' : '22px',
                  fontWeight: '600',
                  marginLeft: '15px',
                  margin: '0 0 0 15px',
                  color: '#1e40af'
                }}>
                  {service.title}
                </h3>
              </div>
              <p style={{
                color: '#6b7280',
                marginBottom: '20px',
                lineHeight: '1.6'
              }}>
                {service.description}
              </p>
              <ul style={{
                listStyle: 'none',
                padding: '0',
                margin: '0'
              }}>
                {service.features.map((feature, idx) => (
                  <li key={idx} style={{
                    color: '#4b5563',
                    marginBottom: '8px',
                    paddingLeft: '20px',
                    position: 'relative',
                    fontSize: '14px'
                  }}>
                    <span style={{
                      position: 'absolute',
                      left: '0',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: '6px',
                      height: '6px',
                      background: '#3b82f6',
                      borderRadius: '50%'
                    }}></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div style={ctaSectionStyle}>
          <h2 style={{
            fontSize: windowWidth < 768 ? '24px' : '32px',
            fontWeight: '700',
            marginBottom: '20px'
          }}>
            Start Your Design Journey
          </h2>
          <p style={{
            fontSize: windowWidth < 768 ? '14px' : '16px',
            opacity: 0.95,
            marginBottom: '30px',
            maxWidth: '600px',
            margin: '0 auto 30px'
          }}>
            Ready to create stunning designs that captivate your audience? Let's bring your vision to life!
          </p>
          
          <div style={{
            display: 'flex',
            gap: '15px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <button
              onClick={handleWhatsApp}
              style={{
                ...buttonStyle,
                background: '#25D366',
                color: 'white'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 8px 25px rgba(37, 211, 102, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </button>

            <button
              onClick={handleGoogleMeet}
              style={{
                ...buttonStyle,
                background: '#4285f4',
                color: 'white'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 8px 25px rgba(66, 133, 244, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              <Video size={18} />
              Google Meet
            </button>

            <button
              onClick={handleCall}
              style={{
                ...buttonStyle,
                background: '#10b981',
                color: 'white'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 8px 25px rgba(16, 185, 129, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              <Phone size={18} />
              Call Now
            </button>
          </div>
        </div>
      </div>

      <Footer 
        navigateTo={navigateTo} 
      />
    </div>
  );
};

export default DesigningService;