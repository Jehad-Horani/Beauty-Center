"use client";

import { FaFacebookF, FaInstagram, FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ContactSection() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <section id="contact" className="relative border-t border-[#D89F43]/50 py-24 px-6 bg-gradient-to-b from-[#2e1c11] via-[#1f1410] to-[#0c0907] text-white overflow-hidden">
            <div className="absolute top-[-100px] left-[10%] w-72 h-72 bg-[#D89F43] opacity-20 blur-3xl rounded-full z-0"></div>
            <div className="absolute bottom-[-120px] right-[5%] w-96 h-96 bg-[#EFE37A] opacity-10 blur-2xl rounded-full z-0"></div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Info */}
                <div data-aos="fade-right" className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#EFE37A]">
                        Get In Touch
                    </h2>
                    <p className="text-gray-300">
                        Visit us or contact our team for any inquiries, appointments, or consultations.
                    </p>

                    <div className="space-y-4">
                        <a
                            href="tel:0797043528"
                            className="flex items-center space-x-3 text-lg hover:text-[#D89F43] transition"
                        >
                            <FaPhone /> <span>0797043538</span>
                        </a>
                        <a
                            href="mailto:umayma.center@gmail.com"
                            className="flex items-center space-x-3 text-lg hover:text-[#D89F43] transition"
                        >
                            <FaEnvelope /> <span>umayma.center@gmail.com</span>
                        </a>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-[#D89F43] mb-2">Working Hours</h3>
                        <p className="text-gray-300">Sat - Thu: 10:00 AM - 8:00 PM</p>
                        <p className="text-gray-300">Friday: Closed</p>
                    </div>

                    <div className="flex space-x-5 mt-4">
                        <a href="https://www.facebook.com/share/19neRGfzbA/?mibextid=wwXIfr" className="text-2xl hover:text-[#EFE37A] transition"><FaFacebookF /></a>
                        <a href="https://www.instagram.com/umaima_medical_center?igsh=bHlvY2N2dzF4cnV5" className="text-2xl hover:text-[#EFE37A] transition"><FaInstagram /></a>
                        <a href="https://wa.me/962797043538" target="_blank" className="text-2xl hover:text-[#EFE37A] transition"><FaWhatsapp /></a>
                    </div>
                </div>

                {/* Map */}
                <div data-aos="fade-left">
                    <iframe
                        className="w-full h-80 rounded-xl border-4 border-[#D89F43]/40 shadow-lg"
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3215.920794629592!2d35.8817347754266!3d32.00631197399527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151c9f902df84c91%3A0x8ec7c9cbab6e143b!2zVW1haW1hIGNsaW5pYyDZhdix2YPYsiDYo9mF2YrZhdipINin2YTYt9io2YogLSDYudmK2KfYr9ipINin2YTYqNi02LHYqSDZiCDYp9mE2YTZitiy2LEg2Ygg2KfZhNiq2KzZhdmK2YQgXyDYstix2KfYudipINin2YTYtNi52LEgXyDYp9mE2KPYs9mG2KfZhg!5e1!3m2!1sen!2sjo!4v1753462654675!5m2!1sen!2sjo"
                        ></iframe>
                </div>
            </div>
        </section>
    );
}
