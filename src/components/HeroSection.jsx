import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary to-secondary text-white py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left mb-10 md:mb-0"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            Solusi <span className="text-accent">Onderdil Motor</span> Terlengkap Anda
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Temukan berbagai macam sparepart motor berkualitas tinggi untuk performa maksimal kendaraan Anda.
          </p>
          <Link
            to="/gallery"
            className="inline-flex items-center bg-accent hover:bg-accent-dark text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Jelajahi Produk Kami <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2 flex justify-center"
        >
          <img
            src="/images/gear.svg"
            alt="Motorcycle Parts"
            className="w-64 h-64 md:w-96 md:h-96 animate-pulse-slow"
          />
        </motion.div>
      </div>
      {/* Background shapes for visual interest */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <motion.div
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/10 rounded-full"
        ></motion.div>
        <motion.div
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: 1, rotate: -360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 1 }}
          className="absolute -top-20 -left-20 w-48 h-48 bg-white/10 rounded-full"
        ></motion.div>
      </div>
    </section>
  );
};

export default HeroSection;