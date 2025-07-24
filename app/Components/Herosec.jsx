"use client";

import Image from "next/image";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import BeautyParticles from "./ParticleBackground";



export default function Hero() {
    useEffect(() => {
      AOS.init({
        duration: 1000,      // مدة الأنيميشن
        once: true,          // تظهر مرة واحدة فقط
        easing: "ease-in-out",
      });
    }, []);
  return (
    <main className=" bg-red-950 text-white flex mt-[-40px] items-center justify-center relative pt-10 overflow-visible bg-[length:100%_100%]">
        <BeautyParticles/>
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2  gap-12 max-md:gap-1 py-10 items-center">
        {/* LEFT TEXT SECTION */}
        <div className="space-y-6 p-5 max-md:flex max-md:justify-around max-md:items-center max-md:flex-col">
          <h1 data-aos="fade-down-right" className="text-4xl md:text-4xl font-extrabold leading-tight text-[#D89F43] animate-fade-in">
            Reveal Your True Beauty
          </h1>
          <p data-aos="zoom-in" className="text-gray-300 text-lg animate-fade-in-delay">
            At Umayma Medical Center, we provide expert cosmetic treatments
            tailored to your needs in a luxurious and professional environment.
          </p>
          <button data-aos="fade-right" className="bg-[#D89F43] hover:bg-[#d89f43c7] cursor-pointer text-white px-6 py-3 rounded-full transition duration-300 animate-fade-in-delay">
            See our Services
          </button>
           
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="flex justify-center animate-fade-in-right ">
          <Image
            src="/hero-img.jpg" // ضع صورتك في public/hero-image.jpg
            alt="Beauty Treatment"
            width={500}
            height={500}
            data-aos="fade-down"
            className="rounded-3xl  shadow-2xl relative mx-10 bottom-[-80px] object-cover max-h-[500px]"
          />
        </div>
      </div>
    </main>
  );
}
