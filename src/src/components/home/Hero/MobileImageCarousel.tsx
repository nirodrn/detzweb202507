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

const MobileImageCarousel = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
      className="pb-8 px-4"
    >
      <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar">
        {images.map((image, index) => (
          <div
            key={index}
            className="flex-none w-[85%] snap-center px-2"
          >
            <div className="relative rounded-xl overflow-hidden">
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white text-lg font-semibold">{image.title}</h3>
                  <p className="text-white/80 text-sm">{image.category}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default MobileImageCarousel;