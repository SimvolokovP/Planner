import { NO_INDEX_PAGE } from "@/constans/seo.constans";
import { Metadata } from "next";
import DashboardLayout from "@/components/DashboardLayout";
import { TasksPage } from "./TasksPage";

export const metadata: Metadata = {
  title: "tasks",
  ...NO_INDEX_PAGE,
};

export default function Page() {
  return (
    <DashboardLayout>
      <TasksPage />
    </DashboardLayout>
  );
}
