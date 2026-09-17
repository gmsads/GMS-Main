import React, { useState, useEffect } from 'react';
import { ArrowLeft, Phone, Mail, MapPin, Globe } from 'lucide-react';

const TermsConditions = ({ navigateTo }) => {
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

        <h1 style={titleStyle}>Terms & Conditions</h1>
        <p style={subtitleStyle}>
          Welcome to Global Marketing Solutions (“GMS”, “we”, “us”, or “our”).
        </p>

        <div style={cardStyle}>
          <p style={paragraphStyle}>
            These Terms & Conditions govern your use of our website and your engagement with our advertising, branding, printing, digital marketing, web development, event management, outdoor advertising, and related services.
          </p>
          <p style={paragraphStyle}>
            By accessing our website, contacting us, submitting an enquiry, requesting a quotation, or engaging our services, you agree to these Terms & Conditions.
          </p>

          {/* Section 1 */}
          <h2 style={{ ...sectionTitleStyle, marginTop: '10px' }}>1. About GMS</h2>
          <p style={paragraphStyle}>
            Global Marketing Solutions is an advertising, branding, printing, and marketing services company based in Hyderabad, Telangana, India.
          </p>
          <p style={paragraphStyle}>Our services may include:</p>
          <ul style={listStyle}>
            <li style={listItemStyle}>ATL Advertising</li>
            <li style={listItemStyle}>BTL Marketing</li>
            <li style={listItemStyle}>Digital Marketing</li>
            <li style={listItemStyle}>Social Media Marketing</li>
            <li style={listItemStyle}>Outdoor Advertising</li>
            <li style={listItemStyle}>Mobile Van Advertising</li>
            <li style={listItemStyle}>Auto Branding</li>
            <li style={listItemStyle}>Pole Boards</li>
            <li style={listItemStyle}>No Parking Boards</li>
            <li style={listItemStyle}>ACP Sign Boards</li>
            <li style={listItemStyle}>Glow Sign Boards</li>
            <li style={listItemStyle}>Flex Printing</li>
            <li style={listItemStyle}>Event Management</li>
            <li style={listItemStyle}>Graphic Design</li>
            <li style={listItemStyle}>Logo Design</li>
            <li style={listItemStyle}>Web Development</li>
            <li style={listItemStyle}>Branding and promotional solutions</li>
          </ul>

          {/* Section 2 */}
          <h2 style={sectionTitleStyle}>2. Website Use</h2>
          <p style={paragraphStyle}>You may use this website for lawful purposes only.</p>
          <p style={paragraphStyle}>You agree not to:</p>
          <ul style={listStyle}>
            <li style={listItemStyle}>Use the website for fraudulent or unlawful activities</li>
            <li style={listItemStyle}>Attempt to gain unauthorized access to the website or its systems</li>
            <li style={listItemStyle}>Copy or reproduce website content without permission</li>
            <li style={listItemStyle}>Interfere with the operation or security of the website</li>
            <li style={listItemStyle}>Submit false, misleading, or fraudulent information</li>
            <li style={listItemStyle}>Use the website to harm GMS or any third party</li>
          </ul>

          {/* Section 3 */}
          <h2 style={sectionTitleStyle}>3. Enquiries and Lead Forms</h2>
          <p style={paragraphStyle}>
            When you submit an enquiry through our website, Google Ads, Google Business Profile, social media, or any other form, you agree to provide accurate information.
          </p>
          <p style={paragraphStyle}>
            Submitting an enquiry does not automatically create a service contract between you and GMS.
          </p>
          <p style={paragraphStyle}>
            A service engagement will generally be confirmed through an accepted quotation, proposal, work order, purchase order, agreement, or other written confirmation.
          </p>

          {/* Section 4 */}
          <h2 style={sectionTitleStyle}>4. Quotations and Pricing</h2>
          <p style={paragraphStyle}>Prices provided by GMS may vary depending on:</p>
          <ul style={listStyle}>
            <li style={listItemStyle}>Service requirements</li>
            <li style={listItemStyle}>Quantity</li>
            <li style={listItemStyle}>Materials</li>
            <li style={listItemStyle}>Design requirements</li>
            <li style={listItemStyle}>Location</li>
            <li style={listItemStyle}>Production requirements</li>
            <li style={listItemStyle}>Installation requirements</li>
            <li style={listItemStyle}>Advertising duration</li>
            <li style={listItemStyle}>Media costs</li>
            <li style={listItemStyle}>Third-party charges</li>
            <li style={listItemStyle}>Applicable taxes</li>
          </ul>
          <p style={paragraphStyle}>
            Unless specifically stated otherwise, quotations are subject to confirmation and may have a validity period.
          </p>

          {/* Section 5 */}
          <h2 style={sectionTitleStyle}>5. Client Responsibilities</h2>
          <p style={paragraphStyle}>
            Clients are responsible for providing accurate information, materials, logos, brand guidelines, approvals, permissions, and other information required for execution of the project.
          </p>
          <p style={paragraphStyle}>
            The client is responsible for ensuring that materials supplied to GMS do not infringe the intellectual property, privacy, publicity, or other legal rights of any third party.
          </p>

          {/* Section 6 */}
          <h2 style={sectionTitleStyle}>6. Advertising and Marketing Services</h2>
          <p style={paragraphStyle}>
            Advertising results are affected by many factors, including market conditions, competition, budget, audience, platform policies, creative quality, location, seasonality, and customer behaviour.
          </p>
          <p style={paragraphStyle}>
            GMS does not guarantee a specific number of leads, sales, conversions, impressions, followers, enquiries, or revenue unless a specific written agreement expressly provides otherwise.
          </p>
          <p style={paragraphStyle}>
            Third-party advertising platforms may reject, restrict, suspend, modify, or discontinue advertisements or accounts according to their own policies.
          </p>

          {/* Section 7 */}
          <h2 style={sectionTitleStyle}>7. Creative Materials and Approvals</h2>
          <p style={paragraphStyle}>
            Designs, artwork, advertisements, videos, banners, printing materials, and other creative work may require client approval before production or publication.
          </p>
          <p style={paragraphStyle}>
            Once a design or artwork is approved by the client, subsequent changes may result in additional charges or production delays.
          </p>
          <p style={paragraphStyle}>
            The client is responsible for reviewing and approving final content, spelling, contact information, pricing, claims, offers, and other details before publication or production.
          </p>

          {/* Section 8 */}
          <h2 style={sectionTitleStyle}>8. Intellectual Property</h2>
          <p style={paragraphStyle}>
            Unless otherwise agreed in writing, GMS retains rights in its original creative concepts, templates, processes, designs, strategies, proposals, and other proprietary materials.
          </p>
          <p style={paragraphStyle}>
            Client-owned logos, photographs, trademarks, text, and other materials remain the property of the respective client or rights holder.
          </p>
          <p style={paragraphStyle}>
            The client grants GMS permission to use client-provided materials as reasonably necessary to provide the requested services.
          </p>

          {/* Section 9 */}
          <h2 style={sectionTitleStyle}>9. Third-Party Platforms</h2>
          <p style={paragraphStyle}>
            GMS may use third-party platforms and services, including advertising platforms, social media platforms, hosting providers, analytics services, payment services, printing vendors, media owners, and other service providers.
          </p>
          <p style={paragraphStyle}>
            GMS is not responsible for changes, outages, policy decisions, technical failures, suspensions, or service interruptions caused by third-party platforms.
          </p>

          {/* Section 10 */}
          <h2 style={sectionTitleStyle}>10. Payments</h2>
          <p style={paragraphStyle}>
            Payment terms will be communicated through the applicable quotation, proposal, invoice, purchase order, or service agreement.
          </p>
          <p style={paragraphStyle}>
            Clients are responsible for making payments within the agreed timeframe.
          </p>
          <p style={paragraphStyle}>
            Delays in payment may result in delays, suspension, or cancellation of services, subject to the applicable agreement.
          </p>
          <p style={paragraphStyle}>
            Applicable taxes and government charges may be additional unless expressly included in the quoted price.
          </p>

          {/* Section 11 */}
          <h2 style={sectionTitleStyle}>11. Cancellation and Refunds</h2>
          <p style={paragraphStyle}>
            Cancellation, refund, rescheduling, or modification of a service will be subject to the terms agreed for that particular project.
          </p>
          <p style={paragraphStyle}>
            Certain costs may become non-refundable once production, printing, media booking, advertising spend, travel, installation, third-party procurement, or other execution activities have commenced.
          </p>

          {/* Section 12 */}
          <h2 style={sectionTitleStyle}>12. Outdoor Advertising and Physical Installations</h2>
          <p style={paragraphStyle}>
            For outdoor advertising, printing, signage, branding, installations, events, mobile vans, auto branding, and similar services, execution may depend on permissions, weather, site conditions, traffic regulations, venue restrictions, local authorities, third-party media owners, and other external factors.
          </p>
          <p style={paragraphStyle}>
            Any additional costs arising from changes in site conditions, permissions, transportation, installation requirements, or client-requested modifications may be charged separately where applicable.
          </p>

          {/* Section 13 */}
          <h2 style={sectionTitleStyle}>13. Limitation of Liability</h2>
          <p style={paragraphStyle}>
            To the maximum extent permitted by applicable law, GMS shall not be liable for indirect, incidental, special, consequential, or business losses arising from the use of our website or services.
          </p>
          <p style={paragraphStyle}>
            Nothing in these Terms & Conditions is intended to exclude any liability that cannot legally be excluded under applicable law.
          </p>

          {/* Section 14 */}
          <h2 style={sectionTitleStyle}>14. Website Content</h2>
          <p style={paragraphStyle}>
            We make reasonable efforts to keep website information accurate and current. However, information, descriptions, pricing, availability, service offerings, photographs, and other website content may change without prior notice.
          </p>
          <p style={paragraphStyle}>
            Website content should not be considered a binding quotation unless expressly stated otherwise.
          </p>

          {/* Section 15 */}
          <h2 style={sectionTitleStyle}>15. Privacy</h2>
          <p style={paragraphStyle}>
            Your use of our website and submission of personal information is also governed by our Privacy Policy.
          </p>
          <p style={paragraphStyle}>
            Our Privacy Policy explains how we collect, use, store, and protect personal information.
          </p>

          {/* Section 16 */}
          <h2 style={sectionTitleStyle}>16. Changes to These Terms</h2>
          <p style={paragraphStyle}>
            GMS may update these Terms & Conditions from time to time.
          </p>
          <p style={paragraphStyle}>
            The latest version will be published on this page with the revised “Last Updated” date.
          </p>

          {/* Section 17 */}
          <h2 style={sectionTitleStyle}>17. Governing Law</h2>
          <p style={paragraphStyle}>
            These Terms & Conditions shall be governed by and interpreted in accordance with the applicable laws of India.
          </p>
          <p style={paragraphStyle}>
            Subject to applicable law, disputes relating to these Terms & Conditions or our services shall be subject to the jurisdiction of the competent courts in Hyderabad, Telangana, India.
          </p>

          {/* Section 18 */}
          <h2 style={sectionTitleStyle}>18. Contact Information</h2>
          <p style={paragraphStyle}>
            For questions regarding these Terms & Conditions, please contact:
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

          <div style={{ marginTop: '30px', paddingTop: '15px', borderTop: '1px solid #e2e8f0', fontSize: '14px', color: '#6b7280' }}>
            Last Updated: September 5, 2026
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
