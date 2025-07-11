import { MENU } from "@/shared/data/menu.data";
import Link from "next/link";

export function MobileBar() {
  return (
    <div className="fixed pb-5 z-30 bottom-0 w-full left-0 right-0 px-10 py-2 mx-auto block md:hidden bg-background border-t-2 border-border">
      <ul className="flex justify-around">
        {MENU.map((route) => (
          <li key={route.to} className="flex items-center">
            <Link href={route.to}>{route.icon && <route.icon />}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
