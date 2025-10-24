import React from 'react';
import { ArrowLeft, Palette, Brush, Layers, Zap, Phone, MessageCircle, Video } from 'lucide-react';

const DesigningService = ({ onBack }) => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/YOUR_WHATSAPP_NUMBER?text=Hi! I\'m interested in your Designing services. Can you help me?', '_blank');
  };

  const handleGoogleMeet = () => {
    window.open('https://meet.google.com/new', '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+91XXXXXXXXXX';
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      fontFamily: 'Archivo, sans-serif',
      padding: '80px 20px 40px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '60px',
          animation: 'fadeInUp 0.8s ease-out'
        }}>
          {/* Back Button */}
          <button
            onClick={onBack}
            style={{
              background: 'rgba(255, 255, 255, 0.2)',
              border: 'none',
              borderRadius: '50px',
              padding: '12px 24px',
              color: 'white',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '1rem',
              fontWeight: '600',
              transition: 'all 0.3s ease',
              marginBottom: '40px',
              fontFamily: 'Archivo, sans-serif'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.3)';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.2)';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            <ArrowLeft size={20} />
            Back to Services
          </button>
          
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '80px',
            height: '80px',
            background: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '50%',
            marginBottom: '20px'
          }}>
            <Palette size={40} color="white" />
          </div>
          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: '700',
            color: 'white',
            marginBottom: '20px',
            textShadow: '0 4px 8px rgba(0,0,0,0.3)'
          }}>
            Designing Services
          </h1>
          <p style={{
            fontSize: '1.3rem',
            color: 'rgba(255, 255, 255, 0.9)',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Creative design solutions that bring your brand to life with stunning visuals and memorable experiences
          </p>
        </div>

        {/* Services Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px',
          marginBottom: '60px'
        }}>
          {[
            {
              icon: <Brush size={32} />,
              title: 'Logo Design',
              description: 'Unique and memorable logos that represent your brand identity perfectly',
              features: ['Custom Logo Creation', 'Brand Guidelines', 'Multiple Formats', 'Unlimited Revisions']
            },
            {
              icon: <Layers size={32} />,
              title: 'Brand Identity',
              description: 'Complete brand identity packages including colors, typography, and visual elements',
              features: ['Brand Strategy', 'Visual Identity', 'Brand Guidelines', 'Stationery Design']
            },
            {
              icon: <Palette size={32} />,
              title: 'Graphic Design',
              description: 'Professional graphic design for all your marketing and promotional materials',
              features: ['Brochures & Flyers', 'Social Media Graphics', 'Packaging Design', 'Advertisement Design']
            },
            {
              icon: <Zap size={32} />,
              title: 'UI/UX Design',
              description: 'User-centered design solutions for websites and mobile applications',
              features: ['User Interface Design', 'User Experience Design', 'Wireframing', 'Prototyping']
            }
          ].map((service, index) => (
            <div key={index} style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              borderRadius: '20px',
              padding: '30px',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              transition: 'all 0.3s ease',
              animation: `fadeInUp 0.8s ease-out ${index * 0.1}s both`
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '20px',
                color: 'white'
              }}>
                {service.icon}
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  marginLeft: '15px',
                  margin: '0 0 0 15px'
                }}>
                  {service.title}
                </h3>
              </div>
              <p style={{
                color: 'rgba(255, 255, 255, 0.9)',
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
                    color: 'rgba(255, 255, 255, 0.8)',
                    marginBottom: '8px',
                    paddingLeft: '20px',
                    position: 'relative'
                  }}>
                    <span style={{
                      position: 'absolute',
                      left: '0',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: '6px',
                      height: '6px',
                      background: '#4ade80',
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
        <div style={{
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          borderRadius: '20px',
          padding: '40px',
          textAlign: 'center',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          animation: 'fadeInUp 1s ease-out'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            color: 'white',
            marginBottom: '20px'
          }}>
            Start Your Design Journey
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: 'rgba(255, 255, 255, 0.9)',
            marginBottom: '30px',
            maxWidth: '600px',
            margin: '0 auto 30px'
          }}>
            Ready to create stunning designs that captivate your audience? Let's bring your vision to life!
          </p>
          
          <div style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <button
              onClick={handleWhatsApp}
              style={{
                background: '#25D366',
                color: 'white',
                border: 'none',
                padding: '15px 30px',
                borderRadius: '50px',
                fontSize: '1.1rem',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                transition: 'all 0.3s ease',
                fontFamily: 'Archivo, sans-serif'
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
              <MessageCircle size={20} />
              WhatsApp Us
            </button>

            <button
              onClick={handleGoogleMeet}
              style={{
                background: '#4285f4',
                color: 'white',
                border: 'none',
                padding: '15px 30px',
                borderRadius: '50px',
                fontSize: '1.1rem',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                transition: 'all 0.3s ease',
                fontFamily: 'Archivo, sans-serif'
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
              <Video size={20} />
                Google Meet
            </button>

            <button
              onClick={handleCall}
              style={{
                background: '#ff6b6b',
                color: 'white',
                border: 'none',
                padding: '15px 30px',
                borderRadius: '50px',
                fontSize: '1.1rem',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                transition: 'all 0.3s ease',
                fontFamily: 'Archivo, sans-serif'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 8px 25px rgba(255, 107, 107, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              <Phone size={20} />
              Call Now
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default DesigningService;