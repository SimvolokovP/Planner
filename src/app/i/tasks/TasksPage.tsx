"use client";

import { CreateTaskForm } from "@/components/CreateTaskForm";
import { LoaderScreen } from "@/components/LoaderScreen";
import { TasksList } from "@/components/TasksList";
import { useTasks } from "@/hooks/useTasks";
import { Chapter } from "@/UI/Chapter";

export function TasksPage() {
  const { isPending, tasksData } = useTasks();


  return (
    <div>
      {isPending && <LoaderScreen />}
      <CreateTaskForm />
      <div className="mb-8">
        <Chapter title="Tasks" />
      </div>
      <TasksList tasks={tasksData?.data} />
    </div>
  );
}
