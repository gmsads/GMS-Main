import React, { useState, useEffect } from 'react';
import { ArrowLeft, Search, Share2, Mail, TrendingUp, Target, Phone, MessageCircle, Video, Monitor, BarChart } from 'lucide-react';
import Footer from '../Footer';

const DigitalService = ({ onBack, navigateTo }) => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleWhatsApp = () => {
    window.open('https://wa.me/919985330008?text=Hi! I\'m interested in your Digital Marketing services. Can you help me?', '_blank');
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

  const statsSectionStyle = {
    background: 'white',
    borderRadius: '20px',
    padding: '40px',
    marginBottom: '40px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
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
      icon: <Search size={28} />,
      title: 'SEO Optimization',
      description: 'Improve your search engine rankings and drive organic traffic to your website',
      features: ['Keyword Research & Analysis', 'On-Page SEO Optimization', 'Technical SEO Audits', 'Local SEO Services']
    },
    {
      icon: <Share2 size={28} />,
      title: 'Social Media Marketing',
      description: 'Build your brand presence across all major social media platforms',
      features: ['Facebook & Instagram Ads', 'Content Creation & Strategy', 'Community Management', 'Influencer Partnerships']
    },
    {
      icon: <Mail size={28} />,
      title: 'Email Marketing',
      description: 'Create targeted email campaigns that convert prospects into customers',
      features: ['Email Campaign Design', 'Automated Email Sequences', 'Newsletter Management', 'A/B Testing & Optimization']
    },
    {
      icon: <Target size={28} />,
      title: 'PPC Advertising',
      description: 'Drive immediate results with strategic pay-per-click advertising campaigns',
      features: ['Google Ads Management', 'Facebook Ads Campaigns', 'Display Advertising', 'Remarketing Campaigns']
    },
    {
      icon: <TrendingUp size={28} />,
      title: 'Content Marketing',
      description: 'Engage your audience with valuable content that drives action',
      features: ['Blog Writing & Management', 'Video Content Creation', 'Infographic Design', 'Content Strategy Planning']
    },
    {
      icon: <BarChart size={28} />,
      title: 'Analytics & Reporting',
      description: 'Track performance and optimize campaigns with detailed analytics',
      features: ['Google Analytics Setup', 'Conversion Tracking', 'Monthly Performance Reports', 'ROI Analysis']
    }
  ];

  const stats = [
    { number: '10+', label: 'Years Experience' },
    { number: '5000+', label: 'Campaigns Managed' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        

        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={headerIconStyle}>
            <Monitor size={32} color="white" />
          </div>
          <h1 style={titleStyle}>Digital Marketing Services</h1>
          <p style={subtitleStyle}>
            Boost your online presence with our comprehensive digital marketing solutions that drive traffic, generate leads, and grow your business
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

        {/* Stats Section */}
        <div style={statsSectionStyle}>
          <h3 style={{
            fontSize: windowWidth < 768 ? '24px' : '28px',
            fontWeight: '600',
            color: '#1e40af',
            textAlign: 'center',
            marginBottom: '30px'
          }}>
            Why Choose Our Digital Marketing Services?
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: windowWidth < 768 ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
            gap: '30px'
          }}>
            {stats.map((stat, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: windowWidth < 768 ? '28px' : '40px',
                  fontWeight: '700',
                  color: '#3b82f6',
                  marginBottom: '8px'
                }}>
                  {stat.number}
                </div>
                <div style={{
                  color: '#6b7280',
                  fontSize: windowWidth < 768 ? '13px' : '14px'
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div style={ctaSectionStyle}>
          <h2 style={{
            fontSize: windowWidth < 768 ? '24px' : '32px',
            fontWeight: '700',
            marginBottom: '20px'
          }}>
            Ready to Boost Your Digital Presence?
          </h2>
          <p style={{
            fontSize: windowWidth < 768 ? '14px' : '16px',
            opacity: 0.95,
            marginBottom: '30px',
            maxWidth: '600px',
            margin: '0 auto 30px'
          }}>
            Let's create a digital marketing strategy that drives real results for your business
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

export default DigitalService;