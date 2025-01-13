"use client";

import { Button } from "@/components/ui/button";

import { Clock, Users, BookOpen, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Badge } from "../../../components/ui/badge";

const courseData = {
  id: "web-development",
  title: "Веб-разработка с нуля до профи",
  description:
    "Комплексный курс по веб-разработке: HTML, CSS, JavaScript, React, Node.js. Научитесь создавать современные веб-приложения с нуля.",
  fullDescription: `
    Этот курс предназначен для тех, кто хочет освоить современную веб-разработку с нуля.
    Вы изучите все необходимые технологии и инструменты, научитесь создавать
    современные веб-приложения и получите практический опыт работы над реальными проектами.
  `,
  price: 45000,
  duration: "6 месяцев",
  studentsCount: 1234,
  lessonsCount: 86,
  level: "Начинающий",
  curriculum: [
    {
      title: "Введение в веб-разработку",
      lessons: ["Введение в HTML", "Основы CSS", "Базовая вёрстка"],
    },
    {
      title: "JavaScript основы",
      lessons: [
        "Введение в JavaScript",
        "Работа с DOM",
        "События и обработчики",
      ],
    },
    {
      title: "React разработка",
      lessons: ["Введение в React", "Компоненты и пропсы", "Хуки и состояния"],
    },
  ],
};

export default function CoursePage() {
  const [isPurchasing, setIsPurchasing] = useState(false);
  const router = useRouter();

  const handlePurchase = async () => {
    setIsPurchasing(true);
    // Имитация покупки
    await new Promise((resolve) => setTimeout(resolve, 1500));
    router.push(`/courses/${courseData.id}/learn`);
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-4">{courseData.level}</Badge>
          <h1 className="text-4xl font-bold mb-4">{courseData.title}</h1>

          <div className="flex items-center gap-6 text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              {courseData.duration}
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              {courseData.studentsCount} студентов
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              {courseData.lessonsCount} уроков
            </div>
          </div>

          <div className="prose dark:prose-invert max-w-none mb-12">
            <p className="text-xl mb-4">{courseData.description}</p>
            <p>{courseData.fullDescription}</p>
          </div>

          <div className="bg-card border rounded-lg p-6 mb-12">
            <h2 className="text-2xl font-bold mb-6">Программа курса</h2>
            <div className="space-y-6">
              {courseData.curriculum.map((module, index) => (
                <div key={index}>
                  <h3 className="text-xl font-semibold mb-3">
                    Модуль {index + 1}: {module.title}
                  </h3>
                  <ul className="space-y-2">
                    {module.lessons.map((lesson, lessonIndex) => (
                      <li key={lessonIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        {lesson}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="sticky bottom-4 bg-card border rounded-lg p-6 flex items-center justify-between">
            <div>
              <div className="text-sm text-muted-foreground mb-1">
                Стоимость курса
              </div>
              <div className="text-3xl font-bold">
                {courseData.price.toLocaleString("ru-RU")} ₽
              </div>
            </div>
            <Button size="lg" onClick={handlePurchase} disabled={isPurchasing}>
              {isPurchasing ? "Оформляем..." : "Купить курс"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
