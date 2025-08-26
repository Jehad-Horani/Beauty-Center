"use client";

import Link from "next/link";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1f1410] text-gray-300 py-10 border-t border-[#D89F43]/30">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Logo and Description */}
        <div>
          <h2 className="text-2xl font-bold text-[#EFE37A] mb-3">
            Umaima Medical Center
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Enhancing your natural beauty with advanced aesthetic treatments
            and personalized care in a luxurious environment.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-[#D89F43] mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className="hover:text-[#EFE37A] transition duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-[#EFE37A] transition duration-200"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-[#EFE37A] transition duration-200"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/#contact"
                className="hover:text-[#EFE37A] transition duration-200"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-[#D89F43] mb-3">
            Contact Us
          </h3>
          <p className="text-sm">📍 Amman, Jordan</p>
          <a href="tel:+962797043538" className="text-sm">📞 +962 7 9704 3538</a>

                <div className="flex space-x-6 pt-10 rtl:space-x-reverse text-2xl">
            <a href="https://www.instagram.com/umaima_medical_center?igsh=bHlvY2N2dzF4cnV5" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/share/19neRGfzbA/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
              <FaFacebook />
            </a>
            <a href="https://wa.me/962797043538" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-sm text-gray-500 mt-8 border-t border-[#D89F43]/20 pt-4">
        © {new Date().getFullYear()} JHWebDev. All rights reserved.
      </div>
    </footer>
  );
}
