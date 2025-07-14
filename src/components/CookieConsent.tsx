import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import GlassCard from './GlassCard';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4"
        >
          <div className="max-w-7xl mx-auto p-6 bg-white/95 backdrop-blur-xl border border-white/30 rounded-2xl shadow-2xl">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex-1">
                <p className="text-gray-800 font-medium">
                  We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.{' '}
                  <a href="/privacy-policy" className="text-blue-700 hover:text-blue-800 hover:underline font-semibold">
                    Learn more
                  </a>
                </p>
              </div>
              <div className="flex items-center gap-4">
                <motion.button
                  onClick={acceptCookies}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold shadow-lg"
                >
                  Accept
                </motion.button>
                <motion.button
                  onClick={() => setIsVisible(false)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-600 hover:text-gray-800 p-2 rounded-lg hover:bg-gray-100 transition-all duration-200"
                >
                  <X size={20} />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;