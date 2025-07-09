"use client";

import { Button } from "@/UI/Button";
import { Input } from "@/UI/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registeredUserSchema),
  });

  const handleRegister = (data: RegisterFormData) => {
    const { email, password } = data;
    console.log({ email, password });
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
        name="email"
        label="Email"
        type="email"
        placeholder="user@mail.com"
        register={register}
        error={errors.email}
      />

      <Input
        name="password"
        label="Password"
        type="password"
        register={register}
        error={errors.password}
      />

      <Input
        name="confirmPassword"
        label="Confirm Password"
        type="password"
        register={register}
        error={errors.confirmPassword}
      />

      <Button className="w-[120px]" type="submit">
        Register
      </Button>
    </form>
  );
}
