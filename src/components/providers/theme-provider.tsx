"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      {...props}
      enableSystem
      attribute="class"
      defaultTheme="system"
      enableColorScheme
      storageKey="theme"
      // Отключаем стандартные transition при начальной загрузке
      disableTransitionOnChange={false}
    >
      {children}
    </NextThemesProvider>
  );
}
