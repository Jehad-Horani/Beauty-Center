

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
  title: 'Umaima Medical Center',
  description:
    'Umaima Medical Center in Jordan: Hair transplantation, dental aesthetics, fillers, Botox, laser treatments, weight loss solutions, and home healthcare services.',
  metadataBase: new URL('https://www.umaima-medical-center.com'),
  openGraph: {
    title: 'Umaima Medical Center',
    description:
      'Expert in hair restoration, dental aesthetics, Botox, fillers, laser treatments, weight loss, and home healthcare services in Jordan.',
    url: '/',
    siteName: 'Umaima Medical Center',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Umaima Medical Center – Confidence and Care',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Umaima Medical Center',
    description:
      'Hair restoration, dental aesthetics, Botox, fillers, laser treatments, weight loss, and home healthcare services in Jordan.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <WhatsappButton />
        <Analytics />
      </body>
       
    </html>
  );
}
