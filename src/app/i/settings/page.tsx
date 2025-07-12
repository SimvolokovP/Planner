import { NO_INDEX_PAGE } from "@/constans/seo.constans";
import { Metadata } from "next";
import { SettingsPage } from "./SettingsPage";
import DashboardLayout from "@/components/DashboardLayout";

export const metadata: Metadata = {
  title: "settings",
  ...NO_INDEX_PAGE,
};

export default function Page() {
  return <DashboardLayout>
    <SettingsPage />
  </DashboardLayout>;
}
