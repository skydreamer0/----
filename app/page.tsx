import { HeroSection } from "@/components/home/hero-section";
import { ServicesSection } from "@/components/home/services-section";
import { BookingSection } from "@/components/home/booking-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      <HeroSection />
      <ServicesSection />
      <BookingSection />
    </main>
  );
}