import React, { useState, useEffect } from 'react';
import { ArrowLeft, Phone, Mail, MapPin, Globe } from 'lucide-react';

const PrivacyPolicy = ({ navigateTo }) => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 768;

  const sectionWrapperStyle = {
    backgroundColor: '#f8fafc',
    minHeight: '100vh',
    paddingBottom: isMobile ? '40px' : '80px'
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: isMobile ? '40px 16px' : '60px 20px'
  };

  const backButtonStyle = {
    background: 'white',
    border: '1px solid #f1f5f9',
    borderRadius: '50px',
    padding: '8px 18px',
    color: '#1e40af',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '14px',
    fontWeight: '500',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
    transition: 'all 0.3s ease',
    marginBottom: '30px'
  };

  const titleStyle = {
    fontSize: isMobile ? '26px' : '36px',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1e40af',
    marginBottom: isMobile ? '12px' : '16px'
  };

  const subtitleStyle = {
    fontSize: isMobile ? '15px' : '18px',
    textAlign: 'center',
    color: '#6b7280',
    marginBottom: isMobile ? '30px' : '50px',
    maxWidth: '750px',
    marginLeft: 'auto',
    marginRight: 'auto',
    lineHeight: '1.6'
  };

  const cardStyle = {
    backgroundColor: 'white',
    borderRadius: '16px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    border: '1px solid #f1f5f9',
    padding: isMobile ? '24px 18px' : '45px 50px',
    maxWidth: '1000px',
    margin: '0 auto'
  };

  const sectionTitleStyle = {
    fontSize: isMobile ? '19px' : '22px',
    fontWeight: 'bold',
    color: '#1e40af',
    marginTop: '32px',
    marginBottom: '12px'
  };

  const paragraphStyle = {
    fontSize: isMobile ? '14px' : '16px',
    lineHeight: '1.8',
    color: '#4b5563',
    marginBottom: '16px'
  };

  const listStyle = {
    paddingLeft: '24px',
    marginBottom: '20px',
    color: '#4b5563',
    fontSize: isMobile ? '14px' : '16px',
    lineHeight: '1.8'
  };

  const listItemStyle = {
    marginBottom: '8px'
  };

  const infoBoxStyle = {
    backgroundColor: '#f8fafc',
    borderRadius: '12px',
    padding: isMobile ? '18px' : '24px',
    margin: '20px 0',
    border: '1px solid #e2e8f0'
  };

  const contactInfoItemStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '10px',
    marginBottom: '10px',
    fontSize: isMobile ? '14px' : '15px',
    color: '#374151',
    lineHeight: '1.6'
  };

  return (
    <div style={sectionWrapperStyle}>
      <div style={containerStyle}>
        <button 
          style={backButtonStyle}
          onClick={() => navigateTo ? navigateTo('main') : window.history.back()}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
          }}
        >
          <ArrowLeft size={18} /> Back to Home
        </button>

        <h1 style={titleStyle}>Privacy Policy</h1>
        <p style={subtitleStyle}>
          Global Marketing Solutions (“GMS”, “we”, “us”, or “our”) respects your privacy and is committed to protecting the personal information you provide to us.
        </p>

        <div style={cardStyle}>
          <p style={paragraphStyle}>
            This Privacy Policy explains how we collect, use, store, and protect your information when you visit our website, contact us, submit an enquiry, request a quotation, or use our advertising, branding, printing, digital marketing, web development, and related services.
          </p>

          {/* Section 1 */}
          <h2 style={{ ...sectionTitleStyle, marginTop: '10px' }}>1. About Global Marketing Solutions</h2>
          <div style={infoBoxStyle}>
            <div style={contactInfoItemStyle}>
              <strong style={{ color: '#1e40af' }}>Business Name:</strong> Global Marketing Solutions
            </div>
            <div style={contactInfoItemStyle}>
              <Phone size={18} style={{ color: '#1e40af', flexShrink: 0, marginTop: '3px' }} />
              <span><strong style={{ color: '#1e40af' }}>Phone:</strong> +91 9985330008</span>
            </div>
            <div style={contactInfoItemStyle}>
              <Mail size={18} style={{ color: '#1e40af', flexShrink: 0, marginTop: '3px' }} />
              <span><strong style={{ color: '#1e40af' }}>Email:</strong> adinfo.gms@gmail.com</span>
            </div>
            <div style={contactInfoItemStyle}>
              <MapPin size={18} style={{ color: '#1e40af', flexShrink: 0, marginTop: '3px' }} />
              <span><strong style={{ color: '#1e40af' }}>Address:</strong> 2nd Floor, Plot No. 204, Kamineni Hospital Bypass Road, Suvidha Arcade, RTC Colony, L. B. Nagar, Hyderabad, Telangana – 500060, India.</span>
            </div>
          </div>
          <p style={paragraphStyle}>
            Our services include advertising, branding, printing, ATL and BTL marketing, digital marketing, web development, graphic design, outdoor advertising, event management, and related marketing solutions.
          </p>

          {/* Section 2 */}
          <h2 style={sectionTitleStyle}>2. Information We Collect</h2>
          <p style={paragraphStyle}>
            We may collect information that you voluntarily provide when you contact us or submit a form, including:
          </p>
          <ul style={listStyle}>
            <li style={listItemStyle}>Full name</li>
            <li style={listItemStyle}>Company or business name</li>
            <li style={listItemStyle}>Phone number</li>
            <li style={listItemStyle}>Email address</li>
            <li style={listItemStyle}>Address or location</li>
            <li style={listItemStyle}>Services you are interested in</li>
            <li style={listItemStyle}>Project requirements</li>
            <li style={listItemStyle}>Budget or campaign information</li>
            <li style={listItemStyle}>Any other information you choose to provide</li>
          </ul>
          <p style={paragraphStyle}>
            We may also automatically receive limited technical information when you visit our website, such as:
          </p>
          <ul style={listStyle}>
            <li style={listItemStyle}>IP address</li>
            <li style={listItemStyle}>Browser type</li>
            <li style={listItemStyle}>Device information</li>
            <li style={listItemStyle}>Pages visited</li>
            <li style={listItemStyle}>Website usage information</li>
            <li style={listItemStyle}>Cookies and similar technologies</li>
          </ul>

          {/* Section 3 */}
          <h2 style={sectionTitleStyle}>3. How We Collect Information</h2>
          <p style={paragraphStyle}>We may collect information through:</p>
          <ul style={listStyle}>
            <li style={listItemStyle}>Our website enquiry/contact forms</li>
            <li style={listItemStyle}>Google Ads and other advertising campaigns</li>
            <li style={listItemStyle}>Google Business Profile</li>
            <li style={listItemStyle}>Social media platforms</li>
            <li style={listItemStyle}>Phone calls</li>
            <li style={listItemStyle}>WhatsApp or other messaging platforms</li>
            <li style={listItemStyle}>Email communications</li>
            <li style={listItemStyle}>Direct business enquiries</li>
            <li style={listItemStyle}>Meetings and consultations</li>
          </ul>

          {/* Section 4 */}
          <h2 style={sectionTitleStyle}>4. How We Use Your Information</h2>
          <p style={paragraphStyle}>We may use the information collected to:</p>
          <ul style={listStyle}>
            <li style={listItemStyle}>Respond to your enquiries</li>
            <li style={listItemStyle}>Contact you regarding your requirements</li>
            <li style={listItemStyle}>Provide quotations and proposals</li>
            <li style={listItemStyle}>Deliver requested services</li>
            <li style={listItemStyle}>Schedule meetings or consultations</li>
            <li style={listItemStyle}>Improve our services and website</li>
            <li style={listItemStyle}>Manage customer relationships</li>
            <li style={listItemStyle}>Process service-related communications</li>
            <li style={listItemStyle}>Send relevant business or promotional communications where permitted</li>
            <li style={listItemStyle}>Measure and improve advertising and marketing campaigns</li>
            <li style={listItemStyle}>Prevent fraud, misuse, or unauthorized activity</li>
            <li style={listItemStyle}>Comply with applicable legal requirements</li>
          </ul>

          {/* Section 5 */}
          <h2 style={sectionTitleStyle}>5. Phone Calls, WhatsApp and Communications</h2>
          <p style={paragraphStyle}>
            When you voluntarily provide your phone number, email address, or other contact details through our website, advertising forms, enquiry forms, or other communication channels, you agree that GMS may contact you regarding your enquiry, requested services, quotation, project, or related business communication.
          </p>
          <p style={paragraphStyle}>
            Where applicable, you may request that promotional communications be stopped.
          </p>

          {/* Section 6 */}
          <h2 style={sectionTitleStyle}>6. Google Ads and Advertising Platforms</h2>
          <p style={paragraphStyle}>
            GMS may use advertising and analytics platforms such as Google Ads, Google Analytics, Meta, and similar services to promote our services, understand website usage, measure advertising performance, and improve marketing campaigns.
          </p>
          <p style={paragraphStyle}>
            These platforms may collect information through cookies, tracking technologies, or similar mechanisms according to their own privacy policies.
          </p>

          {/* Section 7 */}
          <h2 style={sectionTitleStyle}>7. Cookies</h2>
          <p style={paragraphStyle}>
            Our website may use cookies and similar technologies to improve website functionality, understand website traffic, measure advertising performance, and provide a better user experience.
          </p>
          <p style={paragraphStyle}>
            You may be able to control or disable cookies through your browser settings. Disabling certain cookies may affect some website functionality.
          </p>

          {/* Section 8 */}
          <h2 style={sectionTitleStyle}>8. Sharing of Information</h2>
          <p style={paragraphStyle}>
            We do not sell your personal information.
          </p>
          <p style={paragraphStyle}>
            We may share information with trusted service providers, technology providers, advertising platforms, hosting providers, analytics providers, or other third parties when reasonably necessary to operate our business, provide requested services, process enquiries, maintain our website, or conduct marketing activities.
          </p>
          <p style={paragraphStyle}>
            We may also disclose information when required by law, legal process, government authority, or when necessary to protect our legal rights, users, employees, or business.
          </p>

          {/* Section 9 */}
          <h2 style={sectionTitleStyle}>9. Data Security</h2>
          <p style={paragraphStyle}>
            We take reasonable administrative, technical, and organizational measures to protect personal information against unauthorized access, misuse, alteration, disclosure, or destruction.
          </p>
          <p style={paragraphStyle}>
            However, no internet-based transmission or electronic storage system can be guaranteed to be completely secure.
          </p>

          {/* Section 10 */}
          <h2 style={sectionTitleStyle}>10. Data Retention</h2>
          <p style={paragraphStyle}>
            We retain personal information only for as long as reasonably necessary for the purposes described in this Privacy Policy, including responding to enquiries, providing services, maintaining business records, resolving disputes, complying with legal obligations, and protecting our legitimate business interests.
          </p>

          {/* Section 11 */}
          <h2 style={sectionTitleStyle}>11. Third-Party Websites</h2>
          <p style={paragraphStyle}>
            Our website or communications may contain links to third-party websites, platforms, or services.
          </p>
          <p style={paragraphStyle}>
            GMS is not responsible for the privacy practices, content, or security of third-party websites. We recommend reviewing the privacy policies of those websites before providing personal information.
          </p>

          {/* Section 12 */}
          <h2 style={sectionTitleStyle}>12. Children's Privacy</h2>
          <p style={paragraphStyle}>
            Our services are intended for businesses and general audiences. We do not knowingly collect personal information from children for the purpose of providing our services.
          </p>

          {/* Section 13 */}
          <h2 style={sectionTitleStyle}>13. Your Rights</h2>
          <p style={paragraphStyle}>
            Depending on applicable law, you may have rights regarding your personal information, including requesting access, correction, updating, or deletion of information, subject to applicable legal and business requirements.
          </p>
          <p style={paragraphStyle}>
            To make a privacy-related request, contact us using the details below.
          </p>

          {/* Section 14 */}
          <h2 style={sectionTitleStyle}>14. Changes to This Privacy Policy</h2>
          <p style={paragraphStyle}>
            We may update this Privacy Policy from time to time to reflect changes in our services, technology, business practices, or applicable laws.
          </p>
          <p style={paragraphStyle}>
            The updated version will be published on this page with the revised “Last Updated” date.
          </p>

          {/* Section 15 */}
          <h2 style={sectionTitleStyle}>15. Contact Us</h2>
          <p style={paragraphStyle}>
            If you have questions, concerns, or requests regarding this Privacy Policy, please contact:
          </p>
          <div style={infoBoxStyle}>
            <div style={contactInfoItemStyle}>
              <strong style={{ color: '#1e40af' }}>Global Marketing Solutions</strong>
            </div>
            <div style={contactInfoItemStyle}>
              <Phone size={18} style={{ color: '#1e40af', flexShrink: 0, marginTop: '3px' }} />
              <span><strong style={{ color: '#1e40af' }}>Phone:</strong> +91 9985330008</span>
            </div>
            <div style={contactInfoItemStyle}>
              <Mail size={18} style={{ color: '#1e40af', flexShrink: 0, marginTop: '3px' }} />
              <span><strong style={{ color: '#1e40af' }}>Email:</strong> adinfo.gms@gmail.com</span>
            </div>
            <div style={contactInfoItemStyle}>
              <MapPin size={18} style={{ color: '#1e40af', flexShrink: 0, marginTop: '3px' }} />
              <span><strong style={{ color: '#1e40af' }}>Address:</strong> 2nd Floor, Plot No. 204, Kamineni Hospital Bypass Road, Suvidha Arcade, RTC Colony, L. B. Nagar, Hyderabad, Telangana – 500060, India.</span>
            </div>
            <div style={contactInfoItemStyle}>
              <Globe size={18} style={{ color: '#1e40af', flexShrink: 0, marginTop: '3px' }} />
              <span><strong style={{ color: '#1e40af' }}>Website:</strong> globalmarketingsolutions.in</span>
            </div>
          </div>

          <p style={{ ...paragraphStyle, marginTop: '24px', fontWeight: 'bold', color: '#1e293b' }}>
            By using our website or submitting your information through our enquiry forms, you acknowledge that you have read and understood this Privacy Policy.
          </p>

          <div style={{ marginTop: '30px', paddingTop: '15px', borderTop: '1px solid #e2e8f0', fontSize: '14px', color: '#6b7280' }}>
            Last Updated: September 5, 2026
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
