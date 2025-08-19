import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { Package, Truck, CreditCard, Clock } from 'lucide-react';

const services = [
  {
    icon: Package,
    title: 'Penyediaan Onderdil Asli',
    description: 'Kami menyediakan berbagai onderdil asli (OEM) dan aftermarket berkualitas tinggi untuk berbagai merek dan jenis motor. Pastikan motor Anda mendapatkan yang terbaik.',
    image: '/images/engine.svg'
  },
  {
    icon: Truck,
    title: 'Pengiriman Cepat & Aman',
    description: 'Layanan pengiriman kami menjamin onderdil sampai ke tangan Anda dengan cepat dan aman, di mana pun Anda berada di seluruh Indonesia.',
    image: '/images/suspension.svg'
  },
  {
    icon: CreditCard,
    title: 'Metode Pembayaran Fleksibel',
    description: 'Nikmati kemudahan bertransaksi dengan berbagai pilihan metode pembayaran, mulai dari transfer bank, e-wallet, hingga kartu kredit.',
    image: '/images/battery.svg'
  },
  {
    icon: Clock,
    title: 'Konsultasi Ahli',
    description: 'Tim ahli kami siap memberikan konsultasi gratis untuk membantu Anda memilih onderdil yang paling sesuai dengan kebutuhan dan anggaran Anda.',
    image: '/images/service_repair.svg'
  },
];

const ServicesPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto py-12 px-4"
    >
      <SectionTitle
        title="Layanan Unggulan Kami"
        subtitle="Kami hadir untuk memenuhi kebutuhan onderdil motor Anda dengan layanan terbaik."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
              <img src={service.image} alt={service.title} className="w-32 h-32 object-contain" />
            </div>
            <div className="md:w-2/3 text-center md:text-left">
              <service.icon className="w-12 h-12 text-primary-dark mx-auto md:mx-0 mb-3" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ServicesPage;