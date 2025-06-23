import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Palette, Smartphone, Monitor, Zap, Users, Code } from 'lucide-react';

const Skills = () => {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 2500], [0, -250]);
  
  // Smooth parallax transforms like hero section
  const y1 = useTransform(scrollY, [2200, 3500], [0, -30]);
  const y2 = useTransform(scrollY, [2200, 3500], [0, -15]);
  
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  const skills = [
    { icon: Palette, name: "UI Design", description: "Visual design & branding" },
    { icon: Smartphone, name: "Mobile UX", description: "iOS & Android apps" },
    { icon: Monitor, name: "Web Design", description: "Responsive interfaces" },
    { icon: Zap, name: "Prototyping", description: "Interactive mockups" },
    { icon: Users, name: "User Research", description: "Testing & validation" },
    { icon: Code, name: "Frontend", description: "HTML, CSS, React" }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Tools and expertise I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Tree Structure */}
        <div className="flex flex-col items-center max-w-4xl mx-auto">
          {/* Root/Trunk */}
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            animate={inView ? { opacity: 1, scaleY: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-2 h-20 bg-gradient-to-t from-amber-600 to-amber-800 rounded-full mb-8 origin-bottom"
          />
          
          {/* Main Skills Node */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative mb-12"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl border-4 border-white/20">
              <span className="text-2xl font-bold text-white">Skills</span>
            </div>
          </motion.div>
          
          {/* Branch Lines */}
          <div className="relative w-full">
            {/* Mobile Layout */}
            <div className="block lg:hidden">
              <svg className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8" width="300" height="100">
                <motion.path
                  d="M150,0 Q100,30 75,60"
                  stroke="rgba(59, 130, 246, 0.4)"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={inView ? { pathLength: 1 } : {}}
                  transition={{ duration: 1, delay: 0.8 }}
                />
                <motion.path
                  d="M150,0 Q200,30 225,60"
                  stroke="rgba(59, 130, 246, 0.4)"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={inView ? { pathLength: 1 } : {}}
                  transition={{ duration: 1, delay: 0.9 }}
                />
                <motion.path
                  d="M150,0 Q100,50 75,100"
                  stroke="rgba(147, 51, 234, 0.4)"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={inView ? { pathLength: 1 } : {}}
                  transition={{ duration: 1, delay: 1.0 }}
                />
                <motion.path
                  d="M150,0 Q200,50 225,100"
                  stroke="rgba(147, 51, 234, 0.4)"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={inView ? { pathLength: 1 } : {}}
                  transition={{ duration: 1, delay: 1.1 }}
                />
                <motion.path
                  d="M150,0 Q120,80 100,140"
                  stroke="rgba(168, 85, 247, 0.4)"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={inView ? { pathLength: 1 } : {}}
                  transition={{ duration: 1, delay: 1.2 }}
                />
                <motion.path
                  d="M150,0 Q180,80 200,140"
                  stroke="rgba(168, 85, 247, 0.4)"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={inView ? { pathLength: 1 } : {}}
                  transition={{ duration: 1, delay: 1.3 }}
                />
              </svg>
            </div>
            
            {/* Desktop Layout */}
            <div className="hidden lg:block">
              <svg className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8" width="800" height="120">
                <motion.path
                  d="M400,0 Q250,40 150,80"
                  stroke="rgba(59, 130, 246, 0.4)"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={inView ? { pathLength: 1 } : {}}
                  transition={{ duration: 1, delay: 0.8 }}
                />
                <motion.path
                  d="M400,0 Q350,40 300,80"
                  stroke="rgba(59, 130, 246, 0.4)"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={inView ? { pathLength: 1 } : {}}
                  transition={{ duration: 1, delay: 0.9 }}
                />
                <motion.path
                  d="M400,0 Q450,40 500,80"
                  stroke="rgba(59, 130, 246, 0.4)"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={inView ? { pathLength: 1 } : {}}
                  transition={{ duration: 1, delay: 1.0 }}
                />
                <motion.path
                  d="M400,0 Q550,40 650,80"
                  stroke="rgba(59, 130, 246, 0.4)"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={inView ? { pathLength: 1 } : {}}
                  transition={{ duration: 1, delay: 1.1 }}
                />
              </svg>
              
              {/* <svg className="absolute top-16 left-1/2 transform -translate-x-1/2" width="500" height="100">
                <motion.path
                  d="M250,0 Q180,40 150,80"
                  stroke="rgba(147, 51, 234, 0.4)"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={inView ? { pathLength: 1 } : {}}
                  transition={{ duration: 1, delay: 1.2 }}
                />
                <motion.path
                  d="M250,0 Q320,40 350,80"
                  stroke="rgba(147, 51, 234, 0.4)"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={inView ? { pathLength: 1 } : {}}
                  transition={{ duration: 1, delay: 1.3 }}
                />
              </svg> */}
            </div>
            
            {/* Skill Nodes - Mobile: 2x2 grid for first 4, then 2x1 for last 2 */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12 pt-16 lg:pt-20">
              {skills.slice(0, 4).map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50, scale: 0.8 }}
                    animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{ duration: 0.8, delay: 1.4 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -10 }}
                    className="flex flex-col items-center text-center group cursor-pointer"
                  >
                    <div className="w-14 h-14 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center mb-3 lg:mb-4 border-2 border-blue-400/30 group-hover:border-blue-400/60 transition-all duration-300 backdrop-blur-sm">
                      <Icon className="text-blue-400 group-hover:text-blue-300" size={24} />
                    </div>
                    <h3 className="text-sm lg:text-lg font-semibold text-white mb-1 lg:mb-2 group-hover:text-blue-300 transition-colors">{skill.name}</h3>
                    <p className="text-xs lg:text-sm text-gray-400 group-hover:text-gray-300 transition-colors">{skill.description}</p>
                  </motion.div>
                );
              })}
            </div>
            
            {/* Bottom Row Skills */}
            <div className="grid grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-16 pt-12 lg:pt-20 justify-items-center max-w-md lg:max-w-2xl mx-auto">
              {skills.slice(4).map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={index + 4}
                    initial={{ opacity: 0, y: 50, scale: 0.8 }}
                    animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{ duration: 0.8, delay: 1.8 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -10 }}
                    className="flex flex-col items-center text-center group cursor-pointer"
                  >
                    <div className="w-14 h-14 lg:w-20 lg:h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mb-3 lg:mb-4 border-2 border-purple-400/30 group-hover:border-purple-400/60 transition-all duration-300 backdrop-blur-sm">
                      <Icon className="text-purple-400 group-hover:text-purple-300" size={24} />
                    </div>
                    <h3 className="text-sm lg:text-lg font-semibold text-white mb-1 lg:mb-2 group-hover:text-purple-300 transition-colors">{skill.name}</h3>
                    <p className="text-xs lg:text-sm text-gray-400 group-hover:text-gray-300 transition-colors">{skill.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;