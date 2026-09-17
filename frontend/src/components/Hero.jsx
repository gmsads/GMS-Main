import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Play, Award, Users, Calendar, Phone, X, Send, CheckCircle, AlertCircle, ChevronLeft, ChevronRight, Download, Volume2, VolumeX } from 'lucide-react';

// Import your videos from assets
import heroVideo from '../assets/video/v1.mp4';
import heroVideo2 from '../assets/video/v2.mp4';
import heroVideo3 from '../assets/video/v3.mp4';
import heroVideo4 from '../assets/video/v4.mp4';
// Import PDF brochure
import brochurePDF from '../assets/broucher.pdf';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);
  
  

  // Instagram URL
  const instagramUrl = "https://www.instagram.com/gms_ads";

  // Video slider data - All videos now have same title "Our Success Story"
  const videos = [
    {
      src: heroVideo,
      title: "Our Success Story",
      description: "See how we've helped businesses grow with our marketing solutions"
    },
    {
      src: heroVideo2,
      title: "Our Success Story",
      description: "See how we've helped businesses grow with our marketing solutions"
    },
    {
      src: heroVideo3,
      title: "Our Success Story",
      description: "See how we've helped businesses grow with our marketing solutions"
    },
    {
      src: heroVideo4,
      title: "Our Success Story",
      description: "See how we've helped businesses grow with our marketing solutions"
    }
  ];

  // Handle video click - redirect to Instagram
  const handleVideoClick = () => {
    window.open(instagramUrl, '_blank', 'noopener,noreferrer');
  };

  // Removed auto popup on mount

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const slides = [
    {
       title: "Global Marketing Solutions - Your One-Stop Branding, Printing & Advertising Partner in Hyderabad",
    subtitle: "Since 2016, we help businesses grow with end-to-end advertising - from logo design and flex printing to auto tops, mobile vans, hoardings, events and digital marketing. One vendor. Zero headache."
  },
    {
      title: "Complete Advertising & Event Management",
      subtitle: "From Concept to Execution - We Handle Everything"
    },
    {
      title: "Digital Solutions for Modern Businesses",
      subtitle: "Web Development, Digital Marketing & Brand Design"
    }
  ];

  // Auto-change text slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Handle video playback - ensures complete video plays
  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;
      video.muted = isMuted;
      video.loop = false; // Don't loop, let it play completely
      
      // Play the video
      const playVideo = async () => {
        try {
          await video.play();
          setIsPlaying(true);
        } catch (error) {
          console.log("Autoplay prevented:", error);
          setIsPlaying(false);
        }
      };
      
      playVideo();
      
      // When video ends, move to next video
      const handleVideoEnd = () => {
        setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
      };
      
      video.addEventListener('ended', handleVideoEnd);
      
      // Cleanup event listener
      return () => {
        video.removeEventListener('ended', handleVideoEnd);
      };
    }
  }, [currentVideoIndex, isMuted]);

  const nextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  const togglePlayPause = (e) => {
    e.stopPropagation(); // Prevent triggering video click
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(error => {
          console.log("Play prevented:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  

  const handleDownloadBrochure = () => {
    const link = document.createElement('a');
    link.href = brochurePDF;
    link.download = 'GMS-Brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Responsive values
  const getVideoHeight = () => {
    if (windowWidth < 480) return '200px';
    if (windowWidth < 768) return '250px';
    if (windowWidth < 1024) return '350px';
    return '400px';
  };

  const getTitleFontSize = () => {
    if (windowWidth < 480) return '28px';
    if (windowWidth < 768) return '32px';
    if (windowWidth < 1024) return '40px';
    return '48px';
  };

  const heroStyle = {
    minHeight: '100vh',
    background: `linear-gradient(135deg, rgba(30, 64, 175, 0.9) 0%, rgba(59, 130, 246, 0.8) 100%)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    paddingTop: '117px'
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
    padding: windowWidth < 768 ? '40px 16px' : '60px 20px',
    position: 'relative',
    zIndex: 2,
    display: 'flex',
    flexDirection: windowWidth < 768 ? 'column' : 'row',
    alignItems: 'center',
    gap: windowWidth < 768 ? '40px' : '60px'
  };

  const contentStyle = {
    color: 'white',
    flex: 1,
    width: '100%'
  };

  const titleStyle = {
    fontSize: getTitleFontSize(),
    fontWeight: 'bold',
    lineHeight: '1.2',
    marginBottom: '20px',
    opacity: 0,
    animation: 'fadeInUp 1s ease forwards'
  };

  const subtitleStyle = {
    fontSize: windowWidth < 768 ? '16px' : '20px',
    marginBottom: '30px',
    opacity: 0.9,
    lineHeight: '1.6',
    animation: 'fadeInUp 1s ease 0.3s forwards'
  };

  const buttonContainerStyle = {
    display: 'flex',
    gap: '15px',
    marginBottom: '40px',
    flexWrap: 'wrap',
    justifyContent: windowWidth < 480 ? 'center' : 'flex-start'
  };

  const primaryButtonStyle = {
    backgroundColor: '#ffffff',
    color: '#1e40af',
    border: 'none',
    padding: windowWidth < 480 ? '12px 20px' : '15px 30px',
    borderRadius: '8px',
    fontSize: windowWidth < 480 ? '14px' : '16px',
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
    backgroundColor: '#10b981',
    color: 'white',
    border: 'none',
    padding: windowWidth < 480 ? '12px 20px' : '15px 30px',
    borderRadius: '8px',
    fontSize: windowWidth < 480 ? '14px' : '16px',
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
    gridTemplateColumns: windowWidth < 480 ? '1fr' : 'repeat(3, 1fr)',
    gap: '15px',
    opacity: 0,
    animation: 'fadeInUp 1s ease 1.2s forwards'
  };

  const statItemStyle = {
    textAlign: 'center',
    padding: windowWidth < 480 ? '15px' : '20px',
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
    padding: windowWidth < 768 ? '15px' : '25px',
    textAlign: 'center',
    opacity: 0,
    animation: 'fadeInUp 1s ease 0.6s forwards',
    flex: 1,
    width: '100%',
    cursor: 'pointer' // Show pointer cursor to indicate clickable
  };

  const videoWrapperStyle = {
    position: 'relative',
    width: '100%',
    borderRadius: '12px',
    overflow: 'hidden',
    marginBottom: '15px'
  };

  const videoStyle = {
    width: '100%',
    height: getVideoHeight(),
    objectFit: 'cover',
    display: 'block'
  };

  const navButtonStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: windowWidth < 480 ? '30px' : '40px',
    height: windowWidth < 480 ? '30px' : '40px',
    borderRadius: '50%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
    zIndex: 10
  };

  const controlButtonStyle = {
    position: 'absolute',
    bottom: '10px',
    right: '10px',
    width: windowWidth < 480 ? '35px' : '45px',
    height: windowWidth < 480 ? '35px' : '45px',
    borderRadius: '50%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
    zIndex: 10,
    backdropFilter: 'blur(4px)'
  };

  const volumeButtonStyle = {
    position: 'absolute',
    bottom: '10px',
    left: '10px',
    width: windowWidth < 480 ? '35px' : '45px',
    height: windowWidth < 480 ? '35px' : '45px',
    borderRadius: '50%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
    zIndex: 10,
    backdropFilter: 'blur(4px)'
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

    @keyframes slideIn {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    .video-fade {
      animation: fadeIn 0.5s ease-in-out;
    }

    /* Mobile Responsive Styles */
    @media (max-width: 768px) {
      .popup-form-container {
        padding: 20px !important;
      }
      
      .popup-title {
        font-size: 22px !important;
      }
      
      .popup-form input,
      .popup-form select,
      .popup-form textarea {
        font-size: 14px !important;
        padding: 10px 12px !important;
      }
      
      .popup-form label {
        font-size: 12px !important;
      }
      
      .close-popup-btn {
        top: 5px !important;
        right: 5px !important;
        width: 30px !important;
        height: 30px !important;
      }
      
      /* Hide video indicator dots on mobile */
      .video-dots {
        display: none !important;
      }
    }

    @media (max-width: 480px) {
      .popup-form-container {
        padding: 15px !important;
      }
      
      .popup-title {
        font-size: 20px !important;
      }
      
      .popup-subtitle {
        font-size: 11px !important;
      }
    }

    /* Make inputs and selects touch-friendly on mobile */
    @media (max-width: 768px) {
      input, select, textarea, button {
        font-size: 16px !important;
      }
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
            <button 
              style={primaryButtonStyle}
              onClick={handleDownloadBrochure}
            >
              <Download size={windowWidth < 480 ? 16 : 20} /> Download Brochure
            </button>
            
            <a 
              href="tel:+919985330008"
              style={secondaryButtonStyle}
            >
              <Phone size={windowWidth < 480 ? 16 : 20} /> Call Now
            </a>
          </div>

          <div style={statsStyle}>
            <div style={statItemStyle}>
              <Award size={windowWidth < 480 ? 20 : 24} style={{ marginBottom: '8px', color: '#fbbf24' }} />
              <div style={{ fontSize: windowWidth < 480 ? '20px' : '24px', fontWeight: 'bold' }}>10+</div>
              <div style={{ fontSize: windowWidth < 480 ? '12px' : '14px', opacity: 0.8 }}>Years Experience</div>
            </div>
            <div style={statItemStyle}>
              <Users size={windowWidth < 480 ? 20 : 24} style={{ marginBottom: '8px', color: '#10b981' }} />
              <div style={{ fontSize: windowWidth < 480 ? '20px' : '24px', fontWeight: 'bold' }}>5000+</div>
              <div style={{ fontSize: windowWidth < 480 ? '12px' : '14px', opacity: 0.8 }}>Happy Clients</div>
            </div>
            <div style={statItemStyle}>
              <Calendar size={windowWidth < 480 ? 20 : 24} style={{ marginBottom: '8px', color: '#f59e0b' }} />
              <div style={{ fontSize: windowWidth < 480 ? '20px' : '24px', fontWeight: 'bold' }}>10000+</div>
              <div style={{ fontSize: windowWidth < 480 ? '12px' : '14px', opacity: 0.8 }}>Projects Done</div>
            </div>
          </div>
        </div>

        {/* Video Slider Section - Click to redirect to Instagram */}
        <div 
          style={videoContainerStyle}
          onClick={handleVideoClick}
        >
          <div style={videoWrapperStyle}>
            {/* Previous Button - stops propagation so it doesn't trigger Instagram redirect */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevVideo();
              }}
              style={{ ...navButtonStyle, left: '5px' }}
            >
              <ChevronLeft size={windowWidth < 480 ? 18 : 24} />
            </button>

            {/* Video */}
            <video
              ref={videoRef}
              key={currentVideoIndex}
              autoPlay
              muted={isMuted}
              playsInline
              className="video-fade"
              style={videoStyle}
            >
              <source src={videos[currentVideoIndex].src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Next Button - stops propagation so it doesn't trigger Instagram redirect */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextVideo();
              }}
              style={{ ...navButtonStyle, right: '5px' }}
            >
              <ChevronRight size={windowWidth < 480 ? 18 : 24} />
            </button>

            {/* Volume Control Button - stops propagation */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleMute();
              }}
              style={volumeButtonStyle}
            >
              {isMuted ? <VolumeX size={windowWidth < 480 ? 16 : 22} /> : <Volume2 size={windowWidth < 480 ? 16 : 22} />}
            </button>

            {/* Play/Pause Button - stops propagation */}
            <button
              onClick={togglePlayPause}
              style={controlButtonStyle}
            >
              <Play size={windowWidth < 480 ? 16 : 22} style={{ marginLeft: '2px' }} />
            </button>
          </div>

          {/* Video Title */}
          <h3 style={{ fontSize: windowWidth < 480 ? '18px' : '20px', marginBottom: '8px', color: 'white', fontWeight: 'bold' }}>
            {videos[currentVideoIndex].title}
          </h3>
          <p style={{ opacity: 0.8, fontSize: windowWidth < 480 ? '11px' : '12px', color: 'white' }}>
            {videos[currentVideoIndex].description}
          </p>

          {/* Video Indicators - Hidden on mobile */}
          <div 
            className="video-dots"
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '8px',
              marginTop: '15px'
            }}
          >
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentVideoIndex(index);
                }}
                style={{
                  width: windowWidth < 480 ? '6px' : '8px',
                  height: windowWidth < 480 ? '6px' : '8px',
                  borderRadius: '50%',
                  border: 'none',
                  backgroundColor: index === currentVideoIndex ? 'white' : 'rgba(255, 255, 255, 0.4)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  padding: '0'
                }}
              />
            ))}
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;