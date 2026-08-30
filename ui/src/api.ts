// This file will contain API integration logic for the application.
import axios from 'axios';

export interface UserData {
  name: string;
  username: string;
  email: string;
  password: string;
}

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface Exchange {
  id: string;
  name: string;
}

export interface Company {
  id: string;
  name: string;
  exchangeId: string;
  exchange: string;
  ticker: string;
  isin: string;
  website?: string;
}

export interface CreateCompanyData extends Omit<Company, 'id' | 'exchange'> {
  exchangeId: string;
}

const API_BASE_URL = 'https://localhost:7240';

// Axios instance with default configuration
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to include auth token
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Add response interceptor to handle unauthorized errors
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Clear token and redirect to login
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Placeholder for user registration API call
export const registerUser = async (userData: UserData) => {
  try {
    const response = await apiClient.post('/api/authentication/register', userData);
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};

// Placeholder for user login API call
export const loginUser = async (credentials: LoginCredentials) => {
  try {
    const response = await apiClient.post('/api/authentication/login', credentials);
    return response.data;
  } catch (error) {
    console.error('Error logging in user:', error);
    throw error;
  }
};

// Placeholder for fetching companies list
export const fetchCompanies = async (): Promise<Company[]> => {
  try {
    const response = await apiClient.get('api/company');
    return response.data;
  } catch (error) {
    console.error('Error fetching companies:', error);
    throw error;
  }
};

// Fetch available exchanges
export const fetchExchanges = async (): Promise<Exchange[]> => {
  try {
    const response = await apiClient.get('api/lookup/exchange');
    return response.data;
  } catch (error) {
    console.error('Error fetching exchanges:', error);
    throw error;
  }
};

// Placeholder for creating a new company
export const createCompany = async (companyData: CreateCompanyData) => {
  try {
    const response = await apiClient.post('api/company', companyData);
    return response.data;
  } catch (error) {
    console.error('Error creating company:', error);
    throw error;
  }
};

// Placeholder for updating an existing company
export const updateCompany = async (companyId: string, companyData: Partial<Company>) => {
  try {
    const response = await apiClient.put(`api/company/${companyId}`, companyData);
    return response.data;
  } catch (error) {
    console.error('Error updating company:', error);
    throw error;
  }
};
