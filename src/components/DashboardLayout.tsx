import { PropsWithChildren } from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className="px-[8px] grid min-h-screen 2xl:grid-cols-[1.1fr_6fr] grid-cols-[1.2fr_6fr]">
      <Sidebar />
      <main className="relative max-h-screen overflow-x-hidden">
        <Header />
        <div>{children}</div>
      </main>
    </div>
  );
}
