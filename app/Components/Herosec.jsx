"use client";

import Image from "next/image";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import BeautyParticles from "./ParticleBackground";

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <main className="relative overflow-hidden bg-gradient-to-b from-[#0f0f0f] via-[#1a1a1a] to-[#0a0a0a] text-white">
      <BeautyParticles />

      {/* الخلفية الذهبية خلف الصورة */}
      <div className="absolute right-[10%] top-[10%] w-[600px] h-[600px] bg-[#D89F43] blur-[100px] opacity-30 rounded-full z-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 py-20 px-6 items-center">
        {/* LEFT TEXT SECTION */}
        <div className="space-y-6 max-md:text-center">
          <h1
            data-aos="fade-down-right"
            className="text-4xl md:text-5xl font-extrabold leading-tight text-[#D89F43]"
          >
            Reveal Your True Beauty
          </h1>
          <p
            data-aos="zoom-in"
            className="text-gray-300 tracking-wide text-lg md:text-xl max-w-lg"
          >
            At Umayma Medical Center, we provide expert cosmetic treatments
            tailored to your needs in a luxurious and professional environment.
          </p>
          <button
            data-aos="fade-right"
            className="bg-[#D89F43] hover:bg-[#d89f43c7] font-bold text-white px-6 py-3 rounded-full transition duration-300"
          >
            See our Services
          </button>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div
          className="flex justify-center relative"
          data-aos="fade-down"
        >
          <Image
            src="/hero-img.jpg"
            alt="Beauty Treatment"
            width={500}
            height={500}
            className="rounded-3xl shadow-2xl object-cover max-h-[500px] z-10 relative"
          />
          
        </div>
      </div>
    </main>
  );
}
