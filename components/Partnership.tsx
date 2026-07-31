"use client";

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { 
  Sparkles, 
  TrendingUp, 
  Users, 
  DollarSign, 
  ArrowRight, 
  Award, 
  Briefcase, 
  BookOpen, 
  ShieldCheck 
} from 'lucide-react';

const sectionHeaderVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } }
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function Partnership() {
  const highlights = [
    {
      icon: DollarSign,
      title: 'Competitive Commissions',
      desc: 'Earn up to 20% per sale on career tools, courses, and premium bootcamps.'
    },
    {
      icon: TrendingUp,
      title: 'High-Demand Products',
      desc: 'Promote LaunchIQ CV Optimizer, Selar career camps, and tech bootcamps.'
    },
    {
      icon: Users,
      title: 'Community & Creator Friendly',
      desc: 'Perfect for student leads, campus ambassadors, influencers, and coaches.'
    },
    {
      icon: ShieldCheck,
      title: 'Reliable Monthly Payouts',
      desc: 'Transparent referral tracking and automated monthly payouts to your account.'
    }
  ];

  return (
    <section id="partnership" className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electricBlue/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          variants={sectionHeaderVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy/5 text-navy text-xs sm:text-sm font-semibold mb-4 border border-navy/10">
            <Sparkles className="h-4 w-4 text-amber" /> ProLaunch Partner Program
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy tracking-tight mb-4">
            Partner With Us & Earn as You Grow
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl leading-relaxed">
            Join our affiliate and referral network. Empower Africa&#39;s next generation of tech leaders while building a recurring income stream.
          </p>
        </motion.div>

        {/* Highlight Cards Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {highlights.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-md hover:shadow-xl hover:border-amber/40 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-navy text-amber flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComp className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Feature Callout Card */}
        <motion.div 
          className="bg-navy text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4 text-amber font-semibold text-sm">
              <Award className="h-5 w-5" /> Multiple Revenue Streams
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
              Ready to Monetize Your Network & Drive Impact?
            </h3>
            <p className="text-white/80 text-base sm:text-lg mb-6 leading-relaxed">
              Whether you are an influencer, educator, student leader, or industry professional, our partner program offers tailored promo codes, custom tracking links, and marketing collateral.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-white/90">
              <span className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                <Briefcase className="h-4 w-4 text-electricBlue" /> Careers Products
              </span>
              <span className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                <BookOpen className="h-4 w-4 text-amber" /> Academy Bootcamps
              </span>
              <span className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                <Sparkles className="h-4 w-4 text-purple-400" /> Tech Retainers
              </span>
            </div>
          </div>

          <div className="flex-shrink-0">
            <Link href="/affiliate">
              <motion.button
                className="bg-amber text-navy px-8 py-4 rounded-xl font-bold text-base hover:bg-amber/90 transition-all duration-200 shadow-lg flex items-center gap-2 group whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Become an Affiliate Partner <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
