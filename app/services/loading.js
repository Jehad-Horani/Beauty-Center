"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function LoadingPage() {
  return (
    <div className="fixed inset-0 bg-gradient-to-b from-[#2e1c11] to-[#0c0907] flex flex-col items-center justify-center z-50">
      {/* Logo Animation */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className=" rounded-full  flex items-center justify-center "
      >
            <Image
                  src="/white-logo.png"
                  alt=" Logo"
                  width={200}
                  height={200}
                  className="object-contain"
                  data-aos="zoom-in"
                />
      </motion.div>

      {/* Loading Text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="mt-6 text-2xl text-gray-300 tracking-wide"
      >
        Loading...
      </motion.p>
    </div>
  );
}
