import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <div className="container mx-auto py-20">
      <h1 className="text-4xl font-bold mb-12 text-center">聯絡我們</h1>
      <div className="max-w-2xl mx-auto">
        <form className="space-y-6">
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
          <Button className="w-full bg-rose-500 hover:bg-rose-600">
            送出訊息
          </Button>
        </form>
      </div>
    </div>
  );
} 