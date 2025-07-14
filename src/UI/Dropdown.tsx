import { cn } from "@/lib/utils";
import { forwardRef, SelectHTMLAttributes } from "react";

interface DropdownProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: { value: string; label: string }[];
  error?: { message?: string };
}

export const Dropdown = forwardRef<HTMLSelectElement, DropdownProps>(
  ({ name, label, options, error, className, ...rest }, ref) => {
    return (
      <div className="mb-4">
        <label
          htmlFor={name}
          className="block text-sm font-medium mb-3 text-foreground"
        >
          {label}
        </label>
        <select
          id={name}
          ref={ref}
          name={name}
          className={cn(
            "flex h-9 w-full rounded-md border border-border bg-background px-3 py-1 text-base shadow-xs",
            "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
            error
              ? "border-error focus-visible:ring-error/50"
              : "focus-visible:ring-ring/50",
            className
          )}
          {...rest}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && <p className="mt-1 text-sm text-error">{error.message}</p>}
      </div>
    );
  }
);

Dropdown.displayName = "Dropdown";