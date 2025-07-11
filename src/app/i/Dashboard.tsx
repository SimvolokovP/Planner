"use client";

import { LoaderScreen } from "@/components/LoaderScreen";
import { StaticticCard } from "@/components/StaticticCard";
import { useProfile } from "@/hooks/useProfile";
import { Chapter } from "@/UI/Chapter";

export function Dashboard() {
  const { profileData, isPending } = useProfile();

  return (
    <div>
      {isPending && <LoaderScreen />}
      <div className="mb-8">
        <Chapter title="Dashboard" />
      </div>
      <div>
        {profileData?.statistics.length ? (
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-[8px]">
            {profileData.statistics.map((st) => (
              <li key={st.label}>
                <StaticticCard item={st} />
              </li>
            ))}
          </ul>
        ) : (
          <div>Statistics not found!</div>
        )}
      </div>
    </div>
  );
}
