import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);

  return (
    <nav className="bg-black text-white w-full">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <h1 className="text-3xl font-bold">JOBLANE</h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/job">Jobs</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>

        {/* Auth Buttons */}
        <div className="hidden md:flex space-x-2">
          <button className="bg-purple-600 py-1 px-3 rounded-md">Login</button>
          <button className="bg-purple-600 py-1 px-3 rounded-md">Register</button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {open ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {open && (
        <div className="md:hidden bg-black px-4 pb-4 space-y-2">
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/job" onClick={toggleMenu}>Jobs</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
          <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
          <div className="flex flex-col space-y-2 mt-2">
            <button className="bg-purple-600 py-1 px-3 rounded-md" onClick={toggleMenu}>Login</button>
            <button className="bg-purple-600 py-1 px-3 rounded-md" onClick={toggleMenu}>Register</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
