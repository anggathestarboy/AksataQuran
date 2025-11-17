import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Al-Quran Digital - Baca Al-Quran Online",
  description: "Aplikasi Al-Quran digital yang responsif dan minimalis untuk membaca Al-Quran online dengan terjemahan Bahasa Indonesia.",
  keywords: ["Al-Quran", "Islam", "Digital Quran", "Baca Quran", "Terjemahan Quran"],
  authors: [{ name: "Al-Quran Digital Team" }],
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Al-Quran Digital",
    description: "Aplikasi Al-Quran digital yang responsif dan minimalis",
    url: "https://chat.z.ai",
    siteName: "Al-Quran Digital",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Al-Quran Digital",
    description: "Aplikasi Al-Quran digital yang responsif dan minimalis",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
