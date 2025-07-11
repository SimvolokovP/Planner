import { PropsWithChildren } from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { MobileBar } from "./MobileBar";

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className="px-[8px] block md:grid min-h-screen 2xl:grid-cols-[1.1fr_6fr] grid-cols-[1.2fr_6fr] relative">
      <div>
        <Sidebar />
      </div>
      <MobileBar />
      <main className="relative max-h-screen overflow-x-hidden container">
        <Header />
        <div>{children}</div>
      </main>
    </div>
  );
}
