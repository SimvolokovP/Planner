"use client"

import { useState } from "react";
import { PAGES } from "@/config/pages-url.config";
import { Button } from "@/UI/Button";
import {
  KanbanSquare,
  LayoutDashboard,
  LucideIcon,
  Settings,
} from "lucide-react";

interface IMenuItem {
  to: string;
  label: string;
  icon: LucideIcon;
}

const MENU: IMenuItem[] = [
  { label: "Home", to: PAGES.HOME, icon: LayoutDashboard },
  { label: "Tasks", to: PAGES.TASKS, icon: KanbanSquare },
  { label: "Settings", to: PAGES.SETTINGS, icon: Settings },
];

export function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <aside
      className={`border-r-2 border-r-border h-full flex flex-col justify-between py-[16px] transition-all duration-300 ${
        isExpanded ? "w-32 md:w-64" : "w-12 md:w-20"
      }`}
    >
      <div className="text-xl">{isExpanded ? "With ❤️ from ..." : "❤️"}</div>
      <div className="relative">
        {MENU.map((item) => (
          <div
            key={item.to}
            className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded"
          >
            <item.icon className="flex-shrink-0" />
            {isExpanded && <span>{item.label}</span>}
          </div>
        ))}
      </div>
      <Button onClick={toggleSidebar} className="mx-4">
        {isExpanded ? "Collapse" : "Expand"}
      </Button>
    </aside>
  );
}