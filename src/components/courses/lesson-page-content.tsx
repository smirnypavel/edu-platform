"use client";

import { LessonSidebar } from "@/components/courses/lesson-sidebar";
import { LessonContent } from "@/components/courses/lesson-content";
import { useState } from "react";
import { Loader2 } from "lucide-react";

interface Course {
  id: string;
  title: string;
  modules: {
    id: string;
    title: string;
    lessons: {
      id: string;
      title: string;
      isCompleted: boolean;
      isLocked: boolean;
      description: string;
      content: string;
      task?: {
        description: string;
        codeTemplate: string;
      };
    }[];
  }[];
}

interface LessonPageContentProps {
  courseId: string;
  lessonId: string;
  initialData: Course;
}

export function LessonPageContent({
  courseId,
  lessonId,
  initialData,
}: LessonPageContentProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const currentModule = initialData.modules.find((module) =>
    module.lessons.some((lesson) => lesson.id === lessonId)
  );

  const currentLesson = currentModule?.lessons.find(
    (lesson) => lesson.id === lessonId
  );

  if (!currentModule || !currentLesson) {
    return null;
  }

  const handleComplete = async () => {
    try {
      setIsSubmitting(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Задание выполнено");
    } catch (err) {
      console.error("Ошибка при отправке решения:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex h-[calc(100vh-4rem)]">
      <LessonSidebar
        modules={initialData.modules}
        currentModuleId={courseId}
        currentLessonId={lessonId}
      />
      <LessonContent
        lesson={currentLesson}
        onComplete={handleComplete}
        isCompleted={currentLesson.isCompleted}
      />
      {isSubmitting && (
        <div className="fixed inset-0 bg-background/80 flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <span className="ml-2">Отправка решения...</span>
        </div>
      )}
    </div>
  );
}
