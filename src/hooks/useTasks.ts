"use client";

import { tasksService } from "@/services/tasks.service";
import { useQuery } from "@tanstack/react-query";

export function useTasks() {
  const tasksQuery = useQuery({
    queryKey: ["tasks"],
    queryFn: () => tasksService.getTasks(),
  });

  return { tasksData: tasksQuery.data, isPending: tasksQuery.isPending };
}
