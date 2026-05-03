"use client";

import { motion, Variants } from 'framer-motion';

// ✅ Moved outside — static data, never changes between renders
const stats = [
  { number: '3', label: 'Subsidiaries' },
  { number: 'Pan-African', label: 'Vision' },
  { number: '1', label: 'Mission' },
];

// ✅ Moved outside — static animation config
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut' as const, // ✅ fixes TypeScript error
    },
  },
};

/**
 * About component for the ProLaunch Group website.
 * Features mission description and animated stat cards.
 */
export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Content — fixed JSX comment syntax */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-navy mb-6"
              variants={itemVariants}
            >
              About ProLaunch Group
            </motion.h2>
            <motion.p
              className="text-lg text-gray-700 leading-relaxed mb-6"
              variants={itemVariants}
            >
              ProLaunch Group Limited is the parent holding company of a group of companies focused on
              technology services, career development, and digital education in Nigeria and across Africa.
              Our mission is to empower African businesses and professionals with cutting-edge technology
              solutions, comprehensive career development services, and world-class digital education programs.
            </motion.p>
            <motion.p
              className="text-lg text-gray-700 leading-relaxed"
              variants={itemVariants}
            >
              Through our three specialized subsidiaries, we bridge the gap between innovation and
              implementation, helping organizations modernize their operations while developing the next
              generation of African tech leaders.
            </motion.p>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="text-3xl font-bold text-navy mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}