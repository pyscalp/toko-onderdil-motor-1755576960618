import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto py-12 px-4"
    >
      <SectionTitle
        title="Hubungi Kami"
        subtitle="Kami siap membantu Anda. Jangan ragu untuk menghubungi kami."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="bg-white p-8 rounded-lg shadow-md"
        >
          <h3 className="text-2xl font-semibold text-primary-dark mb-6">Kirim Pesan kepada Kami</h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Nama Lengkap</label>
              <input
                type="text"
                id="name"
                name="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-primary"
                placeholder="Nama Anda"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-primary"
                placeholder="email@contoh.com"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-gray-700 text-sm font-bold mb-2">Subjek</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-primary"
                placeholder="Subjek Pesan"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Pesan Anda</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-primary"
                placeholder="Tulis pesan Anda di sini..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-accent hover:bg-accent-dark text-white font-bold py-2 px-6 rounded-md transition-colors duration-300"
            >
              Kirim Pesan
            </button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-white p-8 rounded-lg shadow-md"
        >
          <h3 className="text-2xl font-semibold text-primary-dark mb-6">Informasi Kontak</h3>
          <ul className="space-y-6 text-gray-700">
            <li className="flex items-start">
              <MapPin className="w-7 h-7 text-secondary mr-4 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-lg">Alamat Kami</h4>
                <p>Jl. Raya Motor No. 123, Kel. Suku Cadang, Kec. Mesin, Jakarta, 12345</p>
              </div>
            </li>
            <li className="flex items-start">
              <Phone className="w-7 h-7 text-secondary mr-4 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-lg">Telepon</h4>
                <p>+62 812-3456-7890</p>
                <p>+62 21-7654321</p>
              </div>
            </li>
            <li className="flex items-start">
              <Mail className="w-7 h-7 text-secondary mr-4 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-lg">Email</h4>
                <p>info@onderdilmotor.com</p>
                <p>support@onderdilmotor.com</p>
              </div>
            </li>
            <li className="flex items-start">
              <Clock className="w-7 h-7 text-secondary mr-4 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-lg">Jam Operasional</h4>
                <p>Senin - Jumat: 09:00 - 17:00 WIB</p>
                <p>Sabtu: 09:00 - 14:00 WIB</p>
                <p>Minggu: Tutup</p>
              </div>
            </li>
          </ul>
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-primary-dark mb-4">Lokasi Kami</h3>
            <div className="aspect-w-16 aspect-h-9">
              <img
                src="/images/contact_us.svg"
                alt="Lokasi Kami"
                className="w-full h-auto rounded-lg shadow-md"
              />
              <p className="text-sm text-gray-500 mt-2">
                (Placeholder Peta - Gambar SVG untuk representasi)
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactPage;