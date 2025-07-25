"use client";

import { motion } from "framer-motion";

export default function LoadingPage() {
  return (
    <div className="fixed inset-0 bg-gradient-to-b from-[#2e1c11] to-[#0c0907] flex flex-col items-center justify-center z-50">
      {/* Logo Animation */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className="w-20 h-20 rounded-full bg-[#D89F43] flex items-center justify-center shadow-lg"
      >
        <span className="text-3xl font-bold text-[#1f1410]">UMC</span>
      </motion.div>

      {/* Loading Text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="mt-6 text-xl text-gray-300 tracking-wide"
      >
        Loading...
      </motion.p>
    </div>
  );
}
