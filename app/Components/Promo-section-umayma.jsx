"use client";

import Image from "next/image";
import "aos/dist/aos.css";
import { FaWhatsapp } from "react-icons/fa";
import AOS from "aos";
import { useEffect } from "react";

export default function PromoSection() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const services = [
    {
      image: "/2.png",
      title: "جلسات الليزر",
      subtitle: "باحدث الاجهزة لبشرة ناعمة ",
      whatsapp: "0797043538",
    },
    {
      image: "/3.png",
      title: "اسألي عن بكج",
      subtitle: "التقشير الكيميائي (للوجه أو الجسم)",
      whatsapp: "0797043538",
    },
    {
      image: "/1.png",
      title: "Get Your Dream Body",
      subtitle: "مع مركز أميمة",
      whatsapp: "0797043538",
    },
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-[#2D1F1A] to-[#1A120E] text-white scroll-mt-20">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 data-aos="fade-up" className="text-4xl md:text-6xl font-bold mb-4 text-[#EFE37A]">
          Our Top Packages
        </h2>
        <p data-aos="fade-up" data-aos-delay="200" className="text-lg md:text-xl text-neutral-300">
          Discover our latest offers designed to help you glow inside and out.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {services.map((item, idx) => (
          <div
            key={idx}
            data-aos="zoom-in-up"
            className="relative rounded-3xl overflow-hidden shadow-2xl group transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:scale-[1.02] hover:shadow-[0_30px_60px_-15px_rgba(216,159,67,0.5)]"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={500}
              height={600}
              className="object-cover w-full h-[500px] transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A120E] via-black/70 to-transparent p-6 flex flex-col justify-end">
              <h3 className="text-2xl font-semibold text-[#EFE37A] mb-2">{item.title}</h3>
              <p className="text-md text-neutral-200 mb-4">{item.subtitle}</p>
              <a
              alt="whatsapp"
                href={`https://wa.me/962${item.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#D89F43] hover:bg-[#C18A53] transition-all duration-300 text-white text-sm px-5 py-2 rounded-full w-max flex items-center gap-2 shadow-md"
              >
                <FaWhatsapp className="text-lg" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
