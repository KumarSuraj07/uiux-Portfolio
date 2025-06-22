import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Heart, Target } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/KumarSuraj07', label: 'GitHub'},
    { icon: Linkedin, href: 'https://www.linkedin.com/in/suraj07kumar/', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/_krsuraj', label: 'Twitter' },
    { icon: Mail, href: 'mailto:ksurajk2001@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="bg-primary text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 md:mb-0"
          >
            <h3 className="text-2xl font-bold font-poppins mb-2">Suraj</h3>
            <p className="text-gray-400">UI/UX Designer</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex space-x-6 mb-8 md:mb-0"
          >
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <Icon size={24} />
                </motion.a>
              );
            })}
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-800 pt-8 mt-8 text-center"
        >
          <p className="text-gray-400 flex items-center justify-center space-x-2">
            <span>© 2024 Suraj. Made with</span>
            <Heart className="text-red-500" size={16} />
            <span>and React</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;