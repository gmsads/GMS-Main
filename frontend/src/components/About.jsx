import React, { useState, useEffect } from 'react';
import { Target, Award, Users, TrendingUp, Heart, Zap, Eye, CheckCircle, Star, Shield, Clock, ThumbsUp, Briefcase } from 'lucide-react';

// Import Charysir image
import charysirImage from '../assets/charysir.jpeg';

const About = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: isMobile ? '30px 16px' : '50px 20px'
  };

  const sectionStyle = {
    marginBottom: isMobile ? '40px' : '60px'
  };

  const titleStyle = {
    fontSize: isMobile ? '26px' : isTablet ? '30px' : '36px',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1e40af',
    marginBottom: isMobile ? '15px' : '20px'
  };

  const subtitleStyle = {
    fontSize: isMobile ? '15px' : isTablet ? '16px' : '18px',
    textAlign: 'center',
    color: '#6b7280',
    marginBottom: isMobile ? '30px' : '50px',
    maxWidth: '700px',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: isMobile ? '0 10px' : '0'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
    gap: isMobile ? '30px' : '40px',
    alignItems: 'center',
    marginBottom: isMobile ? '40px' : '60px'
  };

  const contentStyle = {
    padding: isMobile ? '0' : '20px'
  };

  const paragraphStyle = {
    fontSize: isMobile ? '14px' : isTablet ? '15px' : '16px',
    lineHeight: '1.8',
    color: '#4b5563',
    marginBottom: isMobile ? '15px' : '20px'
  };

  const highlightStyle = {
    color: '#1e40af',
    fontWeight: 'bold'
  };

  const featuresGridStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
    gap: isMobile ? '20px' : '30px',
    marginTop: '40px'
  };

  const featureCardStyle = {
    backgroundColor: 'white',
    padding: isMobile ? '20px' : '30px',
    borderRadius: '16px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    border: '1px solid #f3f4f6',
    cursor: 'default'
  };

  const iconStyle = {
    width: isMobile ? '50px' : '60px',
    height: isMobile ? '50px' : '60px',
    margin: '0 auto isMobile ? "15px" : "20px"',
    padding: isMobile ? '12px' : '15px',
    borderRadius: '50%',
    backgroundColor: '#3b82f6',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
   
  };

  const imageContainerStyle = {
    position: 'relative',
    borderRadius: '16px',
    overflow: 'hidden',
    backgroundColor: '#f8fafc',
    minHeight: isMobile ? '300px' : '400px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
  };

  // Why Hire Us section styles
  const whyHireSectionStyle = {
    backgroundColor: '#f8fafc',
    borderRadius: '20px',
    padding: isMobile ? '30px 20px' : '50px 40px',
    marginTop: '40px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)'
  };

  const whyHireTitleStyle = {
    fontSize: isMobile ? '24px' : isTablet ? '28px' : '32px',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1e40af',
    marginBottom: isMobile ? '15px' : '20px'
  };

  const whyHireSubtitleStyle = {
    fontSize: isMobile ? '14px' : isTablet ? '15px' : '16px',
    textAlign: 'center',
    color: '#6b7280',
    marginBottom: isMobile ? '30px' : '40px',
    maxWidth: '700px',
    marginLeft: 'auto',
    marginRight: 'auto'
  };

  const whyHireGridStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
    gap: isMobile ? '15px' : '25px'
  };

  const whyHireItemStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '15px',
    padding: isMobile ? '15px' : '20px',
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'default'
  };

  const whyHireIconStyle = {
    flexShrink: 0,
    width: isMobile ? '36px' : '40px',
    height: isMobile ? '36px' : '40px',
    borderRadius: '50%',
    backgroundColor: '#3b82f6',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '2px'
  };

  const whyHireTextStyle = {
    flex: 1
  };

  const whyHireItemTitleStyle = {
    fontSize: isMobile ? '15px' : '16px',
    fontWeight: 'bold',
    color: '#1e40af',
    marginBottom: '5px'
  };

  const whyHireItemDescStyle = {
    fontSize: isMobile ? '13px' : '14px',
    color: '#6b7280',
    lineHeight: '1.5'
  };

  const features = [
    {
      icon: Target,
      title: "Strategic Approach",
      description: "We develop comprehensive marketing strategies tailored to your business goals and target audience."
    },
    {
      icon: Award,
      title: "10+ Years Excellence",
      description: "Nearly a decade of proven experience in delivering successful marketing campaigns and brand solutions."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Our team of seasoned professionals brings creativity, technical expertise, and industry knowledge."
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "Track record of driving growth and ROI for clients across various industries and business sizes."
    },
    {
      icon: Heart,
      title: "Client-Centric",
      description: "We prioritize understanding your unique needs and building long-term partnerships for success."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Cutting-edge solutions combining traditional marketing with modern digital strategies."
    }
  ];

  // Why Hire Us data
  const whyHireData = [
    {
      icon: CheckCircle,
      title: "Complete Solutions",
      description: "From ATL & BTL advertising to digital marketing, we offer end-to-end solutions under one roof."
    },
    {
      icon: Star,
      title: "10+ Years Experience",
      description: "Proven track record with 10+ years of delivering successful marketing campaigns."
    },
    {
      icon: Shield,
      title: "In-House Production",
      description: "Own manufacturing capabilities ensuring quality control and timely delivery."
    },
    {
      icon: Clock,
      title: "Timely Execution",
      description: "Dedicated operations team committed to meeting deadlines every time."
    },
    {
      icon: ThumbsUp,
      title: "Measurable Results",
      description: "Data-driven approach with focus on ROI and business growth."
    },
    {
      icon: Briefcase,
      title: "Professional Team",
      description: "Experienced marketing professionals dedicated to your success."
    }
  ];

  return (
    <section id="about" style={{ backgroundColor: '#ffffff', paddingTop: '70px' }}>
      <div style={containerStyle}>
        <div style={sectionStyle}>
          <h2 style={titleStyle}>About Global Marketing Solutions</h2>
          <p style={subtitleStyle}>
            Your trusted partner in comprehensive marketing, advertising, and brand solutions with 10+ years of excellence
          </p>

          <div style={gridStyle}>
            <div style={contentStyle}>
              <p style={paragraphStyle}>
                <span style={highlightStyle}>Global Marketing Solutions</span> is a leading sales and marketing company 
                specializing in <span style={highlightStyle}>ATL (Above The Line)</span> and <span style={highlightStyle}>BTL (Below The Line)</span> advertising, 
                comprehensive branding, high-quality printing, and professional event management.
              </p>
              
              <p style={paragraphStyle}>
                With our own manufacturing capabilities and <span style={highlightStyle}>10+ years of industry experience</span>, 
                we've established ourselves as a one-stop solution for all marketing and advertising needs. Our expertise 
                extends to digital marketing, web development, logo design, and graphic design.
              </p>

              <p style={paragraphStyle}>
                We take pride in our diverse advertising solutions including flex banners, tricycle advertising, 
                mobile van campaigns, pole boards, sky balloons, and grand opening events. Our large-scale production 
                facility and experienced team ensure quality delivery for projects of any size.
              </p>

              <p style={paragraphStyle}>
                Under the leadership of our <span style={highlightStyle}>CEO Mr. Bala Bharma Chari</span>, 
                a senior experienced marketing advisor, we continue to drive innovation and excellence in every project.
              </p>
            </div>

            {/* Image Container */}
            <div style={imageContainerStyle}>
              <div style={{
                textAlign: 'center',
                padding: isMobile ? '30px' : '40px',
                color: '#6b7280',
                width: '100%'
              }}>
                {/* Round Circle with Charysir Image */}
                <div style={{
                  width: isMobile ? '150px' : isTablet ? '180px' : '200px',
                  height: isMobile ? '150px' : isTablet ? '180px' : '200px',
                  borderRadius: '50%',
                  margin: '0 auto 20px',
                  overflow: 'hidden',
                  border: '4px solid #1e40af',
                  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
                  backgroundColor: '#e5e7eb',
                  position: 'relative'
                }}>
                  {!imageError ? (
                    <img 
                      src={charysirImage}
                      alt="Mr. Bala Bharma Chari - CEO"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                      onError={(e) => {
                        console.error('Image failed to load');
                        setImageError(true);
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = `
                          <div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #1e40af, #3b82f6); color: white; font-size: ${isMobile ? '32px' : '48px'}; font-weight: bold;">
                            BC
                          </div>
                        `;
                      }}
                    />
                  ) : (
                    <div style={{
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'linear-gradient(135deg, #1e40af, #3b82f6)',
                      color: 'white',
                      fontSize: isMobile ? '32px' : '48px',
                      fontWeight: 'bold'
                    }}>
                      BC
                    </div>
                  )}
                </div>
                <h3 style={{ color: '#1e40af', fontSize: isMobile ? '20px' : '24px', marginBottom: '10px' }}>Our Vision</h3>
                <p style={{ color: '#6b7280', lineHeight: '1.6', fontSize: isMobile ? '14px' : '16px', padding: isMobile ? '0 10px' : '0' }}>
                  Empowering brands through innovative marketing solutions and exceptional service delivery
                </p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div style={featuresGridStyle}>
            {features.map((feature, index) => (
              <div
                key={index}
                style={featureCardStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
                }}
              >
                <div style={iconStyle}>
                  <feature.icon size={isMobile ? 24 : 30} />
                </div>
                <h3 style={{
                  fontSize: isMobile ? '16px' : '20px',
                  fontWeight: 'bold',
                  color: '#1e40af',
                  marginBottom: isMobile ? '10px' : '15px'
                }}>
                  {feature.title}
                </h3>
                <p style={{
                  color: '#6b7280',
                  lineHeight: '1.6',
                  fontSize: isMobile ? '13px' : '14px'
                }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Why Hire Us Section - IMPROVED */}
          <div style={whyHireSectionStyle}>
            <h2 style={whyHireTitleStyle}>
              Why Choose Global Marketing Solutions?
            </h2>
            <p style={whyHireSubtitleStyle}>
              Hyderabad's trusted advertising, branding, printing, and event management company with over 10 years of industry experience
            </p>

            <div style={whyHireGridStyle}>
              {whyHireData.map((item, index) => (
                <div
                  key={index}
                  style={whyHireItemStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
                  }}
                >
                  <div style={whyHireIconStyle}>
                    <item.icon size={isMobile ? 16 : 18} />
                  </div>
                  <div style={whyHireTextStyle}>
                    <h4 style={whyHireItemTitleStyle}>{item.title}</h4>
                    <p style={whyHireItemDescStyle}>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info Cards */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
              gap: isMobile ? '15px' : '20px',
              marginTop: isMobile ? '25px' : '35px'
            }}>
              <div style={{
                backgroundColor: '#1e40af',
                color: 'white',
                padding: isMobile ? '20px' : '25px',
                borderRadius: '12px',
                textAlign: 'center'
              }}>
                <h4 style={{ fontSize: isMobile ? '18px' : '20px', fontWeight: 'bold', marginBottom: '8px' }}>
                  Complete ATL & BTL Solutions
                </h4>
                <p style={{ fontSize: isMobile ? '13px' : '14px', opacity: 0.9, lineHeight: '1.6' }}>
                  From auto-top advertising, mobile van campaigns, flex printing, UV printing, hoardings, pole kiosks, no parking boards, and event branding to digital marketing, website development, logo design, and social media management
                </p>
              </div>

              <div style={{
                backgroundColor: '#3b82f6',
                color: 'white',
                padding: isMobile ? '20px' : '25px',
                borderRadius: '12px',
                textAlign: 'center'
              }}>
                <h4 style={{ fontSize: isMobile ? '18px' : '20px', fontWeight: 'bold', marginBottom: '8px' }}>
                  End-to-End Marketing Solutions
                </h4>
                <p style={{ fontSize: isMobile ? '13px' : '14px', opacity: 0.9, lineHeight: '1.6' }}>
                  In-house production capabilities, dedicated operations team, and experienced marketing professionals ensuring timely delivery, quality execution, and measurable results for every campaign
                </p>
              </div>
            </div>

            {/* Stats Section */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
              gap: isMobile ? '15px' : '20px',
              marginTop: isMobile ? '25px' : '35px'
            }}>
              <div style={{ textAlign: 'center', backgroundColor: 'white', padding: isMobile ? '15px' : '20px', borderRadius: '12px' }}>
                <div style={{ fontSize: isMobile ? '28px' : '36px', fontWeight: 'bold', color: '#1e40af' }}>10+</div>
                <div style={{ fontSize: isMobile ? '12px' : '14px', color: '#6b7280' }}>Years Experience</div>
              </div>
              <div style={{ textAlign: 'center', backgroundColor: 'white', padding: isMobile ? '15px' : '20px', borderRadius: '12px' }}>
                <div style={{ fontSize: isMobile ? '28px' : '36px', fontWeight: 'bold', color: '#1e40af' }}>5000+</div>
                <div style={{ fontSize: isMobile ? '12px' : '14px', color: '#6b7280' }}>Projects Completed</div>
              </div>
              <div style={{ textAlign: 'center', backgroundColor: 'white', padding: isMobile ? '15px' : '20px', borderRadius: '12px' }}>
                <div style={{ fontSize: isMobile ? '28px' : '36px', fontWeight: 'bold', color: '#1e40af' }}>100%</div>
                <div style={{ fontSize: isMobile ? '12px' : '14px', color: '#6b7280' }}>Client Satisfaction</div>
              </div>
              <div style={{ textAlign: 'center', backgroundColor: 'white', padding: isMobile ? '15px' : '20px', borderRadius: '12px' }}>
                <div style={{ fontSize: isMobile ? '28px' : '36px', fontWeight: 'bold', color: '#1e40af' }}>24/7</div>
                <div style={{ fontSize: isMobile ? '12px' : '14px', color: '#6b7280' }}>Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;