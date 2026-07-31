import type { Metadata } from 'next';
import AffiliateClient from '../../components/AffiliateClient';

const siteUrl = 'https://prolaunchgroup.org';

export const metadata: Metadata = {
  title: 'Partner & Affiliate Program',
  description:
    'Join the ProLaunch Group Affiliate & Partner Program. Earn up to 20% commission promoting tech bootcamps, career tools (LaunchIQ), and enterprise IT solutions.',
  alternates: {
    canonical: `${siteUrl}/affiliate`,
  },
  openGraph: {
    title: 'Partner & Affiliate Program | ProLaunch Group',
    description:
      'Earn generous monthly commissions by promoting ProLaunch Careers products, ProLaunch Academy bootcamps, and ProLaunch Technologies services.',
    url: `${siteUrl}/affiliate`,
    siteName: 'ProLaunch Group',
    images: [
      {
        url: `${siteUrl}/images/logo-primary.png`,
        width: 1200,
        height: 630,
        alt: 'ProLaunch Partner & Affiliate Program',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Partner & Affiliate Program | ProLaunch Group',
    description:
      'Earn up to 20% commission promoting Africa\'s leading tech and career ecosystem.',
    images: [`${siteUrl}/images/logo-primary.png`],
  },
};

export default function AffiliatePage() {
  return <AffiliateClient />;
}
