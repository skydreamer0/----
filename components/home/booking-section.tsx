// 位置：components/home/booking-section.tsx
// 功能：提供預約系統

"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";
import { timeSlots } from "@/lib/data/time-slots";
import { zhTW } from 'date-fns/locale';
import { useState } from "react";

export function BookingSection() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const { toast } = useToast();

  return (
    <section className="bg-white shadow-lg rounded-2xl overflow-hidden">
      <div className="max-w-7xl mx-auto p-6">
        {/* 預約步驟提示 */}
        <div className="mb-8 space-y-2">
          <h2 className="text-2xl font-semibold text-gray-900">選擇預約時間</h2>
          <p className="text-gray-500">請選擇您方便的日期和時段</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 日曆區塊 - 調整置中對齊 */}
          <div className="flex justify-center bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              locale={zhTW}
              className="w-full"
              classNames={{
                months: "flex flex-col items-center space-y-4",
                month: "space-y-4 w-full",
                caption: "flex justify-center pt-1 relative items-center px-8",
                caption_label: "text-sm font-medium",
                nav: "space-x-1 flex items-center",
                nav_button: "h-7 w-7 bg-transparent p-0 hover:bg-gray-50 rounded-full transition-colors",
                nav_button_previous: "absolute left-1",
                nav_button_next: "absolute right-1",
                table: "w-full border-collapse space-y-1",
                head_row: "flex w-full justify-between",
                head_cell: "text-gray-500 w-9 font-normal text-[0.8rem] text-center",
                row: "flex w-full justify-between mt-2",
                cell: "relative p-0 text-center",
                day: "h-9 w-9 p-0 font-normal aria-selected:opacity-100 hover:bg-gray-100 rounded-full transition-colors",
                day_selected: "bg-rose-500 text-white hover:bg-rose-600 hover:text-white focus:bg-rose-500 focus:text-white",
                day_today: "bg-gray-100",
                day_outside: "text-gray-300 opacity-50",
                day_disabled: "text-gray-300",
                day_range_middle: "rounded-none",
                day_hidden: "invisible",
              }}
            />
          </div>

          {/* 時段選擇區塊 */}
          <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
            <ScrollArea className="h-[400px] pr-4">
              <div className="space-y-2">
                {timeSlots.map((slot) => (
                  <Button
                    key={slot}
                    variant={selectedTime === slot ? "default" : "outline"}
                    className={`w-full justify-start transition-colors ${selectedTime === slot
                        ? "bg-rose-500 hover:bg-rose-600 text-white"
                        : "hover:bg-gray-50"
                      }`}
                    onClick={() => setSelectedTime(slot)}
                  >
                    {slot}
                  </Button>
                ))}
              </div>
            </ScrollArea>
          </div>
        </div>

        {/* 確認預約按鈕 */}
        {selectedTime && (
          <div className="mt-8 text-center">
            <Button
              size="lg"
              className="bg-rose-500 hover:bg-rose-600 min-w-[200px]"
              onClick={() => {
                toast({
                  title: "預約確認",
                  description: `已選擇：${date?.toLocaleDateString('zh-TW')} ${selectedTime}`,
                });
              }}
            >
              確認預約
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}