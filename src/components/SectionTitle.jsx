import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-12"
    >
      <h2 className="text-4xl font-bold text-primary-dark mb-3">{title}</h2>
      <p className="text-lg text-gray-600">{subtitle}</p>
    </motion.div>
  );
};

export default SectionTitle;