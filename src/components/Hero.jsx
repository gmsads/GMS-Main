import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Award, Users, Calendar } from 'lucide-react';

// Import your video from assets
import heroVideo from '../assets/video/hero-video.mp4'; // Update the path and filename as needed

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const slides = [
    {
      title: "Transform Your Brand with Expert Marketing Solutions",
      subtitle: "8+ Years of Excellence in ATL, BTL & Digital Marketing",
      background: "linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)"
    },
    {
      title: "Complete Advertising & Event Management",
      subtitle: "From Concept to Execution - We Handle Everything",
      background: "linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)"
    },
    {
      title: "Digital Solutions for Modern Businesses",
      subtitle: "Web Development, Digital Marketing & Brand Design",
      background: "linear-gradient(135deg, #1d4ed8 0%, #60a5fa 100%)"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const heroStyle = {
    minHeight: '100vh',
    background: `linear-gradient(135deg, rgba(30, 64, 175, 0.9) 0%, rgba(59, 130, 246, 0.8) 100%), url('../assets/gmsbg.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    paddingTop: '70px'
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(30, 64, 175, 0.1)',
    zIndex: 1
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    position: 'relative',
    zIndex: 2,
    display: 'grid',
    gridTemplateColumns: windowWidth > 768 ? '1fr 1fr' : '1fr',
    alignItems: 'center',
    gap: '40px'
  };

  const contentStyle = {
    color: 'white'
  };

  const titleStyle = {
    fontSize: windowWidth > 768 ? '48px' : '32px',
    fontWeight: 'bold',
    lineHeight: '1.2',
    marginBottom: '20px',
    opacity: 0,
    animation: 'fadeInUp 1s ease forwards'
  };

  const subtitleStyle = {
    fontSize: '20px',
    marginBottom: '30px',
    opacity: 0.9,
    lineHeight: '1.6',
    animation: 'fadeInUp 1s ease 0.3s forwards'
  };

  const buttonContainerStyle = {
    display: 'flex',
    gap: '20px',
    marginBottom: '40px',
    flexWrap: 'wrap'
  };

  const primaryButtonStyle = {
    backgroundColor: '#ffffff',
    color: '#1e40af',
    border: 'none',
    padding: '15px 30px',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    opacity: 0,
    animation: 'fadeInUp 1s ease 0.6s forwards'
  };

  const secondaryButtonStyle = {
    backgroundColor: 'transparent',
    color: 'white',
    border: '2px solid white',
    padding: '15px 30px',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    opacity: 0,
    animation: 'fadeInUp 1s ease 0.9s forwards'
  };

  const statsStyle = {
    display: 'grid',
    gridTemplateColumns: windowWidth > 480 ? 'repeat(3, 1fr)' : '1fr',
    gap: '20px',
    opacity: 0,
    animation: 'fadeInUp 1s ease 1.2s forwards'
  };

  const statItemStyle = {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
    backdropFilter: 'blur(10px)'
  };

  const videoContainerStyle = {
    position: 'relative',
    borderRadius: '16px',
    overflow: 'hidden',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    padding: windowWidth > 768 ? '40px' : '20px',
    textAlign: 'center',
    opacity: 0,
    animation: 'fadeInUp 1s ease 0.6s forwards'
  };

  const playButtonStyle = {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 20px',
    cursor: 'pointer',
    transition: 'transform 0.3s ease'
  };

  // Add keyframe animations
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }
  `;
  if (typeof document !== 'undefined' && !document.head.querySelector('style[data-hero-animations]')) {
    style.setAttribute('data-hero-animations', '');
    document.head.appendChild(style);
  }

  return (
    <section id="home" style={heroStyle}>
      <div style={overlayStyle}></div>
      <div style={containerStyle}>
        <div style={contentStyle}>
          <h1 style={titleStyle}>{slides[currentSlide].title}</h1>
          <p style={subtitleStyle}>{slides[currentSlide].subtitle}</p>
          
          <div style={buttonContainerStyle}>
            <a 
              href="#contact" 
              style={primaryButtonStyle}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              Get Started <ArrowRight size={20} />
            </a>
            
            <a 
              href="https://meet.google.com/new"
              target="_blank"
              rel="noopener noreferrer"
              style={secondaryButtonStyle}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'white';
                e.target.style.color = '#1e40af';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = 'white';
              }}
            >
              <Calendar size={20} /> Schedule Meeting
            </a>
          </div>

          <div style={statsStyle}>
            <div style={statItemStyle}>
              <Award size={24} style={{ marginBottom: '10px', color: '#fbbf24' }} />
              <div style={{ fontSize: '24px', fontWeight: 'bold' }}>8+</div>
              <div style={{ fontSize: '14px', opacity: 0.8 }}>Years Experience</div>
            </div>
            <div style={statItemStyle}>
              <Users size={24} style={{ marginBottom: '10px', color: '#10b981' }} />
              <div style={{ fontSize: '24px', fontWeight: 'bold' }}>500+</div>
              <div style={{ fontSize: '14px', opacity: 0.8 }}>Happy Clients</div>
            </div>
            <div style={statItemStyle}>
              <Calendar size={24} style={{ marginBottom: '10px', color: '#f59e0b' }} />
              <div style={{ fontSize: '24px', fontWeight: 'bold' }}>1000+</div>
              <div style={{ fontSize: '14px', opacity: 0.8 }}>Projects Done</div>
            </div>
          </div>
        </div>

        <div style={videoContainerStyle}>
          <video
            autoPlay
            muted
            loop
            playsInline
            style={{
              width: '100%',
              height: windowWidth > 768 ? '300px' : '200px',
              objectFit: 'cover',
              borderRadius: '12px',
              marginBottom: '20px'
            }}
          >
            <source src={heroVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div 
            style={playButtonStyle}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
            }}
            onClick={() => {
              // Play/pause functionality for the video
              const video = document.querySelector('video');
              if (video.paused) {
                video.play();
              } else {
                video.pause();
              }
            }}
          >
            <Play size={32} style={{ color: '#1e40af', marginLeft: '4px' }} />
          </div>
          <h3 style={{ fontSize: windowWidth > 480 ? '24px' : '20px', marginBottom: '10px' }}>Watch Our Success Story</h3>
          <p style={{ opacity: 0.8, fontSize: windowWidth > 480 ? '16px' : '14px' }}>See how we've helped businesses grow with our marketing solutions</p>
        </div>
      </div>

      {/* Slide indicators */}
      <div style={{
        position: 'absolute',
        bottom: '30px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '10px',
        zIndex: 2
      }}>
        {slides.map((_, index) => (
          <button
            key={index}
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              border: 'none',
              backgroundColor: index === currentSlide ? 'white' : 'rgba(255, 255, 255, 0.5)',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;