import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Film, Zap,  Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import NavLink from './NavLink';

interface MobileNavProps {
  onClose: () => void;
}

const MobileNav = ({ onClose }: MobileNavProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="md:hidden bg-white"
    >
      <div className="px-2 pt-2 pb-3 space-y-1">
        <NavLink to="/studios" icon={Film} label="Studios" mobile onClick={onClose} />
        <NavLink to="/software" icon={Code} label="Software" mobile onClick={onClose} />
        <NavLink to="/electrical" icon={Zap} label="Electrical" mobile onClick={onClose} />
        {/*<NavLink to="/gallery" icon={Image} label="Gallery" mobile onClick={onClose} />*/ }
        <NavLink to="/careers" icon={Briefcase} label="Careers" mobile onClick={onClose} />
        <Link
          to="/contact"
          className="block px-3 py-2 rounded-md text-center bg-blue-600 text-white hover:bg-blue-700"
          onClick={onClose}
        >
          Contact Us
        </Link>
      </div>
    </motion.div>
  );
};

export default MobileNav;