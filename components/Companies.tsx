"use client";

import { motion, Variants } from 'framer-motion';
import { Cloud, Briefcase, GraduationCap } from 'lucide-react';

// ✅ All colour classes written as complete strings — Tailwind can detect these
const companies = [
  {
    name: 'ProLaunch Technologies',
    icon: Cloud,
    url: 'http://tech.prolaunchgroup.org',
    borderClass: 'border-electricBlue',
    bgClass: 'bg-electricBlue/10',
    iconClass: 'text-electricBlue',
    dotClass: 'bg-electricBlue',
    buttonClass: 'bg-electricBlue hover:bg-electricBlue/90',
    description: 'Provides cloud computing services, DevOps consultancy, software development, IT infrastructure management, and enterprise technology solutions.',
    services: [
      'Cloud Migration & Management',
      'DevOps Implementation',
      'Custom Software Development',
      'IT Infrastructure Solutions',
    ],
  },
  {
    name: 'ProLaunch Careers',
    icon: Briefcase,
    url: 'https://careers.prolaunchgroup.org',
    borderClass: 'border-amber',
    bgClass: 'bg-amber/10',
    iconClass: 'text-amber',
    dotClass: 'bg-amber',
    buttonClass: 'bg-amber hover:bg-amber/90',
    description: 'A career development and talent placement company specializing in professional coaching, CV optimization, and recruitment services.',
    services: [
      'Career Coaching & Mentoring',
      'CV & LinkedIn Optimization',
      'Interview Preparation',
      'Talent Matching & Placement',
    ],
  },
  {
    name: 'ProLaunch Academy',
    icon: GraduationCap,
    url: 'http://academy.prolaunchgroup.org',
    borderClass: 'border-navy',
    bgClass: 'bg-navy/10',
    iconClass: 'text-navy',
    dotClass: 'bg-navy',
    buttonClass: 'bg-navy hover:bg-navy/90',
    description: 'A digital skills and technology training academy offering bootcamps, courses, and certification programmes in various tech domains.',
    services: [
      'Software Development Training',
      'Cloud Computing Courses',
      'Cybersecurity Training',
      'Data Analytics Programs',
    ],
  },
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

const cardVariants: Variants = {
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

/**
 * Companies component showcasing ProLaunch Group's three subsidiaries.
 * Features animated cards with hover effects and staggered entrance animations.
 */
export default function Companies() {
  return (
    <section id="companies" className="py-20 bg-white">
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
            Our Ecosystem
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Three specialized subsidiaries working together to deliver comprehensive
            technology, career, and education solutions across Africa.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {companies.map((company, index) => {
            const IconComponent = company.icon;
            return (
              <motion.div
                key={index}
                className={`bg-white border-t-4 ${company.borderClass} rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300`}
                variants={cardVariants}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${company.bgClass} mb-4`}>
                  <IconComponent className={`h-6 w-6 ${company.iconClass}`} />
                </div>

                {/* Name */}
                <h3 className="text-xl font-bold text-navy mb-3">
                  {company.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {company.description}
                </p>

                {/* Services List */}
                <ul className="space-y-2 mb-6">
                  {company.services.map((service, serviceIndex) => (
                    <li
                      key={serviceIndex}
                      className="flex items-center text-sm text-gray-700"
                    >
                      <div className={`w-1.5 h-1.5 rounded-full ${company.dotClass} mr-3 flex-shrink-0`} />
                      {service}
                    </li>
                  ))}
                </ul>

                {/* Link — opens in new tab */}
                <motion.a
                  href={company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full ${company.buttonClass} text-white py-2 px-4 rounded-lg font-medium text-center transition-colors duration-200`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Learn More
                </motion.a>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}