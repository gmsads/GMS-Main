
import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  Calendar,
  MessageCircle,
  Video,
  User,
  Building,
  MessageSquare,
  X,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
    appointmentDate: '',
    appointmentTime: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [popupType, setPopupType] = useState('success'); // 'success' or 'error'

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("https://formspree.io/f/xgvnoygw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setPopupMessage("Thank you! Your message has been sent successfully. We will get back to you within 24 hours.");
        setPopupType('success');
        setShowPopup(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: '',
          appointmentDate: '',
          appointmentTime: ''
        });
      } else {
        setPopupMessage("Oops! Something went wrong. Please try again.");
        setPopupType('error');
        setShowPopup(true);
      }
    } catch (err) {
      console.error(err);
      setPopupMessage("Oops! Something went wrong. Please check your connection and try again.");
      setPopupType('error');
      setShowPopup(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const openWhatsApp = () => {
    const message = `Hello Global Marketing Solutions! I'm interested in your services.`;
    const whatsappUrl = `https://wa.me/9985330008?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const openGoogleMeet = () => {
    window.open('https://meet.google.com/new', '_blank');
  };

  // Popup Styles
  const popupOverlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: showPopup ? 'flex' : 'none',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    padding: '20px'
  };

  const popupContentStyle = {
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
    maxWidth: '400px',
    width: '100%',
    textAlign: 'center',
    animation: 'popupIn 0.3s ease-out'
  };

  const popupIconStyle = {
    color: popupType === 'success' ? '#10b981' : '#ef4444',
    marginBottom: '15px'
  };

  const popupTitleStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: popupType === 'success' ? '#10b981' : '#ef4444'
  };

  const popupMessageStyle = {
    fontSize: '16px',
    color: '#6b7280',
    marginBottom: '20px',
    lineHeight: '1.5'
  };

  const popupButtonStyle = {
    backgroundColor: popupType === 'success' ? '#10b981' : '#ef4444',
    color: 'white',
    border: 'none',
    padding: '12px 24px',
    borderRadius: '6px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    width: '100%',
    transition: 'all 0.3s ease'
  };

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

  const contactGridStyle = {
    display: 'grid',
    gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr',
    gap: '60px',
    alignItems: 'start'
  };

  const contactInfoStyle = {
    backgroundColor: '#1e40af',
    padding: '40px',
    borderRadius: '16px',
    color: 'white'
  };

  const contactItemStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '15px',
    marginBottom: '30px'
  };

  const iconContainerStyle = {
    width: '50px',
    height: '50px',
    borderRadius: '12px',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
  };

  const formStyle = {
    backgroundColor: 'white',
    padding: '40px',
    borderRadius: '16px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
  };

  const inputGroupStyle = {
    marginBottom: '25px'
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '8px',
    fontWeight: '600',
    color: '#374151'
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    border: '2px solid #e5e7eb',
    borderRadius: '8px',
    fontSize: '16px',
    transition: 'border-color 0.3s ease',
    fontFamily: 'inherit'
  };

  const textareaStyle = {
    ...inputStyle,
    minHeight: '120px',
    resize: 'vertical'
  };

  const selectStyle = {
    ...inputStyle,
    cursor: 'pointer'
  };

  const submitButtonStyle = {
    width: '100%',
    backgroundColor: '#1e40af',
    color: 'white',
    border: 'none',
    padding: '15px 20px',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    transition: 'all 0.3s ease',
    opacity: isSubmitting ? 0.7 : 1
  };

  const quickActionsStyle = {
    display: 'grid',
    gridTemplateColumns: window.innerWidth > 768 ? 'repeat(3, 1fr)' : '1fr',
    gap: '20px',
    marginTop: '40px'
  };

  const actionButtonStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '15px 20px',
    backgroundColor: 'white',
    border: '2px solid #3b82f6',
    borderRadius: '8px',
    color: '#3b82f6',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '600',
    transition: 'all 0.3s ease',
    justifyContent: 'center',
    cursor: 'pointer'
  };

  const mapStyle = {
    marginTop: '60px',
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '16px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
  };

  return (
    <section id="contact" style={{ backgroundColor: '#f8fafc', paddingTop: '70px' }}>
      {/* Popup Overlay */}
      <div 
        style={popupOverlayStyle}
        onClick={() => setShowPopup(false)}
      >
        <div 
          style={popupContentStyle}
          onClick={(e) => e.stopPropagation()}
        >
          <div style={popupIconStyle}>
            {popupType === 'success' ? (
              <CheckCircle size={48} />
            ) : (
              <AlertCircle size={48} />
            )}
          </div>
          
          <h3 style={popupTitleStyle}>
            {popupType === 'success' ? 'Success!' : 'Error!'}
          </h3>
          
          <p style={popupMessageStyle}>
            {popupMessage}
          </p>
          
          <button
            style={popupButtonStyle}
            onClick={() => setShowPopup(false)}
            onMouseEnter={(e) => {
              e.target.style.opacity = '0.9';
            }}
            onMouseLeave={(e) => {
              e.target.style.opacity = '1';
            }}
          >
            OK
          </button>
        </div>
      </div>

      <style>
        {`
          @keyframes popupIn {
            from {
              opacity: 0;
              transform: scale(0.8) translateY(-20px);
            }
            to {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }
        `}
      </style>

      <div style={containerStyle}>
        <h2 style={titleStyle}>Get In Touch</h2>
        <p style={subtitleStyle}>
          Ready to elevate your brand? Contact us for a free consultation and discover how we can help you grow
        </p>

        <div style={contactGridStyle}>
          {/* Contact Information */}
          <div style={contactInfoStyle}>
            <h3 style={{
              fontSize: '24px',
              fontWeight: 'bold',
              marginBottom: '30px',
              color: 'white'
            }}>
              Contact Information
            </h3>

            <div style={contactItemStyle}>
              <div style={iconContainerStyle}>
                <Phone size={20} />
              </div>
              <div>
                <h4 style={{ margin: '0 0 5px 0', fontSize: '16px', fontWeight: '600' }}>Phone</h4>
                <p style={{ margin: 0, opacity: 0.9 }}>+91 9985330008</p>
                <p style={{ margin: '2px 0 0 0', fontSize: '14px', opacity: 0.8 }}>Call us anytime</p>
              </div>
            </div>

            <div style={contactItemStyle}>
              <div style={iconContainerStyle}>
                <Mail size={20} />
              </div>
              <div>
                <h4 style={{ margin: '0 0 5px 0', fontSize: '16px', fontWeight: '600' }}>Email</h4>
                <p style={{ margin: 0, opacity: 0.9 }}>adinfo.gms@gmail.com.com</p>
                <p style={{ margin: '2px 0 0 0', fontSize: '14px', opacity: 0.8 }}>We reply within 24 hours</p>
              </div>
            </div>

            <div style={contactItemStyle}>
              <div style={iconContainerStyle}>
                <MapPin size={20} />
              </div>
              <div>
                <h4 style={{ margin: '0 0 5px 0', fontSize: '16px', fontWeight: '600' }}>Address</h4>
                <p style={{ margin: 0, opacity: 0.9, lineHeight: '1.5' }}>
                  2nd floor, Plot no 204,<br />
                  Kamineni Hospital Bypass Rd,<br />
                  Suvidha Arcade, RTC Colony,<br />
                  L. B. Nagar, Hyderabad,<br />
                  Telangana 500060
                </p>
              </div>
            </div>

            <div style={contactItemStyle}>
              <div style={iconContainerStyle}>
                <Clock size={20} />
              </div>
              <div>
                <h4 style={{ margin: '0 0 5px 0', fontSize: '16px', fontWeight: '600' }}>Business Hours</h4>
                <p style={{ margin: 0, opacity: 0.9 }}>Monday - Sunday</p>
                <p style={{ margin: '2px 0 0 0', fontSize: '14px', opacity: 0.8 }}>9:00 AM - 10:00 PM</p>
              </div>
            </div>

            <div style={contactItemStyle}>
              <div style={iconContainerStyle}>
                <User size={20} />
              </div>
              <div>
                <h4 style={{ margin: '0 0 5px 0', fontSize: '16px', fontWeight: '600' }}>CEO</h4>
                <p style={{ margin: 0, opacity: 0.9 }}>Mr. Bala Bharma Chari</p>
                <p style={{ margin: '2px 0 0 0', fontSize: '14px', opacity: 0.8 }}>Senior Marketing Advisor</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form style={formStyle} onSubmit={handleSubmit}>
            <h3 style={{
              fontSize: '24px',
              fontWeight: 'bold',
              marginBottom: '30px',
              color: '#1e40af'
            }}>
              Send us a Message
            </h3>

            <div style={inputGroupStyle}>
              <label style={labelStyle} htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                style={inputStyle}
                onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>

            <div style={inputGroupStyle}>
              <label style={labelStyle} htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                style={inputStyle}
                onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>

            <div style={inputGroupStyle}>
              <label style={labelStyle} htmlFor="phone">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                style={inputStyle}
                onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>

            <div style={inputGroupStyle}>
              <label style={labelStyle} htmlFor="company">Company Name</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                style={inputStyle}
                onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>

            <div style={inputGroupStyle}>
              <label style={labelStyle} htmlFor="service">Service Interested In *</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                required
                style={selectStyle}
                onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              >
                <option value="">Select a service</option>
                <option value="atl">ATL (Above The Line)</option>
                <option value="btl">BTL (Below The Line)</option>
                <option value="digital">Digital Marketing</option>
                <option value="webdev">Web Development</option>
                <option value="designing">Designing Services</option>
                <option value="printing">Printing Services</option>
                <option value="events">Event Management</option>
                <option value="branding">Complete Branding</option>
              </select>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '55px' }}>
              <div style={inputGroupStyle}>
                <label style={labelStyle} htmlFor="appointmentDate">Preferred Date</label>
                <input
                  type="date"
                  id="appointmentDate"
                  name="appointmentDate"
                  value={formData.appointmentDate}
                  onChange={handleInputChange}
                  style={inputStyle}
                  onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                />
              </div>

              <div style={inputGroupStyle}>
                <label style={labelStyle} htmlFor="appointmentTime">Preferred Time</label>
                <input
                  type="time"
                  id="appointmentTime"
                  name="appointmentTime"
                  value={formData.appointmentTime}
                  onChange={handleInputChange}
                  style={inputStyle}
                  onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                />
              </div>
            </div>

            <div style={inputGroupStyle}>
              <label style={labelStyle} htmlFor="message">Project Details</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us about your project requirements..."
                style={textareaStyle}
                onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              style={submitButtonStyle}
              onMouseEnter={(e) => {
                if (!isSubmitting) {
                  e.target.style.backgroundColor = '#1d4ed8';
                }
              }}
              onMouseLeave={(e) => {
                if (!isSubmitting) {
                  e.target.style.backgroundColor = '#1e40af';
                }
              }}
            >
              {isSubmitting ? 'Sending...' : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>

        {/* Quick Actions */}
        <div style={quickActionsStyle}>
          <button
            style={actionButtonStyle}
            onClick={openWhatsApp}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#25D366';
              e.target.style.color = 'white';
              e.target.style.borderColor = '#25D366';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'white';
              e.target.style.color = '#3b82f6';
              e.target.style.borderColor = '#3b82f6';
            }}
          >
            <MessageCircle size={20} />
            WhatsApp Chat
          </button>

          <button
            style={actionButtonStyle}
            onClick={openGoogleMeet}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#4285f4';
              e.target.style.color = 'white';
              e.target.style.borderColor = '#4285f4';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'white';
              e.target.style.color = '#3b82f6';
              e.target.style.borderColor = '#3b82f6';
            }}
          >
            <Video size={20} />
            Google Meet
          </button>

          <button
            style={actionButtonStyle}
            onClick={() => window.location.href = 'tel:+9985330008'}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#10b981';
              e.target.style.color = 'white';
              e.target.style.borderColor = '#10b981';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'white';
              e.target.style.color = '#3b82f6';
              e.target.style.borderColor = '#3b82f6';
            }}
          >
            <Phone size={20} />
            Call Now
          </button>
        </div>

        {/* Map Section */}
        <div style={mapStyle}>
          <h3 style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#1e40af',
            marginBottom: '20px',
            textAlign: 'center'
          }}>
            Visit Our Office
          </h3>
          <div style={{
            width: '100%',
            height: '400px',
            borderRadius: '12px',
            backgroundColor: '#f3f4f6',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#6b7280'
          }}>
            <div style={{ textAlign: 'center' }}>
              <MapPin size={48} style={{ color: '#3b82f6', marginBottom: '15px' }} />
              <h4 style={{ fontSize: '18px', marginBottom: '10px', color: '#1e40af' }}>
                Global Marketing Solutions
              </h4>
              <p style={{ margin: 0, lineHeight: '1.5' }}>
                2nd floor, Plot no 204, Kamineni Hospital Bypass Rd,<br />
                Suvidha Arcade, RTC Colony, L. B. Nagar,<br />
                Hyderabad, Telangana 500060
              </p>
              <button
                style={{
                  marginTop: '20px',
                  backgroundColor: '#3b82f6',
                  color: 'white',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: '600'
                }}
                onClick={() => {
                  window.open('https://maps.google.com/maps?q=3rd+floor,+Plot+no+204,+Kamineni+Hospital+Bypass+Rd,+Suvidha+Arcade,+RTC+Colony,+L.+B.+Nagar,+Hyderabad,+Telangana+500060', '_blank');
                }}
              >
                View on Google Maps
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;