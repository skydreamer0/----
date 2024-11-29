// 位置：lib/api/services/auth.ts
// 功能：提供認證服務

import { apiClient } from '../client';
import { AUTH_ENDPOINTS } from '../endpoints';
import { LoginRequest, LoginResponse, ApiResponse } from '../../types/api';

export const authService = {
  async login(credentials: LoginRequest): Promise<ApiResponse<LoginResponse>> {
    return apiClient<LoginResponse>(AUTH_ENDPOINTS.login, {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  },

  async logout(token: string): Promise<ApiResponse<void>> {
    return apiClient(AUTH_ENDPOINTS.logout, {
      method: 'POST',
      token,
    });
  },

  async refreshToken(token: string): Promise<ApiResponse<{ token: string }>> {
    return apiClient(AUTH_ENDPOINTS.refreshToken, {
      method: 'POST',
      token,
    });
  },
};