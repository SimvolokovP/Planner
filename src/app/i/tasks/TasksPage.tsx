"use client";

import { LoaderScreen } from "@/components/LoaderScreen";
import { TasksList } from "@/components/TasksList";
import { useCreateTask } from "@/hooks/useCreateTask";
import { useTasks } from "@/hooks/useTasks";
import { EnumTaskPriority } from "@/types/task.types";
import { Button } from "@/UI/Button";
import { Chapter } from "@/UI/Chapter";

export function TasksPage() {
  const { isPending, tasksData } = useTasks();

  const createTask = useCreateTask();

  return (
    <div>
      {isPending && <LoaderScreen />}
      <div className="mb-8">
        <Chapter title="Tasks" />
      </div>
      <TasksList tasks={tasksData?.data} />
      <Button
        onClick={() =>
          createTask.createTask({
            name: "task2",
            isComleted: false,
            priority: EnumTaskPriority.high,
          })
        }
      >
        Create
      </Button>
    </div>
  );
}
