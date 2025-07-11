"use client";

import { PAGES } from "@/config/pages-url.config";
import { useProfile } from "@/hooks/useProfile";
import { authService } from "@/services/auth.service";
import { Button } from "@/UI/Button";
import { Loader } from "@/UI/Loader";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export function Logout() {
  const profileQuery = useProfile();

  const router = useRouter();

  const logoutMutation = useMutation({
    mutationKey: ["logout"],
    mutationFn: () => authService.logout(),
    onSuccess() {
      toast.success("You logut from app.");
      router.push(PAGES.AUTH);
    },
  });

  const isPending = profileQuery.isPending || logoutMutation.isPending;

  return (
    <div className="flex items-center gap-[16px]">
      {isPending ? (
        <div>Loading..</div>
      ) : (
        <div>
          {profileQuery.profileData && profileQuery.profileData.user
            ? profileQuery.profileData?.user.email
            : "User not found"}
        </div>
      )}
      <Button disabled={isPending} onClick={() => logoutMutation.mutate()}>
        {isPending ? <Loader size={5} /> : "Log Out"}
      </Button>
    </div>
  );
}
