import React, { useState, useEffect } from 'react';
import { ArrowLeft, Calendar, User, Share2 } from 'lucide-react';

const BlogDetail = ({ blogId, selectedBlog, navigateTo }) => {
  const [blog, setBlog] = useState(selectedBlog || null);
  const [loading, setLoading] = useState(!selectedBlog);
  const [error, setError] = useState(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!blog && blogId) {
      const fetchBlog = async () => {
        try {
          setLoading(true);
          const res = await fetch(`/api/blogs/${blogId}`);
          if (!res.ok) throw new Error('Blog post not found');
          const data = await res.json();
          setBlog(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
      fetchBlog();
    }
  }, [blogId, selectedBlog]);

  if (loading) {
    return (
      <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', paddingTop: '140px', textAlign: 'center' }}>
        <h2>Loading article...</h2>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', paddingTop: '140px', paddingBottom: '80px', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: 'white', padding: '40px 20px', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', boxSizing: 'border-box' }}>
          <h2 style={{ color: '#ef4444', marginBottom: '15px' }}>Blog Not Found</h2>
          <p style={{ color: '#64748b', marginBottom: '25px' }}>{error || 'The blog post you are looking for does not exist or has been removed.'}</p>
          <button
            onClick={() => navigateTo('blog')}
            style={{
              backgroundColor: '#1e40af',
              color: 'white',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '25px',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            Return to All Blogs
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: 'calc(100vh - 117px)', paddingBottom: '80px', boxSizing: 'border-box' }}>
      {/* Top Banner */}
      <div className="hero-banner-seamless" style={{ backgroundColor: '#1e40af', color: 'white', paddingLeft: '16px', paddingRight: '16px', paddingBottom: '50px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {windowWidth >= 768 ? (
            /* Desktop Layout: Horizontal Top Row */
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '15px', marginBottom: '20px' }}>
              <button
                onClick={() => navigateTo('blog')}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  color: 'white',
                  border: 'none',
                  padding: '8px 18px',
                  borderRadius: '20px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'backgroundColor 0.2s'
                }}
              >
                <ArrowLeft size={16} /> Back to Blogs
              </button>

              <span style={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                color: 'white',
                padding: '4px 14px',
                borderRadius: '20px',
                fontSize: '13px',
                fontWeight: '600'
              }}>
                {blog.category || 'General'}
              </span>
            </div>
          ) : (
            /* Mobile Layout: Vertical Column */
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px', marginBottom: '15px' }}>
              <button
                onClick={() => navigateTo('blog')}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  color: 'white',
                  border: 'none',
                  padding: '8px 18px',
                  borderRadius: '20px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'backgroundColor 0.2s'
                }}
              >
                <ArrowLeft size={16} /> Back to Blogs
              </button>

              <span style={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                color: 'white',
                padding: '4px 14px',
                borderRadius: '20px',
                fontSize: '13px',
                fontWeight: '600'
              }}>
                {blog.category || 'General'}
              </span>
            </div>
          )}

          <h1 style={{
            fontSize: windowWidth < 768 ? '24px' : '36px',
            fontWeight: '800',
            lineHeight: '1.3',
            marginBottom: '18px',
            wordBreak: 'break-word',
            overflowWrap: 'anywhere',
            maxWidth: '100%'
          }}>
            {blog.title}
          </h1>

          <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '8px 16px', fontSize: '14px', color: 'rgba(255, 255, 255, 0.85)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <User size={16} />
              <span>Written by <strong>GMS</strong></span>
            </div>
            <span>•</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Calendar size={16} />
              <span>{new Date(blog.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Blog Article Body */}
      <div style={{ maxWidth: '900px', margin: '-30px auto 0 auto', padding: '0 16px', boxSizing: 'border-box' }}>
        <div style={{
          backgroundColor: 'white',
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
          padding: windowWidth < 768 ? '24px 16px' : '40px 35px',
          boxSizing: 'border-box'
        }}>
          {/* Category Badge - Displayed in place of cover image */}
          <div style={{ marginBottom: '24px' }}>
            <span style={{
              backgroundColor: '#1e40af',
              color: 'white',
              padding: '6px 16px',
              borderRadius: '20px',
              fontSize: '13px',
              fontWeight: '700',
              display: 'inline-block',
              letterSpacing: '0.3px',
              textTransform: 'uppercase'
            }}>
              {blog.category || 'General'}
            </span>
          </div>

          {/* Article Excerpt Highlight */}
          {blog.excerpt && (
            <div style={{
              backgroundColor: '#eff6ff',
              borderLeft: '4px solid #1e40af',
              padding: '16px 20px',
              borderRadius: '0 12px 12px 0',
              fontSize: windowWidth < 768 ? '15px' : '17px',
              fontStyle: 'italic',
              color: '#1e3a8a',
              marginBottom: '28px',
              wordBreak: 'break-word',
              boxSizing: 'border-box'
            }}>
              "{blog.excerpt}"
            </div>
          )}

          {/* Full Article Content */}
          <div style={{
            fontSize: windowWidth < 768 ? '15px' : '17px',
            lineHeight: '1.8',
            color: '#334155',
            whiteSpace: 'pre-line',
            wordBreak: 'break-word',
            overflowWrap: 'anywhere'
          }}>
            {blog.content}
          </div>

          <hr style={{ margin: '35px 0', borderColor: '#f1f5f9' }} />

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }}>
            <button
              onClick={() => navigateTo('blog')}
              style={{
                backgroundColor: '#f1f5f9',
                color: '#334155',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '25px',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <ArrowLeft size={16} /> Read More Blogs
            </button>

            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({ title: blog.title, url: window.location.href });
                } else {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Article link copied to clipboard!');
                }
              }}
              style={{
                backgroundColor: '#1e40af',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '25px',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <Share2 size={16} /> Share Article
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
