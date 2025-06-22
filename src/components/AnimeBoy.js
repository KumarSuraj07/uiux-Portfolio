import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AnimeBoy = () => {
  const { scrollY } = useScroll();
  const headRotation = useTransform(scrollY, [0, 500, 1000], [-25, 0, 25]);
  const eyeMovement = useTransform(scrollY, [0, 500, 1000], [-3, 0, 3]);
  const scale = useTransform(scrollY, [0, 300], [1, 1.05]);

  return (
    <motion.div 
      className="fixed right-8 bottom-0 pointer-events-none z-0"
      style={{ scale }}
    >
      <div className="w-72 h-96 md:w-80 md:h-[28rem] opacity-25">
        <svg viewBox="0 0 200 320" className="w-full h-full">
          {/* Body */}
          <ellipse cx="100" cy="240" rx="45" ry="65" fill="#667eea" opacity="0.9"/>
          
          {/* Head with rotation */}
          <motion.g 
            style={{ 
              rotateY: headRotation,
              transformOrigin: '100px 90px',
              transformStyle: 'preserve-3d'
            }}
          >
            {/* Face */}
            <circle cx="100" cy="90" r="40" fill="#FFD4A3"/>
            
            {/* Hair */}
            <path d="M65 70 Q100 45 135 70 Q130 50 100 50 Q70 50 65 70" fill="#4A4A4A"/>
            <path d="M75 65 Q85 55 95 65" fill="#4A4A4A"/>
            <path d="M105 65 Q115 55 125 65" fill="#4A4A4A"/>
            
            {/* Eyes with movement */}
            <motion.g style={{ x: eyeMovement }}>
              <ellipse cx="88" cy="85" rx="5" ry="7" fill="#FFF"/>
              <ellipse cx="112" cy="85" rx="5" ry="7" fill="#FFF"/>
              <circle cx="88" cy="85" r="3" fill="#333"/>
              <circle cx="112" cy="85" r="3" fill="#333"/>
              <circle cx="89" cy="83" r="1" fill="#FFF"/>
              <circle cx="113" cy="83" r="1" fill="#FFF"/>
            </motion.g>
            
            {/* Eyebrows */}
            <path d="M83 78 Q88 75 93 78" stroke="#4A4A4A" strokeWidth="2" fill="none"/>
            <path d="M107 78 Q112 75 117 78" stroke="#4A4A4A" strokeWidth="2" fill="none"/>
            
            {/* Nose */}
            <ellipse cx="100" cy="95" rx="1.5" ry="2" fill="#E6B88A"/>
            
            {/* Mouth */}
            <path d="M95 105 Q100 110 105 105" stroke="#D4A574" strokeWidth="2" fill="none"/>
          </motion.g>
          
          {/* Neck */}
          <rect x="90" y="125" width="20" height="15" fill="#FFD4A3"/>
          
          {/* Shirt collar */}
          <path d="M85 140 L100 150 L115 140 L115 160 L85 160 Z" fill="#FFF"/>
          
          {/* Arms */}
          <ellipse cx="65" cy="190" rx="18" ry="45" fill="#FFD4A3" transform="rotate(-15 65 190)"/>
          <ellipse cx="135" cy="190" rx="18" ry="45" fill="#FFD4A3" transform="rotate(15 135 190)"/>
          
          {/* Hands */}
          <circle cx="58" cy="225" r="8" fill="#FFD4A3"/>
          <circle cx="142" cy="225" r="8" fill="#FFD4A3"/>
          
          {/* Legs */}
          <ellipse cx="85" cy="280" rx="15" ry="35" fill="#333"/>
          <ellipse cx="115" cy="280" rx="15" ry="35" fill="#333"/>
          
          {/* Shoes */}
          <ellipse cx="85" cy="310" rx="12" ry="8" fill="#000"/>
          <ellipse cx="115" cy="310" rx="12" ry="8" fill="#000"/>
        </svg>
      </div>
    </motion.div>
  );
};

export default AnimeBoy;