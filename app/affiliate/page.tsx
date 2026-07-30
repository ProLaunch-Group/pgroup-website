"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, Variants } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { 
  CheckCircle, 
  DollarSign, 
  TrendingUp, 
  Users, 
  ShieldCheck, 
  Award, 
  ArrowRight, 
  HelpCircle, 
  Globe, 
  BookOpen, 
  Briefcase, 
  ChevronDown,
  Sparkles
} from 'lucide-react';

interface AffiliateFormData {
  fullName: string;
  email: string;
  phone: string;
  platform: string;
  targetProducts: string;
  message: string;
}

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function AffiliatePage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<AffiliateFormData>();

  const onSubmit = async (data: AffiliateFormData) => {
    try {
      const response = await fetch('/api/affiliate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send application');
      }

      setIsSubmitted(true);
      reset();
      setTimeout(() => setIsSubmitted(false), 7000);
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('There was an issue sending your application. Please try again or email us directly.');
    }
  };

  const scrollToForm = () => {
    const el = document.getElementById('affiliate-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const benefits = [
    {
      icon: DollarSign,
      title: 'High Commission Rates',
      description: 'Earn generous commission on every successful bootcamp enrollment, product sale, and corporate referral.'
    },
    {
      icon: TrendingUp,
      title: 'High-Converting Ecosystem',
      description: 'Promote sought-after tech bootcamps, career grooming programs, and AI-powered CV optimization tools.'
    },
    {
      icon: Users,
      title: 'Real-Time Tracking',
      description: 'Transparent dashboard analytics to track clicks, conversions, and payouts seamlessly.'
    },
    {
      icon: ShieldCheck,
      title: 'Reliable Monthly Payouts',
      description: 'Get paid reliably every month via local bank transfer or international digital wallets.'
    },
    {
      icon: Award,
      title: 'Marketing & Asset Support',
      description: 'Receive custom promotional banners, copy templates, and priority guidance from partner managers.'
    },
    {
      icon: Globe,
      title: 'Pan-African & Global Reach',
      description: 'Empower candidates and organizations across Africa and the global diaspora while growing your income.'
    }
  ];

  const productsToPromote = [
    {
      title: 'ProLaunch Careers',
      badge: 'Up to 20% Commission',
      icon: Briefcase,
      color: 'border-electricBlue/30 bg-electricBlue/5',
      items: [
        'Career Grooming Camp (Selar Program)',
        'LaunchIQ CV Optimisation Tool',
        'Job Prep & Application Assistant Packs',
        'Talent Placement Referrals'
      ]
    },
    {
      title: 'ProLaunch Academy',
      badge: 'Highest Payout / Sale',
      icon: BookOpen,
      color: 'border-amber/30 bg-amber/5',
      items: [
        'Full Stack & Software Engineering Bootcamps',
        'DevOps & Cloud Engineering Training',
        'Data Science & AI Intensive Courses',
        'Corporate Tech Workshops & Certifications'
      ]
    },
    {
      title: 'ProLaunch Technologies',
      badge: 'Enterprise Partner Bounties',
      icon: Sparkles,
      color: 'border-purple-500/30 bg-purple-500/5',
      items: [
        'Corporate Cloud & DevOps Consultancy',
        'Custom Software Development Projects',
        'Enterprise Digital Transformation Deals',
        'IT Managed Infrastructure Retainers'
      ]
    }
  ];

  const steps = [
    {
      step: '01',
      title: 'Submit Application',
      description: 'Fill out our quick affiliate application form with details about your platform or network.'
    },
    {
      step: '02',
      title: 'Get Unique Link & Materials',
      description: 'Receive your unique tracking links, promo codes, and ready-to-use marketing collateral.'
    },
    {
      step: '03',
      title: 'Share & Earn Payouts',
      description: 'Promote to your audience, community, or clients and start earning monthly commissions.'
    }
  ];

  const faqs = [
    {
      q: 'Who can join the ProLaunch Affiliate Program?',
      a: 'Anyone! Content creators, tech influencers, career coaches, campus ambassadors, community leads, and corporate consultants are all welcome to apply.'
    },
    {
      q: 'How much can I earn as an affiliate?',
      a: 'Commissions vary by product tier. You can earn 15% to 20% per sale on ProLaunch Careers products, flat referral bonuses up to $100+ on Academy Bootcamp signups, and custom project bounties for Technologies enterprise leads.'
    },
    {
      q: 'When and how do I get paid?',
      a: 'Payouts are processed on the 1st of every month for all qualified sales made in the previous cycle, via Direct Bank Transfer (Nigeria/Africa) or Wise/PayPal for international partners.'
    },
    {
      q: 'Is there any fee to join?',
      a: 'No! Joining the ProLaunch Affiliate & Partner Program is 100% free.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      <main className="flex-grow pt-20">

        {/* Hero Section */}
        <section className="bg-navy text-white relative overflow-hidden py-20 lg:py-28">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3B82F6_1px,transparent_1px)] [background-size:16px_16px]"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              className="text-center max-w-3xl mx-auto"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber/20 text-amber text-xs sm:text-sm font-semibold mb-6 border border-amber/30">
                <Sparkles className="h-4 w-4" /> ProLaunch Partner & Affiliate Program
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
                Empower Tech Talent. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-electricBlue to-amber">
                  Earn Monthly Income.
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-white/80 mb-10 leading-relaxed">
                Partner with Africa&#39;s leading technology and career ecosystem. Promote our top-rated bootcamps, AI career tools, and enterprise IT services to earn attractive commissions.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <motion.button
                  onClick={scrollToForm}
                  className="bg-amber text-navy px-8 py-4 rounded-lg font-bold text-base hover:bg-amber/90 transition-all duration-200 shadow-lg hover:shadow-amber/20 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Become a Partner <ArrowRight className="h-5 w-5" />
                </motion.button>
                <a
                  href="#how-it-works"
                  className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-lg font-semibold text-base hover:bg-white/20 transition-all duration-200 text-center"
                >
                  How It Works
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
                Why Join Our Partner Network?
              </h2>
              <p className="text-gray-600 text-lg">
                We equip our affiliates with everything needed to convert leads into high-paying commissions.
              </p>
            </div>

            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {benefits.map((b, index) => {
                const IconComp = b.icon;
                return (
                  <motion.div 
                    key={index}
                    variants={fadeIn}
                    className="p-8 rounded-xl bg-gray-50 border border-gray-100 hover:border-electricBlue/40 hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-electricBlue/10 text-electricBlue flex items-center justify-center mb-6 group-hover:bg-electricBlue group-hover:text-white transition-colors duration-300">
                      <IconComp className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-navy mb-3">{b.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{b.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Products You Can Promote */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
                What You Can Promote
              </h2>
              <p className="text-gray-600 text-lg">
                Earn across our high-demand subsidiaries in careers, education, and technology solutions.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {productsToPromote.map((product, idx) => {
                const IconComponent = product.icon;
                return (
                  <div 
                    key={idx} 
                    className={`p-8 rounded-2xl border ${product.color} bg-white shadow-md flex flex-col justify-between`}
                  >
                    <div>
                      <div className="flex justify-between items-start mb-6">
                        <div className="p-3 bg-navy text-white rounded-xl">
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <span className="text-xs font-bold px-3 py-1 bg-navy/10 text-navy rounded-full">
                          {product.badge}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-navy mb-4">{product.title}</h3>
                      <ul className="space-y-3 mb-8">
                        {product.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start text-sm text-gray-700">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <button
                      onClick={scrollToForm}
                      className="w-full py-3 px-4 border border-navy text-navy font-semibold rounded-lg hover:bg-navy hover:text-white transition-colors duration-200 text-sm"
                    >
                      Promote {product.title}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
                3 Easy Steps to Get Started
              </h2>
              <p className="text-gray-600 text-lg">
                Start earning in 3 simple steps without complex setups.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 relative">
              {steps.map((s, index) => (
                <div key={index} className="text-center p-8 bg-gray-50 rounded-2xl relative">
                  <div className="w-16 h-16 rounded-full bg-navy text-amber text-2xl font-bold flex items-center justify-center mx-auto mb-6 shadow-md">
                    {s.step}
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">{s.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Signup Form Section */}
        <section id="affiliate-form" className="py-20 bg-navy text-white relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white text-navy p-8 sm:p-12 rounded-2xl shadow-2xl">
              
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-navy mb-3">
                  Apply for the ProLaunch Partner Program
                </h2>
                <p className="text-gray-600">
                  Fill out the form below. Our partner management team will review your application and get back to you within 24–48 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      {...register('fullName', { required: 'Full name is required' })}
                      type="text"
                      id="fullName"
                      placeholder="e.g. Alex Johnson"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electricBlue focus:border-transparent"
                    />
                    {errors.fullName && <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      {...register('email', {
                        required: 'Email is required',
                        pattern: { value: /^\S+@\S+\.\S+$/i, message: 'Enter a valid email' }
                      })}
                      type="email"
                      id="email"
                      placeholder="alex@example.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electricBlue focus:border-transparent"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      {...register('phone', { required: 'Phone number is required' })}
                      type="tel"
                      id="phone"
                      placeholder="+234 XXX XXX XXXX"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electricBlue focus:border-transparent"
                    />
                    {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
                  </div>

                  {/* Primary Platform */}
                  <div>
                    <label htmlFor="platform" className="block text-sm font-semibold text-gray-700 mb-2">
                      Primary Promotion Channel / Network *
                    </label>
                    <select
                      {...register('platform', { required: 'Please select your primary channel' })}
                      id="platform"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electricBlue focus:border-transparent bg-white"
                    >
                      <option value="">Select channel...</option>
                      <option value="social-media">Social Media (LinkedIn / Twitter / IG / TikTok)</option>
                      <option value="content-creator">YouTube / Content Creator / Blogger</option>
                      <option value="student-community">Student Lead / Campus Ambassador</option>
                      <option value="community-lead">Tech Community Lead / Group Admin</option>
                      <option value="corporate-consultant">Corporate Consultant / Recruiter</option>
                      <option value="other">Direct Word of Mouth / Network</option>
                    </select>
                    {errors.platform && <p className="mt-1 text-sm text-red-600">{errors.platform.message}</p>}
                  </div>
                </div>

                {/* Target Products */}
                <div>
                  <label htmlFor="targetProducts" className="block text-sm font-semibold text-gray-700 mb-2">
                    Primary Subsidiary Interest
                  </label>
                  <select
                    {...register('targetProducts')}
                    id="targetProducts"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electricBlue focus:border-transparent bg-white"
                  >
                    <option value="all">All ProLaunch Products (Careers, Academy, Tech)</option>
                    <option value="prolaunch-careers">ProLaunch Careers (CV Tool, Grooming Camp)</option>
                    <option value="prolaunch-academy">ProLaunch Academy (Bootcamps & Courses)</option>
                    <option value="prolaunch-technologies">ProLaunch Technologies (Enterprise IT Deals)</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Tell us about your audience or how you plan to promote ProLaunch
                  </label>
                  <textarea
                    {...register('message')}
                    id="message"
                    rows={4}
                    placeholder="Share links to your social profiles, website, or community size..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electricBlue focus:border-transparent resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-navy text-white font-bold py-4 px-6 rounded-lg hover:bg-navy/90 transition-colors duration-200 shadow-md disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
                </button>

                {isSubmitted && (
                  <div className="p-4 bg-green-50 text-green-700 rounded-lg flex items-center justify-center gap-2 border border-green-200">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-600" />
                    <span>Application submitted successfully! Our team will contact you shortly.</span>
                  </div>
                )}
              </form>

            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-navy mb-4 flex items-center justify-center gap-2">
                <HelpCircle className="h-8 w-8 text-electricBlue" /> Frequently Asked Questions
              </h2>
              <p className="text-gray-600">Everything you need to know about our partner program.</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full text-left p-6 font-bold text-navy flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${openFaq === index ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === index && (
                    <div className="p-6 bg-white border-t border-gray-100 text-gray-600 text-sm leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
