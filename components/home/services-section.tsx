// 位置：components/home/services-section.tsx
// 功能：提供服務展示區域

import { Card } from "@/components/ui/card";
import { services } from "@/lib/data/services";

export function ServicesSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">我們的服務</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="p-6">
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <p className="text-rose-500 font-semibold">{service.price}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}