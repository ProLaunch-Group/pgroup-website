"use client";

import { motion, Variants } from 'framer-motion';
import { Lightbulb, Star, Users, Shield, TrendingUp } from 'lucide-react';

// ---------------------------------------------------------------------------
// Static data — outside component
// ---------------------------------------------------------------------------
const stats = [
  { number: '100+', label: 'Projects Delivered',  color: 'text-electricBlue' },
  { number: '50+',  label: 'Clients Served',       color: 'text-amber'        },
  { number: '3',    label: 'Specialised Companies', color: 'text-navy'         },
  { number: '2+',   label: 'Years of Impact',       color: 'text-electricBlue' },
];

const coreValues = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    tagline: "We engineer tomorrow's solutions today.",
    description:
      "Across our three subsidiaries, we constantly challenge the status quo, embrace emerging technologies, and design forward-thinking solutions that address Africa's most pressing challenges.",
    iconBg: 'bg-electricBlue/10',
    iconColor: 'text-electricBlue',
    borderColor: 'border-electricBlue/30',
  },
  {
    icon: Star,
    title: 'Excellence',
    tagline: 'We set the standard, then raise it.',
    description:
      'We hold ourselves to the highest professional standards in every engagement — whether delivering enterprise software, placing a professional in their dream role, or training the next generation of tech talent.',
    iconBg: 'bg-amber/10',
    iconColor: 'text-amber',
    borderColor: 'border-amber/30',
  },
  {
    icon: Users,
    title: 'Empowerment',
    tagline: "We don't just create opportunities, we build the people who seize them.",
    description:
      "ProLaunch exists to transfer capability — equipping professionals to own their career trajectories, arming learners with skills that open doors, and giving businesses the tools to compete globally.",
    iconBg: 'bg-electricBlue/10',
    iconColor: 'text-electricBlue',
    borderColor: 'border-electricBlue/30',
  },
  {
    icon: Shield,
    title: 'Integrity',
    tagline: 'We do what we say, and we say what we mean.',
    description:
      'Trust is the foundation of every client relationship, every placement, and every training programme we deliver. We operate with radical transparency and never compromise our ethics for convenience.',
    iconBg: 'bg-amber/10',
    iconColor: 'text-amber',
    borderColor: 'border-amber/30',
  },
  {
    icon: TrendingUp,
    title: 'Impact',
    tagline: 'We measure success by the lives changed, the businesses transformed, and the careers launched.',
    description:
      "We measure success not just in revenue but in the professionals placed, the businesses scaled, and the learners who graduate ready to shape Africa's digital economy.",
    iconBg: 'bg-navy/10',
    iconColor: 'text-navy',
    borderColor: 'border-navy/30',
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
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Who We Are ── */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">

          {/* Left — text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.span
              variants={itemVariants}
              className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-electricBlue/10 text-electricBlue mb-5"
            >
              Who We Are
            </motion.span>
            <motion.h2
              variants={itemVariants}
              className="text-4xl sm:text-5xl font-extrabold text-navy leading-tight mb-6"
            >
              One Group.<br />
              <span className="text-electricBlue">Three Powerhouses.</span>
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 leading-relaxed mb-4"
            >
              ProLaunch Group Limited is the parent holding company of a group of companies
              focused on technology services, career development, and digital education across
              Africa. Our mission is to empower African businesses and professionals with
              cutting-edge solutions.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 leading-relaxed"
            >
              Through our three specialised subsidiaries, we bridge the gap between innovation
              and implementation, helping organisations modernise their operations while
              developing the next generation of African tech leaders.
            </motion.p>
          </motion.div>

          {/* Right — stats grid */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center hover:shadow-md transition-shadow duration-300"
              >
                <p className={`text-4xl font-extrabold mb-2 ${stat.color}`}>{stat.number}</p>
                <p className="text-gray-500 text-sm font-medium leading-snug">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── Mission Statement ── */}
        <motion.div
          className="relative rounded-2xl bg-navy px-8 py-14 md:px-16 text-center mb-20 overflow-hidden"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div
            className="absolute inset-0 opacity-20"
            style={{
              background: 'radial-gradient(ellipse 80% 60% at 50% 50%, #2E86DE 0%, transparent 70%)',
            }}
          />
          <div className="relative z-10">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-white/10 text-white/70 mb-6">
              Our Mission
            </span>
            <p className="text-white text-xl md:text-2xl font-medium leading-relaxed max-w-4xl mx-auto">
              &#8220;To accelerate Africa&#39;s human and technological potential by delivering
              world-class technology solutions, career development, and digital education;
              empowering individuals, businesses, and communities to launch further and
              grow stronger.&#8221;
            </p>
          </div>
        </motion.div>

        {/* ── Core Values ── */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-amber/10 text-amber mb-5">
            What We Stand For
          </span>
          <h2 className="text-4xl font-extrabold text-navy mb-4">Our Core Values</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Five principles that guide every decision, every hire, and every line of code
            across the ProLaunch Group.
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {coreValues.map((value) => {
            const IconComponent = value.icon;
            return (
              <motion.div
                key={value.title}
                variants={cardVariants}
                className={`group bg-white rounded-2xl border ${value.borderColor} p-7 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${value.iconBg} mb-5`}>
                  <IconComponent className={`h-7 w-7 ${value.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">{value.title}</h3>
                <p className={`text-sm font-semibold italic mb-3 ${value.iconColor}`}>
                  &ldquo;{value.tagline}&rdquo;
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}