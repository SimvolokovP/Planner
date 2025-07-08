import { authHost } from "@/api/api";
import { IProfileResponse } from "@/types/auth.types";

export const userService = {
  async getProfile() {
    const response = await authHost.get<IProfileResponse>("/user/profile");
    return response;
  },
};
