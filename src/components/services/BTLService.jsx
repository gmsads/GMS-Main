import React from 'react';
import { ArrowLeft, Users, Target, Calendar, Phone, MessageCircle, Video, Mail, TrendingUp, Zap } from 'lucide-react';

const BTLService = ({ onBack }) => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/919876543210?text=Hi! I\'m interested in your BTL Marketing services. Can you help me?', '_blank');
  };

  const handleGoogleMeet = () => {
    window.open('https://meet.google.com/new', '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+919876543210';
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
            <Target size={40} color="white" />
          </div>
          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: '700',
            color: 'white',
            marginBottom: '20px',
            textShadow: '0 4px 8px rgba(0,0,0,0.3)'
          }}>
            BTL Marketing Services
          </h1>
          <p style={{
            fontSize: '1.3rem',
            color: 'rgba(255, 255, 255, 0.9)',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Below The Line marketing strategies that create direct, measurable connections with your target audience through personalized experiences
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
              icon: <Users size={32} />,
              title: 'Event Marketing',
              description: 'Create memorable experiences through strategic event planning and execution',
              features: ['Product Launch Events', 'Trade Shows & Exhibitions', 'Corporate Events', 'Brand Activations']
            },
            {
              icon: <Target size={32} />,
              title: 'Direct Marketing',
              description: 'Targeted marketing campaigns that reach specific audiences with personalized messages',
              features: ['Email Campaigns', 'SMS Marketing', 'Direct Mail', 'Telemarketing']
            },
            {
              icon: <Calendar size={32} />,
              title: 'Promotional Activities',
              description: 'Engaging promotional campaigns that drive immediate action and customer engagement',
              features: ['Sales Promotions', 'Sampling Campaigns', 'Loyalty Programs', 'Contest & Giveaways']
            },
            {
              icon: <Phone size={32} />,
              title: 'Personal Selling',
              description: 'One-on-one sales strategies that build relationships and drive conversions',
              features: ['Sales Team Training', 'Customer Relationship Management', 'Lead Generation', 'Sales Process Optimization']
            },
            {
              icon: <Mail size={32} />,
              title: 'Database Marketing',
              description: 'Data-driven marketing approaches that leverage customer insights for better targeting',
              features: ['Customer Segmentation', 'Behavioral Analysis', 'Personalized Campaigns', 'ROI Tracking']
            },
            {
              icon: <TrendingUp size={32} />,
              title: 'Relationship Marketing',
              description: 'Long-term customer relationship building through consistent engagement and value delivery',
              features: ['Customer Retention Programs', 'Loyalty Initiatives', 'Referral Programs', 'Community Building']
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
            Start Your BTL Campaign Today
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: 'rgba(255, 255, 255, 0.9)',
            marginBottom: '30px',
            maxWidth: '600px',
            margin: '0 auto 30px'
          }}>
            Ready to create personalized marketing experiences that drive results? Let's discuss your BTL marketing strategy
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

export default BTLService;