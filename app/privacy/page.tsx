import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Read the official Privacy Policy of ProLaunch Group. Learn how we collect, safeguard, and process user data across ProLaunch Technologies, ProLaunch Careers, and ProLaunch Academy.',
  alternates: {
    canonical: 'https://prolaunchgroup.org/privacy',
  },
  openGraph: {
    title: 'Privacy Policy | ProLaunch Group',
    description:
      'Learn how ProLaunch Group protects your personal data, CV assets, and privacy across our technology, career, and education platforms.',
    url: 'https://prolaunchgroup.org/privacy',
    siteName: 'ProLaunch Group',
    type: 'website',
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = 'August 4, 2026';

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-navy font-sans">
      <Navbar />

      {/* Hero Header Section */}
      <section className="bg-navy text-white pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3B82F6_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-2xl mb-4 backdrop-blur-sm">
            <ShieldCheck className="w-8 h-8 text-amber" />
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto">
            Your privacy and data security are fundamental to our mission across ProLaunch Group and its subsidiaries.
          </p>
          <p className="text-amber text-xs sm:text-sm font-semibold mt-4">
            Last Updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Main Content Article */}
      <main className="flex-grow max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-12 space-y-10 text-gray-700 leading-relaxed">
          
          {/* Executive Summary */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-navy flex items-center gap-3">
              <span className="w-2 h-7 bg-electricBlue rounded-full inline-block" />
              1. Introduction & Scope
            </h2>
            <p>
              ProLaunch Group Limited (&#34;ProLaunch Group&#34;, &#34;we&#34;, &#34;our&#34;, or &#34;us&#34;) operates as an emerging technology and human capital development group across Africa. This Privacy Policy applies to all services, websites, web applications (including LaunchIQ), bootcamps, and platforms provided by ProLaunch Group and its operating subsidiaries:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4 text-gray-800 font-medium">
              <li><strong className="text-navy">ProLaunch Technologies:</strong> Cloud computing, DevOps consulting, software engineering, and enterprise infrastructure management.</li>
              <li><strong className="text-navy">ProLaunch Careers:</strong> Career development, CV/LinkedIn optimization, LaunchIQ talent matching, and recruitment.</li>
              <li><strong className="text-navy">ProLaunch Academy:</strong> Digital bootcamps, IT certifications, and technical skills training.</li>
            </ul>
            <p>
              By accessing or using our websites (`prolaunchgroup.org`, `tech.prolaunchgroup.org`, `careers.prolaunchgroup.org`, `academy.prolaunchgroup.org`, or `launchiq.prolaunch.cloud`), you consent to the collection, storage, and processing practices described herein.
            </p>
          </section>

          <hr className="border-gray-100" />

          {/* Data Collection */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-navy flex items-center gap-3">
              <span className="w-2 h-7 bg-amber rounded-full inline-block" />
              2. Information We Collect
            </h2>
            <p>
              We collect information to provide better services, match top talent with global opportunities, and optimize technical infrastructure:
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 pt-2">
              <div className="p-5 rounded-xl bg-gray-50 border border-gray-100 space-y-2">
                <h3 className="font-bold text-navy text-base">Personal Contact Data</h3>
                <p className="text-sm text-gray-600">
                  Full name, corporate email address, phone number, physical address, and communication preferences provided during contact inquiries or affiliate registrations.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-gray-50 border border-gray-100 space-y-2">
                <h3 className="font-bold text-navy text-base">Career & Talent Assets</h3>
                <p className="text-sm text-gray-600">
                  Curriculum Vitae (CV), work experience, skill matrices, LinkedIn profile URLs, and educational background uploaded to LaunchIQ or ProLaunch Careers.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-gray-50 border border-gray-100 space-y-2">
                <h3 className="font-bold text-navy text-base">Academy Enrollment Data</h3>
                <p className="text-sm text-gray-600">
                  Course selections, bootcamp submissions, project repositories, certification records, and learning assessment scores.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-gray-50 border border-gray-100 space-y-2">
                <h3 className="font-bold text-navy text-base">Technical & Usage Logs</h3>
                <p className="text-sm text-gray-600">
                  IP address, browser specification, device metadata, referral source, pages viewed, and session metrics logged automatically via AWS Amplify & Analytics.
                </p>
              </div>
            </div>
          </section>

          <hr className="border-gray-100" />

          {/* How We Use Information */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-navy flex items-center gap-3">
              <span className="w-2 h-7 bg-electricBlue rounded-full inline-block" />
              3. How We Use Your Information
            </h2>
            <p>We process your data strictly for legitimate operational purposes:</p>
            <ul className="space-y-2 list-disc list-inside pl-4 text-gray-700">
              <li>Delivering cloud architecture consultations and technical software solutions.</li>
              <li>Running automated ATS CV optimization, score benchmarking, and employer matching through LaunchIQ.</li>
              <li>Managing bootcamp admissions, course delivery, and issuing verifiable completion certificates.</li>
              <li>Processing affiliate commissions, partner payments, and referral tracking.</li>
              <li>Responding to support requests, inquiry forms, and security notifications.</li>
            </ul>
          </section>

          <hr className="border-gray-100" />

          {/* Third-Party Service Providers */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-navy flex items-center gap-3">
              <span className="w-2 h-7 bg-amber rounded-full inline-block" />
              4. Data Sharing & Infrastructure
            </h2>
            <p className="font-semibold text-navy">
              We NEVER sell your personal information or CV data to third-party data brokers or advertisers.
            </p>
            <p>
              We share data only with trusted infrastructure providers required to operate our platform:
            </p>
            <ul className="space-y-2 list-disc list-inside pl-4 text-gray-700">
              <li><strong className="text-navy">Cloud Hosting & Security:</strong> AWS (Amazon Web Services Amplify & CloudFront) for high-availability cloud infrastructure and DDoS mitigation.</li>
              <li><strong className="text-navy">Transactional Communications:</strong> Resend API for sending automated contact confirmations and application updates.</li>
              <li><strong className="text-navy">Enrollment & Payments:</strong> Selar / Stripe for encrypted payment processing. We do not store raw credit card numbers.</li>
            </ul>
          </section>

          <hr className="border-gray-100" />

          {/* Security & Retention */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-navy flex items-center gap-3">
              <span className="w-2 h-7 bg-electricBlue rounded-full inline-block" />
              5. Data Security & Storage
            </h2>
            <p>
              ProLaunch Group implements enterprise-grade security protocols designed by our DevOps & Cloud Architecture team:
            </p>
            <div className="bg-navy/5 border-l-4 border-electricBlue p-4 rounded-r-xl space-y-2">
              <p className="text-sm font-semibold text-navy">Technical Safeguards:</p>
              <ul className="text-xs sm:text-sm text-gray-700 space-y-1 list-disc list-inside">
                <li>End-to-end HTTPS / TLS 1.3 encryption for all data in transit.</li>
                <li>AES-256 bit storage encryption for uploaded CV documents and database backups.</li>
                <li>Strict Role-Based Access Control (RBAC) limiting internal staff access to personal records.</li>
              </ul>
            </div>
          </section>

          <hr className="border-gray-100" />

          {/* Your Rights */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-navy flex items-center gap-3">
              <span className="w-2 h-7 bg-amber rounded-full inline-block" />
              6. Your Rights & Choices
            </h2>
            <p>Depending on your jurisdiction, you possess the following rights regarding your personal data:</p>
            <div className="grid sm:grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                <span className="block font-bold text-navy text-sm mb-1">Access & Review</span>
                <span className="text-xs text-gray-600">Request a copy of all personal records we hold about you.</span>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                <span className="block font-bold text-navy text-sm mb-1">Data Erasure</span>
                <span className="text-xs text-gray-600">Request complete removal of your CV and account details.</span>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                <span className="block font-bold text-navy text-sm mb-1">Opt-Out</span>
                <span className="text-xs text-gray-600">Unsubscribe from promotional emails at any time.</span>
              </div>
            </div>
          </section>

          <hr className="border-gray-100" />

          {/* Contact Information */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-navy flex items-center gap-3">
              <span className="w-2 h-7 bg-electricBlue rounded-full inline-block" />
              7. Contact Us
            </h2>
            <p>
              If you have any questions, privacy concerns, or data requests regarding this Privacy Policy, please contact our Data Protection Office:
            </p>
            <div className="p-6 bg-navy text-white rounded-xl space-y-2 text-sm sm:text-base">
              <p className="font-bold text-amber">ProLaunch Group Limited — Data Protection Office</p>
              <p>Email: <a href="mailto:info@prolaunchgroup.org" className="underline hover:text-amber">info@prolaunchgroup.org</a></p>
              <p>Subdomains: <span className="text-white/80">tech.prolaunchgroup.org | careers.prolaunchgroup.org | academy.prolaunchgroup.org</span></p>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
