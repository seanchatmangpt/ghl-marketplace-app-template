// src/openapi/customRequest.ts

import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import axiosRetry from "axios-retry";

// Configure axios to retry requests
axiosRetry(axios, { retries: 3 });

// Create an axios instance with default settings
const axiosInstance = axios.create({
  timeout: 5000, // Set a timeout for requests
});

// Request interceptor to add headers, logging, etc.
axiosInstance.interceptors.request.use(
  (config) => {
    // Add authorization token if available
    const token = "your-authentication-token"; // Replace with actual token retrieval logic
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Logging request details
    console.log(`Making request to ${config.url} with method ${config.method}`);
    if (config.data) {
      console.log("Request data:", config.data);
    }

    return config;
  },
  (error) => {
    console.error("Error in request:", error);
    return Promise.reject(error);
  },
);

// Response interceptor for logging and error handling
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    // Logging response details
    console.log(
      `Received response with status ${response.status} from ${response.config.url}`,
    );
    return response;
  },
  (error: AxiosError) => {
    // Handle verbose error messages
    console.error("Axios error:", error.message);
    if (error.response) {
      console.error("Response data:", error.response.data);
      console.error("Response status:", error.response.status);
      console.error("Response headers:", error.response.headers);
    }
    return Promise.reject(error);
  },
);

export const request = async <T>(config: AxiosRequestConfig): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await axiosInstance(config);
    return response.data;
  } catch (error) {
    throw error;
  }
};
