import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';

const galleryItems = [
  { id: 1, name: 'Ban Motor Sport', image: '/images/tire.svg' },
  { id: 2, name: 'Knalpot Racing', image: '/images/exhaust.svg' },
  { id: 3, name: 'Helm Full Face', image: '/images/helmet.svg' },
  { id: 4, name: 'Mesin Motor Lengkap', image: '/images/engine.svg' },
  { id: 5, name: 'Busi Motor', image: '/images/sparkplug.svg' },
  { id: 6, name: 'Oli Mesin', image: '/images/oil.svg' },
  { id: 7, name: 'Kampas Rem', image: '/images/brake.svg' },
  { id: 8, name: 'Shockbreaker', image: '/images/suspension.svg' },
  { id: 9, name: 'Aki Motor', image: '/images/battery.svg' },
  { id: 10, name: 'Gear Set', image: '/images/gear.svg' },
];

const GalleryPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto py-12 px-4"
    >
      <SectionTitle
        title="Galeri Produk Kami"
        subtitle="Jelajahi koleksi lengkap onderdil motor berkualitas tinggi yang kami tawarkan."
      />

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.07 } },
        }}
      >
        {galleryItems.map((item) => (
          <motion.div
            key={item.id}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-contain p-4 bg-gray-100"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default GalleryPage;