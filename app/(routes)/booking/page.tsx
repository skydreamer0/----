// app/(routes)/booking/page.tsx
// 預約服務頁面
"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { BookingSection } from "@/components/home/booking-section";
import { images } from "@/lib/config/images";

export default function BookingPage() {
    return (
        <div className="min-h-screen">
            {/* 頂部背景圖區域 */}
            <div className="relative h-[40vh] overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${images.booking.url}')` }}
                >
                    <div className="absolute inset-0 bg-black/40" />
                </div>
                <FadeIn className="relative container mx-auto h-full flex flex-col justify-center items-center text-white px-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
                        預約服務
                    </h1>
                    <p className="text-xl text-center max-w-2xl mx-auto">
                        選擇您方便的時間，我們將為您安排專業的美容護理服務
                    </p>
                </FadeIn>
            </div>

            {/* 預約表單區域 */}
            <div className="container mx-auto px-4 -mt-20 relative z-10 pb-20">
                <BookingSection />
            </div>
        </div>
    );
} 