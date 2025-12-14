import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Modi Global Hub - Expert Professional Guidance",
  description: "Connect with verified service providers from all sectors. Online professional consultations made easy.",
};

import { NoiseOverlay } from "@/components/ui/NoiseOverlay";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased bg-canvas-default text-ink-body selection:bg-accent/20 selection:text-ink-display">
        <NoiseOverlay />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
