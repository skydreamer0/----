import "./globals.css";
import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Noto_Sans_TC } from 'next/font/google';
import { images } from "@/lib/config/images";

const notoSansTC = Noto_Sans_TC({ 
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
  title: "奢華美容診所",
  description: "頂級美容與養生療程",
  openGraph: {
    title: "奢華美容診所 | 專業美容與養生",
    description: "提供頂級美容護理、肌膚療程與身體雕塑服務",
    locale: 'zh_TW',
    type: 'website',
    images: [
      {
        url: images.og.url,
        width: images.og.width,
        height: images.og.height,
        alt: images.og.alt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "奢華美容診所 | 專業美容與養生",
    description: "提供頂級美容護理、肌膚療程與身體雕塑服務",
    images: [images.og.url],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW">
      <body className={notoSansTC.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}