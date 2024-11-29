// 位置：lib/api/client.ts
// 功能：提供 API 客戶端

import { ApiResponse } from '../types/api';

interface FetchOptions extends RequestInit {
  token?: string;
}

export async function apiClient<T>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<ApiResponse<T>> {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  if (options.token) {
    headers.Authorization = `Bearer ${options.token}`;
  }

  try {
    const response = await fetch(endpoint, {
      ...options,
      headers,
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: {
          code: response.status.toString(),
          message: data.message || 'An error occurred',
        },
      };
    }

    return {
      success: true,
      data: data as T,
    };
  } catch (error) {
    return {
      success: false,
      error: {
        code: 'NETWORK_ERROR',
        message: 'Network request failed',
      },
    };
  }
}