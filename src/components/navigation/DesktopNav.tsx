import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Film, Zap, Briefcase } from 'lucide-react';
import NavLink from './NavLink';

const DesktopNav = () => {
  return (
    <div className="hidden md:flex items-center space-x-6">
      <NavLink to="/studios" icon={Film} label="Studios" />
      <NavLink to="/software" icon={Code} label="Softwares" />
      <NavLink to="/electrical" icon={Zap} label="Electrical" />
      {/* <NavLink to="/gallery" icon={Image} label="Gallery" /> */} 
      <NavLink to="/careers" icon={Briefcase} label="Careers" />
      <Link 
        to="/contact" 
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
      >
        Contact us
      </Link>
    </div>
  );
};

export default DesktopNav;