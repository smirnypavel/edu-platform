// src/app/register/page.tsx
"use client";

import { useState } from "react";
import { Input } from "@/components/ui/form/input";

import { AuthSocialButton } from "@/components/ui/form/auth-social-button";
import { Chrome } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";

const registerSchema = z.object({
  name: z.string().min(2, "Имя должно содержать минимум 2 символа"),
  email: z.string().email("Введите корректный email"),
  password: z
    .string()
    .min(8, "Пароль должен содержать минимум 8 символов")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "Пароль должен содержать заглавные, строчные буквы и цифры"
    ),
});

type RegisterFormData = z.infer<typeof registerSchema>;

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      setIsLoading(true);
      // Имитация API запроса
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form data:", data);
    } catch (error) {
      console.error("Registration error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Левая часть - форма */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-16 py-12 bg-background">
        <div className="max-w-md w-full mx-auto">
          {/* Логотип */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-primary">EduPortal</h1>
            <p className="mt-2 text-sm text-foreground/60">
              Создайте аккаунт, чтобы начать обучение
            </p>
          </div>

          {/* Форма */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <Input
              label="Имя"
              type="text"
              className="h-12"
              {...register("name")}
              error={errors.name?.message}
              disabled={isLoading}
            />

            <Input
              label="Email"
              type="email"
              className="h-12"
              {...register("email")}
              error={errors.email?.message}
              disabled={isLoading}
            />

            <Input
              label="Пароль"
              type="password"
              className="h-12"
              {...register("password")}
              error={errors.password?.message}
              disabled={isLoading}
            />

            <div className="pt-2">
              <Button
                type="submit"
                className="w-full h-12 text-base font-medium"
                disabled={isLoading}
              >
                {isLoading ? "Создание аккаунта..." : "Создать аккаунт"}
              </Button>
            </div>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-accent"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-background text-foreground/60">или</span>
            </div>
          </div>

          <AuthSocialButton
            icon={Chrome}
            onClick={() => console.log("Google login")}
            disabled={isLoading}
          >
            Продолжить с Google
          </AuthSocialButton>

          <p className="mt-8 text-center text-sm text-foreground/60">
            Уже есть аккаунт?{" "}
            <Link
              href="/login"
              className="font-medium text-primary hover:text-primary/90"
            >
              Войти
            </Link>
          </p>
        </div>
      </div>

      {/* Правая часть - декоративная */}
      <div className="hidden lg:block lg:w-1/2 bg-gradient-to-br from-primary/90 to-primary relative overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          viewBox="0 0 400 400"
          fill="none"
        >
          <g>
            <g transform="translate(200, 200)">
              <path
                d="M100,0 A100,100 0 0,1 0,100 A100,100 0 0,1 -100,0 A100,100 0 0,1 0,-100 A100,100 0 0,1 100,0 Z"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
              />
              <path
                d="M150,0 A150,150 0 0,1 0,150 A150,150 0 0,1 -150,0 A150,150 0 0,1 0,-150 A150,150 0 0,1 150,0 Z"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
              />
            </g>
          </g>
        </svg>

        <div className="absolute inset-0 flex items-center justify-center text-white p-12">
          <div className="max-w-xl text-center">
            <h2 className="text-3xl font-bold mb-4">
              Добро пожаловать в мир IT-образования
            </h2>
            <p className="text-lg opacity-90">
              Присоединяйтесь к тысячам студентов, которые уже изменили свою
              жизнь с помощью наших курсов
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
