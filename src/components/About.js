import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import myImage from '../image/uiux.png';

const About = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -100]);
  const bgY = useTransform(scrollY, [0, 1500], [0, -200]);
  
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <section ref={ref} className="relative py-20 px-6 overflow-hidden bg-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/30 via-black to-gray-900/30 z-10"></div>
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)`
        }}></div>
      </div>
      <div className="relative z-20 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            style={{ y }}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I'm a passionate UI/UX designer with 1+ years of experience creating 
              intuitive and visually stunning digital experiences. I believe in the 
              power of minimalism and user-centered design.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My approach combines creative vision with analytical thinking, ensuring 
              every design decision serves both aesthetic and functional purposes.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="w-full h-96 rounded-2xl shadow-custom overflow-hidden">
              <img 
                src={myImage} 
                alt="Profile Picture" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;