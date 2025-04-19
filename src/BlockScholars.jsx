import React from "react";
import { motion } from "framer-motion";

export default function BlockScholars() {
  return (
    <div className="bg-gradient-to-br from-white via-gray-50 to-white text-gray-800 font-sans">
      <header className="flex items-center justify-between px-6 py-4 shadow-md bg-white sticky top-0 z-50">
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Block Scholars Logo" className="w-10" />
          <span className="font-bold text-lg">Block Scholars</span>
        </div>
        <nav className="space-x-6 text-sm text-gray-700">
          <a href="#home" className="hover:text-black transition">Home</a>
          <a href="#about" className="hover:text-black transition">About</a>
          <a href="#join" className="hover:text-black transition">Join Us</a>
        </nav>
      </header>

      <section id="home" className="relative min-h-[80vh] flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-indigo-200 to-indigo-400 text-white overflow-hidden">
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
          Block Scholars
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-xl md:text-2xl max-w-2xl mb-8 text-white/80">
          Join the first-ever high school blockchain community. Learn, connect, and shape the future of decentralized tech.
        </motion.p>
        <motion.a whileHover={{ scale: 1.05 }} href="#about" className="px-6 py-3 bg-white text-indigo-700 font-semibold rounded-full transition shadow-md">
          Learn more →
        </motion.a>
      </section>
    </div>
  );
}