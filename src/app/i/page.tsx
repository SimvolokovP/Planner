import { NO_INDEX_PAGE } from "@/constans/seo.constans";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  ...NO_INDEX_PAGE,
};

export default function Page() {
  return <div>Dashboard</div>;
}
