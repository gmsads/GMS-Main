import React from 'react';
import { Target, Award, Users, TrendingUp, Heart, Zap } from 'lucide-react';

const About = () => {
  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '80px 20px'
  };

  const sectionStyle = {
    marginBottom: '60px'
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

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr',
    gap: '40px',
    alignItems: 'center',
    marginBottom: '60px'
  };

  const contentStyle = {
    padding: '20px'
  };

  const paragraphStyle = {
    fontSize: '16px',
    lineHeight: '1.8',
    color: '#4b5563',
    marginBottom: '20px'
  };

  const highlightStyle = {
    color: '#1e40af',
    fontWeight: 'bold'
  };

  const featuresGridStyle = {
    display: 'grid',
    gridTemplateColumns: window.innerWidth > 768 ? 'repeat(3, 1fr)' : '1fr',
    gap: '30px',
    marginTop: '40px'
  };

  const featureCardStyle = {
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '16px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    border: '1px solid #f3f4f6'
  };

  const iconStyle = {
    width: '60px',
    height: '60px',
    margin: '0 auto 20px',
    padding: '15px',
    borderRadius: '50%',
    backgroundColor: '#3b82f6',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const imageContainerStyle = {
    position: 'relative',
    borderRadius: '16px',
    overflow: 'hidden',
    backgroundColor: '#f8fafc',
    minHeight: '400px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const ceoSectionStyle = {
    backgroundColor: '#f8fafc',
    padding: '40px',
    borderRadius: '16px',
    textAlign: 'center',
    marginTop: '40px'
  };

  const features = [
    {
      icon: Target,
      title: "Strategic Approach",
      description: "We develop comprehensive marketing strategies tailored to your business goals and target audience."
    },
    {
      icon: Award,
      title: "8+ Years Excellence",
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

  return (
    <section id="about" style={{ backgroundColor: '#ffffff', paddingTop: '70px' }}>
      <div style={containerStyle}>
        <div style={sectionStyle}>
          <h2 style={titleStyle}>About Global Marketing Solutions</h2>
          <p style={subtitleStyle}>
            Your trusted partner in comprehensive marketing, advertising, and brand solutions with 8+ years of excellence
          </p>

          <div style={gridStyle}>
            <div style={contentStyle}>
              <p style={paragraphStyle}>
                <span style={highlightStyle}>Global Marketing Solutions</span> is a leading sales and marketing company 
                specializing in <span style={highlightStyle}>ATL (Above The Line)</span> and <span style={highlightStyle}>BTL (Below The Line)</span> advertising, 
                comprehensive branding, high-quality printing, and professional event management.
              </p>
              
              <p style={paragraphStyle}>
                With our own manufacturing capabilities and <span style={highlightStyle}>8+ years of industry experience</span>, 
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

            <div style={imageContainerStyle}>
              <div style={{
                textAlign: 'center',
                padding: '40px',
                color: '#6b7280'
              }}>
                <div style={{
                  width: '200px',
                  height: '200px',
                  backgroundColor: '#e5e7eb',
                  borderRadius: '50%',
                  margin: '0 auto 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '48px',
                  color: '#1e40af'
                }}>
                  GMS
                </div>
                <h3 style={{ color: '#1e40af', fontSize: '24px', marginBottom: '10px' }}>Our Vision</h3>
                <p>Empowering brands through innovative marketing solutions and exceptional service delivery</p>
              </div>
            </div>
          </div>

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
                  <feature.icon size={30} />
                </div>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: '#1e40af',
                  marginBottom: '15px'
                }}>
                  {feature.title}
                </h3>
                <p style={{
                  color: '#6b7280',
                  lineHeight: '1.6'
                }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div style={ceoSectionStyle}>
            <h3 style={{
              fontSize: '28px',
              fontWeight: 'bold',
              color: '#1e40af',
              marginBottom: '20px'
            }}>
              Leadership Excellence
            </h3>
            <p style={{
              fontSize: '18px',
              color: '#4b5563',
              marginBottom: '20px'
            }}>
              <span style={highlightStyle}>Mr. Bala Bharma Chari</span> - Chief Executive Officer
            </p>
            <p style={{
              color: '#6b7280',
              lineHeight: '1.8',
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              Our CEO brings extensive experience as a senior marketing advisor, leading our team with 
              strategic vision and industry expertise. Under his guidance, Global Marketing Solutions 
              has grown to become a trusted partner for businesses seeking comprehensive marketing solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;