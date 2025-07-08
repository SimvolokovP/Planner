import { NO_INDEX_PAGE } from "@/constans/seo.constans";
import { Metadata } from "next";
import { AuthPage } from "./AuthPage";

export const metadata: Metadata = {
  title: "auth",
  ...NO_INDEX_PAGE,
};

export default function Page() {
  return <AuthPage />;
}
