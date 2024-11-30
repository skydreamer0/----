//位置
//功能：作品展示

"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { images } from "@/lib/config/images";
import Image from "next/image";
import { useState } from "react";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <FadeIn>
          <h1 className="text-4xl font-bold text-center mb-6">作品展示</h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            展現我們的專業技術與卓越成果，每一個作品都是我們對美的追求
          </p>
        </FadeIn>

        {/* 服務項目展示 */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-8">服務項目</h2>
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
        </div>

        {/* 美容成果展示 */}
        <div>
          <h2 className="text-2xl font-bold mb-8">美容成果</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {images.gallery.map((image, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div
                  className="group relative aspect-video overflow-hidden rounded-lg cursor-pointer"
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
        </div>

        {/* 圖片預覽對話框 */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl p-0 overflow-hidden">
            <DialogTitle className="sr-only">作品展示詳情</DialogTitle>
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