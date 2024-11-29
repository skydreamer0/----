import { Logo } from "./logo";
import { footerLinks, footerServices } from "@/lib/data/footer";
import { navItems } from "@/lib/data/navigation";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="inline-block mb-4">
              <Logo />
            </Link>
            <p className="text-gray-400">
              為您量身打造頂級美容與養生療程，展現您的自然之美。
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">快速連結</h3>
            <ul className="space-y-2 text-gray-400">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href}
                    className="hover:text-rose-500 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">服務項目</h3>
            <ul className="space-y-2 text-gray-400">
              {footerServices.map((service) => (
                <li key={service} className="hover:text-rose-500 cursor-pointer">
                  {service}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">聯絡我們</h3>
            <ul className="space-y-2 text-gray-400">
              <li>台北市信義區信義路五段7號</li>
              <li>營業時間：週一至週六 10:00-21:00</li>
              <li>電話：(02) 2345-6789</li>
              <li>信箱：info@luxebeauty.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} 奢華美容診所 版權所有</p>
        </div>
      </div>
    </footer>
  );
}