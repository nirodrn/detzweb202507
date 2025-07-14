import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface MegaMenuItem {
  label: string;
  icon: LucideIcon;
  description: string;
}

interface MegaMenuProps {
  items: MegaMenuItem[];
  isOpen: boolean;
  onClose: () => void;
}

const MegaMenu = ({ items, isOpen, onClose }: MegaMenuProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -10 }}
      transition={{ duration: 0.2 }}
      className={`absolute left-0 w-full bg-white shadow-xl rounded-b-lg ${
        isOpen ? 'block' : 'hidden'
      }`}
      onMouseLeave={onClose}
    >
      <div className="max-w-7xl mx-auto p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link
                to="#"
                className="block p-4 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <div className="flex items-center space-x-3 mb-2">
                  <Icon className="w-6 h-6 text-blue-600 group-hover:text-blue-700" />
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-700">
                    {item.label}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 group-hover:text-gray-700">
                  {item.description}
                </p>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default MegaMenu;