import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle, AlertCircle } from 'lucide-react';

const EnquiryPopup = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    appointmentDate: getTodayDate(),
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [popupType, setPopupType] = useState('success');
  const [showNotification, setShowNotification] = useState(false);

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
      const res = await fetch("https://formspree.io/f/xaqzbzky", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setPopupMessage("Thank you! Your message has been sent successfully. We will get back to you within 24 hours.");
        setPopupType('success');
        setShowNotification(true);
        setFormData({
          name: '', email: '', phone: '', company: '', service: '',
          appointmentDate: getTodayDate(), message: ''
        });
        setShowPopup(false);
      } else {
        setPopupMessage("Oops! Something went wrong. Please try again.");
        setPopupType('error');
        setShowNotification(true);
      }
    } catch (err) {
      console.error(err);
      setPopupMessage("Oops! Something went wrong. Please check your connection and try again.");
      setPopupType('error');
      setShowNotification(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const closePopup = () => setShowPopup(false);
  const closeNotification = () => setShowNotification(false);

  return (
    <>
      {/* Success/Error Notification */}
      {showNotification && (
        <div style={{
          position: 'fixed',
          top: '20px',
          zIndex: 2000,
          animation: 'slideIn 0.3s ease-out',
          left: windowWidth < 480 ? '20px' : 'auto',
          right: windowWidth < 480 ? '20px' : '20px'
        }}>
          <div style={{
            backgroundColor: popupType === 'success' ? '#10b981' : '#ef4444',
            color: 'white',
            padding: '12px 16px',
            borderRadius: '12px',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            width: windowWidth < 480 ? 'auto' : '300px',
            maxWidth: '90vw'
          }}>
            {popupType === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
            <p style={{ margin: 0, fontSize: '13px', flex: 1 }}>{popupMessage}</p>
            <button
              onClick={closeNotification}
              style={{ background: 'transparent', border: 'none', color: 'white', cursor: 'pointer', padding: '2px' }}
            >
              <X size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Floating Enquiry Button */}
      <button
        onClick={() => setShowPopup(true)}
        style={{
          position: 'fixed',
          top: '50%',
          right: '0',
          transform: 'translateY(-50%)',
          backgroundColor: '#1e40af',
          color: 'white',
          border: 'none',
          padding: '16px 10px',
          borderTopLeftRadius: '8px',
          borderBottomLeftRadius: '8px',
          cursor: 'pointer',
          zIndex: 990,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxShadow: '-4px 0 20px rgba(0, 0, 0, 0.2)',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#1e3a8a';
          e.currentTarget.style.paddingRight = '20px';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#1e40af';
          e.currentTarget.style.paddingRight = '10px';
        }}
      >
        <span style={{ 
          writingMode: 'vertical-rl', 
          textOrientation: 'mixed',
          transform: 'rotate(180deg)',
          fontWeight: '600',
          fontSize: '15px',
          letterSpacing: '1px'
        }}>
          Enquiry Now
        </span>
      </button>

      {/* Popup Modal */}
      {showPopup && (
        <div
          style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1500,
            padding: '16px',
            overflowY: 'auto'
          }}
          onClick={closePopup}
        >
          <div
            className="popup-modal"
            style={{
              backgroundColor: 'white',
              borderRadius: '20px',
              maxWidth: '500px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              position: 'relative',
              animation: 'popupIn 0.3s ease-out',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-popup-btn"
              onClick={closePopup}
              style={{
                position: 'sticky',
                top: '10px',
                right: '10px',
                float: 'right',
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                backgroundColor: '#f3f4f6',
                color: '#6b7280',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '10px',
                zIndex: 10,
                transition: 'all 0.3s ease'
              }}
            >
              <X size={18} />
            </button>

            <div className="popup-form-container" style={{ padding: '24px', paddingTop: '0', clear: 'both' }}>
              <h3 className="popup-title" style={{
                fontSize: '24px', fontWeight: 'bold', color: '#1e40af',
                textAlign: 'center', marginBottom: '8px', marginTop: '10px'
              }}>
                Send us a Message
              </h3>
              <p className="popup-subtitle" style={{ textAlign: 'center', color: '#6b7280', marginBottom: '20px', fontSize: '13px' }}>
                Fill in your details and we'll get back to you within 24 hours
              </p>

              <form className="popup-form" onSubmit={handleSubmit}>
                <div style={{ marginBottom: '15px' }}>
                  <label style={{ display: 'block', marginBottom: '6px', fontWeight: '600', color: '#374151', fontSize: '13px' }}>Full Name *</label>
                  <input type="text" name="name" value={formData.name} onChange={handleInputChange} required style={{ width: '100%', padding: '10px 14px', border: '2px solid #e5e7eb', borderRadius: '10px', fontSize: '14px', boxSizing: 'border-box' }} />
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <label style={{ display: 'block', marginBottom: '6px', fontWeight: '600', color: '#374151', fontSize: '13px' }}>Email Address *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} required style={{ width: '100%', padding: '10px 14px', border: '2px solid #e5e7eb', borderRadius: '10px', fontSize: '14px', boxSizing: 'border-box' }} />
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <label style={{ display: 'block', marginBottom: '6px', fontWeight: '600', color: '#374151', fontSize: '13px' }}>Phone Number *</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required style={{ width: '100%', padding: '10px 14px', border: '2px solid #e5e7eb', borderRadius: '10px', fontSize: '14px', boxSizing: 'border-box' }} />
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <label style={{ display: 'block', marginBottom: '6px', fontWeight: '600', color: '#374151', fontSize: '13px' }}>Company Name</label>
                  <input type="text" name="company" value={formData.company} onChange={handleInputChange} style={{ width: '100%', padding: '10px 14px', border: '2px solid #e5e7eb', borderRadius: '10px', fontSize: '14px', boxSizing: 'border-box' }} />
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <label style={{ display: 'block', marginBottom: '6px', fontWeight: '600', color: '#374151', fontSize: '13px' }}>Service Interested In *</label>
                  <select name="service" value={formData.service} onChange={handleInputChange} required style={{ width: '100%', padding: '10px 14px', border: '2px solid #e5e7eb', borderRadius: '10px', fontSize: '14px', boxSizing: 'border-box', backgroundColor: 'white' }}>
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
                <div style={{ marginBottom: '15px' }}>
                  <label style={{ display: 'block', marginBottom: '6px', fontWeight: '600', color: '#374151', fontSize: '13px' }}>Preferred Date</label>
                  <input type="date" name="appointmentDate" value={formData.appointmentDate} onChange={handleInputChange} style={{ width: '100%', padding: '10px 14px', border: '2px solid #e5e7eb', borderRadius: '10px', fontSize: '14px', boxSizing: 'border-box' }} />
                </div>
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '6px', fontWeight: '600', color: '#374151', fontSize: '13px' }}>Project Details</label>
                  <textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Tell us about your project requirements..." rows="3" style={{ width: '100%', padding: '10px 14px', border: '2px solid #e5e7eb', borderRadius: '10px', fontSize: '14px', resize: 'vertical', boxSizing: 'border-box', fontFamily: 'inherit' }} />
                </div>
                <button type="submit" disabled={isSubmitting} style={{ width: '100%', backgroundColor: '#1e40af', color: 'white', border: 'none', padding: '12px 20px', borderRadius: '10px', fontSize: '15px', fontWeight: '600', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', cursor: 'pointer', transition: 'all 0.3s ease' }}>
                  {isSubmitting ? 'Sending...' : <><Send size={16} />Send Message</>}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EnquiryPopup;
