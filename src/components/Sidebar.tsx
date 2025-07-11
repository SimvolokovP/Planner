import { MENU } from "@/shared/data/menu.data";
import Link from "next/link";

export function Sidebar() {
  return (
    <aside
      className={`border-r-2 border-r-border h-full flex-col justify-between py-[16px] transition-all duration-300 hidden md:flex items-center`}
    >
      <div className="text-sm">With ❤️ from ...</div>
      <nav className="relative w-full pr-[8px]">
        <ul className="relative w-full flex flex-col gap-[8px]">
          {MENU.map((item) => (
            <li className="w-full" key={item.to}>
              <Link
                href={item.to}
                className="flex items-center gap-2 p-2 hover:opacity-60 rounded"
              >
                <item.icon className="flex-shrink-0" />
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <span></span>
    </aside>
  );
}
