import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import QuickContactFloat from "@/components/ui/QuickContactFloat";
import ScrollToTop from "@/components/ui/ScrollToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `Namsewal Bakery`,
  description:
    "Freshly baked cakes, pastries, and celebration specials crafted daily in Itahari.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={`${inter.className} min-h-screen`}>
        <div className="relative min-h-screen">
          <Header />
          <main className="mx-auto w-full max-w-[1600px] px-4 pb-8 pt-6 md:px-8 lg:px-12">
            {children}
          </main>
          <QuickContactFloat />
          <ScrollToTop />
          <Footer />
        </div>
      </body>
    </html>
  );
}
