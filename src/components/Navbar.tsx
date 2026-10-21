import React, { useState } from 'react';
import { Menu, X, Layers } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Desktop Navbar */}
        <div className="hidden md:flex items-center justify-between h-16">
          {/* Left: Brand */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg brand-gradient-bg flex items-center justify-center text-white">
              <Layers size={20} />
            </div>
            <span className="font-bold text-xl tracking-tight text-gray-900">
              Dev <span className="brand-gradient-text">Stack</span>
            </span>
          </div>

          {/* Center: Nav Links */}
          <div className="flex items-center space-x-8 text-sm font-medium text-gray-600">
            <a href="#home" className="hover:text-gray-900 transition-colors">Home</a>
            <a href="#technologies" className="hover:text-gray-900 transition-colors">Technologies</a>
            <a href="#projects" className="hover:text-gray-900 transition-colors">Projects</a>
            <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
            <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
          </div>

          {/* Right: Auth Buttons */}
          <div className="flex items-center space-x-4">
            <button className="text-sm font-medium text-gray-700 hover:text-gray-900 px-3 py-2">
              Sign In
            </button>
            <button className="text-sm font-medium text-white brand-gradient-bg px-5 py-2 rounded-full hover:opacity-90 transition-opacity shadow-sm">
              Sign Up
            </button>
          </div>
        </div>

        {/* Mobile Navbar (3 parts as required) */}
        <div className="flex md:hidden items-center justify-between h-16">
          {/* Left: Hamburger Icon */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Center: Brand Logo */}
          <div className="flex items-center gap-1.5">
            <div className="w-7 h-7 rounded-lg brand-gradient-bg flex items-center justify-center text-white">
              <Layers size={18} />
            </div>
            <span className="font-bold text-lg text-gray-900">
              Dev <span className="brand-gradient-text">Stack</span>
            </span>
          </div>

          {/* Right: Auth Buttons */}
          <div className="flex items-center gap-2">
            <button className="text-xs font-medium text-gray-700 px-2 py-1">
              Sign In
            </button>
            <button className="text-xs font-medium text-white brand-gradient-bg px-3 py-1.5 rounded-full">
              Sign Up
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 space-y-2">
            <a href="#home" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md">Home</a>
            <a href="#technologies" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md">Technologies</a>
            <a href="#projects" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md">Projects</a>
            <a href="#about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md">About</a>
            <a href="#contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md">Contact</a>
          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;