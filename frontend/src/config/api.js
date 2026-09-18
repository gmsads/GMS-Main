// Centralized API Configuration Helper
// If VITE_API_URL is set in environment, use it as base URL; otherwise default to production backend URL or relative path
export const API_BASE = import.meta.env.VITE_API_URL || 'https://globalmarketingsolutions.in:5000';

export const getApiUrl = (endpoint) => {
  const path = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  return `${API_BASE}${path}`;
};
