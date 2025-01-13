"use client";

import { Card } from "@/components/ui/card";
import { CourseProgressCard } from "@/components/dashboard/course-progress-card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Моковые данные для графика
const activityData = [
  { date: "2024-01-01", hours: 2 },
  { date: "2024-01-02", hours: 3 },
  { date: "2024-01-03", hours: 1.5 },
  { date: "2024-01-04", hours: 4 },
  { date: "2024-01-05", hours: 2.5 },
  { date: "2024-01-06", hours: 3.5 },
  { date: "2024-01-07", hours: 2 },
];

// Моковые данные для курсов
const activeCourses = [
  {
    id: "web-development",
    title: "Веб-разработка с нуля",
    progress: 45,
    lastLesson: "JavaScript основы",
    timeSpent: "24ч 30м",
    nextLesson: "Работа с DOM",
  },
  {
    id: "python-pro",
    title: "Python разработчик",
    progress: 68,
    lastLesson: "ООП в Python",
    timeSpent: "32ч 15м",
    nextLesson: "Декораторы",
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Ваш прогресс</h1>
        <div className="text-sm text-muted-foreground">
          Последнее обновление: {new Date().toLocaleDateString()}
        </div>
      </div>

      {/* Статистика */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-medium">Активные курсы</h3>
          <p className="text-3xl font-bold text-primary mt-2">3</p>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-medium">Завершено курсов</h3>
          <p className="text-3xl font-bold text-green-600 mt-2">7</p>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-medium">Общий рейтинг</h3>
          <p className="text-3xl font-bold text-purple-600 mt-2">456</p>
        </Card>
      </div>

      {/* Активные курсы */}
      <div>
        <h2 className="text-xl font-bold mb-4">Активные курсы</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {activeCourses.map((course) => (
            <CourseProgressCard key={course.id} {...course} />
          ))}
        </div>
      </div>

      {/* График активности */}
      <Card>
        <div className="p-6">
          <h3 className="text-lg font-medium mb-4">График активности</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={activityData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="date"
                  tickFormatter={(date) => new Date(date).toLocaleDateString()}
                />
                <YAxis name="Часы" />
                <Tooltip
                  labelFormatter={(date) => new Date(date).toLocaleDateString()}
                  formatter={(value) => [`${value} ч`, "Время обучения"]}
                />
                <Line
                  type="monotone"
                  dataKey="hours"
                  stroke="var(--primary)"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </Card>
    </div>
  );
}
