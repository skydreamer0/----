import { images } from "@/lib/config/images";
import Image from "next/image";

export default function GalleryPage() {
  return (
    <div className="container mx-auto py-20">
      <h1 className="text-4xl font-bold mb-12 text-center">作品展示</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {images.services.map((image, index) => (
          <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
            <Image
              src={image.url}
              alt={image.alt}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
} 