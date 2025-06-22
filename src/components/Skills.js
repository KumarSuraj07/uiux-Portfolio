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
    <section ref={ref} className="relative py-20 px-6 overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-black opacity-80 z-10"></div>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          src=""
          className="w-full h-full object-cover opacity-20"
        >
        </video>
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

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8"
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            const getScatterDirection = () => {
              if (index % 3 === 0) return -200;
              if (index % 3 === 1) return 0;
              return 200;
            };
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                initial={{ opacity: 0, y: 80, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.08,
                  ease: "easeOut"
                }}
                className="bg-black p-8 rounded-2xl shadow-custom hover-lift text-center group border border-gray-800 h-full flex flex-col justify-center"
              >
                <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/20 transition-colors duration-300">
                  <Icon className="text-blue-400" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{skill.name}</h3>
                <p className="text-gray-300">{skill.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;