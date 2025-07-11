import { NO_INDEX_PAGE } from "@/constans/seo.constans";
import { Metadata } from "next";
import { Dashboard } from "./Dashboard";

export const metadata: Metadata = {
  title: "Dashboard",
  ...NO_INDEX_PAGE,
};

export default function Page() {
  return <Dashboard />;
}
