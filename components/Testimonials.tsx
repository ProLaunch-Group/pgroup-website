"use client";

import { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { Quote } from 'lucide-react';

// ---------------------------------------------------------------------------
// Static data — outside component
// ---------------------------------------------------------------------------
const testimonials = [
  {
    name: 'Emmanuel Ahman',
    role: 'CTO, Nykon Nig Ltd (Tech Startup)',
    quote:
      'ProLaunch Technologies transformed our entire infrastructure. Their team delivered a scalable cloud solution that cut our deployment time in half and gave us the reliability we needed to grow.',
    subsidiary: 'ProLaunch Technologies',
    pillClass: 'bg-electricBlue/10 text-electricBlue',
    accentColor: '#2E86DE',
    // avatar: '/images/testimonials/person-1.jpg', // uncomment and replace when ready
  },
  {
    name: 'Carensa Udozo',
    role: 'Project Manager, Afriment',
    quote:
      'I had been job hunting for months with no luck. ProLaunch Careers revamped my CV, coached me through interviews, and within six weeks I landed a role that exceeded every expectation I had.',
    subsidiary: 'ProLaunch Careers',
    pillClass: 'bg-amber/10 text-amber',
    accentColor: '#F5A623',
    // avatar: '/images/testimonials/person-2.jpg',
  },
  {
    name: 'Sixtus Eze',
    role: 'Software Engineer, GrayLabs',
    quote:
      'The ProLaunch Academy bootcamp was the most intensive and rewarding learning experience of my career. I came in knowing basic HTML and left fully job-ready as a full-stack developer.',
    subsidiary: 'ProLaunch Academy',
    pillClass: 'bg-navy/10 text-navy',
    accentColor: '#1F3864',
    // avatar: '/images/testimonials/person-3.jpg',
  },
];

// ---------------------------------------------------------------------------
// Animation variants — outside component
// ---------------------------------------------------------------------------
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export default function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="testimonials" ref={ref} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-electricBlue/10 text-electricBlue mb-5">
            Client Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-navy mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Real outcomes across technology, talent, and training; from the people who experienced them.
          </p>
        </motion.div>

        {/* Testimonial cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid gap-8 md:grid-cols-3"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name + t.subsidiary}
              variants={cardVariants}
              className="relative flex flex-col bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-lg transition-all duration-300"
            >
              {/* Quote icon */}
              <Quote
                className="absolute top-6 right-6 opacity-10"
                size={48}
                style={{ color: t.accentColor }}
              />

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber fill-amber" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote text */}
              <p className="text-gray-600 leading-relaxed flex-1 mb-6 text-sm">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 mt-auto">
                {/* Avatar placeholder — replace div with <Image> when photos are ready */}
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                  <span className="text-gray-400 text-xs font-medium">Photo</span>
                </div>
                <div>
                  <p className="font-bold text-navy text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.role}</p>
                </div>
              </div>

              {/* Subsidiary pill */}
              <span className={`self-start mt-5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide ${t.pillClass}`}>
                {t.subsidiary}
              </span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}