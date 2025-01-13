"use client";

import Link from "next/link";
import { ThemeToggle } from "../ui/theme-toggle";
import { useState, useEffect } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Отслеживаем прокрутку страницы
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
      fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-accent shadow-sm"
          : "bg-transparent"
      }
    `}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Логотип */}
          <Link href="/" className="text-2xl font-bold text-primary">
            EduPortal
          </Link>

          {/* Десктопное меню */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/courses"
              className="hover:text-primary transition-colors"
            >
              Курсы
            </Link>
            <Link
              href="/about"
              className="hover:text-primary transition-colors"
            >
              О нас
            </Link>
            <Link
              href="/pricing"
              className="hover:text-primary transition-colors"
            >
              Цены
            </Link>
            <Link
              href="/contact"
              className="hover:text-primary transition-colors"
            >
              Контакты
            </Link>
          </div>

          {/* Правая часть */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Link
              href="/login"
              className="px-4 py-2 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Войти
            </Link>
            <Link
              href="/register"
              className="px-4 py-2 rounded-md border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Регистрация
            </Link>
          </div>

          {/* Мобильная кнопка меню */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Мобильное меню */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4">
            <Link href="/courses" className="block hover:text-primary">
              Курсы
            </Link>
            <Link href="/about" className="block hover:text-primary">
              О нас
            </Link>
            <Link href="/pricing" className="block hover:text-primary">
              Цены
            </Link>
            <Link href="/contact" className="block hover:text-primary">
              Контакты
            </Link>
            <div className="pt-4 border-t border-accent space-y-2">
              <Link
                href="/login"
                className="block px-4 py-2 rounded-md bg-primary text-primary-foreground text-center"
              >
                Войти
              </Link>
              <Link
                href="/register"
                className="block px-4 py-2 rounded-md border border-primary text-primary text-center"
              >
                Регистрация
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
