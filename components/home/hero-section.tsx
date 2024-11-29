// 位置：components/home/hero-section.tsx
// 功能：提供主視覺區域

"use client";

import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { images } from "@/lib/config/images";

export function HeroSection() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${images.hero.url}')` }}
        role="img"
        aria-label={images.hero.alt}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          發現您的自然之美
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          體驗為您量身打造的奢華美容療程
        </p>
        <Button size="lg" className="bg-rose-500 hover:bg-rose-600">
          預約諮詢
          <Sparkles className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}