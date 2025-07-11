"use client";

import { PAGES } from "@/config/pages-url.config";
import { authService } from "@/services/auth.service";
import { Button } from "@/UI/Button";
import { Input } from "@/UI/Input";
import { Loader } from "@/UI/Loader";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

type RegisterFormData = {
  email: string;
  password: string;
  confirmPassword: string;
};

const registeredUserSchema = z
  .object({
    email: z.string({ required_error: "Email is required" }).email(),
    password: z
      .string({ required_error: "Password is required" })
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string({
      required_error: "Please confirm your password",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

export function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registeredUserSchema),
  });

  const { push } = useRouter();

  const registerMutation = useMutation({
    mutationKey: ["auth", "register"],
    mutationFn: authService.register,
    onSuccess() {
      toast.success("Register success!");
      reset();
      push(PAGES.HOME);
    },
    onError(error) {
      toast.error(`Register error! ${error.message}`);
    },
  });

  const handleRegister = (data: RegisterFormData) => {
    const { email, password } = data;
    console.log({ email, password });
    registerMutation.mutate(data);
  };

  return (
    <form
      className="flex flex-col gap-3"
      onSubmit={handleSubmit((data) => {
        const { ...formData } = data;
        handleRegister(formData);
      })}
    >
      <Input
        label="Email"
        type="email"
        placeholder="user@mail.com"
        {...register("email")}
        error={errors.email}
      />

      <Input
        label="Password"
        type="password"
        {...register("password")}
        error={errors.password}
      />

      <Input
        label="Confirm Password"
        type="password"
        {...register("confirmPassword")}
        error={errors.confirmPassword}
      />

      <Button className="w-[120px]" type="submit">
        {!registerMutation.isPending ? "Register" : <Loader size={5} />}
      </Button>
    </form>
  );
}
