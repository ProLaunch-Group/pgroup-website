"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, Variants } from 'framer-motion';
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react';
import { FaLinkedin, FaXTwitter, FaInstagram, FaFacebook } from 'react-icons/fa6';

// ✅ Moved outside — static data, never changes between renders
const socialLinks = [
  { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
  { icon: FaXTwitter, href: '#', label: 'Twitter/X' },
  { icon: FaInstagram, href: '#', label: 'Instagram' },
  { icon: FaFacebook, href: '#', label: 'Facebook' },
];

// ✅ Moved outside — static contact details
const contactDetails = [
  {
    icon: Mail,
    label: 'Email',
    value: 'info@prolaunchgroup.org',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+234 803 180 5112',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Abuja, Nigeria',
  },
];

// ✅ Moved outside — static animation variants
const headingVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut' as const, // ✅ fixes TypeScript error
    },
  },
};

const formVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut' as const,
    },
  },
};

const detailsVariants: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut' as const,
    },
  },
};

const successVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: 'easeOut' as const,
    },
  },
};

// ✅ Typed form data — replaces "any" which is bad practice in TypeScript
interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

/**
 * Contact component featuring a contact form and company contact details.
 * Uses React Hook Form for form validation and submission handling.
 */
export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>(); // ✅ typed form — no more "any"

  // ✅ Stays inside — uses state (setIsSubmitted, reset)
  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setIsSubmitted(true);
      reset();
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error sending your message. Please try again later.');
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
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
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to transform your business or advance your career? Let&#39;s discuss
            how ProLaunch Group can help.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Form */}
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg"
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name *
                </label>
                <input
                  {...register('fullName', { required: 'Full name is required' })}
                  type="text"
                  id="fullName"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electricBlue focus:border-transparent transition-colors duration-200"
                  placeholder="Your full name"
                />
                {errors.fullName && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email *
                </label>
                <input
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^\S+@\S+\.\S+$/i, // ✅ stricter — requires domain extension
                      message: 'Please enter a valid email address',
                    },
                  })}
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electricBlue focus:border-transparent transition-colors duration-200"
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone Number *
                </label>
                <input
                  {...register('phone', {
                    required: 'Phone number is required',
                    pattern: {
                      value: /^[+]?[\d\s\-()]{7,15}$/, // ✅ validates phone format
                      message: 'Please enter a valid phone number',
                    },
                  })}
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electricBlue focus:border-transparent transition-colors duration-200"
                  placeholder="+234 XXX XXX XXXX"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* Company Dropdown */}
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Select Company
                </label>
                <select
                  {...register('company')}
                  id="company"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electricBlue focus:border-transparent transition-colors duration-200 bg-white"
                >
                  <option value="">Select a company</option>
                  <option value="prolaunch-technologies">ProLaunch Technologies</option>
                  <option value="prolaunch-careers">ProLaunch Careers</option>
                  <option value="prolaunch-academy">ProLaunch Academy</option>
                  <option value="general">General Enquiry</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message *
                </label>
                <textarea
                  {...register('message', {
                    required: 'Message is required',
                    minLength: { // ✅ added minimum length — prevents empty/one-word messages
                      value: 20,
                      message: 'Message must be at least 20 characters',
                    },
                  })}
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electricBlue focus:border-transparent transition-colors duration-200 resize-none"
                  placeholder="Tell us about your project or enquiry..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-navy text-white py-3 px-6 rounded-lg font-semibold hover:bg-navy/90 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>

              {/* Success Message */}
              {isSubmitted && (
                <motion.div
                  className="flex items-center justify-center text-green-600 mt-4 p-3 bg-green-50 rounded-lg"
                  variants={successVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                  <span>Message sent successfully! We&#39;ll be in touch soon.</span>
                </motion.div>
              )}

            </form>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            className="space-y-8"
            variants={detailsVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-bold text-navy mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactDetails.map((detail, index) => {
                  const IconComponent = detail.icon;
                  return (
                    <div key={index} className="flex items-center">
                      <div className="w-10 h-10 rounded-lg bg-electricBlue/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <IconComponent className="h-5 w-5 text-electricBlue" />
                      </div>
                      <div>
                        <p className="font-medium text-navy">{detail.label}</p>
                        <p className="text-gray-600">{detail.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-navy mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={social.label}
                      target="_blank"
                      rel="noopener noreferrer" // ✅ security best practice for external links
                    >
                      <IconComponent className="h-5 w-5 text-navy" />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-navy/5 border border-navy/10 rounded-lg p-6">
              <p className="text-sm text-gray-500 mb-1">Business Hours</p>
              <p className="font-semibold text-navy">Monday – Friday</p>
              <p className="text-gray-600">9:00 AM – 6:00 PM (WAT)</p>
              <p className="text-sm text-gray-500 mt-3 mb-1">Response Time</p>
              <p className="text-gray-600">We typically respond within 24 hours</p>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}