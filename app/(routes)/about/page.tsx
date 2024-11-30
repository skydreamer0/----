// app/(routes)/about/page.tsx
// 關於我們頁面

"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { images } from "@/lib/config/images";
import Image from "next/image";

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

      {/* 品牌故事 */}
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

        {/* 品牌理念 */}
        <div className="mt-32 bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <FadeIn>
              <h2 className="text-3xl font-bold text-center mb-4">品牌理念</h2>
              <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
                秉持「專業、用心、品質」的服務精神，為每位顧客提供最優質的美容體驗
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {images.philosophy.map((item, index) => (
                <FadeIn key={item.title} delay={index * 0.1}>
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg group">
                    <div className="relative h-48">
                      <Image
                        src={item.url}
                        alt={item.alt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>

        {/* 專業團隊 */}
        <div className="container mx-auto py-20 px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-4">專業團隊</h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
              我們的團隊擁有豐富的美容護理經驗，致力於為每位顧客提供最優質的服務
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {images.team.map((member, index) => (
              <FadeIn key={member.name} delay={index * 0.1}>
                <div className="bg-white rounded-xl overflow-hidden shadow-lg group">
                  <div className="relative h-80">
                    <Image
                      src={member.url}
                      alt={member.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-rose-500 mb-2">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 