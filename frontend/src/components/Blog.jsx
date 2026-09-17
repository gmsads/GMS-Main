import React, { useState, useEffect } from 'react';
import { Calendar, User, ArrowRight, Search, PlusCircle, ShieldAlert, Tag } from 'lucide-react';

const Blog = ({ navigateTo, onSelectBlog }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Branding & Marketing',
    'ATL Advertising',
    'BTL Marketing',
    'Digital Marketing',
    'Web Development',
    'Printing & Signage',
  ];

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      let url = '/api/blogs';
      const params = new URLSearchParams();
      if (selectedCategory !== 'All') params.append('category', selectedCategory);
      if (searchQuery) params.append('search', searchQuery);
      if (params.toString()) url += `?${params.toString()}`;

      const res = await fetch(url);
      const contentType = res.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('Unable to connect to backend API. Please ensure backend server is running.');
      }
      if (!res.ok) throw new Error('Failed to fetch blogs');
      const data = await res.json();
      setBlogs(data);
      setError(null);
    } catch (err) {
      console.error(err);
      setError('Unable to load blogs. Please ensure backend server is running.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [selectedCategory]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchBlogs();
  };

  const handleReadArticle = (blog) => {
    if (onSelectBlog) {
      onSelectBlog(blog);
    }
    navigateTo('blog-detail', blog._id);
  };

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: 'calc(100vh - 117px)', paddingBottom: '80px', boxSizing: 'border-box' }}>
      {/* Blog Hero Section */}
      <div className="hero-banner-seamless" style={{
        backgroundColor: '#1e40af',
        color: 'white',
        paddingLeft: '20px',
        paddingRight: '20px',
        paddingBottom: '60px',
        textAlign: 'center',
        marginBottom: '40px',
        position: 'relative'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <span style={{
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            padding: '6px 16px',
            borderRadius: '20px',
            fontSize: '14px',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            GMS Knowledge Hub
          </span>
          <h1 style={{ fontSize: '38px', fontWeight: '800', marginTop: '15px', marginBottom: '15px' }}>
            Latest Insights, Advertising & Marketing Trends
          </h1>
          <p style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.85)', maxWidth: '700px', margin: '0 auto' }}>
            Explore real-time articles, expert branding strategies, ATL & BTL marketing tips, and digital growth solutions curated by Global Marketing Solutions.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        {/* Search & Categories Bar */}
        <div style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '16px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
          marginBottom: '40px'
        }}>
          <form onSubmit={handleSearchSubmit} style={{ display: 'flex', gap: '10px', marginBottom: '20px', maxWidth: '750px', margin: '0 auto 20px auto', flexWrap: 'wrap' }}>
            <div style={{ position: 'relative', flex: '1 1 240px' }}>
              <Search size={18} style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
              <input
                type="text"
                placeholder="Search articles by title, keyword, or topic..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 15px 12px 45px',
                  borderRadius: '10px',
                  border: '1px solid #e2e8f0',
                  fontSize: '15px',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
            </div>
            <button
              type="submit"
              style={{
                backgroundColor: '#1e40af',
                color: 'white',
                border: 'none',
                padding: '12px 28px',
                borderRadius: '10px',
                fontWeight: '600',
                cursor: 'pointer',
                whiteSpace: 'nowrap'
              }}
            >
              Search
            </button>
          </form>

          {/* Category Filter Pills */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  backgroundColor: selectedCategory === cat ? '#1e40af' : '#f1f5f9',
                  color: selectedCategory === cat ? 'white' : '#475569',
                  border: 'none',
                  padding: '8px 18px',
                  borderRadius: '20px',
                  fontSize: '13px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Content Section */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '60px 0' }}>
            <div style={{ fontSize: '18px', fontWeight: '600', color: '#64748b' }}>Loading real-time blogs from database...</div>
          </div>
        ) : error ? (
          <div style={{ backgroundColor: '#fef2f2', color: '#991b1b', padding: '20px', borderRadius: '12px', textAlign: 'center' }}>
            {error}
          </div>
        ) : blogs.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 20px', backgroundColor: 'white', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}>
            <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#334155', marginBottom: '10px' }}>No blogs found</h3>
            <p style={{ color: '#64748b', marginBottom: '20px' }}>Be the first to publish a real-time blog post on GMS!</p>
            <button
              onClick={() => navigateTo('blog-write')}
              style={{
                backgroundColor: '#1e40af',
                color: 'white',
                border: 'none',
                padding: '10px 24px',
                borderRadius: '25px',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Write First Blog Post
            </button>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '30px'
          }}>
            {blogs.map((blog) => (
              <div
                key={blog._id}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.06)';
                }}
              >
                {/* Category Header Banner - Display Category in place of Image */}
                <div style={{
                  backgroundColor: '#eff6ff',
                  padding: '16px 25px',
                  borderBottom: '1px solid #e2e8f0',
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'space-between'
                }}>
                  <span style={{
                    backgroundColor: '#1e40af',
                    color: 'white',
                    padding: '5px 14px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: '700',
                    letterSpacing: '0.3px',
                    textTransform: 'uppercase'
                  }}>
                    {blog.category}
                  </span>
                </div>

                {/* Body Content */}
                <div style={{ padding: '25px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  {/* Date & Author */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px', fontSize: '13px', color: '#64748b', marginBottom: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <User size={14} />
                      <span>GMS</span>
                    </div>
                    <span>•</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Calendar size={14} />
                      <span>{new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 style={{
                    fontSize: '20px',
                    fontWeight: '700',
                    color: '#1e293b',
                    marginBottom: '12px',
                    lineHeight: '1.4'
                  }}>
                    {blog.title}
                  </h3>

                  {/* Excerpt */}
                  <p style={{
                    color: '#64748b',
                    fontSize: '14px',
                    lineHeight: '1.6',
                    marginBottom: '20px',
                    flex: 1
                  }}>
                    {blog.excerpt}
                  </p>

                  {/* Read Article Button */}
                  <button
                    onClick={() => handleReadArticle(blog)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: '#1e40af',
                      fontWeight: '700',
                      fontSize: '14px',
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      cursor: 'pointer'
                    }}
                  >
                    <span>Read Article</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
