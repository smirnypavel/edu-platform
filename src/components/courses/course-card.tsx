"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import { Clock, Users, BookOpen } from "lucide-react";
import Link from "next/link";
import { Badge } from "../ui/badge";

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: string;
  studentsCount: number;
  lessonsCount: number;
  level: "Начинающий" | "Средний" | "Продвинутый";
  isPurchased?: boolean;
  progress?: number;
}

export function CourseCard({
  id,
  title,
  description,
  price,
  duration,
  studentsCount,
  lessonsCount,
  level,
  isPurchased,
  progress,
}: CourseCardProps) {
  const getLevelColor = (level: string) => {
    switch (level) {
      case "Начинающий":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "Средний":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "Продвинутый":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  return (
    <Card className="flex flex-col overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <Badge variant="outline" className={getLevelColor(level)}>
            {level}
          </Badge>
          {isPurchased && progress !== undefined && (
            <div className="text-sm text-muted-foreground">
              Прогресс: {progress}%
            </div>
          )}
        </div>
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-6">{description}</p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {duration}
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            {studentsCount} студентов
          </div>
          <div className="flex items-center gap-1">
            <BookOpen className="w-4 h-4" />
            {lessonsCount} уроков
          </div>
        </div>
        <div className="mt-auto flex items-center justify-between">
          <div className="text-2xl font-bold">
            {price.toLocaleString("ru-RU")} ₽
          </div>
          {isPurchased ? (
            <Link href={`/courses/${id}/learn`}>
              <Button>Продолжить обучение</Button>
            </Link>
          ) : (
            <Link href={`/courses/${id}`}>
              <Button>Подробнее</Button>
            </Link>
          )}
        </div>
      </div>
    </Card>
  );
}
