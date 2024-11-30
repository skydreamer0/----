// app/(routes)/contact/page.tsx
// 聯絡我們頁面

"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { images } from "@/lib/config/images";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function ContactPage() {
  const { toast } = useToast();
  const [imageError, setImageError] = useState(false);

  return (
    <div className="min-h-screen">
      {/* 頂部背景圖區域 */}
      <div className="relative h-[40vh] min-h-[300px] w-full overflow-hidden">
        <Image
          src={images.contact.url}
          alt={images.contact.alt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <FadeIn className="relative container mx-auto h-full flex flex-col justify-center items-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            聯絡我們
          </h1>
          <p className="text-xl text-center max-w-2xl mx-auto">
            我們期待為您提供最專業的諮詢服務
          </p>
        </FadeIn>
      </div>

      {/* 聯絡資訊區塊 */}
      <div className="bg-rose-50 relative z-10 -mt-20 pt-32 pb-20">
        <div className="container mx-auto py-20 px-4">
          <FadeIn>
            <h1 className="text-4xl font-bold text-center mb-6">聯絡我們</h1>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
              我們期待為您提供最專業的諮詢服務，歡迎透過以下方式與我們聯繫
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <FadeIn delay={0.1}>
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <Phone className="w-8 h-8 text-rose-500 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">電話</h3>
                <p className="text-gray-600">(02) 2345-6789</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <Mail className="w-8 h-8 text-rose-500 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">電子郵件</h3>
                <p className="text-gray-600">info@luxebeauty.com</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <MapPin className="w-8 h-8 text-rose-500 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">地址</h3>
                <p className="text-gray-600">台北市信義區信義路五段7號</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* 聯絡表單 */}
      <div className="container mx-auto py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <FadeIn>
            <form className="space-y-6 bg-white p-8 rounded-2xl shadow-lg">
              <div>
                <label className="block text-sm font-medium mb-2">姓名</label>
                <Input placeholder="請輸入您的姓名" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">電子郵件</label>
                <Input type="email" placeholder="請輸入您的電子郵件" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">電話</label>
                <Input placeholder="請輸入您的聯絡電話" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">訊息內容</label>
                <Textarea placeholder="請輸入您想諮詢的內容" rows={6} />
              </div>
              <Button
                className="w-full bg-rose-500 hover:bg-rose-600"
                onClick={(e) => {
                  e.preventDefault();
                  toast({
                    title: "訊息已送出",
                    description: "我們會盡快與您聯繫",
                  });
                }}
              >
                送出訊息
              </Button>
            </form>
          </FadeIn>
        </div>
      </div>
    </div>
  );
} 