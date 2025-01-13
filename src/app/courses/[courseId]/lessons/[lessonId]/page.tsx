import { LessonPageContent } from "@/components/courses/lesson-page-content";
import { notFound } from "next/navigation";

// Моковые данные (в реальном приложении будут загружаться из API)
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
      ],
    },
  ],
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function LessonPage({ params }: { params: any }) {
  // В реальном приложении здесь будет серверная загрузка данных
  // eslint-disable-next-line @next/next/no-assign-module-variable
  const module = courseData.modules.find((m) =>
    m.lessons.some((l) => l.id === params.lessonId)
  );

  if (!module) {
    notFound();
  }

  return (
    <LessonPageContent
      courseId={params.courseId}
      lessonId={params.lessonId}
      initialData={courseData}
    />
  );
}
