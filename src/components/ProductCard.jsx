import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const ProductCard = ({ image, name, price, rating }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:shadow-xl transition-all duration-300"
    >
      <img src={image} alt={name} className="w-full h-48 object-contain p-4 bg-gray-100" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{name}</h3>
        <p className="text-primary-dark font-bold text-xl mb-2">Rp {price.toLocaleString('id-ID')}</p>
        <div className="flex items-center text-yellow-500 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`w-5 h-5 ${i < rating ? 'fill-current' : 'text-gray-300'}`} />
          ))}
          <span className="text-gray-600 ml-2 text-sm">({rating}/5)</span>
        </div>
        <button className="w-full bg-accent hover:bg-accent-dark text-white py-2 rounded-md transition-colors duration-300">
          Lihat Detail
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;