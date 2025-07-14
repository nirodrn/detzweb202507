import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface NavLinkProps {
  to: string;
  icon: LucideIcon;
  label: string;
  mobile?: boolean;
  onClick?: () => void;
}

const NavLink = ({ to, icon: Icon, label, mobile, onClick }: NavLinkProps) => {
  if (mobile) {
    return (
      <Link
        to={to}
        className="flex items-center space-x-2 px-3 py-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-600"
        onClick={onClick}
      >
        <Icon size={20} />
        <span>{label}</span>
      </Link>
    );
  }

  return (
    <Link 
      to={to} 
      className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
    >
      <Icon size={20} />
      <span>{label}</span>
    </Link>
  );
};

export default NavLink;