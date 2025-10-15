import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { I18nProvider } from '@/lib/i18n';
import Script from 'next/script';
import siteConfig from '@/lib/config';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.author.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author.name, url: siteConfig.url }],
  creator: siteConfig.author.name,
  publisher: siteConfig.author.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'profile',
    locale: 'fr_FR',
    alternateLocale: ['en_US'],
    url: siteConfig.url,
    title: `${siteConfig.author.name} - Développeur Full Stack Senior`,
    description:
      'Expert en développement web avec Symfony, React et Next.js. +9 ans d\'expérience en applications d\'entreprise, ERP, CRM et SaaS.',
    siteName: `${siteConfig.author.name} Portfolio`,
    images: [
      {
        url: '/images/profile.jpg',
        width: 1200,
        height: 630,
        alt: `${siteConfig.author.name} - Développeur Full Stack`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.author.name} - Développeur Full Stack`,
    description: 'Expert Symfony, React, Next.js | +9 ans d\'expérience | Applications d\'entreprise',
    images: ['/images/profile.jpg'],
    creator: siteConfig.author.twitter,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
    languages: {
      'fr-FR': siteConfig.url,
      'en-US': `${siteConfig.url}/en`,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: siteConfig.author.name,
  jobTitle: 'Développeur Full Stack Senior',
  description:
    'Développeur Full Stack spécialisé en PHP (Symfony) et JavaScript (React, Next.js) avec plus de 9 ans d\'expérience',
  url: siteConfig.url,
  image: `${siteConfig.url}/images/profile.jpg`,
  email: siteConfig.author.email,
  telephone: siteConfig.author.phone,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Casablanca',
    addressCountry: 'MA',
  },
  worksFor: {
    '@type': 'Organization',
    name: siteConfig.company.name,
    url: siteConfig.company.url,
  },
  alumniOf: siteConfig.education.map((edu) => ({
    '@type': 'EducationalOrganization',
    name: edu.name,
  })),
  knowsAbout: [
    'PHP',
    'Symfony',
    'JavaScript',
    'React',
    'Next.js',
    'TypeScript',
    'MySQL',
    'PostgreSQL',
    'Docker',
    'CI/CD',
    'TDD',
    'DDD',
    'Scrum',
  ],
  sameAs: [siteConfig.social.linkedin, siteConfig.social.github, siteConfig.social.weglob],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0ea5e9" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
