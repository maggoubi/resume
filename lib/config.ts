/**
 * Configuration du site
 * Utilise les variables d'environnement ou des valeurs par défaut
 */

// Obtenir l'URL du site depuis les variables d'environnement ou détecter automatiquement
export const getSiteUrl = (): string => {
  // 1. Priorité: Variable d'environnement NEXT_PUBLIC_SITE_URL
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }

  // 2. En production sur Vercel: utiliser l'URL Vercel
  if (process.env.NEXT_PUBLIC_VERCEL_URL) {
    return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
  }

  // 3. Détecter l'URL depuis le navigateur (uniquement côté client)
  if (typeof window !== 'undefined') {
    return window.location.origin;
  }

  // 4. Fallback pour le développement local
  return 'http://localhost:3000';
};

export const siteConfig = {
  // URL du site (dynamique)
  url: getSiteUrl(),

  // Informations personnelles
  author: {
    name: 'Mohamed AGGOUBI',
    email: 'mohamedaggoubi@gmail.com',
    phone: '+212680585160',
    location: 'Casablanca, Morocco',
    twitter: '@mohamedaggoubi',
  },

  // Métadonnées
  title: 'Mohamed AGGOUBI - Développeur Full Stack | Symfony, React, Next.js',
  description:
    "Développeur Full Stack avec +9 ans d'expérience en PHP (Symfony), JavaScript (React, Next.js), spécialisé dans le développement d'applications web, ERP, CRM, SaaS. Expert en architecture logicielle, TDD, DDD, CI/CD. Disponible pour missions freelance et CDI.",
  keywords: [
    'Développeur Full Stack',
    'Symfony',
    'React',
    'Next.js',
    'PHP',
    'JavaScript',
    'TypeScript',
    'MySQL',
    'PostgreSQL',
    'API REST',
    'Développeur Web',
    'Maroc',
    'Casablanca',
    'Freelance',
    'TDD',
    'DDD',
    'CI/CD',
    'Docker',
    'Git',
    'Scrum',
    'ERP',
    'CRM',
    'SaaS',
    'E-commerce',
    'Application mobile',
    'React Native',
    'Laravel',
    'WordPress',
  ],

  // Réseaux sociaux
  social: {
    linkedin: 'https://www.linkedin.com/in/mohamedaggoubi',
    github: 'https://github.com/mohamedaggoubi',
    weglob: 'https://weglob.com',
  },

  // Entreprise
  company: {
    name: 'Weglob',
    url: 'https://weglob.com',
  },

  // Formation
  education: [
    {
      name: 'Faculté des sciences et techniques - Settat',
    },
    {
      name: 'ENITE - Casablanca',
    },
  ],
};

export default siteConfig;
