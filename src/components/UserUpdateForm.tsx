import { userService } from "@/services/user.service";
import { IUser } from "@/types/auth.types";
import { Button } from "@/UI/Button";
import { Input } from "@/UI/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

interface UserUpdateFormProps {
  userProfile: IUser | undefined;
}

interface IUserToEdit {
  email?: string;
  password?: string;
  name?: string;
}

const userEditSchema = z.object({
  email: z.string().email("").optional(),
  name: z.string().min(2, "").optional(),
  password: z.string().min(6, "").optional(),
});

export function UserUpdateForm({ userProfile }: UserUpdateFormProps) {
  const [initialValues, setInitialValues] = useState<IUserToEdit>({
    email: "",
    name: "",
    password: "",
  });

  const editMutation = useMutation({mutationKey: "update profile", mutationFn: () => userService.})

  const {
    register,
    reset,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm<IUserToEdit>({
    resolver: zodResolver(userEditSchema),
  });

  useEffect(() => {
    if (userProfile) {
      const initialData = {
        email: userProfile.email,
        name: userProfile.name,
        password: "",
      };
      reset(initialData);
      setInitialValues(initialData);
    }
  }, [userProfile, reset]);

  const currentValues = watch();

  const hasChanges =
    currentValues.email !== initialValues.email ||
    currentValues.name !== initialValues.name ||
    currentValues.password !== initialValues.password;

  const onUpdate = (data: IUserToEdit) => {
    console.log(data);
  };

  return (
    <form onSubmit={() => handleSubmit(onUpdate)}>
      <Input label="Email" {...register("email")} error={errors.email} />
      <Input label="Name" {...register("name")} error={errors.name} />
      <Input
        label="Password"
        type="password"
        {...register("password")}
        error={errors.password}
      />
      <Button type="submit" disabled={!hasChanges}>
        Save
      </Button>
    </form>
  );
}
