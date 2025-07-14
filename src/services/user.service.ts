import { authHost } from "@/api/api";
import { IUserToEdit } from "@/components/UserUpdateForm";
import { IProfileResponse } from "@/types/auth.types";

export const userService = {
  async getProfile() {
    const response = await authHost.get<IProfileResponse>("/user/profile");
    return response;
  },
  async update(data: IUserToEdit) {
    const response = await authHost.put("/user/profile", data);
    return response.data;
  },
};
