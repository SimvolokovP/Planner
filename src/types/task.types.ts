export enum EnumTaskPriority {
  low = "low",
  medium = "medium",
  high = "high",
}

export interface ITaskResponse {
  id: string;
  createdAt?: string;
  updatedAt?: string;
  name: string;
  priority?: EnumTaskPriority;
  isCompleted: boolean;
}

export interface ITaskToCreate {
  name: string;
  priority?: EnumTaskPriority;
  isCompleted: boolean;
}