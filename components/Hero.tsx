"use client";

import { motion, Variants } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

// ---------------------------------------------------------------------------
// Animation variants — outside component
// ---------------------------------------------------------------------------
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
};

// ---------------------------------------------------------------------------
// Static data — outside component
// ---------------------------------------------------------------------------
const headlineWords = "Launching Futures. Powering Growth.".split(' ');

const shapes = [
  { left: '72%', top: '8%',  duration: 22, rotate: 12  },
  { left: '85%', top: '25%', duration: 28, rotate: 55  },
  { left: '68%', top: '45%', duration: 24, rotate: 130 },
  { left: '80%', top: '62%', duration: 30, rotate: 200 },
  { left: '90%', top: '78%', duration: 20, rotate: 310 },
  { left: '65%', top: '80%', duration: 26, rotate: 75  },
];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1F3864 0%, #162847 50%, #1a3070 100%)',
      }}
    >
      {/* ── Layer 1: hero-bg.jpg behind everything ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center opacity-60"
        />
        {/* Dark navy overlay so the gradient + text stay readable */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(31,56,100,0.75) 0%, rgba(22,40,71,0.65) 50%, rgba(26,48,112,0.70) 100%)',
          }}
        />
      </div>

      {/* ── Layer 2: Floating shapes + radial glow ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {shapes.map((shape, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{ left: shape.left, top: shape.top }}
            animate={{ x: [0, 30, 0], y: [0, -30, 0], rotate: [0, 180, 360] }}
            transition={{ duration: shape.duration, repeat: Infinity, ease: 'linear' as const }}
          >
            <div
              className="w-32 h-32 border-2 rounded-lg"
              style={{
                borderColor: 'rgba(46, 134, 222, 0.5)',
                backgroundColor: 'rgba(46, 134, 222, 0.08)',
                transform: `rotate(${shape.rotate}deg)`,
              }}
            />
          </motion.div>
        ))}
        {/* Soft radial glow behind the text */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 60% 50% at 35% 50%, rgba(46,134,222,0.15) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* ── Layer 3: Main content ── */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {headlineWords.map((word, index) => (
            <motion.span key={index} variants={wordVariants} className="inline-block mr-2">
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-white/85 mb-8 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8, ease: 'easeOut' as const }}
        >
          Transforming Africa&#39;s emerging technology and human capital development; building the talent,
          technology, and infrastructure that powers tomorrow.
        </motion.p>

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
            Explore Our Ecosystem
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

      {/* ── Scroll indicator ── */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
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