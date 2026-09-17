import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  ArrowUp,
  Heart,
  Youtube,
} from "lucide-react";

// Import WhatsApp icon separately (lucide-react doesn't have official WhatsApp icon)
// Using a different approach - we'll use a simple SVG or the actual WhatsApp icon from react-icons
// For now, let's use a WhatsApp SVG that looks correct

const Footer = ({ navigateTo }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const services = [
    { name: "ATL Advertising", id: "atl" },
    { name: "BTL Marketing", id: "btl" },
    { name: "Digital Marketing", id: "digital" },
    { name: "Web Development", id: "webdev" },
    { name: "Logo Design", id: "designing" },
    { name: "Graphic Design", id: "designing" },
    { name: "Event Management", id: "btl" },
    { name: "Printing Services", id: "printing" },
  ];

  const quickLinks = [
    { name: "Home", action: "scrollToTop" },
    { name: "About", action: "about" },
    { name: "Services", action: "services" },
    { name: "Portfolio", action: "portfolio" },
    { name: "Clients", action: "clients" },
    { name: "Contact", action: "contact" },
  ];

  const clients = [
    "Swiggy",
    "Blinkit",
    "Euro Kids",
    "CMR Group",
    "Kubera",
    "Roop Sagar",
    "Kaam Hain Na",
  ];

  const handleNavigation = (action, serviceId = null) => {
    if (action === "scrollToTop") {
      navigateTo("main");
      return;
    }

    if (serviceId) {
      navigateTo(serviceId);
    } else if (
      [
        "about",
        "portfolio",
        "clientele",
        "contact",
        "privacy",
        "terms",
      ].includes(action)
    ) {
      navigateTo(action);
    } else {
      navigateTo("main", action);
    }
  };

  const handleSocialClick = (e, url) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleWhatsAppClick = () => {
    const message =
      "Hi! I'm interested in your advertising services. Please contact me.";
    const whatsappUrl = `https://wa.me/919985330008?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  // WhatsApp Icon Component
  const WhatsAppIcon = ({ size = 20, color = "white" }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21z" />
      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
    </svg>
  );

  // Pinterest Icon Component
  const PinterestIcon = ({ size = 18, color = "white" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} stroke="none">
      <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12C24 5.372 18.627 0 12 0z"/>
    </svg>
  );

  const footerStyle = {
    backgroundColor: "#1e40af",
    color: "white",
    paddingTop: "60px",
    position: "relative",
  };

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
  };

  const footerGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "40px",
    marginBottom: "40px",
  };

  const columnTitleStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "25px",
    color: "white",
  };

  const linkStyle = {
    color: "rgba(255, 255, 255, 0.8)",
    textDecoration: "none",
    fontSize: "14px",
    lineHeight: "1.8",
    transition: "color 0.3s ease",
    display: "block",
    cursor: "pointer",
  };

  const socialLinksStyle = {
    display: "flex",
    gap: "15px",
    marginTop: "20px",
    flexWrap: "wrap",
  };

  const socialLinkStyle = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    textDecoration: "none",
    transition: "all 0.3s ease",
    cursor: "pointer",
  };

  const contactItemStyle = {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "15px",
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: "14px",
  };

  const bottomBarStyle = {
    borderTop: "1px solid rgba(255, 255, 255, 0.2)",
    paddingTop: "30px",
    paddingBottom: "30px",
    marginTop: "40px",
  };

  const bottomContentStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",
    textAlign: "center",
  };

  const copyrightStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "5px",
    fontSize: "14px",
    color: "rgba(255, 255, 255, 0.8)",
    flexWrap: "wrap",
  };

  const policyLinksStyle = {
    display: "flex",
    gap: "30px",
    fontSize: "14px",
    justifyContent: "center",
    flexWrap: "wrap",
  };

  const policyLinkStyle = {
    color: "rgba(255, 255, 255, 0.8)",
    textDecoration: "none",
    transition: "color 0.3s ease",
    cursor: "pointer",
  };

  const scrollTopButtonStyle = {
    position: "fixed",
    bottom: "30px",
    right: "15px",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    backgroundColor: "#3b82f6",
    border: "none",
    color: "white",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 20px rgba(59, 130, 246, 0.4)",
    transition: "all 0.3s ease",
    zIndex: 1000,
  };

  const whatsappFloatStyle = {
    position: "fixed",
    bottom: "95px",
    right: "15px",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    backgroundColor: "#25D366",
    border: "none",
    color: "white",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 20px rgba(37, 211, 102, 0.4)",
    transition: "all 0.3s ease",
    zIndex: 1000,
  };

  const responsiveBottomContentStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",
  };

  const responsiveCopyrightStyle = {
    ...copyrightStyle,
    justifyContent: "flex-start",
  };

  const responsivePolicyLinksStyle = {
    ...policyLinksStyle,
    justifyContent: "flex-end",
  };

  const handleCallClick = () => {
    window.location.href = "tel:+919985330008";
  };

  return (
    <>
      <footer style={footerStyle}>
        <div style={containerStyle}>
          <div style={footerGridStyle}>
            {/* Company Info */}
            <div>
              <h3 style={columnTitleStyle}>Global Marketing Solutions</h3>
              <p
                style={{
                  color: "rgba(255, 255, 255, 0.8)",
                  lineHeight: "1.6",
                  fontSize: "14px",
                  marginBottom: "20px",
                }}
              >
                Your trusted partner in comprehensive marketing, advertising,
                and brand solutions with 10+ years of excellence in the
                industry.
              </p>

              <div style={socialLinksStyle}>
                <div
                  style={{ ...socialLinkStyle, backgroundColor: "#3b5998" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.opacity = "0.9";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.opacity = "1";
                  }}
                  onClick={(e) =>
                    handleSocialClick(e, "https://www.facebook.com/GlobalMarketingSolutionsAds")
                  }
                >
                  <Facebook size={18} />
                </div>

                <div
                  style={{ ...socialLinkStyle, background: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.opacity = "0.9";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.opacity = "1";
                  }}
                  onClick={(e) =>
                    handleSocialClick(e, "https://www.instagram.com/gms_ads")
                  }
                >
                  <Instagram size={18} />
                </div>

                {/* Pinterest Social Link */}
                <div
                  style={{ ...socialLinkStyle, backgroundColor: "#E60023" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.opacity = "0.9";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.opacity = "1";
                  }}
                  onClick={(e) =>
                    handleSocialClick(
                      e,
                      "https://pin.it/HesPTZdlg",
                    )
                  }
                >
                  <PinterestIcon size={18} color="white" />
                </div>

                <div
                  style={{ ...socialLinkStyle, backgroundColor: "#0077B5" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.opacity = "0.9";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.opacity = "1";
                  }}
                  onClick={(e) =>
                    handleSocialClick(
                      e,
                      "https://www.linkedin.com/in/rudraram-bala-brahma-chary-483788345",
                    )
                  }
                >
                  <Linkedin size={18} />
                </div>

                {/* YouTube Link */}
                <div
                  style={{ ...socialLinkStyle, backgroundColor: "#FF0000" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.opacity = "0.9";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.opacity = "1";
                  }}
                  onClick={(e) =>
                    handleSocialClick(
                      e,
                      "https://www.youtube.com/@gms-ads2016/",
                    )
                  }
                >
                  <Youtube size={18} />
                </div>

                {/* WhatsApp Social Link with correct icon */}
                <div
                  style={{ ...socialLinkStyle, backgroundColor: "#25D366" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.opacity = "0.9";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.opacity = "1";
                  }}
                  onClick={handleWhatsAppClick}
                >
                  <WhatsAppIcon size={18} color="white" />
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 style={columnTitleStyle}>Our Services</h3>
              {services.map((service, index) => (
                <span
                  key={index}
                  style={linkStyle}
                  onMouseEnter={(e) => (e.target.style.color = "#60a5fa")}
                  onMouseLeave={(e) =>
                    (e.target.style.color = "rgba(255, 255, 255, 0.8)")
                  }
                  onClick={() => handleNavigation("service", service.id)}
                >
                  {service.name}
                </span>
              ))}
            </div>

            {/* Quick Links */}
            <div>
              <h3 style={columnTitleStyle}>Quick Links</h3>
              {quickLinks.map((link, index) => (
                <span
                  key={index}
                  style={linkStyle}
                  onMouseEnter={(e) => (e.target.style.color = "#60a5fa")}
                  onMouseLeave={(e) =>
                    (e.target.style.color = "rgba(255, 255, 255, 0.8)")
                  }
                  onClick={() => handleNavigation(link.action)}
                >
                  {link.name}
                </span>
              ))}

              <div style={{ marginTop: "20px" }}>
                <h4
                  style={{
                    color: "white",
                    fontSize: "16px",
                    marginBottom: "10px",
                    fontWeight: "600",
                  }}
                >
                  Notable Clients
                </h4>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                  }}
                >
                  {clients.slice(0, 4).map((client, index) => (
                    <span
                      key={index}
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        padding: "4px 8px",
                        borderRadius: "4px",
                        fontSize: "12px",
                        color: "rgba(255, 255, 255, 0.9)",
                      }}
                    >
                      {client}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 style={columnTitleStyle}>Contact Info</h3>

              <div style={contactItemStyle}>
                <Phone size={16} style={{ flexShrink: 0 }} />
                <span>+91 9985 33 0008</span>
              </div>

              <div style={contactItemStyle}>
                <Mail size={16} style={{ flexShrink: 0 }} />
                <span>adinfo.gms@gmail.com</span>
              </div>

              <div style={contactItemStyle}>
                <MapPin
                  size={16}
                  style={{
                    flexShrink: 0,
                    alignSelf: "flex-start",
                    marginTop: "2px",
                  }}
                />
                <span style={{ lineHeight: "1.4" }}>
                  2nd floor, Plot no 204,
                  <br />
                  Kamineni Hospital Bypass Rd,
                  <br />
                  Suvidha Arcade, RTC Colony,
                  <br />
                  L. B. Nagar, Hyderabad,
                  <br />
                  Telangana 500060
                </span>
              </div>

              {/* WhatsApp Contact Button with correct icon */}
              <div
                style={{
                  marginTop: "20px",
                  padding: "12px",
                  backgroundColor: "#25D366",
                  borderRadius: "8px",
                  textAlign: "center",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                }}
                onClick={handleWhatsAppClick}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#20b859";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#25D366";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <WhatsAppIcon size={18} color="white" />
                <span
                  style={{
                    color: "white",
                    fontSize: "14px",
                    fontWeight: "600",
                  }}
                >
                  WhatsApp Us
                </span>
              </div>

              <div
                style={{
                  marginTop: "20px",
                  padding: "15px",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "8px",
                }}
              >
                <h4
                  style={{
                    color: "white",
                    fontSize: "14px",
                    marginBottom: "8px",
                    fontWeight: "600",
                  }}
                >
                  Leadership
                </h4>
                <p
                  style={{
                    color: "rgba(255, 255, 255, 0.8)",
                    fontSize: "13px",
                    margin: 0,
                  }}
                >
                  Mr. Bala Bharma Chari
                  <br />
                  <span style={{ opacity: 0.7 }}>Chief Executive Officer</span>
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div style={bottomBarStyle}>
            <div style={responsiveBottomContentStyle}>
              <div style={responsiveCopyrightStyle}>
                <span>
                  © 2026 Design and Developed By{" "}
                  <span
                    style={{
                      cursor: "pointer",
                      fontWeight: "600",
                    }}
                    onClick={() => handleNavigation("home")}
                    onMouseEnter={(e) => (e.target.style.color = "#60a5fa")}
                    onMouseLeave={(e) => (e.target.style.color = "inherit")}
                  >
                    Global Marketing Solutions
                  </span>
                  .
                </span>
              </div>

              <div style={responsivePolicyLinksStyle}>
                <span
                  style={policyLinkStyle}
                  onMouseEnter={(e) => (e.target.style.color = "#60a5fa")}
                  onMouseLeave={(e) =>
                    (e.target.style.color = "rgba(255, 255, 255, 0.8)")
                  }
                  onClick={() => handleNavigation("privacy")}
                >
                  Privacy Policy
                </span>
                <span
                  style={policyLinkStyle}
                  onMouseEnter={(e) => (e.target.style.color = "#60a5fa")}
                  onMouseLeave={(e) =>
                    (e.target.style.color = "rgba(255, 255, 255, 0.8)")
                  }
                  onClick={() => handleNavigation("terms")}
                >
                  Terms & Conditions
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button with correct icon */}
      <button
        style={whatsappFloatStyle}
        onClick={handleWhatsAppClick}
        title="WhatsApp Us"
        aria-label="WhatsApp Us"
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#20b859";
          e.currentTarget.style.transform = "scale(1.1)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "#25D366";
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        <WhatsAppIcon size={24} color="white" />
      </button>

      {/* Floating Call Button (Replaces Scroll To Top Arrow) */}
      <button
        style={{
          ...scrollTopButtonStyle,
          backgroundColor: "#1e40af",
          boxShadow: "0 4px 20px rgba(30, 64, 175, 0.4)",
        }}
        onClick={handleCallClick}
        title="Call Us Now"
        aria-label="Call Us Now"
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#1d4ed8";
          e.currentTarget.style.transform = "scale(1.1)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "#1e40af";
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        <Phone size={22} color="white" />
      </button>
    </>
  );
};

export default Footer;
