import { authHost } from "@/api/api";
import { ITaskResponse, ITaskToCreate } from "@/types/task.types";

export const tasksService = {
  async getTasks() {
    const response = await authHost.get<ITaskResponse[]>("/user/task");
    return response;
  },

  async createTask(data: ITaskToCreate) {
    const response = await authHost.post<ITaskResponse>("/user/task", data);
    return response;
  },

  async updateTask(id: string, data: ITaskToCreate) {
    const response = await authHost.put<ITaskResponse>(`/user/task/${id}`, data);
    return response;
  },

  async deleteTask(id: string) {
    const response = await authHost.delete<ITaskResponse>(`/user/task/${id}`);
    return response;
  },
};
