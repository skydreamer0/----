"use client";

import { images } from "@/lib/config/images";
import Image from "next/image";
import { Users, Sparkles, UserCheck, Home } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* 英雄區塊 */}
      <div className="relative h-[60vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url('${images.about.url}')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        </div>
        <FadeIn className="relative container mx-auto h-full flex flex-col justify-center items-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">關於我們</h1>
          <p className="text-xl md:text-2xl max-w-2xl text-center text-gray-200">
            致力於提供最頂級的美容護理服務，為每位顧客打造專屬的美麗方案
          </p>
        </FadeIn>
      </div>

      {/* 主要內容區 */}
      <div className="container mx-auto py-20 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left" className="space-y-6">
            <h2 className="text-3xl font-bold">
              <span className="text-rose-500">13</span> 年專業經驗
            </h2>
            <p className="text-gray-600 leading-relaxed">
              奢華美容診所成立於2010年，以專業、創新、貼心的服務理念，
              為每位顧客提供最優質的美容護理體驗。我們的團隊由經驗豐富的美容專家組成，
              每位成員都經過嚴格的專業培訓。
            </p>
            <div className="grid grid-cols-2 gap-8 py-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-rose-500 mb-2">5000+</div>
                <div className="text-gray-600">滿意顧客</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-rose-500 mb-2">98%</div>
                <div className="text-gray-600">顧客推薦率</div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" className="relative aspect-square rounded-2xl overflow-hidden">
            <Image
              src={images.about.url}
              alt="關於我們"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </FadeIn>
        </div>

        {/* 特色服務 */}
        <div className="mt-32">
          <FadeIn className="text-3xl font-bold text-center mb-16">
            我們的特色
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FadeIn 
                key={feature.title}
                delay={index * 0.1}
                className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-rose-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// 特色服務數據
const features = [
  {
    title: "專業團隊",
    description: "擁有豐富經驗的美容專家團隊，提供專業諮詢和服務",
    icon: Users,
  },
  {
    title: "先進設備",
    description: "引進全球頂尖美容設備，確保治療效果與安全性",
    icon: Sparkles,
  },
  {
    title: "個性化服務",
    description: "根據每位顧客的需求，制定專屬的美容護理方案",
    icon: UserCheck,
  },
  {
    title: "優質環境",
    description: "寬敞舒適的環境空間，讓您享受高品質的美容體驗",
    icon: Home,
  },
]; 