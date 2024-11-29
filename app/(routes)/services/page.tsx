"use client";

import { Card } from "@/components/ui/card";
import { services } from "@/lib/data/services";
import { images } from "@/lib/config/images";
import { FadeIn } from "@/components/animations/fade-in";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Shield, Heart, ThumbsUp } from "lucide-react";
import Link from "next/link";
import { PriceComparison } from "@/components/services/price-comparison";
import { Testimonials } from "@/components/services/testimonials";
import { BrandValues } from "@/components/services/brand-values";

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* 英雄區塊 */}
      <div className="relative h-[50vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url('${images.services[0].url}')` }}
          role="img"
          aria-label={images.services[0].alt}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent" />
        </div>
        <FadeIn className="relative container mx-auto h-full flex flex-col justify-center items-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">專業服務項目</h1>
          <p className="text-xl md:text-2xl max-w-2xl text-center text-gray-200">
            為您提供最頂級的美容護理體驗
          </p>
        </FadeIn>
      </div>

      {/* 服務內容區 */}
      <div className="container mx-auto py-20 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FadeIn 
              key={service.title} 
              delay={index * 0.1}
            >
              <Card className="group overflow-hidden bg-white hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                    style={{ backgroundImage: `url('${images.services[index].url}')` }}
                    role="img"
                    aria-label={images.services[index].alt}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-rose-500 font-semibold text-lg">
                      {service.price}
                    </span>
                    <Link href="/booking">
                      <Button 
                        variant="ghost" 
                        className="group/button hover:bg-rose-500 hover:text-white"
                      >
                        立即預約
                        <ArrowRight className="ml-2 h-4 w-4 transform group-hover/button:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>

        {/* 添加品牌理念區塊 */}
        <BrandValues />

        {/* 價格比較表 */}
        <PriceComparison />
        
        {/* 客戶評價 */}
        <Testimonials />
      </div>
    </div>
  );
}

// 服務保證數據
const guarantees = [
  {
    title: "專業認證",
    description: "所有療程均經過專業認證，確保安全與效果",
    icon: Award,
  },
  {
    title: "品質保證",
    description: "使用頂級產品，堅持最高品質標準",
    icon: Shield,
  },
  {
    title: "售後關懷",
    description: "提供完整的術後護理建議與追蹤服務",
    icon: Heart,
  },
  {
    title: "滿意承諾",
    description: "以客戶滿意為首要目標，提供最佳服務體驗",
    icon: ThumbsUp,
  },
]; 