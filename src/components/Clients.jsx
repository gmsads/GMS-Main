import React from 'react';
import { Star, Quote, ArrowRight } from 'lucide-react';

const Clients = () => {
  const clients = [
    {
      name: 'Swiggy',
      logo: 'S',
      industry: 'Food Delivery',
      testimonial: 'Global Marketing Solutions helped us expand our reach with innovative advertising campaigns.',
      rating: 5,
      project: 'Brand Campaign & Digital Marketing'
    },
    {
      name: 'Blinkit',
      logo: 'B',
      industry: 'Quick Commerce',
      testimonial: 'Their creative approach and professional execution exceeded our expectations.',
      rating: 5,
      project: 'Digital Marketing Strategy'
    },
    {
      name: 'Euro Kids',
      logo: 'EK',
      industry: 'Education',
      testimonial: 'Excellent branding work that perfectly captured our educational mission.',
      rating: 5,
      project: 'Complete Brand Identity'
    },
    {
      name: 'CMR Group',
      logo: 'CMR',
      industry: 'Education',
      testimonial: 'Professional service delivery and outstanding creative solutions.',
      rating: 5,
      project: 'Corporate Branding'
    },
    {
      name: 'Kubera',
      logo: 'K',
      industry: 'Real Estate',
      testimonial: 'Their advertising strategies significantly boosted our brand visibility.',
      rating: 5,
      project: 'ATL & BTL Campaigns'
    },
    {
      name: 'Roop Sagar',
      logo: 'RS',
      industry: 'Retail',
      testimonial: 'Comprehensive marketing solutions that delivered measurable results.',
      rating: 5,
      project: 'Print & Digital Marketing'
    },
    {
      name: 'Kaam Hain Na',
      logo: 'KHN',
      industry: 'Job Platform',
      testimonial: 'Outstanding digital marketing support for our platform launch.',
      rating: 5,
      project: 'App Marketing Campaign'
    }
  ];

  const stats = [
    { number: '500+', label: 'Happy Clients' },
    { number: '8+', label: 'Years Experience' },
    { number: '1000+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' }
  ];

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
    marginBottom: '60px',
    maxWidth: '600px',
    margin: '0 auto 60px'
  };

  const statsGridStyle = {
    display: 'grid',
    gridTemplateColumns: window.innerWidth > 768 ? 'repeat(4, 1fr)' : 'repeat(2, 1fr)',
    gap: '30px',
    marginBottom: '60px',
    padding: '40px',
    backgroundColor: '#1e40af',
    borderRadius: '16px',
    color: 'white'
  };

  const statItemStyle = {
    textAlign: 'center'
  };

  const clientsGridStyle = {
    display: 'grid',
    gridTemplateColumns: window.innerWidth > 768 ? 'repeat(auto-fit, minmax(350px, 1fr))' : '1fr',
    gap: '30px',
    marginBottom: '40px'
  };

  const clientCardStyle = {
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '16px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    transition: 'all 0.3s ease',
    border: '1px solid #f1f5f9'
  };

  const clientHeaderStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    marginBottom: '20px'
  };

  const logoStyle = {
    width: '50px',
    height: '50px',
    borderRadius: '12px',
    backgroundColor: '#3b82f6',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '18px',
    fontWeight: 'bold'
  };

  const ratingStyle = {
    display: 'flex',
    gap: '5px',
    marginBottom: '15px'
  };

  const trustedByStyle = {
    textAlign: 'center',
    marginTop: '60px',
    padding: '40px',
    backgroundColor: '#f8fafc',
    borderRadius: '16px'
  };

  const brandLogosStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '40px',
    marginTop: '30px',
    opacity: 0.7
  };

  const brandLogoStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#1e40af',
    padding: '15px 25px',
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)'
  };

  return (
    <section id="clients" style={{ backgroundColor: '#ffffff', paddingTop: '70px' }}>
      <div style={containerStyle}>
        <h2 style={titleStyle}>Our Valued Clients</h2>
        <p style={subtitleStyle}>
          Trusted by leading brands across industries for comprehensive marketing solutions
        </p>

        {/* Stats Section */}
        <div style={statsGridStyle}>
          {stats.map((stat, index) => (
            <div key={index} style={statItemStyle}>
              <div style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '8px' }}>
                {stat.number}
              </div>
              <div style={{ fontSize: '16px', opacity: 0.9 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Client Testimonials */}
        <div style={clientsGridStyle}>
          {clients.map((client, index) => (
            <div
              key={index}
              style={clientCardStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
              }}
            >
              <div style={clientHeaderStyle}>
                <div style={logoStyle}>{client.logo}</div>
                <div>
                  <h3 style={{
                    fontSize: '20px',
                    fontWeight: 'bold',
                    color: '#1e40af',
                    margin: 0
                  }}>
                    {client.name}
                  </h3>
                  <p style={{
                    color: '#6b7280',
                    fontSize: '14px',
                    margin: '5px 0 0 0'
                  }}>
                    {client.industry}
                  </p>
                </div>
              </div>

              <div style={ratingStyle}>
                {[...Array(client.rating)].map((_, i) => (
                  <Star key={i} size={16} style={{ fill: '#fbbf24', color: '#fbbf24' }} />
                ))}
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
                marginBottom: '20px'
              }}>
                <Quote size={20} style={{ color: '#3b82f6', flexShrink: 0, marginTop: '2px' }} />
                <p style={{
                  color: '#4b5563',
                  fontStyle: 'italic',
                  lineHeight: '1.6',
                  margin: 0
                }}>
                  {client.testimonial}
                </p>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: '#3b82f6',
                fontSize: '14px',
                fontWeight: '600'
              }}>
                <span>Project: {client.project}</span>
                <ArrowRight size={14} />
              </div>
            </div>
          ))}
        </div>

        {/* Trusted By Section */}
        <div style={trustedByStyle}>
          <h3 style={{
            fontSize: '28px',
            fontWeight: 'bold',
            color: '#1e40af',
            marginBottom: '15px'
          }}>
            Trusted by Leading Brands
          </h3>
          <p style={{
            color: '#6b7280',
            marginBottom: '30px'
          }}>
            Join our growing family of satisfied clients across various industries
          </p>
          
          <div style={brandLogosStyle}>
            {clients.map((client, index) => (
              <div
                key={index}
                style={{
                  ...brandLogoStyle,
                  animation: `float 3s ease-in-out infinite ${index * 0.5}s`
                }}
              >
                {client.name}
              </div>
            ))}
          </div>
        </div>

        <div style={{
          textAlign: 'center',
          marginTop: '50px'
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
              document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Join Our Client Family <ArrowRight size={20} />
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

export default Clients;