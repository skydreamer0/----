"use client";

import { images } from "@/lib/config/images";
import Image from "next/image";
import { FadeIn } from "@/components/animations/fade-in";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

// 作品分類
const categories = [
  "全部",
  "臉部護理",
  "身體雕塑",
  "美容療程",
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("全部");

  return (
    <div className="min-h-screen">
      {/* 英雄區塊 */}
      <div className="relative h-[40vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url('${images.services[0].url}')` }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <FadeIn className="relative container mx-auto h-full flex flex-col justify-center items-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">作品展示</h1>
          <p className="text-xl md:text-2xl max-w-2xl text-center text-gray-200">
            展現我們的專業技術與卓越成果
          </p>
        </FadeIn>
      </div>

      <div className="container mx-auto py-20 px-4">
        {/* 分類選擇 */}
        <div className="flex justify-center mb-12 space-x-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-6 py-2 rounded-full transition-all",
                activeCategory === category
                  ? "bg-rose-500 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* 作品網格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.services.map((image, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div 
                className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer"
                onClick={() => setSelectedImage(image.url)}
              >
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-lg font-semibold">
                      {image.alt}
                    </h3>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* 圖片預覽對話框 */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl p-0 overflow-hidden">
            {selectedImage && (
              <div className="relative aspect-[4/3]">
                <Image
                  src={selectedImage}
                  alt="作品預覽"
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
} 