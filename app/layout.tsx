import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import Navbar from "./components/NavBar";

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
    default: "Genious Power | Servo Stabilizer, UPS & Inverter Solutions in Odisha",
    template: "%s | Genious Power",
  },
  description:
    "Genious Power is a leading manufacturer and service provider of voltage stabilizers, servo stabilizers, inverters, UPS & online UPS, batteries and air conditioners in Bhubaneswar, Odisha.",
  keywords: [
    "servo stabilizer",
    "voltage stabilizer",
    "power stabilizer",
    "home stabilizer",
    "automatic stabilizer",
    "digital stabilizer",
    "servo voltage controller",
    "servo voltage regulator",
    "industrial servo stabilizer",
    "precision servo stabilizer",
    "inverters",
    "home inverter",
    "pure sine wave inverter",
    "digital inverter",
    "ups",
    "offline ups",
    "online ups",
    "commercial ups",
    "industrial ups",
    "power backup solutions",
    "battery",
    "inverter battery",
    "ups battery",
    "air conditioner",
    "split ac repair bhubaneswar",
    "window ac repair",
    "ac maintenance near me",
    "servo stabilizer repair bhubaneswar",
    "ups repair bhubaneswar",
    "online ups installation bhubaneswar",
    "power backup solutions odisha",
    "voltage stabilizer manufacturer odisha",
  ],
  alternates: {
    canonical: "https://geniouspower.in",
  },
  openGraph: {
    title: "Genious Power | Power Backup & Stabilizer Solutions",
    description:
      "Manufacturer and service provider of servo stabilizers, UPS, online UPS, inverters, batteries and air conditioners in Odisha.",
    url: "https://geniouspower.in",
    siteName: "Genious Power",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased 
          debug flex flex-col h-screen`}
      >
        <Navbar />

        <div
          className="flex flex-1 overflow-auto 
          bg-[url('/bg.jpg')] bg-cover bg-center debug1"
        >
          {children}
        </div>

        {/* Structured Data – Invisible SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Genious Power",
              description:
                "Manufacturer and service provider of servo stabilizers, voltage stabilizers, UPS, online UPS, inverters, batteries and air conditioners.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bhubaneswar",
                addressRegion: "Odisha",
                addressCountry: "IN",
              },
              areaServed: "Odisha",
              serviceOffered: [
                "Voltage Stabilizers",
                "Servo Stabilizers",
                "Inverters",
                "UPS & Online UPS",
                "Battery Replacement",
                "Air Conditioner Repair & Maintenance",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
