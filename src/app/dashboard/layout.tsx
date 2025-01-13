import { DashboardNav } from "@/components/layouts/DashboardNav";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        {/* Боковая панель */}
        <div className="w-64 border-r border-accent min-h-screen p-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold">Личный кабинет</h2>
            <ThemeToggle />
          </div>
          <DashboardNav />
        </div>

        {/* Основной контент */}
        <div className="flex-1 p-8">{children}</div>
      </div>
    </div>
  );
}
