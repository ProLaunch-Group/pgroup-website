"use client";

import { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import Image from 'next/image';

// ---------------------------------------------------------------------------
// Static data — outside component
// ---------------------------------------------------------------------------
const leaders = [
  {
    name: 'Mary-Queen Uchechukwu',
    title: 'Founder & Group CEO',
    tagline: 'Visionary behind the ProLaunch Group ecosystem.',
    subsidiary: 'ProLaunch Group',
    photo: '/images/ceo.jpg',
    linkedIn: 'https://www.linkedin.com/in/mary-queen-uch/',
    twitter: 'https://x.com/kweenshaly',
  },
  {
    name: 'Emmanuel Adenuel',
    title: 'Director, ProLaunch Technologies',
    tagline: 'Leading enterprise technology delivery across Africa.',
    subsidiary: 'ProLaunch Technologies',
    photo: null,
    linkedIn: '#',
    twitter: '#',
  },
  {
    name: 'Peace Ajose',
    title: 'Director, ProLaunch Careers',
    tagline: 'Connecting exceptional talent with exceptional opportunity.',
    subsidiary: 'ProLaunch Careers',
    photo: '/images/peace-ajose.png',
    linkedIn: 'https://www.linkedin.com/in/peace-ajose-va',
    facebook: 'https://www.facebook.com/share/1J6JMs5Yds',
  },
  {
    name: 'Jiddah Elegbede',
    title: 'Director, ProLaunch Academy',
    tagline: 'Democratising world-class digital education across Africa.',
    subsidiary: 'ProLaunch Academy',
    photo: null,
    linkedIn: '#',
    twitter: 'https://www.facebook.com/share/1D6whR1ke8',
  },
];

const subsidiaryPill: Record<string, string> = {
  'ProLaunch Group':        'bg-navy/10 text-navy',
  'ProLaunch Technologies': 'bg-electricBlue/10 text-electricBlue',
  'ProLaunch Careers':      'bg-amber/10 text-amber',
  'ProLaunch Academy':      'bg-navy/10 text-navy',
};

// ---------------------------------------------------------------------------
// Animation variants — outside component
// ---------------------------------------------------------------------------
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export default function Leadership() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="leadership" ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-navy/10 text-navy mb-5">
            The People Behind ProLaunch
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-navy mb-4">
            Our Leadership
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Industry experts and practitioners driving ProLaunch&#39;s mission
            across technology, talent, and training.
          </p>
        </motion.div>

        {/* Leader cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {leaders.map((leader) => (
            <motion.div
              key={leader.name + leader.title}
              variants={cardVariants}
              className="group flex flex-col items-center text-center bg-gray-50 rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-100"
            >
              {/* Avatar — real photo or placeholder */}
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md mb-5 flex-shrink-0">
                {leader.photo ? (
                  <Image
                    src={leader.photo}
                    alt={leader.name}
                    width={96}
                    height={96}
                    className="object-cover object-top w-full h-full"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400 text-xs font-medium">Photo</span>
                  </div>
                )}
              </div>

              {/* Name & title */}
              <h3 className="text-lg font-bold text-navy mb-1">{leader.name}</h3>
              <p className="text-electricBlue text-sm font-semibold mb-3">{leader.title}</p>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">{leader.tagline}</p>

              {/* Subsidiary pill */}
              <span className={`px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide mb-5 ${subsidiaryPill[leader.subsidiary]}`}>
                {leader.subsidiary}
              </span>

              {/* Social links */}
              <div className="flex gap-3 mt-auto">
                <a
                  href={leader.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-electricBlue hover:border-electricBlue transition-colors duration-200"
                  aria-label={`${leader.name} LinkedIn`}
                >
                  <FaLinkedin size={14} />
                </a>
                <a
                  href={leader.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-electricBlue hover:border-electricBlue transition-colors duration-200"
                  aria-label={`${leader.name} Twitter`}
                >
                  <FaXTwitter size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}