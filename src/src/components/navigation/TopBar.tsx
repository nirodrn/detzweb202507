import React from 'react';
import { Facebook, Mail, MapPin, Phone, Linkedin } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="bg-gray-900 text-gray-300 py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-4">
            <a 
              href="mailto:detz.org@outlook.com"
              className="flex items-center space-x-1 text-sm hover:text-white transition-colors"
            >
              <Mail size={16} />
              <span>info@detzglobal.com</span>
            </a>
            <a 
              href="tel:+94713979029"
              className="flex items-center space-x-1 text-sm hover:text-white transition-colors"
            >
              <Phone size={16} />
              <span>+94713979029</span>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a 
              href="https://www.facebook.com/share/164F7VLjwL/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <Facebook size={18} />
            </a>
            <a 
              href="https://www.linkedin.com/company/detz-global/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <div className="flex items-center space-x-1 text-sm">
              <MapPin size={16} />
              <span>141 Waragoda Rd, Peliyagoda, Sri Lanka</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;