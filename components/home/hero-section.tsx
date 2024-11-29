// 位置：components/home/hero-section.tsx
// 功能：提供主視覺區域

"use client";

import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Discover Your Natural Beauty
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Experience luxury treatments tailored to enhance your unique beauty
        </p>
        <Button size="lg" className="bg-rose-500 hover:bg-rose-600">
          Book Consultation
          <Sparkles className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}