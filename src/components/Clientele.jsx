import React from 'react';

const Clientele = () => {
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
    padding: '80px 20px'
  };

  const logosGridStyle = {
    display: 'grid',
    gridTemplateColumns: window.innerWidth > 768 ? 'repeat(auto-fit, minmax(200px, 1fr))' : 'repeat(2, 1fr)',
    gap: '20px',
    marginTop: '40px'
  };

  const logoCardStyle = {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
    textAlign: 'center',
    transition: 'all 0.3s ease',
    border: '1px solid #f1f5f9'
  };

  return (
    <section id="clientele" style={{ backgroundColor: '#f8fafc', paddingTop: '70px' }}>
      <div style={containerStyle}>
       

        {/* Client Logos */}
        <div style={{
          backgroundColor: 'white',
          padding: '40px',
          borderRadius: '16px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
        }}>
          <h3 style={{
            fontSize: '28px',
            fontWeight: 'bold',
            color: '#1e40af',
            textAlign: 'center',
            marginBottom: '20px'
          }}>
            Our Valued Clients
          </h3>
          <p style={{
            textAlign: 'center',
            color: '#6b7280',
            marginBottom: '40px'
          }}>
            Brands that trust us with their visual identity and marketing needs
          </p>

          <div style={logosGridStyle}>
            {clientLogos.map((client, index) => (
              <div
                key={index}
                style={{
                  ...logoCardStyle,
                  animation: `float 3s ease-in-out infinite ${index * 0.2}s`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
                }}
              >
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '12px',
                  backgroundColor: client.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 15px',
                  color: 'white',
                  fontSize: '18px',
                  fontWeight: 'bold'
                }}>
                  {client.name.charAt(0)}
                </div>
                <h4 style={{
                  fontSize: '16px',
                  fontWeight: 'bold',
                  color: '#1e40af',
                  marginBottom: '5px'
                }}>
                  {client.name}
                </h4>
                <p style={{
                  color: '#6b7280',
                  fontSize: '12px',
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
          marginTop: '60px',
          backgroundColor: '#1e40af',
          padding: '40px',
          borderRadius: '16px',
          color: 'white'
        }}>
          <h3 style={{
            fontSize: '28px',
            fontWeight: 'bold',
            marginBottom: '20px'
          }}>
            Ready to Join Our Client Family?
          </h3>
          <p style={{
            fontSize: '18px',
            marginBottom: '30px',
            opacity: 0.9
          }}>
            Let's create something amazing together and add your brand to our success stories
          </p>
          <button
            style={{
              backgroundColor: 'white',
              color: '#1e40af',
              border: 'none',
              padding: '15px 30px',
              borderRadius: '8px',
              fontSize: '16px',
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
              document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get Started Today
          </button>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
};

export default Clientele;