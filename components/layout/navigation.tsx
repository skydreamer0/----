"use client";

import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { Logo } from "./logo";
import { navItems } from "@/lib/data/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const mainNavItems = navItems.slice(0, -1); // 除了最後一個"立即預約"的所有項目
  const bookingItem = navItems[navItems.length - 1]; // "立即預約"項目

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {mainNavItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button 
                  variant="ghost"
                  className={pathname === item.href ? "text-rose-500" : ""}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
            <Link href={bookingItem.href}>
              <Button className="bg-rose-500 hover:bg-rose-600">
                {bookingItem.label}
              </Button>
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-8">
                  {mainNavItems.map((item) => (
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
                  <Link href={bookingItem.href}>
                    <Button 
                      className="w-full bg-rose-500 hover:bg-rose-600"
                      onClick={() => setIsOpen(false)}
                    >
                      {bookingItem.label}
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