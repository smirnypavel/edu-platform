"use client";

import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";
import { useEffect } from "react";

export default function LessonError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-[calc(100vh-4rem)]">
      <div className="flex-1 p-6">
        <div className="flex flex-col items-center justify-center h-full">
          <div className="flex items-center text-destructive mb-4">
            <AlertCircle className="h-8 w-8 mr-2" />
            <h2 className="text-xl font-semibold">Что-то пошло не так</h2>
          </div>
          <p className="text-muted-foreground mb-4">
            {error.message || "Произошла ошибка при загрузке урока"}
          </p>
          <div className="flex gap-4">
            <Button onClick={() => reset()}>Попробовать снова</Button>
            <Button variant="outline" onClick={() => window.location.reload()}>
              Обновить страницу
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
