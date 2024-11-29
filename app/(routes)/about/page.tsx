"use client";

import { images } from "@/lib/config/images";
import Image from "next/image";
import { Crown, Heart, Shield, Star, Users } from "lucide-react";
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

        {/* 品牌價值 */}
        <div className="mt-32">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-4">品牌理念</h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
              秉持「專業、用心、品質」的服務精神，為每位顧客提供最優質的美容體驗
            </p>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {brandValues.map((value, index) => (
              <FadeIn 
                key={value.title}
                delay={index * 0.1}
              >
                <div className="text-center group cursor-pointer">
                  <div className={`
                    w-16 h-16 mx-auto mb-4 rounded-xl
                    ${value.color} flex items-center justify-center
                    transform group-hover:scale-110 transition-transform duration-300
                  `}>
                    <value.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// 品牌價值數據
const brandValues = [
  {
    icon: Crown,
    title: "頂級服務",
    description: "提供最高規格的美容護理服務",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: Heart,
    title: "專業用心",
    description: "以真誠關懷的心對待每位顧客",
    color: "bg-rose-50 text-rose-600",
  },
  {
    icon: Shield,
    title: "品質保證",
    description: "使用國際認證的頂級產品",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Star,
    title: "尊榮體驗",
    description: "打造奢華舒適的美容環境",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: Users,
    title: "專業團隊",
    description: "擁有豐富經驗的美容專家",
    color: "bg-emerald-50 text-emerald-600",
  },
]; 