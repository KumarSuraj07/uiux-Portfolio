import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Trophy, Star } from 'lucide-react';

const Achievements = () => {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 3000], [0, -300]);
  const progressY = useTransform(scrollY, [2000, 3000], [0, 1]);
  
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const achievements = [
    {
      id: 1,
      title: "JavaScript & React.js Bootcamp",
      issuer: "Microsoft Learn Student Ambassador",
      date: "2023",
      description: "A hands-on JavaScript & React.js bootcamp designed to empower students with modern web development skills.",
      icon: "https://mlsasrmncr.github.io/img/logo3.png",
      type: "certificate"
    },
    {
      id: 2,
      title: "Get Started with Figma",
      issuer: "Coursera",
      date: "2023",
      description: "A beginner-friendly Coursera course that helps you get started with Figma, covering essential UI/UX design tools and workflows.",
      icon: "https://149357281.v2.pressablecdn.com/wp-content/uploads/2020/12/cropped-android-chrome-512x512-1.png",
      type: "certificate"
    },
    {
      id: 3,
      title: "Graphic Design Fundamental",
      issuer: "Juno",
      date: "2024",
      description: "A foundational course that introduces the core principles of graphic design, including typography, color theory, layout, and visual communication",
      icon: "https://play-lh.googleusercontent.com/g-RSjLWT5_VoRBiTbd8q5x8LL_zhxHcFRkq3HulTsgszL9U3AHVuMWfEIfn6JaZeyAw",
      type: "certificate"
    },
    {
      id: 4,
      title: "The Fundamental of Digital Marketing",
      issuer: "Google",
      date: "2024",
      description: "Expert-level proficiency in Figma design tools and collaborative workflows",
      icon: "https://cdn-icons-png.flaticon.com/512/2991/2991148.png",
      type: "certificate"
    }
  ];

  return (
    <section ref={ref} className="relative py-20 px-6 overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-black opacity-75 z-10"></div>
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
            Certificates & <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            My journey of continuous learning and recognition in the design industry
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Extended Progress Bar - Left Side */}
          <div className="hidden lg:flex w-8 justify-center order-2 lg:order-1">
            <div className="relative">
              {/* Extended background bar */}
              <div className="w-0.5 bg-gradient-to-b from-gray-800 via-gray-700 to-gray-800 rounded-full shadow-inner" style={{ height: '800px' }}></div>
              
              {/* Animated progress fill */}
              <motion.div 
                className="absolute top-0 left-0 w-0.5 bg-gradient-to-b from-yellow-400 via-orange-500 via-red-500 to-purple-500 rounded-full origin-top shadow-lg"
                style={{ 
                  scaleY: progressY,
                  height: '800px'
                }}
              />
              
              {/* Glowing orb that travels along the bar */}
              <motion.div
                className="absolute w-3 h-3 bg-yellow-300 rounded-full -left-1 shadow-2xl"
                style={{
                  top: useTransform(progressY, [0, 1], [0, 780]),
                  boxShadow: '0 0 15px rgba(251, 191, 36, 0.8), 0 0 30px rgba(251, 191, 36, 0.4)'
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Achievement markers */}
              {achievements.map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0, opacity: 0, x: -15 }}
                  whileInView={{ scale: 1, opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.8 }}
                  transition={{ 
                    delay: index * 0.2, 
                    duration: 1,
                    ease: [0.68, -0.55, 0.265, 1.55],
                    type: "spring",
                    stiffness: 150,
                    damping: 12
                  }}
                  whileHover={{ scale: 1.3, rotate: 180 }}
                  className="absolute w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full border border-white -left-1 shadow-lg cursor-pointer"
                  style={{ top: `${index * 225 + 80}px` }}
                />
              ))}
              
              {/* Floating particles */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-0.5 h-0.5 bg-yellow-400 rounded-full opacity-60"
                  style={{
                    left: Math.random() * 20 - 10,
                    top: Math.random() * 800
                  }}
                  animate={{
                    y: [-10, 10, -10],
                    opacity: [0.3, 0.8, 0.3],
                    scale: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 2 + Math.random() * 1.5,
                    repeat: Infinity,
                    delay: Math.random() * 2
                  }}
                />
              ))}
            </div>
          </div>
          
          {/* Achievements Info - Right Side */}
          <div className="flex-1 space-y-6 lg:space-y-10 order-1 lg:order-2">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, x: 100, y: 50 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ 
                  duration: 1.2, 
                  delay: index * 0.2,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="relative group"
              >
                {/* Achievement card */}
                <motion.div 
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-gray-900/10 backdrop-blur-sm rounded-3xl p-6 lg:p-8 border border-gray-700/20 hover:border-yellow-500/30 transition-all duration-500"
                >
                  <div className="flex items-start gap-6">
                    <motion.div 
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm flex-shrink-0"
                    >
                      <img src={achievement.icon} alt={achievement.title} className="w-8 h-8 lg:w-12 lg:h-12 object-contain" />
                    </motion.div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                        <h3 className="text-lg lg:text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-orange-400 group-hover:bg-clip-text transition-all duration-500">
                          {achievement.title}
                        </h3>
                        <span className="text-yellow-400 text-xs font-medium bg-yellow-500/20 px-2 py-1 rounded-full w-fit">
                          {achievement.date}
                        </span>
                      </div>
                      
                      <p className="text-blue-400 font-medium mb-2 text-sm">{achievement.issuer}</p>
                      <p className="text-gray-300/90 text-sm lg:text-base leading-relaxed mb-3">{achievement.description}</p>
                      
                      <div className="flex items-center gap-2">
                        {achievement.type === 'certificate' ? (
                          <Award className="text-yellow-400" size={20} />
                        ) : (
                          <Trophy className="text-orange-400" size={20} />
                        )}
                        <span className="text-sm text-gray-400 capitalize">{achievement.type}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Connecting line to progress bar - Hidden on mobile */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: index * 0.2 + 0.5, duration: 0.8 }}
                  className="hidden lg:block absolute left-0 top-1/2 w-8 h-px bg-gradient-to-r from-yellow-500/50 to-transparent -translate-x-8 -translate-y-1/2 origin-left"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;