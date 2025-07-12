"use client";

import { LoaderScreen } from "@/components/LoaderScreen";
import { UserUpdateForm } from "@/components/UserUpdateForm";
import { useProfile } from "@/hooks/useProfile";
import { Chapter } from "@/UI/Chapter";

export function SettingsPage() {

    const { isPending, profileData } = useProfile();

  return (
    <div>
      {isPending && <LoaderScreen />}
      <div className="mb-8">
        <Chapter title="Settings" />
      </div>
      <UserUpdateForm userProfile={profileData?.user} />
    </div>
  );
}
