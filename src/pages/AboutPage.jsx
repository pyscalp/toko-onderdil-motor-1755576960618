import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { Users, Check, Building } from 'lucide-react';

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto py-12 px-4"
    >
      <SectionTitle
        title="Tentang Toko Onderdil Motor"
        subtitle="Dedikasi kami untuk kualitas dan kepuasan pelanggan."
      />

      <div className="flex flex-col md:flex-row items-center gap-12 mb-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="md:w-1/2"
        >
          <img
            src="/images/about_us.svg"
            alt="Tentang Kami"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="md:w-1/2 text-gray-700"
        >
          <h3 className="text-3xl font-semibold text-primary-dark mb-4">Sejarah dan Visi Kami</h3>
          <p className="mb-4 leading-relaxed">
            Didirikan pada tahun 2010, Toko Onderdil Motor telah berkembang menjadi salah satu penyedia onderdil motor terkemuka di wilayah ini. Berawal dari semangat untuk mendukung para pengendara motor dengan suku cadang berkualitas, kami terus berinovasi dan memperluas jangkauan produk kami.
          </p>
          <p className="mb-4 leading-relaxed">
            Visi kami adalah menjadi mitra terpercaya bagi setiap pemilik motor, memastikan kendaraan mereka selalu dalam kondisi prima dengan onderdil terbaik. Kami percaya bahwa kualitas adalah kunci performa dan keamanan.
          </p>
        </motion.div>
      </div>

      <SectionTitle
        title="Mengapa Memilih Kami?"
        subtitle="Keunggulan yang membuat kami berbeda."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
        >
          <Users className="w-16 h-16 text-primary mx-auto mb-4" />
          <h4 className="text-xl font-semibold text-gray-800 mb-2">Tim Berpengalaman</h4>
          <p className="text-gray-600">Didukung oleh tim ahli yang siap memberikan saran terbaik.</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
        >
          <Check className="w-16 h-16 text-secondary mx-auto mb-4" />
          <h4 className="text-xl font-semibold text-gray-800 mb-2">Kualitas Terjamin</h4>
          <p className="text-gray-600">Semua produk kami melewati kontrol kualitas yang ketat.</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
        >
          <Building className="w-16 h-16 text-accent mx-auto mb-4" />
          <h4 className="text-xl font-semibold text-gray-800 mb-2">Pilihan Lengkap</h4>
          <p className="text-gray-600">Ragam onderdil untuk berbagai jenis dan merek motor.</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutPage;