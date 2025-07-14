import { useCreateTask } from "@/hooks/useCreateTask";
import { ITaskToCreate } from "@/types/task.types";
import { Button } from "@/UI/Button";
import { Dropdown } from "@/UI/Dropdown";
import { Input } from "@/UI/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

const priorityOptions = [
  { value: "low", label: "Low" },
  { value: "high", label: "High" },
];

const createTaskSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .min(4, "Task name must be at least 4 characters"),
  priority: z.string({ required_error: "Priority is required" }),
  isComleted: z.boolean().default(false),
});

export function CreateTaskForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: zodResolver(createTaskSchema) });

  const { createTask } = useCreateTask();

  const handleCreate = (data: ITaskToCreate) => {
    console.log(data);
    createTask(data);
  };

  return (
    <form onSubmit={handleSubmit(handleCreate)}>
      <Input label="Task Name" {...register("name")} error={errors.name} />

      <Dropdown
        label="Priority"
        {...register("priority")}
        options={priorityOptions}
        error={errors.priority}
      />

      <Input
        label="Is Completed"
        type="checkbox"
        {...register("isComleted")}
        error={errors.isComleted}
      />

      <Button type="submit">Create</Button>
    </form>
  );
}
