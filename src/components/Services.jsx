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

const Services = ({ setCurrentView }) => {
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

  // CSS Styles as JavaScript objects
  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '80px 20px'
  };

  const titleStyle = {
    fontSize: '36px',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1e40af',
    marginBottom: '20px'
  };

  const subtitleStyle = {
    fontSize: '18px',
    textAlign: 'center',
    color: '#6b7280',
    marginBottom: '50px',
    maxWidth: '600px',
    margin: '0 auto 50px'
  };

  const servicesGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '30px',
    marginBottom: '60px'
  };

  const serviceCardStyle = {
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '16px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    border: '1px solid #f3f4f6',
    position: 'relative',
    overflow: 'hidden'
  };

  const serviceHeaderStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    marginBottom: '20px'
  };

  const iconContainerStyle = (color) => ({
    width: '50px',
    height: '50px',
    borderRadius: '12px',
    backgroundColor: color,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white'
  });

  const featureListStyle = {
    listStyle: 'none',
    padding: 0,
    margin: '20px 0'
  };

  const featureItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '10px',
    color: '#4b5563'
  };

  const learnMoreButtonStyle = (color) => ({
    backgroundColor: 'transparent',
    color: color,
    border: `2px solid ${color}`,
    padding: '12px 24px',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'all 0.3s ease',
    marginTop: '15px',
    width: '100%',
    justifyContent: 'center'
  });

  const specialServicesStyle = {
    backgroundColor: '#f8fafc',
    padding: '40px',
    borderRadius: '16px',
    marginTop: '60px'
  };

  const advertisingGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
    marginTop: '30px'
  };

  const advertisingItemStyle = {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '12px',
    textAlign: 'center',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
    transition: 'transform 0.3s ease'
  };

  // Modal overlay style
  const modalOverlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    padding: '20px'
  };

  // Modal content style
  const modalContentStyle = {
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '16px',
    maxWidth: '500px',
    width: '100%',
    boxShadow: '0 10px 50px rgba(0, 0, 0, 0.3)',
    textAlign: 'center'
  };

  // Function to handle learn more button click
  const handleLearnMore = (serviceId) => {
    setCurrentView(serviceId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="services" style={{ backgroundColor: '#ffffff', paddingTop: '70px' }}>
      {/* Call Options Modal */}
      {showCallOptions && (
        <div style={modalOverlayStyle} onClick={() => setShowCallOptions(false)}>
          <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
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
              marginBottom: '30px'
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
                  justifyContent: 'center'
                }}
                onClick={handleTeamsCall}
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
                  justifyContent: 'center'
                }}
                onClick={handleSkypeCall}
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
                  justifyContent: 'center'
                }}
                onClick={handleZoomCall}
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
                  justifyContent: 'center'
                }}
                onClick={copyPhoneNumber}
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
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <div style={containerStyle}>
        {/* Main Title Section */}
        <h2 style={titleStyle}>Our Services</h2>
        <p style={subtitleStyle}>
          Comprehensive marketing solutions designed to elevate your brand and drive business growth
        </p>

        {/* Services Grid Section */}
        <div style={servicesGridStyle}>
          {services.map((service) => (
            <div
              key={service.id}
              style={serviceCardStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
              }}
            >
              {/* Service Header with Icon */}
              <div style={serviceHeaderStyle}>
                <div style={iconContainerStyle(service.color)}>
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
              <ul style={featureListStyle}>
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} style={featureItemStyle}>
                    <Check size={16} style={{ color: service.color, flexShrink: 0 }} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Learn More Button */}
              <button
                style={learnMoreButtonStyle(service.color)}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = service.color;
                  e.target.style.color = 'white';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = service.color;
                  e.target.style.transform = 'translateY(0)';
                }}
                onClick={() => handleLearnMore(service.id)}
              >
                Learn More <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>

        {/* Specialized Advertising Section */}
        <div style={specialServicesStyle}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h3 style={{
              fontSize: '28px',
              fontWeight: 'bold',
              color: '#1e40af',
              marginBottom: '15px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px'
            }}>
              <Star size={28} style={{ color: '#fbbf24' }} />
              Specialized Advertising Solutions
              <Star size={28} style={{ color: '#fbbf24' }} />
            </h3>
            <p style={{
              color: '#6b7280',
              fontSize: '16px',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              We offer various advertising mediums to ensure your brand gets maximum visibility
            </p>
          </div>

          {/* Advertising Types Grid */}
          <div style={advertisingGridStyle}>
            {advertisingTypes.map((type, index) => (
              <div
                key={index}
                style={advertisingItemStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
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
                e.target.style.backgroundColor = '#1d4ed8';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#1e40af';
                e.target.style.transform = 'translateY(0)';
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
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '20px'
            }}>
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
                  justifyContent: 'center'
                }}
                onClick={() => {
                  const message = `Hello Global Marketing Solutions! I'm interested in your advertising services.`;
                  const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
                  window.open(whatsappUrl, '_blank');
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 4px 15px rgba(37, 211, 102, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
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
                  justifyContent: 'center'
                }}
                onClick={() => {
                  window.open('https://meet.google.com/new', '_blank');
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 4px 15px rgba(66, 133, 244, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
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
                  justifyContent: 'center'
                }}
                onClick={handleDirectCall}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 4px 15px rgba(16, 185, 129, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
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