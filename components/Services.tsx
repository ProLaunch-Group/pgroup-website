"use client";

import { motion, Variants } from 'framer-motion';
import {
  Cloud,
  Code,
  Briefcase,
  GraduationCap,
  Settings,
  Users,
} from 'lucide-react';

// ✅ Moved outside — static data, never changes between renders
const services = [
  {
    icon: Cloud,
    name: 'Cloud Computing & DevOps',
    description: 'Scalable cloud solutions and DevOps practices for modern businesses.',
  },
  {
    icon: Code,
    name: 'Software Development',
    description: 'Custom software development and enterprise application solutions.',
  },
  {
    icon: Briefcase,
    name: 'Career Coaching & Placement',
    description: 'Professional development and talent matching services.',
  },
  {
    icon: GraduationCap,
    name: 'Technology Training & Bootcamps',
    description: 'Comprehensive tech education and certification programs.',
  },
  {
    icon: Settings,
    name: 'IT Consultancy',
    description: 'Strategic technology consulting and infrastructure management.',
  },
  {
    icon: Users,
    name: 'Corporate Workforce Development',
    description: 'Tailored training programs for organizational growth.',
  },
];

// ✅ Moved outside — static animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut' as const,
    },
  },
};

// ✅ Hover transition typed correctly — fixes the whileHover transition error
const hoverTransition = { duration: 0.3, ease: 'easeOut' as const };

/**
 * Services component showcasing the comprehensive service offerings of ProLaunch Group.
 * Features a responsive grid of service tiles with hover animations.
 */
export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <motion.div
          className="text-center mb-16"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            What We Do
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive technology, career, and education solutions designed to
            empower African businesses and professionals.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 group cursor-pointer"
                variants={itemVariants}
                whileHover={{
                  backgroundColor: '#1F3864',
                  transition: hoverTransition, // ✅ uses typed constant — no more inline string
                }}
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-electricBlue/10 mb-4 group-hover:bg-white/20 transition-colors duration-300">
                  <IconComponent className="h-6 w-6 text-electricBlue group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Service Name */}
                <h3 className="text-lg font-semibold text-navy mb-2 group-hover:text-white transition-colors duration-300">
                  {service.name}
                </h3>

                {/* Service Description */}
                <p className="text-gray-600 group-hover:text-white/90 transition-colors duration-300 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}