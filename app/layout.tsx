import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

const siteUrl = 'https://prolaunchgroup.org';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ProLaunch Group | Launching Futures. Powering Growth.",
    template: "%s | ProLaunch Group",
  },
  description:
    "ProLaunch Group is Africa's emerging technology and human capital ecosystem. Driving digital growth through ProLaunch Technologies (Cloud & DevOps), ProLaunch Careers (LaunchIQ), and ProLaunch Academy.",
  keywords: [
    "ProLaunch Group",
    "ProLaunch Technologies",
    "ProLaunch Careers",
    "ProLaunch Academy",
    "LaunchIQ CV Optimizer",
    "Tech Bootcamps Africa",
    "Cloud Consultancy Nigeria",
    "DevOps Engineering",
    "Career Grooming Camp",
    "Software Engineering Bootcamps",
    "Africa Tech Talent",
  ],
  authors: [{ name: "ProLaunch Group", url: siteUrl }],
  creator: "ProLaunch Technologies",
  publisher: "ProLaunch Group",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/Primary-logo.jpg", type: "image/jpeg" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [
      { url: "/images/Primary-logo.jpg", sizes: "180x180", type: "image/jpeg" },
    ],
  },
  openGraph: {
    title: "ProLaunch Group | Launching Futures. Powering Growth.",
    description:
      "Africa's premier technology and human capital development group. Building talent, software, cloud infrastructure, and career acceleration tools.",
    url: siteUrl,
    siteName: "ProLaunch Group",
    images: [
      {
        url: `${siteUrl}/images/Primary-logo.jpg`,
        width: 1200,
        height: 630,
        alt: "ProLaunch Group Primary Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ProLaunch Group | Launching Futures. Powering Growth.",
    description:
      "Transforming Africa's tech ecosystem through ProLaunch Technologies, ProLaunch Careers, and ProLaunch Academy.",
    images: [`${siteUrl}/images/Primary-logo.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "ProLaunch Group",
      url: siteUrl,
      logo: `${siteUrl}/images/Primary-logo.jpg`,
      description:
        "ProLaunch Group is Africa's emerging technology and human capital development group.",
      sameAs: [
        "https://www.linkedin.com/company/prolaunch-group/",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+234-815-456-3245",
        contactType: "customer service",
        email: "info@prolaunchgroup.org",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "ProLaunch Group",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          async
          type="text/javascript"
          src="https://static.klaviyo.com/onsite/js/W5QEuT/klaviyo.js?company_id=W5QEuT"
        />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `//Initialize Klaviyo object on page load
!function(){if(!window.klaviyo){window._klOnsite=window._klOnsite||[];try{window.klaviyo=new Proxy({},{get:function(n,i){return"push"===i?function(){var n;(n=window._klOnsite).push.apply(n,arguments)}:function(){for(var n=arguments.length,o=new Array(n),w=0;w<n;w++)o[w]=arguments[w];var t="function"==typeof o[o.length-1]?o.pop():void 0,e=new Promise((function(n){window._klOnsite.push([i].concat(o,[function(i){t&&t(i),n(i)}]))}));return e}}})}catch(n){window.klaviyo=window.klaviyo||[],window.klaviyo.push=function(){var n;(n=window._klOnsite).push.apply(n,arguments)}}}}();`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
