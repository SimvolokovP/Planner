import { host } from "@/api/api";
import { IAuthForm, IAuthResponse } from "@/types/auth.types";
import {
  removeTokenFromStorage,
  saveTokenToStorage,
} from "./auth-token.service";

export const authService = {
  async login(data: IAuthForm) {
    const response = await host.post<IAuthResponse>("/auth/login", data);

    if (response.data.accesToken) saveTokenToStorage(response.data.accesToken);

    return response;
  },

  async register(data: IAuthForm) {
    const response = await host.post<IAuthResponse>("/auth/register", data);

    if (response.data.accesToken) saveTokenToStorage(response.data.accesToken);

    return response;
  },

  async getNewTokens() {
    const response = await host.post<IAuthResponse>("/auth/login/access-token");

    if (response.data.accesToken) saveTokenToStorage(response.data.accesToken);
    return response;
  },

  async logout() {
    const response = await host.post("/auth/logout");

    if (response.data) removeTokenFromStorage();

    return response;
  },
};
