import { IAuthForm } from "@/types/auth.types";
import { Input } from "@/UI/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

const loggedUserSchema = z.object({
  email: z.string({ required_error: "Email is required" }).email(),
  password: z
    .string({ required_error: "Password is required" })
    .min(6, "Password must be at least 6 characters"),
});

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAuthForm>({
    resolver: zodResolver(loggedUserSchema),
  });

  const login = (data: IAuthForm) => {
    console.log(data);
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit(login)}>
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
      <button
        type="submit"
        className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:cursor-auto disabled:opacity-50 shrink-0 outline-none bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-9 px-4 py-2"
      >
        Login
      </button>
    </form>
  );
}
