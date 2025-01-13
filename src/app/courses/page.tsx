import { CourseCard } from "@/components/courses/course-card";

const courses = [
  {
    id: "web-development",
    title: "Веб-разработка с нуля до профи",
    description:
      "Комплексный курс по веб-разработке: HTML, CSS, JavaScript, React, Node.js. Научитесь создавать современные веб-приложения с нуля.",
    price: 45000,
    duration: "6 месяцев",
    studentsCount: 1234,
    lessonsCount: 86,
    level: "Начинающий" as const,
  },
  {
    id: "python-pro",
    title: "Python-разработчик PRO",
    description:
      "Профессиональный курс по Python: алгоритмы, ООП, фреймворки Django и FastAPI, работа с базами данных, AI интеграции.",
    price: 60000,
    duration: "8 месяцев",
    studentsCount: 856,
    lessonsCount: 94,
    level: "Продвинутый" as const,
  },
];

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Наши курсы</h1>
          <p className="text-muted-foreground">
            Выберите курс и начните свой путь в IT прямо сейчас
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {courses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </div>
    </div>
  );
}
