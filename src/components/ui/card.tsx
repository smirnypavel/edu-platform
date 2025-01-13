interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={`bg-background border border-accent rounded-lg shadow-sm ${
        className || ""
      }`}
      {...props}
    >
      {children}
    </div>
  );
}
