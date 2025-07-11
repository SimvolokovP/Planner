"use client";

import { useProfile } from "@/hooks/useProfile";
import { Button } from "@/UI/Button";
import { Loader } from "@/UI/Loader";

export function Logout() {
  const { profileData, isPending } = useProfile();

  return (
    <div className="flex items-center gap-[16px]">
      {isPending ? (
        <div>Loading..</div>
      ) : (
        <div>
          {profileData && profileData.user
            ? profileData?.user.email
            : "User not found"}
        </div>
      )}
      <Button disabled={isPending}>
        {isPending ? <Loader size={5} /> : "Log Out"}
      </Button>
    </div>
  );
}
