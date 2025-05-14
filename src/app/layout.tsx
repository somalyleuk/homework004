import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "E-Learning - Master New Skills",
    template: "%s | E-Learning",
  },
  description:
    "Discover thousands of online courses to master new skills and advance your career with E-Learning.",
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "E-Learning - Master New Skills",
    description:
      "Discover thousands of online courses to master new skills and advance your career with E-Learning.",
    url: "https://elearning-demo-rose.vercel.app",
    siteName: "E-Learning",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "E-Learning Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "E-Learning - Master New Skills",
    description:
      "Discover thousands of online courses to master new skills and advance your career with E-Learning.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  min-h-screen flex flex-col antialiased`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
