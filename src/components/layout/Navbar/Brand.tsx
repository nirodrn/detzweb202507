import React from 'react';
import { Link } from 'react-router-dom';

const Brand = () => {
  return (
    <Link to="/" className="flex items-center">
      <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
        DETZ
      </span>
    </Link>
  );
};

export default Brand;