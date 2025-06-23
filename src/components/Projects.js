import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 2000], [0, -300]);
  const titleY = useTransform(scrollY, [800, 1200], [0, -100]);
  const carouselY = useTransform(scrollY, [800, 1200], [50, -50]);
  const [currentProject, setCurrentProject] = useState(0);
  
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const projects = [
    {
      id: 1,
      title: "Nike Re-Design",
      description: "A creative Nike website re-design project in Figma showcasing modern UI/UX practices, bold visuals, and an enhanced user experience.",
      image: "/image/nike.png",
      tags: ["Desktop", "UI/UX", "Figma"],
      link: "https://www.figma.com/design/W6vy0et6oGUwimnmlx3JAm/Untitled?m=auto&t=cIMKAWrc7GtUOzqK-6",
      github: "#",
      year: "2024"
    },
    {
      id: 2,
      title: "Coca-Cola Campaign",
      description: "Creative campaign design with engaging visuals and brand storytelling",
      image: "/image/cocacola.png",
      tags: ["Campaign", "Branding", "Design"],
      link: "https://www.figma.com/design/p8q5IV6l7mljLMFDnyHOV0/Untitled?m=auto&t=cIMKAWrc7GtUOzqK-6",
      github: "#",
      year: "2023"
    },
    {
      id: 3,
      title: "Drinq App Interface",
      description: "Intuitive mobile app design for beverage ordering with smooth user experience",
      image: "/image/drinq.png",
      tags: ["Mobile", "App Design", "UX"],
      link: "https://www.figma.com/design/Mj0sNnr9Tcv2TF3WupYzvD/Drinq?m=auto&t=cIMKAWrc7GtUOzqK-6",
      github: "#",
      year: "2024"
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section ref={ref} className="relative pt-40 pb-10 px-6 overflow-hidden bg-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/30 via-black to-gray-900/30 z-10"></div>
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)`
        }}></div>
      </div>
      <div className="relative z-30 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ y: titleY }}
          className="text-center mb-8 lg:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent work in UI/UX design, from mobile apps to web platforms
          </p>
        </motion.div>

        {/* Responsive Carousel */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ y: carouselY }}
          className="relative"
        >
          {/* Mobile Layout */}
          <div className="block lg:hidden">
            <div className="relative h-[80vh] flex flex-col">
              {/* Mobile Navigation */}
              <div className="flex justify-between items-center mb-4 px-4">
                <motion.button
                  onClick={prevProject}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-black/40 backdrop-blur-sm rounded-full border border-white/20"
                >
                  <ChevronLeft size={20} className="text-white" />
                </motion.button>
                <div className="flex gap-2">
                  {projects.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setCurrentProject(index)}
                      whileHover={{ scale: 1.2 }}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentProject ? 'bg-blue-500' : 'bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
                <motion.button
                  onClick={nextProject}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-black/40 backdrop-blur-sm rounded-full border border-white/20"
                >
                  <ChevronRight size={20} className="text-white" />
                </motion.button>
              </div>
              
              {/* Mobile Project Card */}
              <motion.div
                key={`mobile-${currentProject}`}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex-1 bg-gray-800/50 backdrop-blur-lg rounded-2xl border border-gray-600/50 p-4 flex flex-col"
              >
                <motion.div 
                  className="w-full h-48 rounded-xl overflow-hidden mb-4"
                  whileHover={{ scale: 1.02 }}
                >
                  <img 
                    src={projects[currentProject].image} 
                    alt={projects[currentProject].title} 
                    className="w-full h-full object-cover" 
                  />
                </motion.div>
                
                <div className="flex-1 text-center">
                  <div className="flex flex-col items-center gap-2 mb-3">
                    <h3 className="text-xl font-bold text-white">
                      {projects[currentProject].title}
                    </h3>
                    <span className="text-blue-400 text-xs font-medium bg-blue-500/20 px-2 py-1 rounded-full">
                      {projects[currentProject].year}
                    </span>
                  </div>
                  
                  <p className="text-gray-300/90 text-sm leading-relaxed mb-4">
                    {projects[currentProject].description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4 justify-center">
                    {projects[currentProject].tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-full border border-gray-600/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-center">
                    <motion.a
                      href={projects[currentProject].link}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-xs font-medium"
                    >
                      <ExternalLink size={14} />
                      <span>View Project</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:block">
            <div className="relative h-[70vh] flex items-center justify-center">
              {/* Desktop Arrows */}
              <motion.button
                onClick={prevProject}
                whileHover={{ scale: 1.2, x: -5 }}
                whileTap={{ scale: 0.9 }}
                className="absolute left-4 z-30 p-4 bg-black/40 backdrop-blur-sm rounded-full border border-white/20 hover:border-blue-400/50 transition-all duration-300"
              >
                <ChevronLeft size={32} className="text-white hover:text-blue-400" />
              </motion.button>

              <motion.button
                onClick={nextProject}
                whileHover={{ scale: 1.2, x: 5 }}
                whileTap={{ scale: 0.9 }}
                className="absolute right-4 z-30 p-4 bg-black/40 backdrop-blur-sm rounded-full border border-white/20 hover:border-blue-400/50 transition-all duration-300"
              >
                <ChevronRight size={32} className="text-white hover:text-blue-400" />
              </motion.button>

              {/* Desktop Project Card */}
              <div className="w-full h-full flex items-center justify-center px-4">
                <motion.div
                  key={`desktop-${currentProject}`}
                  initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="w-full h-full bg-gray-800/40 backdrop-blur-lg rounded-3xl border border-gray-600/50 p-12 flex items-center gap-12"
                >
                  <motion.div 
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    className="w-1/2 h-80 rounded-2xl overflow-hidden flex-shrink-0 shadow-2xl"
                  >
                    <img 
                      src={projects[currentProject].image} 
                      alt={projects[currentProject].title} 
                      className="w-full h-full object-cover" 
                    />
                  </motion.div>

                  <div className="flex-1">
                    <motion.div
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                    >
                      <div className="flex items-center gap-4 mb-6">
                        <h3 className="text-3xl font-bold text-white">
                          {projects[currentProject].title}
                        </h3>
                        <span className="text-blue-400 text-sm font-medium bg-blue-500/20 px-3 py-1 rounded-full">
                          {projects[currentProject].year}
                        </span>
                      </div>
                      
                      <p className="text-gray-300/90 text-base leading-relaxed mb-6">
                        {projects[currentProject].description}
                      </p>
                      
                      <div className="flex flex-wrap gap-3 mb-8">
                        {projects[currentProject].tags.map((tag, index) => (
                          <motion.span
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="px-4 py-2 bg-gray-800/50 text-gray-300 rounded-full border border-gray-600/50 hover:border-blue-500/50 transition-colors"
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                      
                      <div className="flex justify-center lg:justify-start">
                        <motion.a
                          href={projects[currentProject].link}
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:shadow-2xl transition-all duration-300 text-lg font-medium"
                        >
                          <ExternalLink size={20} />
                          <span>View Project</span>
                        </motion.a>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
              
              {/* Desktop Indicators */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
                {projects.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentProject(index)}
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentProject 
                        ? 'bg-blue-500 shadow-lg shadow-blue-500/50' 
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Projects;