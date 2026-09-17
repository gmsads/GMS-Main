import React, { useState } from 'react';
import { 
  Megaphone, 
  Target, 
  Monitor, 
  Code, 
  Palette, 
  Printer,
  ArrowRight,
  Check,
  Star,
  Phone,
  MessageCircle,
  Video,
  Flag,
  Car,
  Navigation,
  Cloud,
  Calendar
} from 'lucide-react';

const Services = ({ navigateTo }) => {
  // Phone number configuration
  const phoneNumber = '9876543210';
  const [showCallOptions, setShowCallOptions] = useState(false);

  // Direct call function for mobile devices
  const handleDirectCall = () => {
    console.log('Attempting direct call to:', phoneNumber);
    
    // Create and trigger tel link immediately while we have user gesture
    const telLink = document.createElement('a');
    telLink.href = `tel:${phoneNumber}`;
    telLink.style.display = 'none';
    document.body.appendChild(telLink);
    
    try {
      telLink.click();
      console.log('Tel protocol triggered');
    } catch (error) {
      console.log('Tel protocol failed:', error);
    } finally {
      document.body.removeChild(telLink);
    }
    
    // For desktop, show call options modal
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (!isMobile) {
      setShowCallOptions(true);
    }
  };

  // Microsoft Teams specific call function
  const handleTeamsCall = () => {
    console.log('Opening Microsoft Teams for call');
    
    // Create a temporary link element for Teams protocol
    const teamsLink = document.createElement('a');
    teamsLink.href = `msteams://calls/?title=Call%20Global%20Marketing%20Solutions&phoneNumber=${phoneNumber}`;
    teamsLink.style.display = 'none';
    document.body.appendChild(teamsLink);
    
    try {
      teamsLink.click();
      console.log('Microsoft Teams protocol triggered');
    } catch (error) {
      console.log('Microsoft Teams protocol failed:', error);
      // Fallback: Open Teams web or show instructions
      window.open('https://teams.microsoft.com/', '_blank');
      showTeamsInstructions();
    } finally {
      document.body.removeChild(teamsLink);
      setShowCallOptions(false);
    }
  };

  // Skype call function
  const handleSkypeCall = () => {
    console.log('Opening Skype for call');
    
    const skypeLink = document.createElement('a');
    skypeLink.href = `skype:${phoneNumber}?call`;
    skypeLink.style.display = 'none';
    document.body.appendChild(skypeLink);
    
    try {
      skypeLink.click();
      console.log('Skype protocol triggered');
    } catch (error) {
      console.log('Skype protocol failed:', error);
      window.open('https://web.skype.com/', '_blank');
    } finally {
      document.body.removeChild(skypeLink);
      setShowCallOptions(false);
    }
  };

  // Zoom call function
  const handleZoomCall = () => {
    console.log('Opening Zoom for call');
    window.open('https://zoom.us/phone', '_blank');
    setShowCallOptions(false);
  };

  // Show detailed Teams instructions
  const showTeamsInstructions = () => {
    const instructions = `
📞 MICROSOFT TEAMS CALL INSTRUCTIONS:

1. Open Microsoft Teams app
2. Go to the "Calls" tab
3. Dial this number: ${phoneNumber}
4. Press the call button

Or manually dial in Teams:
- Click on "Calls" in left sidebar
- Click "Dial a number" 
- Enter: ${phoneNumber}
- Click call

We're ready to take your call! 🎯
    `;
    alert(instructions);
  };

  // Copy phone number to clipboard
  const copyPhoneNumber = () => {
    navigator.clipboard.writeText(phoneNumber).then(() => {
      alert(`✅ Phone number copied to clipboard: ${phoneNumber}\n\nYou can now paste it in any calling app!`);
    }).catch(() => {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = phoneNumber;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      alert(`✅ Phone number copied: ${phoneNumber}\n\nYou can now paste it in any calling app!`);
    });
    setShowCallOptions(false);
  };

  // Services data array
  const services = [
    {
      id: 'atl',
      icon: Megaphone,
      title: 'ATL (Above The Line)',
      description: 'Mass media advertising for maximum reach and brand awareness',
      features: [
        'Television Advertising',
        'Radio Campaigns', 
        'Newspaper Ads',
        'Billboard Advertising',
        'Magazine Placements',
        'Cinema Advertising'
      ],
      color: '#3b82f6'
    },
    {
      id: 'btl',
      icon: Target,
      title: 'BTL (Below The Line)',
      description: 'Targeted marketing for specific audiences and direct engagement',
      features: [
        'Direct Mail Campaigns',
        'Email Marketing',
        'Trade Shows',
        'Product Sampling',
        'Promotional Events',
        'Guerrilla Marketing'
      ],
      color: '#10b981'
    },
    {
      id: 'digital',
      icon: Monitor,
      title: 'Digital Marketing',
      description: 'Comprehensive digital solutions for online growth',
      features: [
        'Social Media Marketing',
        'Search Engine Optimization',
        'Pay-Per-Click Advertising',
        'Content Marketing',
        'Email Automation',
        'Analytics & Reporting'
      ],
      color: '#f59e0b'
    },
    {
      id: 'webdev',
      icon: Code,
      title: 'Web Development',
      description: 'Professional websites and web applications',
      features: [
        'Responsive Website Design',
        'E-commerce Development',
        'Custom Web Applications',
        'Mobile App Development',
        'API Integration',
        'Maintenance & Support'
      ],
      color: '#8b5cf6'
    },
    {
      id: 'designing',
      icon: Palette,
      title: 'Designing Services',
      description: 'Creative design solutions for brand identity',
      features: [
        'Logo Design',
        'Brand Identity',
        'Graphic Design',
        'UI/UX Design',
        'Package Design',
        'Marketing Collaterals'
      ],
      color: '#ef4444'
    },
    {
      id: 'printing',
      icon: Printer,
      title: 'Printing Services',
      description: 'High-quality printing with our own manufacturing facility',
      features: [
        'Flex Banners',
        'Business Cards',
        'Brochures & Flyers',
        'Pole Boards',
        'Vehicle Wrapping',
        'Large Format Printing'
      ],
      color: '#06b6d4'
    },
    {
      id: 'auto-rickshaw-advertising-hyderabad',
      icon: Car,
      title: 'Auto Tops & Branding',
      description: 'Promote your brand across Hyderabad with auto rickshaw advertising',
      features: [
        'Auto Top Advertising',
        'Auto Rear Panel Branding',
        'Auto Side Panel Branding',
        'Full Auto Branding Campaigns',
        'Route-Based Auto Advertising',
        'Campaign Design & Support'
      ],
      color: '#ec4899'
    }
  ];

  // Advertising types data array
  const advertisingTypes = [
    { name: 'Flex Banners', icon: Flag },
    { name: 'Tricycle Advertising', icon: Car },
    { name: 'Mobile Van Campaigns', icon: Car },
    { name: 'Pole Boards', icon: Navigation },
    { name: 'Sky Balloons', icon: Cloud },
    { name: 'Grand Opening Events', icon: Calendar }
  ];

  // Function to handle learn more button click
  const handleLearnMore = (serviceId) => {
    navigateTo(serviceId);
  };

  // Responsive styles as CSS-in-JS
  const responsiveStyles = `
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

    /* Base responsive styles */
    .services-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 40px 20px;
    }

    .services-title {
      font-size: 36px;
      font-weight: bold;
      text-align: center;
      color: #1e40af;
      margin-bottom: 15px;
    }

    .services-subtitle {
      font-size: 18px;
      text-align: center;
      color: #6b7280;
      margin-bottom: 40px;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }

    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 30px;
      margin-bottom: 60px;
    }

    .service-card {
      background-color: white;
      padding: 30px;
      border-radius: 16px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
      border: 1px solid #f3f4f6;
      position: relative;
      overflow: hidden;
    }

    .service-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
    }

    .service-header {
      display: flex;
      align-items: center;
      gap: 15px;
      margin-bottom: 20px;
    }

    .feature-list {
      list-style: none;
      padding: 0;
      margin: 20px 0;
    }

    .feature-item {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 10px;
      color: #4b5563;
    }

    .learn-more-btn {
      background-color: transparent;
      padding: 12px 24px;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      transition: all 0.3s ease;
      margin-top: 15px;
      width: 100%;
      justify-content: center;
    }

    .special-services {
      background-color: #f8fafc;
      padding: 40px;
      border-radius: 16px;
      margin-top: 60px;
    }

    .advertising-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
      margin-top: 30px;
    }

    .advertising-item {
      background-color: white;
      padding: 20px;
      border-radius: 12px;
      text-align: center;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
      transition: transform 0.3s ease;
    }

    .advertising-item:hover {
      transform: translateY(-5px);
    }

    .contact-buttons-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
    }

    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.7);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      padding: 20px;
    }

    .modal-content {
      background-color: white;
      padding: 30px;
      border-radius: 16px;
      max-width: 500px;
      width: 100%;
      box-shadow: 0 10px 50px rgba(0, 0, 0, 0.3);
      text-align: center;
    }

    /* Mobile Responsive Styles */
    @media (max-width: 768px) {
      .services-container {
        padding: 30px 16px;
      }
      
      .services-title {
        font-size: 28px;
        margin-bottom: 12px;
      }
      
      .services-subtitle {
        font-size: 16px;
        margin-bottom: 30px;
        padding: 0 10px;
      }
      
      .services-grid {
        grid-template-columns: 1fr;
        gap: 20px;
      }
      
      .service-card {
        padding: 20px;
      }
      
      .service-header {
        flex-direction: column;
        text-align: center;
        gap: 10px;
      }
      
      .service-header h3 {
        font-size: 20px !important;
      }
      
      .feature-item {
        font-size: 14px;
      }
      
      .special-services {
        padding: 20px;
        margin-top: 40px;
      }
      
      .special-services h3 {
        font-size: 24px !important;
      }
      
      .advertising-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 15px;
      }
      
      .advertising-item {
        padding: 15px;
      }
      
      .advertising-item h4 {
        font-size: 14px !important;
      }
      
      .contact-buttons-grid {
        grid-template-columns: 1fr;
        gap: 15px;
      }
      
      .modal-content {
        padding: 20px;
        margin: 20px;
      }
      
      .modal-content h3 {
        font-size: 20px !important;
      }
      
      .modal-content button {
        padding: 12px 16px !important;
      }
    }

    @media (min-width: 769px) and (max-width: 1024px) {
      .services-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 25px;
      }
      
      .advertising-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  `;

  return (
    <section id="services" style={{ backgroundColor: '#ffffff', paddingTop: '10px' }}>
      <style>{responsiveStyles}</style>

      {/* Call Options Modal */}
      {showCallOptions && (
        <div className="modal-overlay" onClick={() => setShowCallOptions(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3 style={{
              fontSize: '24px',
              fontWeight: 'bold',
              color: '#1e40af',
              marginBottom: '10px'
            }}>
              📞 Call Us Now
            </h3>
            <p style={{
              fontSize: '18px',
              color: '#6b7280',
              marginBottom: '30px',
              wordBreak: 'break-all'
            }}>
              {phoneNumber}
            </p>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '15px',
              marginBottom: '25px'
            }}>
              <button
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '15px 20px',
                  backgroundColor: '#6264A7',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  justifyContent: 'center',
                  width: '100%'
                }}
                onClick={handleTeamsCall}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
              >
                <Video size={20} />
                Call with Microsoft Teams
              </button>

              <button
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '15px 20px',
                  backgroundColor: '#00AFF0',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  justifyContent: 'center',
                  width: '100%'
                }}
                onClick={handleSkypeCall}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
              >
                <Video size={20} />
                Call with Skype
              </button>

              <button
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '15px 20px',
                  backgroundColor: '#0E72ED',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  justifyContent: 'center',
                  width: '100%'
                }}
                onClick={handleZoomCall}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
              >
                <Video size={20} />
                Call with Zoom Phone
              </button>

              <button
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '15px 20px',
                  backgroundColor: '#10b981',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  justifyContent: 'center',
                  width: '100%'
                }}
                onClick={copyPhoneNumber}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
              >
                <Phone size={20} />
                Copy Number to Clipboard
              </button>
            </div>

            <button
              style={{
                padding: '10px 20px',
                backgroundColor: 'transparent',
                color: '#6b7280',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '14px',
                cursor: 'pointer',
                width: '100%'
              }}
              onClick={() => setShowCallOptions(false)}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f3f4f6';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="services-container">
        {/* Main Title Section */}
        <h2 className="services-title">Our Services</h2>
        <p className="services-subtitle">
          Comprehensive marketing solutions designed to elevate your brand and drive business growth
        </p>

        {/* Services Grid Section */}
        <div className="services-grid">
          {services.map((service) => (
            <div
              key={service.id}
              className="service-card"
            >
              {/* Service Header with Icon */}
              <div className="service-header">
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '12px',
                  backgroundColor: service.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  flexShrink: 0
                }}>
                  <service.icon size={24} />
                </div>
                <div>
                  <h3 style={{
                    fontSize: '22px',
                    fontWeight: 'bold',
                    color: '#1e40af',
                    margin: 0
                  }}>
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Service Description */}
              <p style={{
                color: '#6b7280',
                marginBottom: '20px',
                lineHeight: '1.6'
              }}>
                {service.description}
              </p>

              {/* Features List */}
              <ul className="feature-list">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="feature-item">
                    <Check size={16} style={{ color: service.color, flexShrink: 0 }} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Learn More Button */}
              <button
                className="learn-more-btn"
                style={{
                  border: `2px solid ${service.color}`,
                  color: service.color
                }}
                onClick={() => handleLearnMore(service.id)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = service.color;
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = service.color;
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Learn More <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>

        {/* Specialized Advertising Section */}
        <div className="special-services">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h3 style={{
              fontSize: '28px',
              fontWeight: 'bold',
              color: '#1e40af',
              marginBottom: '15px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              flexWrap: 'wrap'
            }}>
              <Star size={28} style={{ color: '#fbbf24' }} />
              Specialized Advertising Solutions
              <Star size={28} style={{ color: '#fbbf24' }} />
            </h3>
            <p style={{
              color: '#6b7280',
              fontSize: '16px',
              maxWidth: '600px',
              margin: '0 auto',
              padding: '0 10px'
            }}>
              We offer various advertising mediums to ensure your brand gets maximum visibility
            </p>
          </div>

          {/* Advertising Types Grid */}
          <div className="advertising-grid">
            {advertisingTypes.map((type, index) => (
              <div
                key={index}
                className="advertising-item"
              >
                <div style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: '#3b82f6',
                  borderRadius: '8px',
                  margin: '0 auto 15px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <type.icon size={20} style={{ color: 'white' }} />
                </div>
                <h4 style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#1e40af',
                  margin: 0
                }}>
                  {type.name}
                </h4>
              </div>
            ))}
          </div>

          {/* Get Quote Button */}
          <div style={{
            textAlign: 'center',
            marginTop: '40px'
          }}>
            <button
              style={{
                backgroundColor: '#1e40af',
                color: 'white',
                border: 'none',
                padding: '15px 30px',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#1d4ed8';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#1e40af';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Get Custom Quote <ArrowRight size={20} />
            </button>
          </div>

          {/* Contact Options Section */}
          <div style={{
            backgroundColor: 'white',
            padding: '40px',
            borderRadius: '16px',
            marginTop: '40px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
          }}>
            <h3 style={{
              fontSize: '24px',
              fontWeight: 'bold',
              color: '#1e40af',
              textAlign: 'center',
              marginBottom: '30px'
            }}>
              Ready to Get Started?
            </h3>
            
            {/* Contact Buttons Grid */}
            <div className="contact-buttons-grid">
              {/* WhatsApp Button */}
              <button
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '15px 20px',
                  backgroundColor: '#25D366',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  justifyContent: 'center',
                  width: '100%'
                }}
                onClick={() => {
                  const message = `Hello Global Marketing Solutions! I'm interested in your advertising services.`;
                  const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
                  window.open(whatsappUrl, '_blank');
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(37, 211, 102, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <MessageCircle size={20} />
                WhatsApp Chat
              </button>

              {/* Google Meet Button */}
              <button
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '15px 20px',
                  backgroundColor: '#4285f4',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  justifyContent: 'center',
                  width: '100%'
                }}
                onClick={() => {
                  window.open('https://meet.google.com/new', '_blank');
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(66, 133, 244, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <Video size={20} />
                Google Meet
              </button>

              {/* Enhanced Call Now Button */}
              <button
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '15px 20px',
                  backgroundColor: '#10b981',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  justifyContent: 'center',
                  width: '100%'
                }}
                onClick={handleDirectCall}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(16, 185, 129, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <Phone size={20} />
                Call Now ({phoneNumber})
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;