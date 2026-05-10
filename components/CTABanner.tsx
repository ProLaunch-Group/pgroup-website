"use client";

import { motion, Variants } from 'framer-motion';

// ---------------------------------------------------------------------------
// Static dot positions — outside component to avoid Math.random() hydration errors
// ---------------------------------------------------------------------------
const dots = [
  { left: '5%',  top: '15%', duration: 3.2, delay: 0    },
  { left: '12%', top: '72%', duration: 4.1, delay: 0.3  },
  { left: '20%', top: '35%', duration: 3.8, delay: 0.8  },
  { left: '28%', top: '85%', duration: 4.5, delay: 0.2  },
  { left: '35%', top: '10%', duration: 3.0, delay: 1.1  },
  { left: '42%', top: '60%', duration: 4.2, delay: 0.5  },
  { left: '50%', top: '25%', duration: 3.6, delay: 0.9  },
  { left: '55%', top: '78%', duration: 4.0, delay: 0.1  },
  { left: '62%', top: '45%', duration: 3.3, delay: 1.4  },
  { left: '68%', top: '90%', duration: 4.8, delay: 0.6  },
  { left: '74%', top: '18%', duration: 3.1, delay: 1.2  },
  { left: '80%', top: '55%', duration: 4.3, delay: 0.4  },
  { left: '86%', top: '30%', duration: 3.7, delay: 1.0  },
  { left: '90%', top: '70%', duration: 4.6, delay: 0.7  },
  { left: '95%', top: '8%',  duration: 3.4, delay: 1.3  },
  { left: '8%',  top: '50%', duration: 4.4, delay: 0.2  },
  { left: '33%', top: '42%', duration: 3.9, delay: 1.5  },
  { left: '58%', top: '65%', duration: 3.5, delay: 0.8  },
  { left: '77%', top: '88%', duration: 4.7, delay: 0.3  },
  { left: '93%', top: '40%', duration: 3.2, delay: 1.1  },
];

// ---------------------------------------------------------------------------
// Animation variants — outside component
// ---------------------------------------------------------------------------
const headingVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

const textVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2, ease: 'easeOut' as const } },
};

const buttonsVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4, ease: 'easeOut' as const } },
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export default function CTABanner() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gradient-to-r from-electricBlue to-navy relative overflow-hidden">

      {/* Animated dot pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {dots.map((dot, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{ left: dot.left, top: dot.top }}
            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: dot.duration, repeat: Infinity, delay: dot.delay }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Ready to Launch?
        </motion.h2>
        <motion.p
          className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Join the growing number of African businesses and professionals who trust ProLaunch Group
          to power their technology and career aspirations.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          variants={buttonsVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.button
            className="bg-amber text-navy px-8 py-3 rounded-lg font-semibold text-lg hover:bg-amber/90 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contact')}
          >
            Talk to Us
          </motion.button>
          <motion.button
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-navy transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('services')}
          >
            Explore Services
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}