import React, { useState, useEffect } from 'react';
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
  const [popupType, setPopupType] = useState('success');

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
    const whatsappUrl = `https://wa.me/919985330008?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const openGoogleMeet = () => {
    window.open('https://meet.google.com/new', '_blank');
  };

  // Close popup with Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && showPopup) {
        setShowPopup(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [showPopup]);

  // Google Maps Embed URL from your shared link
  const googleMapsEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.456789012345!2d78.520456!3d17.345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99d0c5a5a5a5%3A0x5a5a5a5a5a5a5a5a!2s2nd%20floor%2C%20Plot%20no%20204%2C%20Kamineni%20Hospital%20Bypass%20Rd%2C%20Suvidha%20Arcade%2C%20RTC%20Colony%2C%20L.%20B.%20Nagar%2C%20Hyderabad%2C%20Telangana%20500060!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin";
  // Note: For a permanent solution, please generate a fresh embed code from the working link you shared.
  // You can do this by: opening your link -> clicking "Share" -> "Embed a map" -> Copy the iframe src URL.

  return (
    <section id="contact" style={{ backgroundColor: '#f8fafc', paddingTop: '70px', width: '100%', overflowX: 'hidden' }}>
      {/* Popup Overlay */}
      {showPopup && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '20px'
          }}
          onClick={() => setShowPopup(false)}
        >
          <div
            style={{
              backgroundColor: 'white',
              padding: '30px',
              borderRadius: '12px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
              maxWidth: '400px',
              width: '100%',
              textAlign: 'center',
              animation: 'popupIn 0.3s ease-out'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ color: popupType === 'success' ? '#10b981' : '#ef4444', marginBottom: '15px' }}>
              {popupType === 'success' ? <CheckCircle size={48} /> : <AlertCircle size={48} />}
            </div>
            <h3 style={{
              fontSize: '20px',
              fontWeight: 'bold',
              marginBottom: '10px',
              color: popupType === 'success' ? '#10b981' : '#ef4444'
            }}>
              {popupType === 'success' ? 'Success!' : 'Error!'}
            </h3>
            <p style={{
              fontSize: '16px',
              color: '#6b7280',
              marginBottom: '20px',
              lineHeight: '1.5'
            }}>
              {popupMessage}
            </p>
            <button
              style={{
                backgroundColor: popupType === 'success' ? '#10b981' : '#ef4444',
                color: 'white',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                width: '100%'
              }}
              onClick={() => setShowPopup(false)}
            >
              OK
            </button>
          </div>
        </div>
      )}

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
          
          /* Global reset */
          * {
            box-sizing: border-box;
          }
          
          /* Mobile First Responsive Styles */
          @media (max-width: 768px) {
            .contact-main-container {
              padding: 40px 16px !important;
            }
            
            .contact-grid {
              flex-direction: column !important;
              gap: 24px !important;
            }
            
            .contact-info-card,
            .form-card {
              width: 100% !important;
              min-width: unset !important;
              max-width: 100% !important;
            }
            
            .contact-info-card {
              padding: 24px !important;
            }
            
            .form-card {
              padding: 24px !important;
            }
            
            .section-title {
              font-size: 28px !important;
            }
            
            .section-subtitle {
              font-size: 16px !important;
              padding: 0 16px !important;
              margin-bottom: 40px !important;
            }
            
            .datetime-row {
              flex-direction: column !important;
              gap: 16px !important;
            }
            
            .quick-actions {
              flex-direction: column !important;
              gap: 12px !important;
            }
            
            .quick-actions button {
              width: 100% !important;
              padding: 14px 16px !important;
              font-size: 14px !important;
            }
            
            .contact-info-item {
              gap: 12px !important;
              margin-bottom: 20px !important;
            }
            
            .contact-icon-box {
              width: 40px !important;
              height: 40px !important;
            }
            
            .contact-text h4 {
              font-size: 15px !important;
            }
            
            .contact-text p,
            .contact-text address {
              font-size: 13px !important;
            }
            
            .form-card input,
            .form-card select,
            .form-card textarea {
              font-size: 14px !important;
              padding: 10px 12px !important;
            }
            
            .form-card label {
              font-size: 13px !important;
            }
            
            .form-card h3 {
              font-size: 22px !important;
              margin-bottom: 24px !important;
            }
            
            .map-container {
              padding: 20px !important;
            }
            
            .map-frame {
              height: 250px !important;
            }
            
            button {
              min-height: 48px;
            }
          }
          
          /* Tablet Styles */
          @media (min-width: 769px) and (max-width: 1024px) {
            .contact-main-container {
              padding: 60px 24px !important;
            }
            
            .contact-grid {
              gap: 32px !important;
            }
            
            .contact-info-card,
            .form-card {
              padding: 32px !important;
            }
            
            .datetime-row {
              flex-direction: row !important;
              gap: 16px !important;
            }
            
            .quick-actions {
              flex-direction: row !important;
              gap: 16px !important;
            }
            
            .map-frame {
              height: 350px !important;
            }
          }
          
          /* Desktop Styles */
          @media (min-width: 1025px) {
            .contact-main-container {
              padding: 80px 20px !important;
            }
            
            .contact-grid {
              gap: 48px !important;
            }
            
            .contact-info-card,
            .form-card {
              padding: 40px !important;
            }
            
            .datetime-row {
              flex-direction: row !important;
              gap: 16px !important;
            }
            
            .quick-actions {
              flex-direction: row !important;
              gap: 20px !important;
            }
            
            .map-frame {
              height: 400px !important;
            }
          }
          
          /* Common styles */
          .contact-grid {
            display: flex;
            width: 100%;
            gap: 48px;
          }
          
          .contact-info-card {
            flex: 1;
            background-color: #1e40af;
            border-radius: 16px;
            color: white;
          }
          
          .form-card {
            flex: 1;
            background-color: white;
            border-radius: 16px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          }
          
          .quick-actions {
            display: flex;
            margin-top: 40px;
          }
          
          .datetime-row {
            display: flex;
            width: 100%;
          }
          
          input, select, textarea {
            transition: all 0.3s ease;
            box-sizing: border-box;
          }
          
          input:focus, select:focus, textarea:focus {
            outline: none;
            border-color: #3b82f6 !important;
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
          }
          
          button {
            cursor: pointer;
            transition: all 0.3s ease;
          }
          
          button:disabled {
            opacity: 0.7;
            cursor: not-allowed;
          }
          
          .form-card > div {
            margin-bottom: 20px;
            width: 100%;
          }
          
          /* Ensure proper sizing */
          .contact-info-card,
          .form-card {
            min-width: 0;
            width: 100%;
          }
          
          /* Map styles */
          .map-container {
            margin-top: 60px;
            background-color: white;
            padding: 30px;
            border-radius: 16px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          }
          
          .map-wrapper {
            width: 100%;
            border-radius: 12px;
            overflow: hidden;
          }
          
          .map-frame {
            width: 100%;
            border: 0;
            display: block;
          }
          
          address {
            font-style: normal;
          }
        `}
      </style>

      <div className="contact-main-container" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '80px 20px'
      }}>
        <h2 className="section-title" style={{
          fontSize: '36px',
          fontWeight: 'bold',
          textAlign: 'center',
          color: '#1e40af',
          marginBottom: '20px'
        }}>
          Get In Touch
        </h2>
        <p className="section-subtitle" style={{
          fontSize: '18px',
          textAlign: 'center',
          color: '#6b7280',
          marginBottom: '60px',
          maxWidth: '600px',
          margin: '0 auto 60px'
        }}>
          Ready to elevate your brand? Contact us for a free consultation and discover how we can help you grow
        </p>

        {/* Responsive Grid - Using Flexbox for better control */}
        <div className="contact-grid">
          {/* Contact Information */}
          <div className="contact-info-card">
            <h3 style={{
              fontSize: '24px',
              fontWeight: 'bold',
              marginBottom: '30px',
              color: 'white'
            }}>
              Contact Information
            </h3>

            {/* Phone */}
            <div className="contact-info-item" style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '15px',
              marginBottom: '30px'
            }}>
              <div className="contact-icon-box" style={{
                width: '50px',
                height: '50px',
                borderRadius: '12px',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Phone size={20} />
              </div>
              <div className="contact-text">
                <h4 style={{ margin: '0 0 5px 0', fontSize: '16px', fontWeight: '600' }}>Phone</h4>
                <p style={{ margin: 0, opacity: 0.9 }}>+91 9985330008</p>
                <p style={{ margin: '2px 0 0 0', fontSize: '14px', opacity: 0.8 }}>Call us anytime</p>
              </div>
            </div>

            {/* Email */}
            <div className="contact-info-item" style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '15px',
              marginBottom: '30px'
            }}>
              <div className="contact-icon-box" style={{
                width: '50px',
                height: '50px',
                borderRadius: '12px',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Mail size={20} />
              </div>
              <div className="contact-text">
                <h4 style={{ margin: '0 0 5px 0', fontSize: '16px', fontWeight: '600' }}>Email</h4>
                <p style={{ margin: 0, opacity: 0.9, wordBreak: 'break-all' }}>adinfo.gms@gmail.com</p>
                <p style={{ margin: '2px 0 0 0', fontSize: '14px', opacity: 0.8 }}>We reply within 24 hours</p>
              </div>
            </div>

            {/* Address */}
            <div className="contact-info-item" style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '15px',
              marginBottom: '30px'
            }}>
              <div className="contact-icon-box" style={{
                width: '50px',
                height: '50px',
                borderRadius: '12px',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <MapPin size={20} />
              </div>
              <div className="contact-text">
                <h4 style={{ margin: '0 0 5px 0', fontSize: '16px', fontWeight: '600' }}>Address</h4>
                <address style={{ margin: 0, opacity: 0.9, lineHeight: '1.6', fontStyle: 'normal' }}>
                  2nd floor, Plot no 204,<br />
                  Kamineni Hospital Bypass Rd,<br />
                  Suvidha Arcade, RTC Colony,<br />
                  L. B. Nagar, Hyderabad,<br />
                  Telangana 500060
                </address>
              </div>
            </div>

            {/* Business Hours */}
            <div className="contact-info-item" style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '15px',
              marginBottom: '30px'
            }}>
              <div className="contact-icon-box" style={{
                width: '50px',
                height: '50px',
                borderRadius: '12px',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Clock size={20} />
              </div>
              <div className="contact-text">
                <h4 style={{ margin: '0 0 5px 0', fontSize: '16px', fontWeight: '600' }}>Business Hours</h4>
                <p style={{ margin: 0, opacity: 0.9 }}>Monday - Sunday</p>
                <p style={{ margin: '2px 0 0 0', fontSize: '14px', opacity: 0.8 }}>9:00 AM - 10:00 PM</p>
              </div>
            </div>

            {/* CEO Information */}
            <div className="contact-info-item" style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '15px',
              marginBottom: '30px'
            }}>
              <div className="contact-icon-box" style={{
                width: '50px',
                height: '50px',
                borderRadius: '12px',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <User size={20} />
              </div>
              <div className="contact-text">
                <h4 style={{ margin: '0 0 5px 0', fontSize: '16px', fontWeight: '600' }}>CEO</h4>
                <p style={{ margin: 0, opacity: 0.9 }}>Mr. Bala Bharma Chari</p>
                <p style={{ margin: '2px 0 0 0', fontSize: '14px', opacity: 0.8 }}>Senior Marketing Advisor</p>
              </div>
            </div>
          </div>

          {/* Contact Form - Same size as Contact Information */}
          <form className="form-card" onSubmit={handleSubmit}>
            <h3 style={{
              fontSize: '24px',
              fontWeight: 'bold',
              marginBottom: '30px',
              color: '#1e40af'
            }}>
              Send us a Message
            </h3>

            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#374151' }} htmlFor="name">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '2px solid #e5e7eb',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontFamily: 'inherit',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#374151' }} htmlFor="email">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '2px solid #e5e7eb',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontFamily: 'inherit',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#374151' }} htmlFor="phone">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '2px solid #e5e7eb',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontFamily: 'inherit',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#374151' }} htmlFor="company">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '2px solid #e5e7eb',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontFamily: 'inherit',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#374151' }} htmlFor="service">
                Service Interested In *
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                required
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '2px solid #e5e7eb',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontFamily: 'inherit',
                  cursor: 'pointer',
                  boxSizing: 'border-box'
                }}
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

            {/* Date and Time Row */}
            <div className="datetime-row">
              <div style={{ flex: 1, minWidth: 0 }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#374151' }} htmlFor="appointmentDate">
                  Preferred Date
                </label>
                <input
                  type="date"
                  id="appointmentDate"
                  name="appointmentDate"
                  value={formData.appointmentDate}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '2px solid #e5e7eb',
                    borderRadius: '8px',
                    fontSize: '16px',
                    fontFamily: 'inherit',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <div style={{ flex: 1, minWidth: 0 }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#374151' }} htmlFor="appointmentTime">
                  Preferred Time
                </label>
                <input
                  type="time"
                  id="appointmentTime"
                  name="appointmentTime"
                  value={formData.appointmentTime}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '2px solid #e5e7eb',
                    borderRadius: '8px',
                    fontSize: '16px',
                    fontFamily: 'inherit',
                    boxSizing: 'border-box'
                  }}
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#374151' }} htmlFor="message">
                Project Details
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us about your project requirements..."
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '2px solid #e5e7eb',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontFamily: 'inherit',
                  minHeight: '120px',
                  resize: 'vertical',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                width: '100%',
                backgroundColor: '#1e40af',
                color: 'white',
                border: 'none',
                padding: '15px 20px',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1d4ed8'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1e40af'}
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
        <div className="quick-actions">
          <button
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '15px 20px',
              backgroundColor: 'white',
              border: '2px solid #3b82f6',
              borderRadius: '8px',
              color: '#3b82f6',
              fontSize: '14px',
              fontWeight: '600',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onClick={openWhatsApp}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#25D366';
              e.currentTarget.style.color = 'white';
              e.currentTarget.style.borderColor = '#25D366';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'white';
              e.currentTarget.style.color = '#3b82f6';
              e.currentTarget.style.borderColor = '#3b82f6';
            }}
          >
            <MessageCircle size={20} />
            WhatsApp Chat
          </button>

          <button
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '15px 20px',
              backgroundColor: 'white',
              border: '2px solid #3b82f6',
              borderRadius: '8px',
              color: '#3b82f6',
              fontSize: '14px',
              fontWeight: '600',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onClick={openGoogleMeet}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#4285f4';
              e.currentTarget.style.color = 'white';
              e.currentTarget.style.borderColor = '#4285f4';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'white';
              e.currentTarget.style.color = '#3b82f6';
              e.currentTarget.style.borderColor = '#3b82f6';
            }}
          >
            <Video size={20} />
            Google Meet
          </button>

          <button
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '15px 20px',
              backgroundColor: 'white',
              border: '2px solid #3b82f6',
              borderRadius: '8px',
              color: '#3b82f6',
              fontSize: '14px',
              fontWeight: '600',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onClick={() => window.location.href = 'tel:+919985330008'}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#10b981';
              e.currentTarget.style.color = 'white';
              e.currentTarget.style.borderColor = '#10b981';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'white';
              e.currentTarget.style.color = '#3b82f6';
              e.currentTarget.style.borderColor = '#3b82f6';
            }}
          >
            <Phone size={20} />
            Call Now
          </button>
        </div>

        {/* Map Section with Embedded Google Map from your link */}
        <div className="map-container">
          <h3 style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#1e40af',
            marginBottom: '20px',
            textAlign: 'center'
          }}>
            Visit Our Office
          </h3>
          
          {/* Live Google Map Embed - Replace src with your actual embed code */}
          <div className="map-wrapper">
            <iframe
              className="map-frame"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.456789012345!2d78.520456!3d17.345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99d0c5a5a5a5%3A0x5a5a5a5a5a5a5a5a!2s2nd%20floor%2C%20Plot%20no%20204%2C%20Kamineni%20Hospital%20Bypass%20Rd%2C%20Suvidha%20Arcade%2C%20RTC%20Colony%2C%20L.%20B.%20Nagar%2C%20Hyderabad%2C%20Telangana%20500060!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              style={{
                width: '100%',
                height: '400px',
                border: 0,
                borderRadius: '12px'
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Global Marketing Solutions Office Location"
            />
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <address style={{ marginBottom: '15px', lineHeight: '1.6', fontSize: '14px', fontStyle: 'normal', color: '#6b7280' }}>
              2nd floor, Plot no 204, Kamineni Hospital Bypass Rd,<br />
              Suvidha Arcade, RTC Colony, L. B. Nagar,<br />
              Hyderabad, Telangana 500060
            </address>
            <button
              style={{
                backgroundColor: '#3b82f6',
                color: 'white',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '600',
                transition: 'all 0.3s ease'
              }}
              onClick={() => {
                window.open('https://maps.app.goo.gl/kf7SAvhNRNPztw9ZA', '_blank');
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#3b82f6'}
            >
              View Larger Map
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;