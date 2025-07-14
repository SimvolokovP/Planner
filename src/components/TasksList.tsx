import { ITaskResponse } from "@/types/task.types";
import { useEffect } from "react";
import { TaskCard } from "./TaskCard";

interface TasksListProps {
  tasks: ITaskResponse[] | undefined;
}

export function TasksList({ tasks }: TasksListProps) {
  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  return (
    <ul className="grid grid-cols-2 md:grid-cols-4 gap-[8px]">
      {tasks?.map((task) => (
        <li key={task.id}>
          <TaskCard task={task} />
        </li>
      ))}
    </ul>
  );
}
