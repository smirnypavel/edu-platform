"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Добавляем проверку на mounted для избежания гидрации
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative w-10 h-10 rounded-md hover:bg-accent focus:outline-none focus:ring-2 focus:ring-primary"
      aria-label="Переключить тему"
    >
      {/* Иконка солнца */}
      <Sun
        className={`
        absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
        theme-toggle-icon w-5 h-5
        ${theme === "dark" ? "opacity-0 rotate-90" : "opacity-100 rotate-0"}
      `}
      />

      {/* Иконка луны */}
      <Moon
        className={`
        absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
        theme-toggle-icon w-5 h-5
        ${theme === "light" ? "opacity-0 -rotate-90" : "opacity-100 rotate-0"}
      `}
      />
    </button>
  );
}
