"use client";

import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { Logo } from "@/components/layout/logo";
import { navItems } from "@/lib/data/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <Logo />
          </Link>

          {/* 桌面版導航 */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.slice(0, -1).map((item) => (
              <Link key={item.href} href={item.href}>
                <Button 
                  variant="ghost"
                  className={pathname === item.href ? "text-rose-500" : ""}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
            <Link href="/booking">
              <Button className="bg-rose-500 hover:bg-rose-600">
                立即預約
              </Button>
            </Link>
          </div>

          {/* 手機版導航 */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">開啟選單</span>
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.slice(0, -1).map((item) => (
                    <Link key={item.href} href={item.href}>
                      <Button 
                        variant="ghost" 
                        className={`w-full ${pathname === item.href ? "text-rose-500" : ""}`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Button>
                    </Link>
                  ))}
                  <Link href="/booking">
                    <Button 
                      className="w-full bg-rose-500 hover:bg-rose-600"
                      onClick={() => setIsOpen(false)}
                    >
                      立即預約
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}