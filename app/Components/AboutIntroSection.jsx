"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

export default function AboutIntro() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <section className="relative border-t border-[#D89F43]/60 py-24 px-6 bg-gradient-to-b from-[#2e1c11] via-[#1f1410] to-[#0c0907] text-white overflow-hidden">
            <div className="absolute top-[-100px] left-[10%] w-72 h-72 bg-[#D89F43] opacity-20 blur-3xl rounded-full z-0"></div>
            <div className="absolute bottom-[-120px] right-[5%] w-96 h-96 bg-[#EFE37A] opacity-10 blur-2xl rounded-full z-0"></div>

            <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
                <h2
                    data-aos="fade-up"
                    className="text-4xl md:text-5xl font-bold text-[#EFE37A] tracking-tight"
                >
                    Discover Your Natural Glow
                </h2>

                <p
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
                >
                    At Umayma Medical Center, we blend modern aesthetic techniques with a touch of elegance to bring out the best version of you. Your beauty journey begins here.
                </p>
                <p className=" sr-only">في مركز أميمة الطبي، نمزج تقنيات التجميل الحديثة مع لمسة من الأناقة لنُظهركِ بأفضل صورة. رحلة جمالكِ تبدأ من هنا.</p>
                <div data-aos="fade-up" data-aos-delay="400">
                    <Link
                        href="/about"
                        className="inline-block bg-[#D89F43] text-white font-medium px-10 py-3 rounded-full shadow-md hover:bg-[#EFE37A] hover:text-[#1f1f1f] transition duration-300"
                    >
                        Learn More About Us
                    </Link>
                </div>
            </div>
        </section>
    );
}
