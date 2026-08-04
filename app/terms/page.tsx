import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Read the official Terms of Service governing the use of ProLaunch Group websites, platforms, bootcamps, and subsidiary services.',
  alternates: {
    canonical: 'https://prolaunchgroup.org/terms',
  },
  openGraph: {
    title: 'Terms of Service | ProLaunch Group',
    description:
      'Official terms and conditions for ProLaunch Group, ProLaunch Technologies, ProLaunch Careers, and ProLaunch Academy.',
    url: 'https://prolaunchgroup.org/terms',
    siteName: 'ProLaunch Group',
    type: 'website',
  },
};

export default function TermsOfServicePage() {
  const lastUpdated = 'August 4, 2026';

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-navy font-sans">
      <Navbar />

      {/* Hero Header Section */}
      <section className="bg-navy text-white pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3B82F6_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-2xl mb-4 backdrop-blur-sm">
            <FileText className="w-8 h-8 text-amber" />
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Terms of Service
          </h1>
          <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto">
            These terms govern your access to and use of ProLaunch Group services, web applications, and subsidiary programs.
          </p>
          <p className="text-amber text-xs sm:text-sm font-semibold mt-4">
            Last Updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Main Content Article */}
      <main className="flex-grow max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-12 space-y-10 text-gray-700 leading-relaxed">
          
          {/* Agreement */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-navy flex items-center gap-3">
              <span className="w-2 h-7 bg-electricBlue rounded-full inline-block" />
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing, browsing, or registering for services provided by ProLaunch Group Limited (&#34;ProLaunch Group&#34;, &#34;we&#34;, or &#34;us&#34;) via `prolaunchgroup.org` or any of our subsidiary subdomains (`tech.prolaunchgroup.org`, `careers.prolaunchgroup.org`, `academy.prolaunchgroup.org`, `launchiq.prolaunch.cloud`), you agree to be bound by these Terms of Service (&#34;Terms&#34;).
            </p>
            <p>
              If you do not agree to these Terms, you must immediately discontinue use of our platforms and services.
            </p>
          </section>

          <hr className="border-gray-100" />

          {/* Scope of Ecosystem Services */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-navy flex items-center gap-3">
              <span className="w-2 h-7 bg-amber rounded-full inline-block" />
              2. Ecosystem & Subsidiary Services
            </h2>
            <p>
              ProLaunch Group operates three specialized operating divisions:
            </p>
            
            <div className="space-y-4 pt-2">
              <div className="p-5 rounded-xl bg-gray-50 border border-gray-100">
                <h3 className="font-bold text-navy text-base mb-1">ProLaunch Technologies</h3>
                <p className="text-sm text-gray-600">
                  Provides cloud migration, DevOps pipeline implementation, software development, and enterprise IT consultancy. Service Level Agreements (SLAs) and project statements of work (SOWs) will govern specific client engagements.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-gray-50 border border-gray-100">
                <h3 className="font-bold text-navy text-base mb-1">ProLaunch Careers & LaunchIQ</h3>
                <p className="text-sm text-gray-600">
                  Offers career grooming camps, CV optimization tools, LinkedIn profile reviews, and recruitment matching. While LaunchIQ uses AI algorithm scoring to enhance CV formatting and ATS compatibility, ProLaunch Group does not guarantee employment or specific hiring outcomes.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-gray-50 border border-gray-100">
                <h3 className="font-bold text-navy text-base mb-1">ProLaunch Academy</h3>
                <p className="text-sm text-gray-600">
                  Delivers technical bootcamps, live training, and certification programs. Enrollment fees, course schedules, and certificate eligibility requirements are specified at registration.
                </p>
              </div>
            </div>
          </section>

          <hr className="border-gray-100" />

          {/* User Responsibilities */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-navy flex items-center gap-3">
              <span className="w-2 h-7 bg-electricBlue rounded-full inline-block" />
              3. Account Registration & Conduct
            </h2>
            <p>When creating an account or submitting information on our platforms, you agree to:</p>
            <ul className="space-y-2 list-disc list-inside pl-4 text-gray-700">
              <li>Provide accurate, current, and complete personal and professional information.</li>
              <li>Maintain the security of your account credentials and immediately report any unauthorized access.</li>
              <li>Not upload malicious code, reverse-engineer proprietary algorithms, or perform unauthorized scanning or penetration testing on ProLaunch infrastructure.</li>
              <li>Refrain from submitting false, misleading, or plagiarized CV materials to LaunchIQ or employer partners.</li>
            </ul>
          </section>

          <hr className="border-gray-100" />

          {/* Intellectual Property */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-navy flex items-center gap-3">
              <span className="w-2 h-7 bg-amber rounded-full inline-block" />
              4. Intellectual Property Rights
            </h2>
            <p>
              All content, trademarks, software code, logos, designs, curriculum materials, and brand assets on our platforms are the exclusive property of ProLaunch Group Limited or its licensors.
            </p>
            <p>
              You are granted a limited, non-exclusive, non-transferable license to access and use our services for personal or internal business use. You may not reproduce, distribute, or create derivative works without prior written consent.
            </p>
          </section>

          <hr className="border-gray-100" />

          {/* Affiliate Program Terms */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-navy flex items-center gap-3">
              <span className="w-2 h-7 bg-electricBlue rounded-full inline-block" />
              5. Partner & Affiliate Program Terms
            </h2>
            <p>
              Participants in the ProLaunch Partner & Affiliate Program (`/affiliate`) must comply with the following rules:
            </p>
            <ul className="space-y-2 list-disc list-inside pl-4 text-gray-700">
              <li>Affiliates earn commissions based on verified, completed transactions via assigned referral links.</li>
              <li>Spamming, misleading advertising, or self-referral abuse will result in immediate termination and forfeiture of unpaid commissions.</li>
              <li>Payouts are processed on a monthly cycle subject to reaching minimum payout thresholds ($50 USD or local currency equivalent).</li>
            </ul>
          </section>

          <hr className="border-gray-100" />

          {/* Payments & Refunds */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-navy flex items-center gap-3">
              <span className="w-2 h-7 bg-amber rounded-full inline-block" />
              6. Payments, Fees & Refund Policy
            </h2>
            <p>
              Fees for bootcamps, CV optimization services, or consulting engagements are displayed prior to purchase:
            </p>
            <ul className="space-y-2 list-disc list-inside pl-4 text-gray-700">
              <li><strong className="text-navy">Bootcamps & Courses:</strong> Refunds may be requested up to 48 hours before the cohort start date. Once classes commence, fees are non-refundable.</li>
              <li><strong className="text-navy">Digital Products & AI Tools:</strong> Digital tools and instant downloadable content are non-refundable once accessed.</li>
            </ul>
          </section>

          <hr className="border-gray-100" />

          {/* Limitation of Liability */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-navy flex items-center gap-3">
              <span className="w-2 h-7 bg-electricBlue rounded-full inline-block" />
              7. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by applicable law, ProLaunch Group Limited shall not be liable for indirect, incidental, consequential, or punitive damages, or loss of profits, data, or goodwill resulting from:
            </p>
            <ul className="space-y-2 list-disc list-inside pl-4 text-gray-700">
              <li>Your use of or inability to use our services.</li>
              <li>Unauthorized access to or alteration of your transmissions or data.</li>
              <li>Decisions made by third-party employers based on CV submissions.</li>
            </ul>
          </section>

          <hr className="border-gray-100" />

          {/* Governing Law & Contact */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-navy flex items-center gap-3">
              <span className="w-2 h-7 bg-amber rounded-full inline-block" />
              8. Governing Law & Contact
            </h2>
            <p>
              These Terms shall be governed by and construed in accordance with applicable corporate laws. Any legal disputes shall be subject to binding arbitration or court jurisdiction in our primary operating country.
            </p>
            <div className="p-6 bg-navy text-white rounded-xl space-y-2 text-sm sm:text-base mt-4">
              <p className="font-bold text-amber">ProLaunch Group Legal Department</p>
              <p>Email: <a href="mailto:info@prolaunchgroup.org" className="underline hover:text-amber">info@prolaunchgroup.org</a></p>
              <p>Address: <span className="text-white/80">ProLaunch Group Limited, Africa</span></p>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
