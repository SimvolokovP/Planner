import {
  getAccessToken,
  removeTokenFromStorage,
} from "@/services/auth-token.service";
import axios, { CreateAxiosDefaults } from "axios";

const options: CreateAxiosDefaults = {
  baseURL: "http://localhost:4000/api/",
  headers: { "Content-Type": "application/json" },
};

export const errorCatch = (error: any): string => {
  const message = error?.response?.data?.message;

  return message
    ? typeof error.response.data.message === "object"
      ? message[0]
      : message
    : error.message;
};

const host = axios.create(options);
const authHost = axios.create(options);

authHost.interceptors.request.use((config) => {
  const accessToken = getAccessToken();

  if (config.headers && accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

authHost.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config;

    if (
      (error?.response?.status === 401 ||
        errorCatch(error) === "jwt expired" ||
        errorCatch(error) === "jwt must be provided") &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        await authService.getNewTokens();
        return authHost.request(originalRequest);
      } catch (error) {
        if (errorCatch(error) === "jwt expired") removeTokenFromStorage();
      }
    }
    throw error;
  }
);

export { host, authHost };
