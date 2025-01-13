"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface LessonContentProps {
  lesson: {
    title: string;
    description: string;
    videoUrl?: string;
    content: string;
    task?: {
      description: string;
      codeTemplate?: string;
    };
  };
  onComplete: () => void;
  isCompleted: boolean;
}

export function LessonContent({
  lesson,
  onComplete,
  isCompleted,
}: LessonContentProps) {
  const [activeTab, setActiveTab] = useState<"lesson" | "task">("lesson");
  const [code, setCode] = useState(lesson.task?.codeTemplate || "");

  return (
    <div className="flex-1 overflow-y-auto p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">{lesson.title}</h1>
        <p className="text-muted-foreground mb-6">{lesson.description}</p>

        {/* Видео */}
        {lesson.videoUrl && (
          <Card className="mb-6">
            <div className="aspect-video bg-black">
              {/* Здесь будет видеоплеер */}
              <div className="w-full h-full flex items-center justify-center text-white">
                Видео: {lesson.videoUrl}
              </div>
            </div>
          </Card>
        )}

        {/* Табы */}
        <div className="flex gap-2 mb-4">
          <Button
            variant={activeTab === "lesson" ? "default" : "outline"}
            onClick={() => setActiveTab("lesson")}
          >
            Материал
          </Button>
          {lesson.task && (
            <Button
              variant={activeTab === "task" ? "default" : "outline"}
              onClick={() => setActiveTab("task")}
            >
              Задание
            </Button>
          )}
        </div>

        {/* Контент */}
        {activeTab === "lesson" ? (
          <Card className="p-6 prose dark:prose-invert max-w-none">
            <div dangerouslySetInnerHTML={{ __html: lesson.content }} />
          </Card>
        ) : (
          lesson.task && (
            <div className="space-y-6">
              <Card className="p-6 prose dark:prose-invert max-w-none">
                <div
                  dangerouslySetInnerHTML={{ __html: lesson.task.description }}
                />
              </Card>
              <Card className="p-6">
                <div className="mb-4">
                  <textarea
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="w-full h-64 font-mono p-4 bg-accent/50 rounded-lg"
                    placeholder="Введите ваше решение..."
                  />
                </div>
                <Button onClick={onComplete} disabled={isCompleted}>
                  {isCompleted ? "Задание выполнено" : "Отправить решение"}
                </Button>
              </Card>
            </div>
          )
        )}
      </div>
    </div>
  );
}
