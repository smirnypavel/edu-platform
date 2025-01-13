"use client";

import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, Trophy } from "lucide-react";
import Link from "next/link";

// Моковые данные для купленных курсов
const purchasedCourses = [
  {
    id: "web-development",
    title: "Веб-разработка с нуля до профи",
    progress: 45,
    totalLessons: 86,
    completedLessons: 39,
    lastActivity: "2024-01-15",
    nextLesson: {
      title: "JavaScript DOM Манипуляции",
      module: "JavaScript Основы",
    },
    estimatedTimeLeft: "4ч 30м",
  },
  {
    id: "python-pro",
    title: "Python-разработчик PRO",
    progress: 25,
    totalLessons: 94,
    completedLessons: 23,
    lastActivity: "2024-01-14",
    nextLesson: {
      title: "Работа с API",
      module: "Работа с данными",
    },
    estimatedTimeLeft: "6ч 15м",
  },
];

export default function DashboardCoursesPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Мои курсы</h1>
        <Link href="/courses">
          <Button variant="outline">Просмотреть все курсы</Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {purchasedCourses.map((course) => (
          <Card key={course.id} className="p-6">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              {/* Основная информация */}
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm text-muted-foreground mb-1">
                      <span>Прогресс курса</span>
                      <span>{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} />
                  </div>
                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      {course.completedLessons} / {course.totalLessons} уроков
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      Осталось: {course.estimatedTimeLeft}
                    </div>
                    {course.progress === 100 && (
                      <div className="flex items-center gap-2 text-primary">
                        <Trophy className="w-4 h-4" />
                        Курс завершён
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Действия */}
              <div className="flex flex-col gap-4 min-w-[200px]">
                <div className="text-sm">
                  <div className="font-medium">Следующий урок:</div>
                  <div className="text-muted-foreground">
                    {course.nextLesson.title}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Модуль: {course.nextLesson.module}
                  </div>
                </div>
                <Link href={`/courses/${course.id}/lessons/next`}>
                  <Button className="w-full">
                    {course.progress === 100
                      ? "Повторить курс"
                      : "Продолжить обучение"}
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {purchasedCourses.length === 0 && (
        <Card className="p-6 text-center">
          <h3 className="text-lg font-medium mb-2">У вас пока нет курсов</h3>
          <p className="text-muted-foreground mb-4">
            Выберите курс из каталога и начните обучение прямо сейчас
          </p>
          <Link href="/courses">
            <Button>Перейти к каталогу</Button>
          </Link>
        </Card>
      )}
    </div>
  );
}
