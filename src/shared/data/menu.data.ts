import { PAGES } from "@/config/pages-url.config";

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

export const MENU: IMenuItem[] = [
  { label: "Home", to: PAGES.HOME, icon: LayoutDashboard },
  { label: "Tasks", to: PAGES.TASKS, icon: KanbanSquare },
  { label: "Settings", to: PAGES.SETTINGS, icon: Settings },
];