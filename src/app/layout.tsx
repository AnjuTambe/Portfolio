import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Starfield from "../components/Starfield";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anjali Tambe | Portfolio",
  description: "Portfolio of Anjali Tambe - Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen bg-gray-900 text-white overflow-x-hidden`}
      >
        {/* Starfield Background */}
        <Starfield />
        {children}
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
