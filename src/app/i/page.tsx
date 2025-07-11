import { NO_INDEX_PAGE } from "@/constans/seo.constans";
import { Metadata } from "next";
import { Dashboard } from "./Dashboard";
import DashboardLayout from "@/components/DashboardLayout";

export const metadata: Metadata = {
  title: "Dashboard",
  ...NO_INDEX_PAGE,
};

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <Dashboard />
    </DashboardLayout>
  );
}
