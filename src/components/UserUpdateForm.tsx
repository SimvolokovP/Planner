import { userService } from "@/services/user.service";
import { IUser } from "@/types/auth.types";
import { Button } from "@/UI/Button";
import { Input } from "@/UI/Input";
import { Loader } from "@/UI/Loader";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

interface UserUpdateFormProps {
  userProfile: IUser | undefined;
}

export interface IUserToEdit {
  email?: string;
  password?: string;
  name?: string;
}

const userEditSchema = z.object({
  email: z.string().email("Invalid email").optional().or(z.literal("")),
  name: z.string().min(2, "Name must be at least 2 characters").optional().or(z.literal("")),
  password: z.string().min(6, "Password must be at least 6 characters").optional().or(z.literal("")),
});

export function UserUpdateForm({ userProfile }: UserUpdateFormProps) {
  const [initialValues, setInitialValues] = useState<IUserToEdit>({
    email: "",
    name: "",
    password: "",
  });

  const editMutation = useMutation({
    mutationKey: ["update profile"],
    mutationFn: (data: IUserToEdit) => userService.update(data),
  });

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

  const hasChanges = Object.keys(currentValues).some(
    key => currentValues[key as keyof IUserToEdit] !== initialValues[key as keyof IUserToEdit]
  );

  const onUpdate = (data: IUserToEdit) => {
    const updatedData: IUserToEdit = {};
    
    if (data.email && data.email !== initialValues.email) {
      updatedData.email = data.email;
    }
    
    if (data.name && data.name !== initialValues.name) {
      updatedData.name = data.name;
    }
    
    if (data.password && data.password !== initialValues.password) {
      updatedData.password = data.password;
    }

    if (Object.keys(updatedData).length > 0) {
      editMutation.mutate(updatedData, {
        onSuccess: () => {
          setInitialValues(prev => ({
            ...prev,
            ...updatedData,
            password: ""
          }));
        }
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onUpdate)}>
      <Input label="Email" {...register("email")} error={errors.email} />
      <Input
        required={false}
        label="Name"
        {...register("name")}
        error={errors.name}
      />
      <Input
        required={false}
        label="Password"
        type="password"
        {...register("password")}
        error={errors.password}
      />
      <Button type="submit" disabled={!hasChanges || editMutation.isPending}>
        {editMutation.isPending ? <Loader size={5} /> : "Save"}
      </Button>
    </form>
  );
}