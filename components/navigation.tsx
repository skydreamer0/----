"use client";

import { Button } from "@/components/ui/button";
import { Sparkles, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Sparkles className="h-8 w-8 text-rose-500" />
            <span className="ml-2 text-xl font-bold">Luxe Beauty</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Button key={item} variant="ghost">
                {item}
              </Button>
            ))}
            <Button className="bg-rose-500 hover:bg-rose-600">
              Book Now
            </Button>
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
                  {navItems.map((item) => (
                    <Button key={item} variant="ghost" className="w-full">
                      {item}
                    </Button>
                  ))}
                  <Button className="w-full bg-rose-500 hover:bg-rose-600">
                    Book Now
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}

const navItems = ["Home", "Services", "About", "Gallery", "Contact"];