// 位置：components/home/booking-section.tsx
// 功能：提供預約系統

"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { timeSlots } from "@/lib/data/time-slots";
import { useState } from "react";
import { zhTW } from 'date-fns/locale';

export function BookingSection() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">立即預約</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
              locale={zhTW}
            />
          </div>
          <ScrollArea className="h-[400px] rounded-md border p-4">
            <div className="space-y-4">
              {timeSlots.map((slot) => (
                <Button
                  key={slot}
                  variant="outline"
                  className="w-full justify-start"
                >
                  {slot}
                </Button>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </section>
  );
}