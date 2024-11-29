import { Sparkles } from "lucide-react";

export function Logo() {
  return (
    <div className="flex items-center">
      <Sparkles className="h-8 w-8 text-rose-500" />
      <span className="ml-2 text-xl font-bold">Luxe Beauty</span>
    </div>
  );
}