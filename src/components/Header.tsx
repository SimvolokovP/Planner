import { PAGES } from "@/config/pages-url.config";
import { NotebookPen } from "lucide-react";
import Link from "next/link";
import { Logout } from "./Logout";

export function Header() {



  return (
    <header className="flex w-full justify-between items-center py-[16px] mb-[8px]">
      <div>
        <Link href={PAGES.HOME} className="flex items-center gap-[8px]">
          <NotebookPen size={36} />
          <div className="text-2xl">ITask..</div>
        </Link>
      </div>
      <Logout />
    </header>
  );
}
