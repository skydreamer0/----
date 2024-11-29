"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { Crown, Heart, Shield, Star, Users } from "lucide-react";

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

export function BrandValues() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
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
  );
} 