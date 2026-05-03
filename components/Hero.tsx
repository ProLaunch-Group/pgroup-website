"use client";

import { motion, Variants } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

// ✅ Moved outside component — created once, never recreated on re-render
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut' as const, // ✅ fixes TypeScript error
    },
  },
};

// ✅ Moved outside — static data never belongs inside a component
const headlineWords = "Launching Futures. Powering Growth.".split(' ');

/**
 * Hero component for the ProLaunch Group website.
 * Features animated background, word-by-word headline animation,
 * call-to-action buttons, and scroll indicator.
 */
export default function Hero() {

  // ✅ scrollToSection stays inside — it references browser APIs
  //    that should only run client-side, inside the component
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy to-electricBlue">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, 30, 0],
              y: [0, -30, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: 'linear' as const, // ✅ fixed here too
            }}
          >
            <div
              className="w-32 h-32 border-2 border-white rounded-lg"
              style={{
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Headline */}
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {headlineWords.map((word, index) => (
            <motion.span
              key={index}
              variants={wordVariants}
              className="inline-block mr-2"
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8, ease: 'easeOut' as const }}
        >
          Africa&#39;s emerging technology and human capital development group — building the talent,
          technology, and infrastructure that powers tomorrow.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8, ease: 'easeOut' as const }}
        >
          <motion.button
            className="bg-amber text-navy px-8 py-3 rounded-lg font-semibold text-lg hover:bg-amber/90 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('companies')}
          >
            Explore Our Companies
          </motion.button>
          <motion.button
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-navy transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contact')}
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
      >
        <motion.button
          onClick={() => scrollToSection('about')}
          className="text-white/70 hover:text-white transition-colors duration-200"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' as const }}
        >
          <ChevronDown className="h-8 w-8" />
        </motion.button>
      </motion.div>
    </section>
  );
}