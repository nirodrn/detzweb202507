import React from 'react';
import { Facebook, Mail, MapPin, Phone, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">DETZ Global Pvt Ltd</h3>
            <p className="text-gray-400">Bringing innovation and excellence across multiple domains.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-2">
              <a href="https://www.facebook.com/share/164F7VLjwL/?mibextid=wwXIfr" 
                 target="_blank"
                 rel="noopener noreferrer"
                 className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook size={20} />
                <span>Facebook</span>
              </a>
              <a href="https://www.linkedin.com/company/detz-global/"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a href="mailto:detz.org@outlook.com" 
                 className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors">
                <Mail size={20} />
                <span>info@detzglobal.com</span>
              </a>
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone size={20} />
                <span>HOT LINE +94713979029</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin size={20} />
                <span>141 Waragoda Rd, Peliyagoda, Colombo, Sri Lanka</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>DETZ Studios - Visual Storytelling</li>
              <li>DETZ Softwares - Innovative Solutions</li>
              <li>DETZ Electricals - Professional Services</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/privacy-policy" className="hover:text-blue-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-blue-400 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/refund-policy" className="hover:text-blue-400 transition-colors">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© 2025 DETZ Global Pvt Ltd. All rights reserved. | Since 2022</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;