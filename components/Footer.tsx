"use client";

import { motion, Variants } from 'framer-motion';
import { Rocket } from 'lucide-react';
import { FaLinkedin, FaXTwitter, FaInstagram, FaFacebook } from 'react-icons/fa6';

// ✅ Moved outside — static data, never changes between renders
const footerLinks = {
  prolaunch: {
    title: 'ProLaunch Group',
    links: [
      { label: 'About Us', href: '#about' },
      { label: 'Our Companies', href: '#companies' },
      { label: 'Services', href: '#services' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  technologies: {
    title: 'ProLaunch Technologies',
    links: [
      { label: 'Cloud Services', href: '#' },
      { label: 'DevOps', href: '#' },
      { label: 'Software Development', href: '#' },
      { label: 'IT Consultancy', href: '#' },
    ],
  },
  careers: {
    title: 'ProLaunch Careers',
    links: [
      { label: 'Career Coaching', href: '#' },
      { label: 'CV Optimisation', href: '#' },
      { label: 'Recruitment', href: '#' },
      { label: 'HR Consulting', href: '#' },
    ],
  },
  academy: {
    title: 'ProLaunch Academy',
    links: [
      { label: 'Bootcamps', href: '#' },
      { label: 'Courses', href: '#' },
      { label: 'Corporate Training', href: '#' },
      { label: 'Certifications', href: '#' },
    ],
  },
};

// ✅ Moved outside — static social links data
const socialLinks = [
  { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
  { icon: FaXTwitter, href: '#', label: 'Twitter/X' },
  { icon: FaInstagram, href: '#', label: 'Instagram' },
  { icon: FaFacebook, href: '#', label: 'Facebook' },
];

// ✅ Moved outside — static animation variants
const columnVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut' as const, // ✅ fixes TypeScript error
    },
  },
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // ✅ stagger replaces manual delay on each column
    },
  },
};

const bottomBarVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: 0.4,
      ease: 'easeOut' as const,
    },
  },
};

// ✅ Extracted reusable link column component — removes 3 blocks of repeated JSX
interface FooterColumnProps {
  title: string;
  links: { label: string; href: string }[];
  onLinkClick: (href: string) => void;
}

function FooterColumn({ title, links, onLinkClick }: FooterColumnProps) {
  return (
    <motion.div variants={columnVariants}>
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <button
              onClick={() => onLinkClick(link.href)}
              className="text-white/80 hover:text-white hover:translate-x-1 transition-all duration-200 text-left text-sm"
            >
              {link.label}
            </button>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

/**
 * Footer component for the ProLaunch Group website.
 * Features company information, subsidiary links, and social media icons.
 */
export default function Footer() {

  // ✅ Stays inside — uses document (browser API)
  const scrollToSection = (href: string) => {
    if (href.startsWith('#') && href.length > 1) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Main Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* ProLaunch Group Branding Column */}
          <motion.div variants={columnVariants}>
            <div className="flex items-center mb-4">
              <Rocket className="h-6 w-6 text-electricBlue mr-2" />
              <span className="text-lg font-bold">ProLaunch Group</span>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed text-sm">
              &#34;Launching Futures. Powering Growth.&#34; — Africa&#39;s emerging
              technology and human capital development group.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="p-2 bg-white/10 rounded-lg hover:bg-electricBlue transition-colors duration-200"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer" // ✅ security best practice
                  >
                    <IconComponent className="h-4 w-4" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Subsidiary Link Columns — using reusable FooterColumn */}
          <FooterColumn
            title={footerLinks.technologies.title}
            links={footerLinks.technologies.links}
            onLinkClick={scrollToSection}
          />
          <FooterColumn
            title={footerLinks.careers.title}
            links={footerLinks.careers.links}
            onLinkClick={scrollToSection}
          />
          <FooterColumn
            title={footerLinks.academy.title}
            links={footerLinks.academy.links}
            onLinkClick={scrollToSection}
          />
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          variants={bottomBarVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-white/60 text-sm">
            &copy; {new Date().getFullYear()} ProLaunch Group Limited. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <button
              className="text-white/60 hover:text-white text-sm transition-colors duration-200"
              onClick={() => {}} // hook up to a modal or page later
            >
              Privacy Policy
            </button>
            <button
              className="text-white/60 hover:text-white text-sm transition-colors duration-200"
              onClick={() => {}}
            >
              Terms of Service
            </button>
          </div>
        </motion.div>

      </div>
    </footer>
  );
}