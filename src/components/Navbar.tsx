import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { navLinks, navIcons } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Update navbar background
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionId = section.getAttribute('id') || '';
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.a 
          href="#home"
          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Portfolio
        </motion.a>

        {/* Desktop Navigation */}
        <motion.ul 
          className="hidden md:flex space-x-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {navLinks.map((link, index) => {
            const isActive = activeSection === link.name.toLowerCase();
            const Icon = navIcons[link.name as keyof typeof navIcons];
            
            return (
              <li key={index}>
                <a 
                  href={link.url}
                  className={`relative flex items-center gap-1 px-1 py-2 transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${isActive ? 'text-blue-600 dark:text-blue-400' : 'text-gray-800 dark:text-gray-200'}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector(link.url);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {Icon && <Icon className="w-4 h-4" />}
                  <span>{link.name}</span>
                  {isActive && (
                    <motion.span
                      className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500"
                      layoutId="navbar-indicator"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </motion.ul>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-800 dark:text-gray-200 hover:text-blue-600 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div 
            className="absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col p-4">
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.name.toLowerCase();
                const Icon = navIcons[link.name as keyof typeof navIcons];
                
                return (
                  <li key={index}>
                    <a 
                      href={link.url}
                      className={`flex items-center gap-2 px-4 py-3 ${isActive ? 'text-blue-600 dark:text-blue-400' : 'text-gray-800 dark:text-gray-200'}`}
                      onClick={(e) => {
                        e.preventDefault();
                        const element = document.querySelector(link.url);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                          setIsOpen(false);
                        }
                      }}
                    >
                      {Icon && <Icon className="w-5 h-5" />}
                      <span>{link.name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;