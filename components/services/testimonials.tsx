"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "王小姐",
    role: "資深客戶",
    content: "服務非常專業，美容師很細心地為我解說每個療程步驟，效果超乎預期！",
    rating: 5,
  },
  {
    name: "李小姐",
    role: "新客戶",
    content: "環境舒適，服務人員親切，讓人很放鬆。療程效果也很好，會再回訪。",
    rating: 5,
  },
  {
    name: "張女士",
    role: "VIP會員",
    content: "已經是第三年的老顧客了，每次護理都能感受到滿滿的用心，非常推薦！",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-3xl font-bold text-center mb-16">顧客評價</h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center text-rose-500 font-bold">
                    {testimonial.name[0]}
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600">{testimonial.content}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
} 