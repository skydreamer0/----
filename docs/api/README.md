# Medical Clinic API Documentation

## Base URL
```
http://localhost:3001/api
```

## Authentication
All authenticated endpoints require a Bearer token in the Authorization header:
```
Authorization: Bearer <token>
```

## API Endpoints

### Authentication

#### Login
- **POST** `/auth/login`
- **Description**: Authenticate user and receive access token
- **Request Body**:
  ```typescript
  {
    email: string;
    password: string;
  }
  ```
- **Response** (200):
  ```typescript
  {
    token: string;
    user: {
      id: string;
      email: string;
      fullName: string;
      phone: string;
      role: 'patient' | 'doctor' | 'admin';
    }
  }
  ```
- **Error Responses**:
  - 401: Invalid credentials
  - 400: Invalid request format

#### Logout
- **POST** `/auth/logout`
- **Description**: Invalidate current session token
- **Authentication**: Required
- **Response** (200): Empty response
- **Error Responses**:
  - 401: Unauthorized

### User Management

#### Get Profile
- **GET** `/users/profile`
- **Description**: Retrieve current user's profile
- **Authentication**: Required
- **Response** (200):
  ```typescript
  {
    id: string;
    email: string;
    fullName: string;
    phone: string;
    role: string;
  }
  ```

#### Update Profile
- **PUT** `/users/profile`
- **Description**: Update user profile information
- **Authentication**: Required
- **Request Body**:
  ```typescript
  {
    fullName?: string;
    phone?: string;
  }
  ```
- **Response** (200): Updated user profile

### Appointments

#### List Appointments
- **GET** `/appointments`
- **Description**: Get user's appointments
- **Authentication**: Required
- **Query Parameters**:
  - status?: 'scheduled' | 'completed' | 'cancelled'
  - from?: string (ISO date)
  - to?: string (ISO date)
- **Response** (200):
  ```typescript
  Array<{
    id: string;
    patientId: string;
    doctorId: string;
    serviceId: string;
    date: string;
    time: string;
    status: 'scheduled' | 'completed' | 'cancelled';
    notes?: string;
  }>
  ```

#### Create Appointment
- **POST** `/appointments`
- **Description**: Schedule new appointment
- **Authentication**: Required
- **Request Body**:
  ```typescript
  {
    serviceId: string;
    date: string;      // ISO date
    time: string;      // HH:mm format
    notes?: string;
  }
  ```
- **Response** (201): Created appointment object

#### Cancel Appointment
- **POST** `/appointments/:id/cancel`
- **Description**: Cancel existing appointment
- **Authentication**: Required
- **URL Parameters**:
  - id: Appointment ID
- **Response** (200): Updated appointment object

#### Check Availability
- **GET** `/appointments/availability`
- **Description**: Get available time slots
- **Authentication**: Required
- **Query Parameters**:
  - date: string (ISO date)
  - serviceId: string
- **Response** (200):
  ```typescript
  string[]  // Array of available times in HH:mm format
  ```

### Services

#### List Services
- **GET** `/services`
- **Description**: Get available medical services
- **Authentication**: Optional
- **Response** (200):
  ```typescript
  Array<{
    id: string;
    name: string;
    description: string;
    duration: number;
    price: number;
    category: string;
  }>
  ```

#### Get Service Details
- **GET** `/services/:id`
- **Description**: Get detailed information about a specific service
- **Authentication**: Optional
- **URL Parameters**:
  - id: Service ID
- **Response** (200): Service object

## Error Handling

All endpoints follow a consistent error response format:
```typescript
{
  success: false,
  error: {
    code: string;
    message: string;
  }
}
```

Common error codes:
- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 422: Validation Error
- 500: Internal Server Error

## Rate Limiting

- Rate limit: 100 requests per minute per IP
- Rate limit headers included in responses:
  - X-RateLimit-Limit
  - X-RateLimit-Remaining
  - X-RateLimit-Reset

## Data Validation

All request data is validated using Zod schemas. Validation errors return 422 status code with detailed error messages.

## Security Considerations

1. All endpoints use HTTPS
2. Authentication uses JWT tokens
3. Password requirements:
   - Minimum 8 characters
   - At least one uppercase letter
   - At least one number
   - At least one special character
4. CORS enabled for specified origins only
5. Request size limits:
   - Body: 10mb max
   - File uploads: 5mb max

## Testing

Postman collection available at `/docs/api/postman-collection.json`