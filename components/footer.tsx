// 位置：components/footer.tsx
// 功能：提供頁腳區域

import { Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Sparkles className="h-6 w-6 text-rose-500" />
              <span className="ml-2 text-lg font-bold">Luxe Beauty</span>
            </div>
            <p className="text-gray-400">
              Premium beauty and wellness treatments tailored to enhance your natural beauty.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              {["Home", "Services", "About", "Gallery", "Contact"].map((item) => (
                <li key={item} className="hover:text-rose-500 cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              {[
                "Facial Treatments",
                "Skin Therapy",
                "Body Contouring",
                "Beauty Consultation",
                "Wellness Programs"
              ].map((service) => (
                <li key={service} className="hover:text-rose-500 cursor-pointer">
                  {service}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>123 Beauty Street</li>
              <li>New York, NY 10001</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@luxebeauty.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Luxe Beauty. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}