import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NavLinks from './NavLinks';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      y: -10,
    },
    open: {
      opacity: 1,
      y: 0,
    },
  };

  const containerVariants = {
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          className="md:hidden absolute left-0 right-0 top-full overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.95) 100%)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
          }}
        >
          {/* Stronger glass reflection effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-60" />
          
          <motion.div
            variants={containerVariants}
            className="relative px-2 pt-2 pb-3 space-y-1"
          >
            <motion.div variants={itemVariants}>
              <NavLinks isMobile onClose={onClose} />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;