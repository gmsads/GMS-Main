import React, { useState, useEffect } from 'react';
import { ShieldCheck, UserPlus, Users, Trash2, LogOut, Lock, Mail, User } from 'lucide-react';
import { getApiUrl } from '../config/api';

const BlogAdmin = ({ navigateTo }) => {
  const [adminUser, setAdminUser] = useState(() => {
    const saved = localStorage.getItem('gms_admin_user');
    return saved ? JSON.parse(saved) : null;
  });

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [loading, setLoading] = useState(false);

  // User creation state
  const [activeTab, setActiveTab] = useState('create');
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newRole, setNewRole] = useState('author'); // 'author' or 'admin'
  const [userMsg, setUserMsg] = useState({ type: '', text: '' });

  // Users list
  const [usersList, setUsersList] = useState([]);
  const [usersLoading, setUsersLoading] = useState(false);

  const fetchUsers = async () => {
    if (!adminUser || !adminUser.token) return;
    try {
      setUsersLoading(true);
      const res = await fetch(getApiUrl('/api/admin/users'), {
        headers: {
          Authorization: `Bearer ${adminUser.token}`,
        },
      });
      if (res.ok) {
        const data = await res.json();
        setUsersList(data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setUsersLoading(false);
    }
  };

  useEffect(() => {
    if (adminUser) {
      fetchUsers();
    }
  }, [adminUser]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError('');
    setLoading(true);

    try {
      const res = await fetch(getApiUrl('/api/auth/login'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: loginEmail, password: loginPassword }),
      });

      const contentType = res.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('Unable to connect to admin authentication server. Please ensure backend server is running.');
      }

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Login failed');
      }

      if (data.role !== 'admin') {
        throw new Error('Access denied. Admin account required.');
      }

      setAdminUser(data);
      localStorage.setItem('gms_admin_user', JSON.stringify(data));
      setLoginEmail('');
      setLoginPassword('');
    } catch (err) {
      setLoginError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    setAdminUser(null);
    localStorage.removeItem('gms_admin_user');
  };

  const handleCreateUser = async (e) => {
    e.preventDefault();
    setUserMsg({ type: '', text: '' });

    if (!newName || !newEmail || !newPassword) {
      setUserMsg({ type: 'error', text: 'Please fill in all required fields.' });
      return;
    }

    try {
      setLoading(true);
      const res = await fetch(getApiUrl('/api/admin/create-user'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${adminUser.token}`,
        },
        body: JSON.stringify({
          name: newName,
          email: newEmail,
          password: newPassword,
          role: newRole,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || 'Failed to create user');
      }

      setUserMsg({
        type: 'success',
        text: `Successfully created ${data.role === 'admin' ? 'Admin' : 'Blog Author'} account for ${data.name} (${data.email})!`,
      });

      setNewName('');
      setNewEmail('');
      setNewPassword('');
      setNewRole('author');
      fetchUsers();
    } catch (err) {
      setUserMsg({ type: 'error', text: err.message });
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteUser = async (userId, userEmail) => {
    if (!window.confirm(`Are you sure you want to delete user account: ${userEmail}?`)) return;

    try {
      const res = await fetch(getApiUrl(`/api/admin/users/${userId}`), {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${adminUser.token}`,
        },
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || 'Failed to delete user');
      }

      fetchUsers();
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: 'calc(100vh - 135px)', padding: '30px 20px 80px 20px', boxSizing: 'border-box' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* If Admin Not Logged In */}
        {!adminUser ? (
          <div style={{ maxWidth: '440px', width: '100%', margin: '0 auto', backgroundColor: 'white', padding: '32px 28px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', boxSizing: 'border-box' }}>
            <div style={{ textAlign: 'center', marginBottom: '22px' }}>
              <div style={{ width: '52px', height: '52px', backgroundColor: '#eff6ff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 10px auto', color: '#1e40af' }}>
                <ShieldCheck size={28} />
              </div>
              <h2 style={{ fontSize: '22px', fontWeight: '800', color: '#1e293b', margin: '0 0 4px 0' }}>Admin Portal Login</h2>
              <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>Log in to create & manage Blog Author & Admin accounts</p>
            </div>

            {loginError && (
              <div style={{ backgroundColor: '#fef2f2', color: '#991b1b', padding: '10px 14px', borderRadius: '10px', fontSize: '13px', marginBottom: '16px', textAlign: 'center' }}>
                {loginError}
              </div>
            )}

            <form onSubmit={handleLogin}>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#334155', marginBottom: '6px' }}>Admin Email</label>
                <div style={{ position: 'relative' }}>
                  <Mail size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                  <input
                    type="email"
                    required
                    placeholder="admin@gmsads.in"
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
                disabled={loading}
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
                {loading ? 'Authenticating...' : 'Log In to Admin Dashboard'}
              </button>

              <div style={{ marginTop: '16px', padding: '10px', backgroundColor: '#f8fafc', borderRadius: '10px', fontSize: '12px', color: '#64748b', textAlign: 'center' }}>
                💡 Default Credentials: <strong>admin@gmsads.in</strong> / <strong>Admin@123456</strong>
              </div>
            </form>
          </div>
        ) : (
          /* Admin Dashboard logged in view */
          <div>
            {/* Header bar */}
            <div style={{ backgroundColor: 'white', padding: '25px 30px', borderRadius: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', flexWrap: 'wrap', gap: '15px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ backgroundColor: '#dbeafe', color: '#1e40af', padding: '4px 10px', borderRadius: '15px', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase' }}>
                    Admin Panel
                  </span>
                  <h2 style={{ fontSize: '22px', fontWeight: '800', color: '#1e293b', margin: 0 }}>
                    Welcome, {adminUser.name}
                  </h2>
                </div>
                <p style={{ color: '#64748b', fontSize: '14px', margin: '4px 0 0 0' }}>
                  Manage Blog Author logins and System Admins
                </p>
              </div>

              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => navigateTo('blog')}
                  style={{ backgroundColor: '#f1f5f9', color: '#334155', border: 'none', padding: '10px 18px', borderRadius: '10px', fontWeight: '600', fontSize: '13px', cursor: 'pointer' }}
                >
                  View Public Blog
                </button>
                <button
                  onClick={() => navigateTo('blog-write')}
                  style={{ backgroundColor: '#eff6ff', color: '#1e40af', border: 'none', padding: '10px 18px', borderRadius: '10px', fontWeight: '600', fontSize: '13px', cursor: 'pointer' }}
                >
                  Writer Portal
                </button>
                <button
                  onClick={handleLogout}
                  style={{ backgroundColor: '#fef2f2', color: '#ef4444', border: 'none', padding: '10px 18px', borderRadius: '10px', fontWeight: '600', fontSize: '13px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
                >
                  <LogOut size={16} /> Logout
                </button>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div style={{ display: 'flex', gap: '15px', marginBottom: '25px', flexWrap: 'wrap' }}>
              <button
                onClick={() => setActiveTab('create')}
                style={{
                  backgroundColor: activeTab === 'create' ? '#1e40af' : 'white',
                  color: activeTab === 'create' ? 'white' : '#64748b',
                  border: 'none',
                  padding: '12px 24px',
                  borderRadius: '12px',
                  fontWeight: '700',
                  fontSize: '14px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: activeTab === 'create' ? '0 4px 15px rgba(30,64,175,0.2)' : 'none'
                }}
              >
                <UserPlus size={18} /> Create New Login
              </button>

              <button
                onClick={() => setActiveTab('users')}
                style={{
                  backgroundColor: activeTab === 'users' ? '#1e40af' : 'white',
                  color: activeTab === 'users' ? 'white' : '#64748b',
                  border: 'none',
                  padding: '12px 24px',
                  borderRadius: '12px',
                  fontWeight: '700',
                  fontSize: '14px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: activeTab === 'users' ? '0 4px 15px rgba(30,64,175,0.2)' : 'none'
                }}
              >
                <Users size={18} /> All Users ({usersList.length})
              </button>
            </div>

            {/* TAB 1: CREATE LOGIN */}
            {activeTab === 'create' && (
              <div style={{ backgroundColor: 'white', padding: '24px 20px', borderRadius: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', boxSizing: 'border-box' }}>
                <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#1e293b', marginBottom: '8px' }}>
                  Create New Login Account
                </h3>
                <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '25px' }}>
                  Add login credentials for Blog Authors (writers) or additional System Admins.
                </p>

                {userMsg.text && (
                  <div style={{
                    backgroundColor: userMsg.type === 'success' ? '#f0fdf4' : '#fef2f2',
                    color: userMsg.type === 'success' ? '#166534' : '#991b1b',
                    padding: '14px',
                    borderRadius: '10px',
                    fontSize: '14px',
                    marginBottom: '20px'
                  }}>
                    {userMsg.text}
                  </div>
                )}

                <form onSubmit={handleCreateUser} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#334155', marginBottom: '6px' }}>Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={newName}
                      onChange={(e) => setNewName(e.target.value)}
                      style={{ width: '100%', padding: '11px 12px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#334155', marginBottom: '6px' }}>Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="rahul@gmsads.in"
                      value={newEmail}
                      onChange={(e) => setNewEmail(e.target.value)}
                      style={{ width: '100%', padding: '11px 12px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#334155', marginBottom: '6px' }}>Password *</label>
                    <input
                      type="password"
                      required
                      placeholder="Set account password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      style={{ width: '100%', padding: '11px 12px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#334155', marginBottom: '6px' }}>Account Role *</label>
                    <select
                      value={newRole}
                      onChange={(e) => setNewRole(e.target.value)}
                      style={{ width: '100%', padding: '11px 12px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '14px', outline: 'none', backgroundColor: 'white', boxSizing: 'border-box' }}
                    >
                      <option value="author">Blog Author (Can write and publish blogs)</option>
                      <option value="admin">System Admin (Full admin & user creation rights)</option>
                    </select>
                  </div>

                  <div style={{ gridColumn: '1 / -1', marginTop: '10px' }}>
                    <button
                      type="submit"
                      disabled={loading}
                      style={{
                        width: '100%',
                        backgroundColor: '#1e40af',
                        color: 'white',
                        border: 'none',
                        padding: '13px',
                        borderRadius: '10px',
                        fontWeight: '700',
                        fontSize: '15px',
                        cursor: 'pointer'
                      }}
                    >
                      {loading ? 'Creating Account...' : `Create ${newRole === 'admin' ? 'Admin' : 'Blog Author'} Account`}
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* TAB 2: USER MANAGEMENT */}
            {activeTab === 'users' && (
              <div style={{ backgroundColor: 'white', padding: '35px', borderRadius: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#1e293b', marginBottom: '20px' }}>
                  Registered Users & Roles
                </h3>

                {usersLoading ? (
                  <div>Loading user list...</div>
                ) : usersList.length === 0 ? (
                  <div>No users found.</div>
                ) : (
                  <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                      <thead>
                        <tr style={{ borderBottom: '2px solid #f1f5f9' }}>
                          <th style={{ padding: '12px 15px', fontSize: '13px', fontWeight: '700', color: '#475569' }}>Name</th>
                          <th style={{ padding: '12px 15px', fontSize: '13px', fontWeight: '700', color: '#475569' }}>Email</th>
                          <th style={{ padding: '12px 15px', fontSize: '13px', fontWeight: '700', color: '#475569' }}>Role</th>
                          <th style={{ padding: '12px 15px', fontSize: '13px', fontWeight: '700', color: '#475569' }}>Created Date</th>
                          <th style={{ padding: '12px 15px', fontSize: '13px', fontWeight: '700', color: '#475569', textAlign: 'right' }}>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {usersList.map((u) => (
                          <tr key={u._id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                            <td style={{ padding: '14px 15px', fontSize: '14px', fontWeight: '600', color: '#1e293b' }}>{u.name}</td>
                            <td style={{ padding: '14px 15px', fontSize: '14px', color: '#64748b' }}>{u.email}</td>
                            <td style={{ padding: '14px 15px' }}>
                              <span style={{
                                backgroundColor: u.role === 'admin' ? '#dbeafe' : '#f1f5f9',
                                color: u.role === 'admin' ? '#1e40af' : '#475569',
                                padding: '4px 12px',
                                borderRadius: '15px',
                                fontSize: '12px',
                                fontWeight: '700',
                                textTransform: 'uppercase'
                              }}>
                                {u.role}
                              </span>
                            </td>
                            <td style={{ padding: '14px 15px', fontSize: '13px', color: '#64748b' }}>
                              {new Date(u.createdAt).toLocaleDateString()}
                            </td>
                            <td style={{ padding: '14px 15px', textAlign: 'right' }}>
                              {u._id !== adminUser._id && (
                                <button
                                  onClick={() => handleDeleteUser(u._id, u.email)}
                                  style={{
                                    backgroundColor: '#fef2f2',
                                    color: '#ef4444',
                                    border: 'none',
                                    padding: '6px 12px',
                                    borderRadius: '8px',
                                    cursor: 'pointer',
                                    fontSize: '13px',
                                    fontWeight: '600'
                                  }}
                                >
                                  Delete
                                </button>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}

          </div>
        )}

      </div>
    </div>
  );
};

export default BlogAdmin;
