import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { IoLogoYoutube } from 'react-icons/io5';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-screen-xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Navigation Links */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/job" className="hover:underline">Job</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
          <Link to="/about" className="hover:underline">About</Link>
        </div>
        
        {/* Brand & Social */}
        <div className="text-center">
          <h1 className="text-2xl font-bold">JOBLANE</h1>
          <p className="mt-2 text-gray-400">Giving best opportunities to best peoples.</p>
          <div className="flex justify-center gap-4 mt-4">
            <FaFacebook size={22} className="hover:text-purple-500 transition" />
            <RiInstagramFill size={22} className="hover:text-purple-500 transition" />
            <FaTwitter size={22} className="hover:text-purple-500 transition" />
            <IoLogoYoutube size={22} className="hover:text-purple-500 transition" />
          </div>
        </div>
        
        {/* Credits */}
        <div className="flex flex-col items-center md:items-end text-sm space-y-1">
          <p>Designed and Developed by Kamran Faiz</p>
          <p>© {new Date().getFullYear()} JOBLANE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
