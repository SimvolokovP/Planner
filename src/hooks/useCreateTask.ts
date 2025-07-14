import { tasksService } from "@/services/tasks.service";
import { ITaskToCreate } from "@/types/task.types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useCreateTask() {
  const clientQuery = useQueryClient();

  const createTaskMutation = useMutation({
    mutationKey: ["create task"],
    mutationFn: (data: ITaskToCreate) => tasksService.createTask(data),
    onSuccess() {
      clientQuery.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  return {
    createTask: createTaskMutation.mutate,
    isPending: createTaskMutation.isPending,
  };
}
