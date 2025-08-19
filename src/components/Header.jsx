import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Beranda', path: '/' },
    { name: 'Tentang Kami', path: '/about' },
    { name: 'Layanan', path: '/services' },
    { name: 'Galeri', path: '/gallery' },
    { name: 'Kontak', path: '/contact' },
  ];

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
      className="bg-primary-dark text-white p-4 shadow-lg sticky top-0 z-50"
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white hover:text-accent transition-colors duration-300">
          Toko Onderdil Motor
        </Link>

        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                clsx(
                  "text-white hover:text-accent transition-colors duration-300",
                  isActive && "font-bold text-accent"
                )
              }
            >
              {link.name}
            </NavLink>
          ))}
          <button className="flex items-center text-white hover:text-accent transition-colors duration-300">
            <ShoppingCart className="w-5 h-5 mr-1" /> Keranjang
          </button>
        </nav>

        <div className="md:hidden flex items-center">
          <button className="mr-4 text-white hover:text-accent">
            <ShoppingCart className="w-6 h-6" />
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-accent">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.nav
          initial="hidden"
          animate="visible"
          variants={menuVariants}
          className="md:hidden bg-primary-dark mt-2 pb-4 border-t border-primary-dark/50"
        >
          {navLinks.map((link) => (
            <motion.div key={link.name} variants={itemVariants}>
              <NavLink
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  clsx(
                    "block px-4 py-2 text-white hover:bg-primary-dark/70 hover:text-accent transition-colors duration-300",
                    isActive && "font-bold text-accent bg-primary-dark/70"
                  )
                }
              >
                {link.name}
              </NavLink>
            </motion.div>
          ))}
          <motion.div variants={itemVariants}>
            <button className="flex items-center px-4 py-2 text-white hover:bg-primary-dark/70 hover:text-accent transition-colors duration-300 w-full text-left">
              <ShoppingCart className="w-5 h-5 mr-2" /> Keranjang
            </button>
          </motion.div>
        </motion.nav>
      )}
    </motion.header>
  );
};

export default Header;