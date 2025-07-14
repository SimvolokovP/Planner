import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  error?: { message?: string };
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { name, label, className, error, type = "text", ...rest } = props;

  if (type === "checkbox") {
    return (
      <div className="mb-4 flex items-center gap-2">
        <div className="relative flex items-center">
          <input
            id={name}
            ref={ref}
            name={name}
            type="checkbox"
            className={cn(
              "peer h-4 w-4 shrink-0 rounded-sm border bg-card shadow-xs",
              "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
              "disabled:cursor-not-allowed disabled:opacity-50",
              "data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
              error ? "border-error" : "",
              className
            )}
            {...rest}
          />
          <svg
            className="absolute left-0 top-0 h-4 w-4 scale-50 opacity-0 transition-opacity peer-data-[state=checked]:scale-100 peer-data-[state=checked]:opacity-100"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <label
          htmlFor={name}
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {label}
        </label>
        {error && <p className="mt-1 text-sm text-error">{error.message}</p>}
      </div>
    );
  }

  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="block text-sm font-medium mb-3 text-foreground"
      >
        {label}
      </label>
      <input
        id={name}
        ref={ref}
        name={name}
        type={type}
        className={cn(
          "placeholder:text-muted-foreground selection:bg-primary selection:text-primary",
          "flex h-9 w-full min-w-0 rounded-md border border-border bg-background px-3 py-1 text-base shadow-xs",
          "transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:opacity-50 md:text-sm",
          "focus-visible:ring-[1px] focus-visible:border-ring",
          error
            ? "border-error focus-visible:ring-error/50"
            : "focus-visible:ring-ring/50",
          className
        )}
        {...rest}
      />
      {error && <p className="mt-1 text-sm text-error">{error.message}</p>}
    </div>
  );
});

Input.displayName = "Input";
