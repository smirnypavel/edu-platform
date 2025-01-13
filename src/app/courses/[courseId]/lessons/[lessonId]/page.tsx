"use client";

import { LessonSidebar } from "@/components/courses/lesson-sidebar";
import { LessonContent } from "@/components/courses/lesson-content";
// import { useRouter } from "next/navigation";

// Моковые данные
const courseData = {
  id: "web-development",
  title: "Веб-разработка с нуля",
  modules: [
    {
      id: "module-1",
      title: "Введение в HTML",
      lessons: [
        {
          id: "lesson-1",
          title: "Основы HTML",
          isCompleted: true,
          isLocked: false,
          description: "Изучим основные теги и структуру HTML документа",
          content: `
            <h2>Введение в HTML</h2>
            <p>HTML (HyperText Markup Language) - это основной строительный блок веб-страниц...</p>
            <h3>Структура HTML документа</h3>
            <pre><code>
            <!DOCTYPE html>
            <html>
              <head>
                <title>Заголовок страницы</title>
              </head>
              <body>
                <h1>Привет, мир!</h1>
              </body>
            </html>
            </code></pre>
          `,
          task: {
            description:
              "Создайте простую HTML страницу с заголовком и параграфом текста",
            codeTemplate:
              "<!DOCTYPE html>\n<html>\n  <head>\n    <title></title>\n  </head>\n  <body>\n    \n  </body>\n</html>",
          },
        },
        // Другие уроки...
      ],
    },
    // Другие модули...
  ],
};

export default function LessonPage({
  params,
}: {
  params: { courseId: string; lessonId: string };
}) {
  //   const router = useRouter();

  const currentModule = courseData.modules[0]; // В реальном приложении найдите нужный модуль
  const currentLesson = currentModule.lessons[0]; // В реальном приложении найдите нужный урок

  const handleComplete = async () => {
    // Здесь будет логика отправки решения и проверки
    console.log("Задание выполнено");
    // После успешной проверки, перенаправляем на следующий урок
    // router.push(`/courses/${params.courseId}/lessons/next-lesson-id`)
  };

  return (
    <div className="flex h-[calc(100vh-4rem)]">
      <LessonSidebar
        modules={courseData.modules}
        currentModuleId={params.courseId}
        currentLessonId={params.lessonId}
      />
      <LessonContent
        lesson={currentLesson}
        onComplete={handleComplete}
        isCompleted={currentLesson.isCompleted}
      />
    </div>
  );
}
