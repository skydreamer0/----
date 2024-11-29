// Base API URL
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

// Auth Endpoints
export const AUTH_ENDPOINTS = {
  login: `${API_BASE_URL}/auth/login`,
  register: `${API_BASE_URL}/auth/register`,
  logout: `${API_BASE_URL}/auth/logout`,
  refreshToken: `${API_BASE_URL}/auth/refresh`,
} as const;

// User Endpoints
export const USER_ENDPOINTS = {
  profile: `${API_BASE_URL}/users/profile`,
  updateProfile: `${API_BASE_URL}/users/profile`,
  changePassword: `${API_BASE_URL}/users/password`,
} as const;

// Appointment Endpoints
export const APPOINTMENT_ENDPOINTS = {
  list: `${API_BASE_URL}/appointments`,
  create: `${API_BASE_URL}/appointments`,
  update: (id: string) => `${API_BASE_URL}/appointments/${id}`,
  cancel: (id: string) => `${API_BASE_URL}/appointments/${id}/cancel`,
  availability: `${API_BASE_URL}/appointments/availability`,
} as const;

// Service Endpoints
export const SERVICE_ENDPOINTS = {
  list: `${API_BASE_URL}/services`,
  details: (id: string) => `${API_BASE_URL}/services/${id}`,
} as const;