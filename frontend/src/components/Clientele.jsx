import React, { useState, useEffect } from 'react';

const Clientele = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const clientLogos = [
    { name: 'Swiggy', category: 'Food Delivery', color: '#ff6b35' },
    { name: 'Blinkit', category: 'Quick Commerce', color: '#00d4aa' },
    { name: 'Euro Kids', category: 'Education', color: '#ff4757' },
    { name: 'CMR Group', category: 'Education', color: '#3742fa' },
    { name: 'Kubera', category: 'Real Estate', color: '#2ed573' },
    { name: 'Roop Sagar', category: 'Retail', color: '#ffa502' },
    { name: 'Kaam Hain Na', category: 'Job Platform', color: '#5352ed' },
    { name: 'Apollo Hospitals', category: 'Healthcare', color: '#ff3838' },
    { name: 'Max Healthcare', category: 'Healthcare', color: '#0984e3' },
    { name: 'Fortis', category: 'Healthcare', color: '#00b894' },
    { name: 'DPS School', category: 'Education', color: '#fdcb6e' },
    { name: 'Ryan International', category: 'Education', color: '#6c5ce7' },
    { name: 'Kendriya Vidyalaya', category: 'Education', color: '#fd79a8' },
    { name: 'Forum Mall', category: 'Shopping', color: '#00cec9' },
    { name: 'Phoenix Mall', category: 'Shopping', color: '#e17055' },
    { name: 'Inorbit Mall', category: 'Shopping', color: '#74b9ff' },
    { name: 'Times of India', category: 'Media', color: '#2d3436' },
    { name: 'Deccan Chronicle', category: 'Media', color: '#636e72' },
    { name: 'Eenadu', category: 'Media', color: '#00b894' }
  ];

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: windowWidth < 768 ? '40px 16px' : '60px 20px'
  };

  const logosGridStyle = {
    display: 'grid',
    gridTemplateColumns: windowWidth < 480 ? 'repeat(2, 1fr)' : (windowWidth < 768 ? 'repeat(2, 1fr)' : 'repeat(auto-fit, minmax(180px, 1fr))'),
    gap: windowWidth < 480 ? '12px' : '20px',
    marginTop: '30px'
  };

  const logoCardStyle = {
    backgroundColor: 'white',
    padding: windowWidth < 480 ? '12px' : '20px',
    borderRadius: '12px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
    textAlign: 'center',
    transition: 'all 0.3s ease',
    border: '1px solid #f1f5f9'
  };

  return (
    <section id="clientele" style={{ backgroundColor: '#f8fafc', paddingTop: '10px' }}>
      <div style={containerStyle}>
        {/* Header */}
        <h2 style={{
          fontSize: windowWidth < 768 ? '28px' : '36px',
          fontWeight: 'bold',
          textAlign: 'center',
          color: '#1e40af',
          marginBottom: '15px'
        }}>
          Our Valued Clients
        </h2>
        <p style={{
          fontSize: windowWidth < 768 ? '14px' : '16px',
          textAlign: 'center',
          color: '#6b7280',
          marginBottom: '40px',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          Brands that trust us with their visual identity and marketing needs
        </p>

        {/* Client Logos Grid */}
        <div style={{
          backgroundColor: 'white',
          padding: windowWidth < 768 ? '20px 15px' : '40px',
          borderRadius: '16px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
        }}>
          <div style={logosGridStyle}>
            {clientLogos.map((client, index) => (
              <div
                key={index}
                style={logoCardStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
                }}
              >
                <div style={{
                  width: windowWidth < 480 ? '45px' : '60px',
                  height: windowWidth < 480 ? '45px' : '60px',
                  borderRadius: '12px',
                  backgroundColor: client.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 12px',
                  color: 'white',
                  fontSize: windowWidth < 480 ? '16px' : '18px',
                  fontWeight: 'bold'
                }}>
                  {client.name.charAt(0)}
                </div>
                <h4 style={{
                  fontSize: windowWidth < 480 ? '13px' : '15px',
                  fontWeight: 'bold',
                  color: '#1e40af',
                  marginBottom: '4px'
                }}>
                  {client.name}
                </h4>
                <p style={{
                  color: '#6b7280',
                  fontSize: windowWidth < 480 ? '10px' : '11px',
                  margin: 0
                }}>
                  {client.category}
                </p>
              </div>
            ))}
          </div>
        </div>

      
        {/* CTA Section */}
        <div style={{
          textAlign: 'center',
          marginTop: '40px',
          background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
          padding: windowWidth < 768 ? '30px 20px' : '50px 30px',
          borderRadius: '16px',
          color: 'white'
        }}>
          <h3 style={{
            fontSize: windowWidth < 768 ? '22px' : '28px',
            fontWeight: 'bold',
            marginBottom: '15px'
          }}>
            Ready to Join Our Client Family?
          </h3>
          <p style={{
            fontSize: windowWidth < 768 ? '13px' : '16px',
            marginBottom: '25px',
            opacity: 0.9,
            maxWidth: '500px',
            margin: '0 auto 25px'
          }}>
            Let's create something amazing together and add your brand to our success stories
          </p>
          <button
            style={{
              backgroundColor: 'white',
              color: '#1e40af',
              border: 'none',
              padding: windowWidth < 768 ? '12px 24px' : '15px 30px',
              borderRadius: '8px',
              fontSize: windowWidth < 768 ? '14px' : '16px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Get Started Today
          </button>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
      `}</style>
    </section>
  );
};

export default Clientele;