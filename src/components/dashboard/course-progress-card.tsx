// src/components/dashboard/course-progress-card.tsx
"use client";

import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { PlayCircle, Clock, Award } from "lucide-react";
import Link from "next/link";

interface CourseProgressCardProps {
  id: string;
  title: string;
  progress: number;
  lastLesson: string;
  timeSpent: string;
  nextLesson: string;
}

export function CourseProgressCard({
  id,
  title,
  progress,
  lastLesson,
  timeSpent,
  nextLesson,
}: CourseProgressCardProps) {
  return (
    <Card className="p-6">
      <div className="flex justify-between items-start mb-4">
        <h4 className="text-lg font-semibold">{title}</h4>
        <span className="text-sm text-muted-foreground">{progress}%</span>
      </div>

      <Progress value={progress} className="mb-4" />

      <div className="space-y-3 mb-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <PlayCircle className="w-4 h-4" />
          <span>Последний урок: {lastLesson}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="w-4 h-4" />
          <span>Времени потрачено: {timeSpent}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Award className="w-4 h-4" />
          <span>Следующий урок: {nextLesson}</span>
        </div>
      </div>

      <Link href={`/courses/${id}/learn`}>
        <Button className="w-full">Продолжить обучение</Button>
      </Link>
    </Card>
  );
}
