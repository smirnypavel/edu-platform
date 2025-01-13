"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HomeIcon,
  BookOpenIcon,
  ClockIcon,
  ChartBarIcon,
  StarIcon,
  CreditCardIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "Дашборд", href: "/dashboard", icon: HomeIcon },
  { name: "Курсы", href: "/dashboard/courses", icon: BookOpenIcon },
  { name: "История обучения", href: "/dashboard/history", icon: ClockIcon },
  { name: "Статистика", href: "/dashboard/statistics", icon: ChartBarIcon },
  { name: "Рейтинг", href: "/dashboard/ratings", icon: StarIcon },
  { name: "Транзакции", href: "/dashboard/transactions", icon: CreditCardIcon },
  { name: "Настройки", href: "/dashboard/settings", icon: UserIcon },
];

export function DashboardNav() {
  const pathname = usePathname();

  return (
    <nav className="space-y-1">
      {navigation.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.name}
            href={item.href}
            className={`
              group flex items-center px-4 py-2 text-sm font-medium rounded-md
              ${
                isActive
                  ? "bg-gray-100 text-blue-600"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }
            `}
          >
            <item.icon
              className={`
                mr-3 h-5 w-5
                ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-400 group-hover:text-gray-500"
                }
              `}
            />
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
}
