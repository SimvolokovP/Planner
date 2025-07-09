import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, PropsWithChildren } from "react";

type TypeButton = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  children,
  className,
  ...rest
}: PropsWithChildren<TypeButton>) {
  return (
    <button
      className={cn(
        "cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-9 px-4 py-2",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
