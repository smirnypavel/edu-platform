"use client";

import { cn } from "@/lib/utils";
import { Lock, CheckCircle, PlayCircle } from "lucide-react";
import Link from "next/link";

interface Lesson {
  id: string;
  title: string;
  isCompleted: boolean;
  isLocked: boolean;
}

interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
}

interface LessonSidebarProps {
  modules: Module[];
  currentModuleId: string;
  currentLessonId: string;
}

export function LessonSidebar({
  modules,
  currentModuleId,
  currentLessonId,
}: LessonSidebarProps) {
  return (
    <div className="w-80 border-r border-accent bg-card h-[calc(100vh-4rem)] overflow-y-auto">
      <div className="p-4 space-y-4">
        {modules.map((module) => (
          <div key={module.id}>
            <div className="font-semibold mb-2">{module.title}</div>
            <div className="space-y-1">
              {module.lessons.map((lesson) => (
                <Link
                  key={lesson.id}
                  href={`/courses/${currentModuleId}/lessons/${lesson.id}`}
                  className={cn(
                    "flex items-center gap-2 p-2 rounded-lg text-sm",
                    lesson.isLocked && "opacity-50 cursor-not-allowed",
                    currentLessonId === lesson.id &&
                      "bg-primary/10 text-primary",
                    !lesson.isLocked && "hover:bg-accent/50"
                  )}
                  onClick={(e) => {
                    if (lesson.isLocked) e.preventDefault();
                  }}
                >
                  {lesson.isCompleted ? (
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  ) : lesson.isLocked ? (
                    <Lock className="w-4 h-4" />
                  ) : (
                    <PlayCircle className="w-4 h-4" />
                  )}
                  {lesson.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
