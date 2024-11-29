// 位置：lib/types/api.ts
// 功能：提供 API 回應的型別

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
  };
}

// Auth Types
export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: UserProfile;
}

// User Types
export interface UserProfile {
  id: string;
  email: string;
  fullName: string;
  phone: string;
  role: 'patient' | 'doctor' | 'admin';
}

// Appointment Types
export interface Appointment {
  id: string;
  patientId: string;
  doctorId: string;
  serviceId: string;
  date: string;
  time: string;
  status: 'scheduled' | 'completed' | 'cancelled';
  notes?: string;
}

// Service Types
export interface Service {
  id: string;
  name: string;
  description: string;
  duration: number;
  price: number;
  category: string;
}