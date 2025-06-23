import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Github } from 'lucide-react';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, -300]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -150]);
  const scale = useTransform(scrollY, [0, 1000], [1, 1.2]);


  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Background video with parallax */}
      <motion.div 
        style={{ y: y1, scale }}
        className="absolute inset-0 w-full h-full"
      >
        <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-50"
        >
          <source src="https://videos.pexels.com/video-files/9867271/9867271-uhd_2560_1440_24fps.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold font-poppins mb-6"
        >
          Hi, I'm <span className="text-gradient">Suraj</span>
        </motion.h1>
        
        <motion.p
          style={{ y: y2 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 font-light"
        >
          A UI/UX Designer crafting digital experiences with precision and creativity
        </motion.p>
        
        <div className="flex justify-center">
          <motion.a
            href="https://github.com/KumarSuraj07"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-900/80 backdrop-blur-sm border border-gray-600/70 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800/80 hover:border-gray-500/70 transition-all duration-300 shadow-lg flex items-center gap-2"
          >
            <Github size={18} />
            <span>Dev Side of Me</span>
          </motion.a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-gray-400"
        >
          <span className="text-sm mb-2">Scroll</span>
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;