import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';

const CallToAction = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="bg-secondary-dark text-white py-16 px-4 text-center rounded-lg shadow-xl my-12"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Butuh Bantuan atau Konsultasi?
        </h2>
        <p className="text-lg md:text-xl mb-8 opacity-90">
          Tim ahli kami siap membantu Anda menemukan onderdil yang tepat untuk motor kesayangan Anda.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center bg-accent hover:bg-accent-dark text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          <Phone className="mr-2 w-5 h-5" /> Hubungi Kami Sekarang!
        </Link>
      </div>
    </motion.section>
  );
};

export default CallToAction;