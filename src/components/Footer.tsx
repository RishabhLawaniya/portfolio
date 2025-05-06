import React from 'react';
import { motion } from 'framer-motion';
import { ChevronUp, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { navLinks, socialLinks } from '../constants';

const Footer: React.FC = () => {
  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'Github':
        return <Github size={18} />;
      case 'Linkedin':
        return <Linkedin size={18} />;
      case 'Twitter':
        return <Twitter size={18} />;
      case 'Mail':
        return <Mail size={18} />;
      default:
        return <Mail size={18} />;
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 relative">
      {/* Back to top */}
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-lg"
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronUp size={24} />
        </motion.button>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12">
          {/* Logo and info */}
          <div>
            <a 
              href="#home" 
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-4 inline-block"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Portfolio
            </a>
            <p className="text-gray-400 mt-4 mb-6 max-w-md">
              A professional showcase of my work, skills, and achievements. Let's create something amazing together!
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-blue-400 hover:bg-blue-600 hover:text-white transition-colors"
                  aria-label={link.name}
                >
                  {getSocialIcon(link.icon)}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative inline-block">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-blue-600"></div>
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.url}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.url)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative inline-block">
              Contact Info
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-blue-600"></div>
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="bg-blue-600/20 rounded-full p-2 text-blue-400 mt-1">
                  <Mail size={16} />
                </span>
                <span className="text-gray-400">rishabhlawaniya24@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-blue-600/20 rounded-full p-2 text-blue-400 mt-1">
                  <Twitter size={16} />
                </span>
                <span className="text-gray-400">@Rishu_lawaniya</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-blue-600/20 rounded-full p-2 text-blue-400 mt-1">
                  <Linkedin size={16} />
                </span>
                <span className="text-gray-400">linkedin.com/in/rishabh-lawaniya/</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 py-6 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Rishabh's Portfolio. All rights reserved. Designed with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;