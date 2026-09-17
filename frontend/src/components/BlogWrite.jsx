import React, { useState, useEffect } from 'react';
import { PenTool, CheckCircle, Trash2, Edit3, Image, LogOut, Mail, Lock, Sparkles, Layout } from 'lucide-react';

const BlogWrite = ({ navigateTo }) => {
  const [authorUser, setAuthorUser] = useState(() => {
    const saved = localStorage.getItem('gms_author_user') || localStorage.getItem('gms_admin_user');
    return saved ? JSON.parse(saved) : null;
  });

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);

  // Blog Form state
  const [editingBlogId, setEditingBlogId] = useState(null);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Branding & Marketing');
  const [coverImage, setCoverImage] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [published, setPublished] = useState(true);

  const [submitMsg, setSubmitMsg] = useState({ type: '', text: '' });
  const [formLoading, setFormLoading] = useState(false);

  // My Blogs list
  const [myBlogs, setMyBlogs] = useState([]);
  const [blogsLoading, setBlogsLoading] = useState(false);


  const fetchMyBlogs = async () => {
    if (!authorUser || !authorUser.token) return;
    try {
      setBlogsLoading(true);
      const res = await fetch('/api/blogs/my-blogs', {
        headers: {
          Authorization: `Bearer ${authorUser.token}`,
        },
      });
      if (res.ok) {
        const data = await res.json();
        setMyBlogs(data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setBlogsLoading(false);
    }
  };

  useEffect(() => {
    if (authorUser) {
      fetchMyBlogs();
    }
  }, [authorUser]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError('');
    setLoginLoading(true);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: loginEmail, password: loginPassword }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || 'Login failed');
      }

      setAuthorUser(data);
      localStorage.setItem('gms_author_user', JSON.stringify(data));
      setLoginEmail('');
      setLoginPassword('');
    } catch (err) {
      setLoginError(err.message);
    } finally {
      setLoginLoading(false);
    }
  };

  const handleLogout = () => {
    setAuthorUser(null);
    localStorage.removeItem('gms_author_user');
    localStorage.removeItem('gms_admin_user');
  };

  const resetForm = () => {
    setEditingBlogId(null);
    setTitle('');
    setCategory('Branding & Marketing');
    setCoverImage('');
    setExcerpt('');
    setContent('');
    setPublished(true);
    setSubmitMsg({ type: '', text: '' });
  };

  const handleSubmitBlog = async (e) => {
    e.preventDefault();
    setSubmitMsg({ type: '', text: '' });

    if (!title.trim() || !content.trim()) {
      setSubmitMsg({ type: 'error', text: 'Title and article content are required.' });
      return;
    }

    try {
      setFormLoading(true);
      const url = editingBlogId ? `/api/blogs/${editingBlogId}` : '/api/blogs';
      const method = editingBlogId ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authorUser.token}`,
        },
        body: JSON.stringify({
          title,
          category,
          coverImage,
          excerpt,
          content,
          published,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Failed to save blog post');
      }

      setSubmitMsg({
        type: 'success',
        text: editingBlogId ? 'Blog post updated successfully!' : 'Blog post published live to real-time database!',
      });

      resetForm();
      fetchMyBlogs();
    } catch (err) {
      setSubmitMsg({ type: 'error', text: err.message });
    } finally {
      setFormLoading(false);
    }
  };

  const handleEditClick = (blog) => {
    setEditingBlogId(blog._id);
    setTitle(blog.title);
    setCategory(blog.category || 'Branding & Marketing');
    setCoverImage(blog.coverImage || '');
    setExcerpt(blog.excerpt || '');
    setContent(blog.content || '');
    setPublished(blog.published);
    window.scrollTo({ top: 350, behavior: 'smooth' });
  };

  const handleDeleteClick = async (blogId, blogTitle) => {
    if (!window.confirm(`Are you sure you want to delete blog: "${blogTitle}"?`)) return;

    try {
      const res = await fetch(`/api/blogs/${blogId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${authorUser.token}`,
        },
      });

      if (res.ok) {
        fetchMyBlogs();
      } else {
        const data = await res.json();
        alert(data.message || 'Failed to delete blog');
      }
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: 'calc(100vh - 117px)', paddingBottom: '80px', boxSizing: 'border-box' }}>
      
      {/* Dedicated Hero Section for Blog Writing */}
      <div className="hero-banner-seamless" style={{
        backgroundColor: '#1e40af',
        color: 'white',
        paddingLeft: '20px',
        paddingRight: '20px',
        paddingBottom: '50px',
        textAlign: 'center',
        marginBottom: '40px'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <span style={{
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            padding: '6px 16px',
            borderRadius: '20px',
            fontSize: '13px',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            Author & Creator Portal
          </span>
          <h1 style={{ fontSize: '36px', fontWeight: '800', marginTop: '12px', marginBottom: '12px' }}>
            Publish & Share Real-Time Blog Articles
          </h1>
          <p style={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.85)', maxWidth: '650px', margin: '0 auto' }}>
            Log in with your author credentials provided by your Administrator to write, edit, and publish blogs live to MongoDB.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* If Author Not Logged In */}
        {!authorUser ? (
          <div style={{ maxWidth: '440px', width: '100%', margin: '0 auto 60px auto', backgroundColor: 'white', padding: '32px 28px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', boxSizing: 'border-box' }}>
            <div style={{ textAlign: 'center', marginBottom: '22px' }}>
              <div style={{ width: '52px', height: '52px', backgroundColor: '#eff6ff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 10px auto', color: '#1e40af' }}>
                <PenTool size={28} />
              </div>
              <h2 style={{ fontSize: '22px', fontWeight: '800', color: '#1e293b', margin: '0 0 4px 0' }}>Author Login</h2>
              <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>Log in to write and manage your blog posts</p>
            </div>

            {loginError && (
              <div style={{ backgroundColor: '#fef2f2', color: '#991b1b', padding: '10px 14px', borderRadius: '10px', fontSize: '13px', marginBottom: '16px', textAlign: 'center' }}>
                {loginError}
              </div>
            )}

            <form onSubmit={handleLogin}>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#334155', marginBottom: '6px' }}>Author Email</label>
                <div style={{ position: 'relative' }}>
                  <Mail size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                  <input
                    type="email"
                    required
                    placeholder="Enter author email"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    style={{ width: '100%', padding: '11px 11px 11px 40px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#334155', marginBottom: '6px' }}>Password</label>
                <div style={{ position: 'relative' }}>
                  <Lock size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    style={{ width: '100%', padding: '11px 11px 11px 40px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loginLoading}
                style={{
                  width: '100%',
                  backgroundColor: '#1e40af',
                  color: 'white',
                  border: 'none',
                  padding: '12px',
                  borderRadius: '10px',
                  fontWeight: '700',
                  fontSize: '15px',
                  cursor: 'pointer'
                }}
              >
                {loginLoading ? 'Authenticating...' : 'Log In to Write Blog'}
              </button>
            </form>

            <div style={{ marginTop: '16px', padding: '10px 14px', backgroundColor: '#f8fafc', borderRadius: '10px', fontSize: '12px', color: '#64748b', textAlign: 'center' }}>
              Don't have an author login? Ask your Administrator via the <strong style={{ cursor: 'pointer', color: '#1e40af' }} onClick={() => navigateTo('blog-admin')}>Admin Dashboard</strong>.
            </div>
          </div>
        ) : (
          /* Author Portal logged-in view */
          <div>
            {/* Logged in Author bar */}
            <div style={{ backgroundColor: 'white', padding: '20px 30px', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', flexWrap: 'wrap', gap: '15px' }}>
              <div>
                <span style={{ fontSize: '12px', color: '#64748b', textTransform: 'uppercase', fontWeight: '600' }}>Logged in Author</span>
                <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#1e293b', margin: 0 }}>
                  {authorUser.name} <span style={{ fontSize: '13px', fontWeight: '500', color: '#1e40af' }}>({authorUser.email})</span>
                </h3>
              </div>

              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  onClick={() => navigateTo('blog')}
                  style={{ backgroundColor: '#f1f5f9', color: '#334155', border: 'none', padding: '9px 18px', borderRadius: '8px', fontWeight: '600', fontSize: '13px', cursor: 'pointer' }}
                >
                  View Public Blog
                </button>
                <button
                  onClick={handleLogout}
                  style={{ backgroundColor: '#fef2f2', color: '#ef4444', border: 'none', padding: '9px 18px', borderRadius: '8px', fontWeight: '600', fontSize: '13px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
                >
                  <LogOut size={16} /> Logout
                </button>
              </div>
            </div>

            {/* BLOG WRITER FORM */}
            <div style={{ backgroundColor: 'white', padding: '35px', borderRadius: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', marginBottom: '40px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
                <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#1e293b', margin: 0, display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <PenTool size={22} color="#1e40af" />
                  {editingBlogId ? 'Edit Blog Post' : 'Compose New Blog Post'}
                </h3>
                {editingBlogId && (
                  <button
                    onClick={resetForm}
                    style={{ backgroundColor: '#f1f5f9', color: '#475569', border: 'none', padding: '6px 14px', borderRadius: '8px', fontSize: '13px', fontWeight: '600', cursor: 'pointer' }}
                  >
                    Cancel Editing
                  </button>
                )}
              </div>

              {submitMsg.text && (
                <div style={{
                  backgroundColor: submitMsg.type === 'success' ? '#f0fdf4' : '#fef2f2',
                  color: submitMsg.type === 'success' ? '#166534' : '#991b1b',
                  padding: '14px',
                  borderRadius: '10px',
                  fontSize: '14px',
                  marginBottom: '20px'
                }}>
                  {submitMsg.text}
                </div>
              )}

              <form onSubmit={handleSubmitBlog}>
                {/* Title */}
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#334155', marginBottom: '6px' }}>Article Title *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Top 10 Branding Strategies for Businesses in Hyderabad"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    style={{ width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '16px', fontWeight: '600', outline: 'none', boxSizing: 'border-box' }}
                  />
                </div>

                {/* Category */}
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#334155', marginBottom: '6px' }}>Category *</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    style={{ width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '14px', outline: 'none', backgroundColor: 'white', boxSizing: 'border-box' }}
                  >
                    <option value="Branding & Marketing">Branding & Marketing</option>
                    <option value="ATL Advertising">ATL Advertising</option>
                    <option value="BTL Marketing">BTL Marketing</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Printing & Signage">Printing & Signage</option>
                  </select>
                </div>

                {/* Excerpt */}
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#334155', marginBottom: '6px' }}>Short Summary / Excerpt</label>
                  <input
                    type="text"
                    placeholder="A brief 1-2 sentence preview summary of the blog article..."
                    value={excerpt}
                    onChange={(e) => setExcerpt(e.target.value)}
                    style={{ width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }}
                  />
                </div>

                {/* Content Body */}
                <div style={{ marginBottom: '25px' }}>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#334155', marginBottom: '6px' }}>Full Article Content *</label>
                  <textarea
                    required
                    rows={12}
                    placeholder="Write your complete blog post content here..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '15px',
                      borderRadius: '10px',
                      border: '1px solid #cbd5e1',
                      fontSize: '15px',
                      lineHeight: '1.6',
                      outline: 'none',
                      fontFamily: 'inherit',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                {/* Publish Switch & Submit Button */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '14px', fontWeight: '600', color: '#334155' }}>
                    <input
                      type="checkbox"
                      checked={published}
                      onChange={(e) => setPublished(e.target.checked)}
                      style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                    />
                    <span>Publish live immediately on website</span>
                  </label>

                  <button
                    type="submit"
                    disabled={formLoading}
                    style={{
                      backgroundColor: '#1e40af',
                      color: 'white',
                      border: 'none',
                      padding: '14px 32px',
                      borderRadius: '10px',
                      fontWeight: '700',
                      fontSize: '15px',
                      cursor: 'pointer',
                      boxShadow: '0 4px 15px rgba(30,64,175,0.2)'
                    }}
                  >
                    {formLoading ? 'Saving...' : editingBlogId ? 'Update Blog Post' : 'Publish Real-Time Blog'}
                  </button>
                </div>
              </form>
            </div>

            {/* AUTHOR'S PREVIOUSLY PUBLISHED BLOGS */}
            <div style={{ backgroundColor: 'white', padding: '35px', borderRadius: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#1e293b', marginBottom: '20px' }}>
                My Published Articles ({myBlogs.length})
              </h3>

              {blogsLoading ? (
                <div>Loading your articles...</div>
              ) : myBlogs.length === 0 ? (
                <div style={{ color: '#64748b' }}>You haven't written any blogs yet. Use the form above to write your first post!</div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  {myBlogs.map((b) => (
                    <div
                      key={b._id}
                      style={{
                        padding: '18px 20px',
                        borderRadius: '12px',
                        border: '1px solid #f1f5f9',
                        backgroundColor: '#f8fafc',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: '15px'
                      }}
                    >
                      <div>
                        <span style={{ fontSize: '12px', fontWeight: '700', color: '#1e40af', backgroundColor: '#dbeafe', padding: '2px 8px', borderRadius: '4px', marginRight: '8px' }}>
                          {b.category}
                        </span>
                        <span style={{ fontSize: '12px', color: '#64748b' }}>
                          {new Date(b.createdAt).toLocaleDateString()}
                        </span>
                        <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#1e293b', margin: '6px 0 0 0' }}>
                          {b.title}
                        </h4>
                      </div>

                      <div style={{ display: 'flex', gap: '10px' }}>
                        <button
                          onClick={() => handleEditClick(b)}
                          style={{
                            backgroundColor: '#eff6ff',
                            color: '#1e40af',
                            border: 'none',
                            padding: '8px 14px',
                            borderRadius: '8px',
                            fontSize: '13px',
                            fontWeight: '600',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px'
                          }}
                        >
                          <Edit3 size={14} /> Edit
                        </button>

                        <button
                          onClick={() => handleDeleteClick(b._id, b.title)}
                          style={{
                            backgroundColor: '#fef2f2',
                            color: '#ef4444',
                            border: 'none',
                            padding: '8px 14px',
                            borderRadius: '8px',
                            fontSize: '13px',
                            fontWeight: '600',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px'
                          }}
                        >
                          <Trash2 size={14} /> Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>
        )}

      </div>
    </div>
  );
};

export default BlogWrite;
