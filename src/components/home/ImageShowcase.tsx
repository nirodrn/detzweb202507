import React from 'react';
import { motion } from 'framer-motion';

const images = [
  {
    url: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80",
    title: "Studios",
    category: "Visual Production"
  },
  {
    url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80",
    title: "Software",
    category: "Development"
  },
  {
    url: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80",
    title: "Electrical",
    category: "Services"
  }
];

const ImageShowcase = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="relative grid grid-cols-2 gap-4"
    >
      {images.map((image, index) => (
        <div
          key={index}
          className={`relative group rounded-xl overflow-hidden ${
            index === 2 ? "col-span-2" : ""
          }`}
        >
          <div
            className="relative aspect-[4/3] overflow-hidden"
          >
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div
              className="absolute bottom-0 left-0 right-0 p-4 text-white"
            >
              <h3 className="text-lg font-semibold">{image.title}</h3>
              <p className="text-sm text-white/80">{image.category}</p>
            </div>
          </div>
        </div>
      ))}

      {/* Simplified floating elements */}
      <div
        className="absolute -z-10 top-10 right-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"
      />
      <div
        className="absolute -z-10 bottom-10 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"
      />
    </motion.div>
  );
};

export default ImageShowcase;