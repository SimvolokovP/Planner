import { ITaskResponse } from "@/types/task.types";

interface TaskCardProps {
  task: ITaskResponse;
}

export function TaskCard({ task }: TaskCardProps) {
  return (
    <div className="bg-card rounded-xl border-1 border-border py-6 px-2 w-full flex flex-col gap-[6] items-center hover:-translate-y-1 transition-transform duration-200">
      <div className="text-[18px]">{task.name}</div>
      <div className="text-[16px] text-primary">{task.priority}</div>
    </div>
  );
}
