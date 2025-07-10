import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  error?: { message?: string };
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { name, label, className, error, ...rest } = props;

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
        type={props.type}
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

Input.displayName = "input";
