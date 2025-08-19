import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import ProductCard from '../components/ProductCard';
import CallToAction from '../components/CallToAction';
import SectionTitle from '../components/SectionTitle';

const featuredProducts = [
  { id: 1, name: 'Ban Tubeless Premium', price: 350000, rating: 5, image: '/images/tire.svg' },
  { id: 2, name: 'Busi Iridium Racing', price: 75000, rating: 4, image: '/images/sparkplug.svg' },
  { id: 3, name: 'Oli Mesin Sintetik', price: 120000, rating: 5, image: '/images/oil.svg' },
  { id: 4, name: 'Kampas Rem Depan', price: 90000, rating: 4, image: '/images/brake.svg' },
];

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />

      <main className="container mx-auto py-12 px-4">
        <SectionTitle
          title="Produk Unggulan Kami"
          subtitle="Pilihan terbaik onderdil motor dengan kualitas dan performa terdepan."
        />

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {featuredProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <ProductCard {...product} />
            </motion.div>
          ))}
        </motion.div>

        <CallToAction />
      </main>
    </motion.div>
  );
};

export default HomePage;