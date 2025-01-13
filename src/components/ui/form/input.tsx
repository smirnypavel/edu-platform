// src/components/ui/form/input.tsx
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function Input({ label, error, className, ...props }: InputProps) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-foreground/80">
          {label}
        </label>
      )}
      <input
        className={`
          w-full px-4 rounded-lg border bg-background
          focus:outline-none focus:ring-2 focus:ring-primary/30
          focus:border-primary/50 transition-colors
          disabled:opacity-50 disabled:cursor-not-allowed
          ${
            error
              ? "border-red-500 focus:border-red-500 focus:ring-red-500/30"
              : "border-accent"
          }
          ${className}
        `}
        {...props}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}
