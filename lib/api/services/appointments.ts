import { apiClient } from '../client';
import { APPOINTMENT_ENDPOINTS } from '../endpoints';
import { Appointment, ApiResponse } from '../../types/api';

export const appointmentService = {
  async list(token: string): Promise<ApiResponse<Appointment[]>> {
    return apiClient<Appointment[]>(APPOINTMENT_ENDPOINTS.list, {
      token,
    });
  },

  async create(
    appointment: Omit<Appointment, 'id'>,
    token: string
  ): Promise<ApiResponse<Appointment>> {
    return apiClient<Appointment>(APPOINTMENT_ENDPOINTS.create, {
      method: 'POST',
      body: JSON.stringify(appointment),
      token,
    });
  },

  async cancel(id: string, token: string): Promise<ApiResponse<void>> {
    return apiClient(APPOINTMENT_ENDPOINTS.cancel(id), {
      method: 'POST',
      token,
    });
  },

  async checkAvailability(
    date: string,
    serviceId: string,
    token: string
  ): Promise<ApiResponse<string[]>> {
    const query = new URLSearchParams({ date, serviceId }).toString();
    return apiClient<string[]>(`${APPOINTMENT_ENDPOINTS.availability}?${query}`, {
      token,
    });
  },
};