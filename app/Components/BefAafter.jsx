"use client";

import Image from "next/image";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const cases = [
    {
        title: "زراعة مقدمة الشعر",
        before: "/قبل شعر.png",
        after: "/بعد شعر.png",
    },
    {
        title: "إزالة تجاعيد الجبهة",
        before: "/قبل جبهة.png",
        after: "/بعد جبهة.png",
    },
    {
        title: "تحسين مظهر الأسنان",
        before: "/قبل اسنان.png",
        after: "/بعد اسنان.png",
    },
];

export default function BeforeAfterSection() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <section className="py-24 px-6 bg-[#1A120E] text-white">
            <div className="max-w-6xl mx-auto text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-bold mb-4 text-[#EFE37A]">
                    Before And After
                </h2>
                <p className="text-lg text-neutral-300">
                    Real results from Omaima Center - see the difference for yourself!
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
                {cases.map((item, index) => (
                    <div
                        key={index}
                        data-aos="fade-up"
                        className="bg-[#2D1F1A] rounded-3xl overflow-hidden shadow-xl hover:shadow-amber-900/30 transition duration-700"
                    >
                        <h3 className="text-xl font-semibold text-center py-4 border-b border-[#D89F43] text-[#D89F43]">
                            {item.title}
                        </h3>

                        <div className="grid grid-cols-2">
                            <div className="relative aspect-[3/4]">
                                <Image
                                    src={item.before}
                                    alt="قبل"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute bottom-2 left-2 bg-black/50 text-sm px-2 py-1 rounded text-white">
                                    قبل
                                </div>
                            </div>
                            <div className="relative aspect-[3/4]">
                                <Image
                                    src={item.after}
                                    alt="بعد"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute bottom-2 left-2 bg-[#D89F43]/80 text-sm px-2 py-1 rounded text-black font-semibold">
                                    بعد
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
