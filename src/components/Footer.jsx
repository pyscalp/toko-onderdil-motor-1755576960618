import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="bg-secondary-dark text-white p-8 mt-12"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4 text-accent">Toko Onderdil Motor</h3>
          <p className="text-sm">
            Solusi terlengkap untuk kebutuhan onderdil motor Anda. Kualitas terjamin, harga bersaing, pelayanan prima.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4 text-accent">Navigasi</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-primary transition-colors duration-300">Beranda</Link></li>
            <li><Link to="/about" className="hover:text-primary transition-colors duration-300">Tentang Kami</Link></li>
            <li><Link to="/services" className="hover:text-primary transition-colors duration-300">Layanan</Link></li>
            <li><Link to="/gallery" className="hover:text-primary transition-colors duration-300">Galeri</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors duration-300">Kontak</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4 text-accent">Hubungi Kami</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center">
              <Mail className="w-5 h-5 mr-2 text-primary" />
              <span>info@onderdilmotor.com</span>
            </li>
            <li className="flex items-center">
              <Phone className="w-5 h-5 mr-2 text-primary" />
              <span>+62 812-3456-7890</span>
            </li>
            <li className="flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-primary" />
              <span>Jl. Raya Motor No. 123, Jakarta</span>
            </li>
            <li className="flex items-center">
              <Globe className="w-5 h-5 mr-2 text-primary" />
              <span>www.onderdilmotor.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-secondary-dark/50 mt-8 pt-4 text-center text-sm">
        &copy; {new Date().getFullYear()} Toko Onderdil Motor. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;