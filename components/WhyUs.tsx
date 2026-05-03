"use client";

import { motion, Variants } from 'framer-motion';
import { Network, MapPin, Award, Target } from 'lucide-react';

// ---------------------------------------------------------------------------
// Static data — outside component
// ---------------------------------------------------------------------------
const differentiators = [
  {
    icon: Network,
    title: 'End-to-End Ecosystem',
    description:
      'We cover technology, careers, and training under one group, providing seamless solutions from concept to implementation.',
    iconBg: 'bg-navy/10',
    iconColor: 'text-navy',
  },
  {
    icon: MapPin,
    title: 'Africa-First Mindset',
    description:
      'Built for the African market with global standards, understanding local challenges and opportunities.',
    iconBg: 'bg-electricBlue/10',
    iconColor: 'text-electricBlue',
  },
  {
    icon: Award,
    title: 'Expert-Led Delivery',
    description:
      'Industry practitioners, not just trainers — real-world experience driving tangible results.',
    iconBg: 'bg-navy/10',
    iconColor: 'text-navy',
  },
  {
    icon: Target,
    title: 'Proven Results',
    description:
      'Outcomes-focused across all our subsidiaries, with measurable impact and client success stories.',
    iconBg: 'bg-electricBlue/10',
    iconColor: 'text-electricBlue',
  },
];

// ---------------------------------------------------------------------------
// Animation variants — outside component
// ---------------------------------------------------------------------------
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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
      ease: 'easeOut' as const,
    },
  },
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' as const }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            Why ProLaunch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            What sets us apart in delivering technology and human capital
            solutions across Africa.
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {differentiators.map((item) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.title}
                className="bg-gray-50 p-8 rounded-lg"
                variants={itemVariants}
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-lg ${item.iconBg} mb-6`}
                >
                  <IconComponent className={`h-8 w-8 ${item.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-navy mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}