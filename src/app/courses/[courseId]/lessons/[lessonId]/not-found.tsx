import { Button } from "@/components/ui/button";
import { FileQuestion } from "lucide-react";
import Link from "next/link";

export default function LessonNotFound() {
  return (
    <div className="flex h-[calc(100vh-4rem)]">
      <div className="flex-1 p-6">
        <div className="flex flex-col items-center justify-center h-full">
          <FileQuestion className="h-16 w-16 text-muted-foreground mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Урок не найден</h2>
          <p className="text-muted-foreground mb-4">
            Запрашиваемый урок не существует или был удален
          </p>
          <div className="flex gap-4">
            <Link href="/dashboard/courses">
              <Button>Вернуться к курсам</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
