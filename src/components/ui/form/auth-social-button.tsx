// src/components/ui/form/auth-social-button.tsx
interface AuthSocialButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ElementType;
}

export function AuthSocialButton({
  icon: Icon,
  children,
  ...props
}: AuthSocialButtonProps) {
  return (
    <button
      type="button"
      className={`
        w-full h-12 flex items-center justify-center gap-3
        rounded-lg border border-accent bg-background
        hover:bg-accent/5 transition-colors
        focus:outline-none focus:ring-2 focus:ring-primary/30
        disabled:opacity-50 disabled:cursor-not-allowed
      `}
      {...props}
    >
      <Icon className="w-5 h-5" />
      <span className="text-base font-medium">{children}</span>
    </button>
  );
}
