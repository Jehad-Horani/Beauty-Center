

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Analytics } from "@vercel/analytics/next"
import WhatsappButton from "./Components/WhatsappButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Umayma Medical Center",
  description:
    "Umayma Medical Center in Jordan offers expert hair restoration, facial rejuvenation, dental aesthetics, Botox, fillers, and more. Trusted by thousands for over 7 years.",
  keywords:
    "Umayma Medical Center, Hair Transplant Jordan, Botox, Fillers, Dental Implants, Skin Care Jordan, Aesthetic Clinic Jordan",
  openGraph: {
    title: "Umayma Medical Center | Trusted Aesthetic & Medical Care in Jordan",
    description:
      "Leading clinic for hair transplant, dental aesthetics, skin care, Botox & fillers in Jordan. 7+ years of trusted medical expertise.",
    url: "https://your-website-url.com",
    siteName: "Umayma Medical Center",
    images: [
      {
        url: "/white-logo.png", 
        width: 1200,
        height: 630,
        alt: "Umayma Medical Center Jordan",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
        <WhatsappButton/>
        <Analytics />
      </body>
    </html>
  );
}
