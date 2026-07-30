"use client";

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin, FaXTwitter, FaInstagram, FaFacebook } from 'react-icons/fa6';

// ✅ Moved outside — static data, never changes between renders
const footerLinks = {
  technologies: {
    title: 'ProLaunch Technologies',
    links: [
      { label: 'Cloud Services',        href: '#', external: false },
      { label: 'DevOps',                href: '#', external: false },
      { label: 'Software Development',  href: '#', external: false },
      { label: 'IT Consultancy',        href: '#', external: false },
    ],
  },
  careers: {
    title: 'ProLaunch Careers',
    links: [
      { label: 'Career Grooming Camp',      href: 'https://selar.com/career-grooming-camp',        external: true  },
      { label: 'CV Optimisation Tool',      href: 'https://launchiq.prolaunch.cloud/',     external: true  },
      { label: 'Job Application Assistant', href: '#',                                               external: false },
      { label: 'Join Our Community',        href: 'https://forms.gle/Z1hyUo6UR94e5uw58',           external: true  },
    ],
  },
  academy: {
    title: 'ProLaunch Academy',
    links: [
      { label: 'Bootcamps',          href: '#', external: false },
      { label: 'Courses',            href: '#', external: false },
      { label: 'Corporate Training', href: '#', external: false },
      { label: 'Certifications',     href: '#', external: false },
    ],
  },
};

const socialLinks = [
  { icon: FaLinkedin,  href: '#', label: 'LinkedIn'  },
  { icon: FaXTwitter,  href: '#', label: 'Twitter/X' },
  { icon: FaInstagram, href: '#', label: 'Instagram' },
  { icon: FaFacebook,  href: '#', label: 'Facebook'  },
];

// ---------------------------------------------------------------------------
// Animation variants
// ---------------------------------------------------------------------------
const columnVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const bottomBarVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, delay: 0.4, ease: 'easeOut' as const } },
};

// ---------------------------------------------------------------------------
// Reusable column
// ---------------------------------------------------------------------------
interface FooterLink { label: string; href: string; external?: boolean; }
interface FooterColumnProps { title: string; links: FooterLink[]; onLinkClick: (href: string) => void; }

function FooterColumn({ title, links, onLinkClick }: FooterColumnProps) {
  return (
    <motion.div variants={columnVariants}>
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            {link.external ? (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm inline-block"
              >
                {link.label}
              </a>
            ) : (
              <button
                onClick={() => onLinkClick(link.href)}
                className="text-white/80 hover:text-white hover:translate-x-1 transition-all duration-200 text-left text-sm"
              >
                {link.label}
              </button>
            )}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export default function Footer() {
  const scrollToSection = (href: string) => {
    if (href.startsWith('#') && href.length > 1) {
      const element = document.querySelector(href);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
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
          {/* Branding Column */}
          <motion.div variants={columnVariants}>
            <Link href="/" className="inline-block mb-5">
              {/* brightness-0 invert renders the logo in white on the dark navy background */}
              <Image
                src="/images/logo-primary.png"
                alt="ProLaunch Group"
                width={240}
                height={72}
                className="h-26 w-auto object-contain brightness-0 invert"
              />
            </Link>

            <p className="text-white/80 mb-6 leading-relaxed text-sm">
              &#34;Launching Futures. Powering Growth.&#34; — Africa&#39;s emerging
              technology and human capital development group.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="p-2 bg-white/10 rounded-lg hover:bg-electricBlue transition-colors duration-200"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconComponent className="h-4 w-4" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Subsidiary columns */}
          <FooterColumn title={footerLinks.technologies.title} links={footerLinks.technologies.links} onLinkClick={scrollToSection} />
          <FooterColumn title={footerLinks.careers.title}      links={footerLinks.careers.links}      onLinkClick={scrollToSection} />
          <FooterColumn title={footerLinks.academy.title}      links={footerLinks.academy.links}      onLinkClick={scrollToSection} />
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
          <div className="flex flex-wrap justify-center gap-6">
            <button className="text-white/60 hover:text-white text-sm transition-colors duration-200" onClick={() => {}}>
              Privacy Policy
            </button>
            <button className="text-white/60 hover:text-white text-sm transition-colors duration-200" onClick={() => {}}>
              Terms of Service
            </button>
            <Link href="/affiliate" className="text-amber hover:text-amber/80 text-sm font-semibold transition-colors duration-200">
              Become an Affiliate
            </Link>
          </div>
        </motion.div>

      </div>
    </footer>
  );
}