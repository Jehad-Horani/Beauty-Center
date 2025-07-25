"use client";

import { useState, useEffect } from "react";
import LoadingPage from "./Components/LoadingPage";
import Image from "next/image";
import Hero from "./Components/Herosec";
import PromoSection from "./Components/Promo-section-umayma";
import AboutIntroSection from "./Components/AboutIntroSection";
import BeforeAfterSection from "./Components/BefAafter";
import ContactSection from "./Components/Contact";

export default function Home() {
    const [loading, setLoading] = useState(true);
    const [query, setQuery] = useState("");


      useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 2000); // وقت اللودينج
      return () => clearTimeout(timer);
    }, []);

     if (loading) return <LoadingPage />;
    
  return (
     <main>
      
     <Hero/>
    <PromoSection/>
    <BeforeAfterSection/>
    <AboutIntroSection/>
    <ContactSection/>
    </main>
  );
}

