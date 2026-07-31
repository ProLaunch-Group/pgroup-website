"use client";

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

// ---------------------------------------------------------------------------
// Static data — outside component
// ---------------------------------------------------------------------------
const navItems = [
  { href: '#home',        label: 'Home'          },
  { href: '#about',       label: 'About'         },
  { href: '#companies',   label: 'Our Ecosystem' },
  { href: '#services',    label: 'Services'      },
  { href: '#why-us',      label: 'Why Us'        },
  { href: '#partnership', label: 'Partnership'   },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled]             = useState(false);
  const [activeSection, setActiveSection]       = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);

    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = ['home', 'about', 'companies', 'services', 'why-us', 'partnership', 'contact'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (href: string) => {
    if (typeof window !== 'undefined' && window.location.pathname !== '/') {
      window.location.href = '/' + href;
      return;
    }
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const linkBase   = isScrolled ? 'text-gray-600 hover:text-navy' : 'text-white/90 hover:text-white';
  const linkActive = isScrolled ? 'text-navy font-semibold'       : 'text-white font-semibold';
  const menuIcon   = isScrolled ? 'text-navy'                     : 'text-white';

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-lg'
          : 'bg-navy/30 backdrop-blur-sm'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo-primary.png"
              alt="ProLaunch Group"
              width={240}
              height={72}
              className={`h-26 w-auto object-contain transition-all duration-300 ${
                isScrolled ? '' : 'brightness-0 invert'
              }`}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`text-sm transition-colors duration-200 ${
                  activeSection === item.href.slice(1) ? linkActive : linkBase
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* Secondary Button: Partner Program -> /affiliate */}
            <Link href="/affiliate">
              <motion.button
                className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200 ${
                  isScrolled
                    ? 'border border-navy/30 text-navy hover:bg-navy hover:text-white'
                    : 'border border-white/50 text-white hover:bg-white hover:text-navy'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Partner Program
              </motion.button>
            </Link>

            {/* Primary Button: Contact Us -> #contact */}
            <motion.button
              onClick={() => scrollToSection('#contact')}
              className="bg-amber text-navy px-5 py-2 rounded-lg font-semibold text-sm hover:bg-amber/90 transition-colors duration-200 shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen
              ? <X    className={`h-6 w-6 transition-colors duration-300 ${menuIcon}`} />
              : <Menu className={`h-6 w-6 transition-colors duration-300 ${menuIcon}`} />
            }
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-white border-t border-gray-100"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.href.slice(1)
                      ? 'text-navy font-semibold'
                      : 'text-gray-600 hover:text-navy'
                  }`}
                >
                  {item.label}
                </button>
              ))}

              {/* Secondary Mobile Button: Partner Program */}
              <Link href="/affiliate" className="block w-full" onClick={() => setIsMobileMenuOpen(false)}>
                <motion.button
                  className="w-full border border-navy/30 text-navy px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-navy hover:text-white transition-colors duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Partner Program
                </motion.button>
              </Link>

              {/* Primary Mobile Button: Contact Us */}
              <motion.button
                onClick={() => scrollToSection('#contact')}
                className="w-full bg-amber text-navy px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-amber/90 transition-colors duration-200 shadow-md"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}