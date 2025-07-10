import { PAGES } from "@/config/pages-url.config";
import { authService } from "@/services/auth.service";
import { IAuthForm } from "@/types/auth.types";
import { Button } from "@/UI/Button";
import { Input } from "@/UI/Input";
import { Loader } from "@/UI/Loader";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
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
    reset,
  } = useForm<IAuthForm>({
    resolver: zodResolver(loggedUserSchema),
  });

  const { push } = useRouter();

  const loginMutation = useMutation({
    mutationKey: ["auth", "login"],
    mutationFn: authService.login,
    onSuccess() {
      toast.success("Login success!");
      reset();
      push(PAGES.HOME);
    },
    onError(error) {
      toast.error(`Login error! ${error.message}`);
    },
  });

  const login = (data: IAuthForm) => {
    console.log(data);
    loginMutation.mutate(data);
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit(login)}>
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

      <Button
        disabled={loginMutation.isPending}
        className="w-[120px]"
        type="submit"
      >
        {!loginMutation.isPending ? "Login" : <Loader />}
      </Button>
    </form>
  );
}
