import React from 'react';
import { Layers, Code, Share2, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t border-gray-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-gray-800">
          
          {/* Brand Block (Col 1 & 2) */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg brand-gradient-bg flex items-center justify-center text-white">
                <Layers size={20} />
              </div>
              <span className="font-bold text-xl text-white tracking-tight">
                Dev <span className="brand-gradient-text">Stack</span>
              </span>
            </div>
            <p className="text-xs text-gray-400 max-w-sm leading-relaxed">
              Discover, curate, and optimize your developer toolkit. Easily choose the right tools for your web applications.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white transition-colors">
                <Code size={18} />
              </a>
              <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white transition-colors">
                <Share2 size={18} />
              </a>
              <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white transition-colors">
                <Globe size={18} />
              </a>
            </div>
          </div>

          {/* Link Group 1: Product */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Product</h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Technologies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Updates</a></li>
            </ul>
          </div>

          {/* Link Group 2: Company */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Company</h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Link Group 3: Legal */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Legal</h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Settings</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} DevStack Inc. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gray-400">Privacy</a>
            <a href="#" className="hover:text-gray-400">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;