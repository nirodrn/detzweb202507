import React from 'react';
import { Link } from 'react-router-dom';

interface NavLinksProps {
  isMobile?: boolean;
  onClose?: () => void;
}

const NavLinks = ({ isMobile, onClose }: NavLinksProps) => {
  const navItems = [
    { path: '/studios', label: 'Studios' },
    { path: '/software', label: 'Software' },
    { path: '/electrical', label: 'Electrical' },
    { path: '/about', label: 'About' },
    { path: '/careers', label: 'Careers' },
  ];

  const linkClass = isMobile
    ? "block px-3 py-2 rounded-md text-gray-800 hover:bg-blue-50 hover:text-blue-600 font-medium"
    : "text-gray-800 hover:text-blue-600 transition-colors font-medium";

  const handleContactClick = () => {
    window.open('https://wa.me/94713979029', '_blank');
    if (onClose) onClose();
  };

  const handleInternPortalClick = () => {
    window.open('https://intern.detzglobal.com', '_blank');
    if (onClose) onClose();
  };

  return (
    <>
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={linkClass}
          onClick={onClose}
        >
          {item.label}
        </Link>
      ))}
      <button
        className={
          isMobile
            ? "block px-3 py-2 rounded-md text-gray-800 hover:bg-purple-50 hover:text-purple-600 font-medium"
            : "text-gray-800 hover:text-purple-600 transition-colors font-medium"
        }
        onClick={handleInternPortalClick}
      >
        Intern Portal
      </button>
      <button
        className={
          isMobile
            ? "block px-3 py-2 rounded-md text-center bg-blue-600 text-white hover:bg-blue-700 font-medium"
            : "bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors font-medium"
        }
        onClick={handleContactClick}
      >
        Contact Us
      </button>
    </>
  );
};

export default NavLinks;