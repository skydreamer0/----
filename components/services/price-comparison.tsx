"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { Check } from "lucide-react";

const plans = [
  {
    name: "基礎護理",
    price: "NT$ 2,800",
    description: "適合初次體驗的客戶",
    features: [
      "基礎肌膚檢測",
      "深層清潔",
      "基礎保濕護理",
      "專業諮詢建議",
    ],
  },
  {
    name: "進階護理",
    price: "NT$ 4,500",
    description: "最受歡迎的護理方案",
    features: [
      "進階肌膚檢測",
      "深層清潔",
      "精華導入護理",
      "面部按摩",
      "專業諮詢建議",
      "術後追蹤服務",
    ],
    highlighted: true,
  },
  {
    name: "尊榮護理",
    price: "NT$ 6,800",
    description: "最完整的護理體驗",
    features: [
      "全方位肌膚檢測",
      "深層清潔",
      "精華導入護理",
      "面部按摩",
      "頸部護理",
      "專業諮詢建議",
      "術後追蹤服務",
      "尊榮會員優惠",
    ],
  },
];

export function PriceComparison() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-3xl font-bold text-center mb-16">方案比較</h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <FadeIn 
              key={plan.name}
              delay={index * 0.1}
            >
              <div className={`
                relative p-8 rounded-2xl bg-white
                ${plan.highlighted ? 
                  'ring-2 ring-rose-500 shadow-xl' : 
                  'border border-gray-200'
                }
              `}>
                {plan.highlighted && (
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                    <span className="bg-rose-500 text-white px-4 py-2 rounded-full text-sm">
                      最受歡迎
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="text-3xl font-bold text-rose-500">{plan.price}</div>
                </div>
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600">
                      <Check className="h-5 w-5 text-rose-500 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
} 