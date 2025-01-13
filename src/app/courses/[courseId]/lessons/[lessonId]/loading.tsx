import { Loader2 } from "lucide-react";

export default function LessonLoading() {
  return (
    <div className="flex h-[calc(100vh-4rem)]">
      <div className="w-80 border-r border-accent bg-card animate-pulse" />
      <div className="flex-1 p-6">
        <div className="flex items-center justify-center h-full">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <span className="ml-2 text-lg">Загрузка урока...</span>
        </div>
      </div>
    </div>
  );
}
