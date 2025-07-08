import { authHost } from "@/api/api";
import { ITaskResponse, ITaskToCreate } from "@/types/task.types";

export const tasksService = {
  async getTasks() {
    const response = await authHost.get<ITaskResponse[]>("/tasks");
    return response;
  },

  async createTask(data: ITaskToCreate) {
    const response = await authHost.post<ITaskResponse>("/tasks", data);
    return response;
  },

  async updateTask(id: string, data: ITaskToCreate) {
    const response = await authHost.put<ITaskResponse>(`/tasks/${id}`, data);
    return response;
  },

  async deleteTask(id: string) {
    const response = await authHost.delete<ITaskResponse>(`/tasks/${id}`);
    return response;
  },
};
