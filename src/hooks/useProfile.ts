"use client"

import { userService } from "@/services/user.service";
import { useQuery } from "@tanstack/react-query";

export function useProfile() {
  const { data, error, isPending } = useQuery({
    queryKey: ["profile"],
    queryFn: () => userService.getProfile(),
  });

  return { profileData: data?.data, error, isPending };
}
