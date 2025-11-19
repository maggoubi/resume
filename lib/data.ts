export interface CVData {
  personal: {
    name: string;
    title: string;
    phone: string;
    email: string;
    location: string;
    photo: string;
  };
  about: string;
  experience: Array<{
    period: string;
    title: string;
    company: string;
    location: string;
    responsibilities: string[];
  }>;
  education: Array<{
    year: string;
    degree: string;
    institution: string;
    field: string;
  }>;
  skills: {
    languages: Array<{ name: string; proficiency: string }>;
    programmingLanguages: string[];
    frameworks: string[];
    databases: string[];
    tools: string[];
    methodologies: string[];
    technologies: string[];
    cms: string[];
    systems: string[];
  };
  projects: Array<{
    title: string;
    period: string;
    description: string;
    technologies: string;
    responsibilities: string[];
    result?: string;
  }>;
  languages: Array<{ name: string; level: string; stars: number }>;
}

export const cvDataFr: CVData = {
  personal: {
    name: 'Mohamed AGGOUBI',
    title: 'Développeur FullStack',
    phone: '+212 680 585 160',
    email: 'mohamedaggoubi@gmail.com',
    location: 'Casablanca, Maroc',
    photo: '/images/profile.jpg',
  },
  about:
    "Développeur Full Stack passionné, spécialisé en PHP (Symfony) et JavaScript (Next.js, React.js), avec plus de 11 ans d'expérience dans le développement d'applications web performantes. J'interviens dans des environnements complexes, notamment en applications SaaS, e-commerce, gestion d'entreprise, ERP, et portails métiers. Je maîtrise les bonnes pratiques de développement (TDD, DDD, CI/CD) et j'accorde une grande importance à l'expérience utilisateur, la performance et la qualité du code.",
  experience: [
    {
      period: 'Depuis 11/2025',
      title: 'Développeur Full Stack',
      company: 'DeltaRM',
      location: 'Paris, France (à distance)',
      responsibilities: [
        'Concevoir et développer des applications, sites web et services API sous Symfony pour divers clients',
        'Développer et maintenir des modules métiers complexes au sein de la suite DeltaRM (Symfony/PHP, PostgreSQL)',
        'Implémenter des interfaces riches (Twig/jQuery) et optimiser l\'UX sur les modules Assurance, Contrôle et Audit (datatables dynamiques, formulaires wizard, exports PDF)',
        'Industrialiser la délivrance : pipelines CI/CD (GitLab), automatisation des migrations Doctrine/SQL, packaging Docker',
        'Garantir la qualité via revues de code, audits de sécurité, campagnes de tests exploratoires et automatisés',
        'Assurer la performance et la scalabilité (profiling Symfony, tuning PostgreSQL, cache applicatif/memoization) pour de gros volumes de données multi-clients',
      ],
    },
    {
      period: '12/2023 à 09/2025',
      title: 'Développeur Full Stack',
      company: 'Arxama',
      location: 'Lyon, France (à distance)',
      responsibilities: [
        'Concevoir et développer des applications, sites web et services API sous Symfony pour divers clients',
        'Intégrer des interfaces utilisateur réactives et conviviales en utilisant React.js',
        'Collaborer avec les designers pour intégrer les maquettes et les concepts graphiques dans le développement front-end',
        'Effectuer des tests unitaires, d\'intégration et de régression pour garantir le bon fonctionnement des nouvelles fonctionnalités et des mises à jour',
        'Documenter le code, les fonctionnalités et les processus pour faciliter la compréhension et la collaboration au sein de l\'équipe',
        'Participer activement aux réunions SCRUM, notamment la planification des sprints, les revues et rétrospectives',
        'Assurer la maintenance des produits logiciels',
        'Utiliser Git (GitLab) pour le contrôle de version',
      ],
    },
    {
      period: '04/2020 à 12/2023',
      title: 'Développeur Full Stack',
      company: 'MAYA GROUP',
      location: 'Casablanca',
      responsibilities: [
        'Concevoir et développer des applications, sites web et services API sous Symfony',
        'Intégrer des interfaces utilisateur réactives avec ReactJS',
        'Collaborer avec les designers pour le développement front-end',
        'Effectuer des tests unitaires, d\'intégration et de régression',
        'Participer aux réunions SCRUM et contribuer à la collaboration d\'équipe',
      ],
    },
    {
      period: '07/2018 à 04/2020',
      title: 'Développeur & Intégrateur',
      company: 'Groupe Enoxone',
      location: 'Genève, Suisse (à distance)',
      responsibilities: [
        'Concevoir et développer des applications sous Laravel et Wordpress',
        'Créer et personnaliser des modules et thèmes Wordpress',
        'Collaborer avec les graphistes pour intégrer les designs',
        'Participer aux réunions SCRUM et au support client',
      ],
    },
    {
      period: '09/2014 à 07/2018',
      title: 'Développeur Backend',
      company: 'Dyna Info',
      location: 'Casablanca',
      responsibilities: [
        'Concevoir et développer des applications sous Foxpro et .NET Core, SQL Server',
        'Intégration de maquettes en HTML/CSS/JS',
        'Maintenance des applications existantes',
      ],
    },
  ],
  education: [
    {
      year: '2022',
      degree: 'Master 2',
      institution: 'Faculté des sciences et techniques - Settat',
      field: 'Management des systèmes d\'information',
    },
    {
      year: '2015',
      degree: 'Licence Professionnelle',
      institution: 'ENITE - Casablanca',
      field: 'Systèmes d\'information et bases de données',
    },
  ],
  skills: {
    languages: [
      { name: 'Arabe', proficiency: 'Natif' },
      { name: 'Français', proficiency: 'Courant' },
      { name: 'Anglais', proficiency: 'Intermédiaire' },
    ],
    programmingLanguages: ['PHP (8+)', 'JavaScript (ES6+)', 'TypeScript', 'C#', 'Python'],
    frameworks: ['Symfony (2.8 à 6.4)', 'ReactJS (17/18)', 'Next.js', 'React Native', '.NET Core', 'Laravel'],
    databases: ['MySQL', 'PostgreSQL', 'Oracle', 'SQL Server'],
    tools: ['Git', 'GitHub', 'GitLab', 'CI/CD', 'Docker', 'Postman', 'PhpStorm', 'VS Code', 'Xdebug'],
    methodologies: ['Scrum', 'TDD', 'DDD', 'BDD'],
    technologies: ['REST API', 'OAuth2', 'SOAP', 'Microservices', 'GraphQL'],
    cms: ['WordPress', 'Joomla', 'Prestashop'],
    systems: ['Linux', 'Windows Server', 'Nginx', 'Apache'],
  },
  projects: [
    {
      title: 'DeltaRM',
      period: 'Nov. 2025 – Aujourd\'hui',
      description: 'Suite SaaS de gestion des risques',
      technologies: 'Symfony 4.4, PHP, PostgreSQL, Twig/jQuery, Docker, GitLab CI/CD',
      responsibilities: [
        'Développement et évolution des modules métiers (Assurance, Contrôle, Audit, Recouvrement)',
        'Implémentation et optimisation d\'interfaces internes (datatables dynamiques, formulaires wizard, exports PDF)',
        'Industrialisation des déploiements via pipelines GitLab CI/CD et packaging Docker',
        'Optimisation des performances : profiling Symfony, tuning PostgreSQL, cache applicatif/memoization',
        'Contribution à la qualité : revues de code, audits de sécurité, tests exploratoires et automatisés',
      ],
    },
    {
      title: 'FRMF.ma – Fédération Royale Marocaine de Football',
      period: 'Juil. 2025 – Oct. 2025',
      description: 'Refonte complète du site officiel de la FRMF en architecture multi-modules',
      technologies: 'Symfony 7.2 (stateful & stateless), API Platform, PostgreSQL, Next.js 15, Tailwind, Docker',
      responsibilities: [
        'Développement du CMS Admin en Symfony 7.2 (stateful) : gestion du contenu, médias, pages, actualités',
        'Conception et implémentation d\'une API REST stateless avec API Platform pour alimenter le frontend et les applications tierces',
        'Développement du frontend Next.js 15 : pages publiques, actualités, résultats, classements, équipe nationale, compétitions',
        'Mise en place de l\'architecture Docker et préparation des environnements de déploiement',
        'Intégration d\'un système de gestion des rôles, permissions et workflows éditoriaux',
        'Collaboration avec l\'équipe design pour produire une interface moderne et responsive',
      ],
    },
    {
      title: 'Ligue Chaouia Doukkala',
      period: 'Fév 2025 – Juin 2025',
      description: 'Application web de gestion des clubs, licences, compétitions et désignations',
      technologies: 'Symfony 6.4, MySQL, API REST',
      responsibilities: [
        'Développement du backoffice fédéral (gestion clubs, licences, sanctions, matchs, calendriers)',
        'Automatisation du processus de désignation des arbitres',
        'Mise en place d\'un extranet sécurisé pour les clubs (demandes, suivi des dossiers)',
        'Développement du portail public/mobile : résultats, classements en temps réel',
        'Génération de documents officiels et exports fédéraux (PDF, listings, rapports)',
      ],
    },
    {
      title: "I'm Class",
      period: 'Fév. 2024 – Jan. 2025',
      description: 'Plateforme e-commerce de vêtements personnalisés (B2C)',
      technologies: 'Symfony 6.4, React 18, MySQL, Nginx, GitLab CI, CMI',
      responsibilities: [
        'Conception du backoffice complet (gestion du catalogue, promotions, livraisons)',
        'Développement d\'un frontend React dynamique',
        'Mise en place du paiement sécurisé CMI',
        'Génération d\'exports comptables (PDF, Excel)',
        'Application des pratiques DDD, TDD et respect des normes RGPD',
      ],
    },
    {
      title: 'Hosybat',
      period: 'Avr. 2023 - Jan. 2024',
      description: 'Application de gestion de chantiers pour une entreprise de gaz',
      technologies: 'Symfony 6.3, MySQL 8, GitHub Actions',
      responsibilities: [
        'Conception d\'un système hiérarchique (projets > bâtiments > étages > logements)',
        'Développement de la gestion des rôles utilisateurs',
        'Implémentation des règles de validation multi-étapes',
        'Déploiement via pipeline CI/CD',
      ],
      result: 'Réduction de 60% du temps administratif',
    },
    {
      title: 'ERP Boudenib Industrie',
      period: 'Jan. - Mars 2023',
      description: 'ERP web modulaire multi-départements',
      technologies: 'Symfony 6, MySQL, Trello, GitHub',
      responsibilities: [
        'Développement des modules : production, stock, RH, facturation, installations',
        'Gestion multi-profils avec rôles spécifiques',
        'Dashboard temps réel avec statistiques graphiques',
        'Conception orientée modularité et évolutivité',
      ],
      result: 'Gain de 50% sur le traitement administratif',
    },
    {
      title: 'Portail Distributeurs - TotalEnergies',
      period: 'Août - Déc. 2022',
      description: 'Portail B2B de gestion des commandes de carburant',
      technologies: 'Symfony 5.4, React 17, PostgreSQL, OAuth2',
      responsibilities: [
        'Authentification SSO, gestion des profils distributeurs',
        'Intégration avec les systèmes internes Total',
      ],
    },
    {
      title: 'Portail Gérant - TotalEnergies',
      period: 'Mars - Juil. 2022',
      description: 'Backoffice de gestion pour gérants de stations Total',
      technologies: 'Symfony 5.4, Bootstrap, PostgreSQL',
      responsibilities: [
        'Développement des modules RH, gestion de stock, suivi de performance',
        'Automatisation des rapports mensuels (PDF)',
        'Structuration du code selon les principes SOLID',
      ],
    },
    {
      title: 'FACNOTE',
      period: 'Déc. 2021 - Fév. 2022',
      description: 'SaaS comptable pour experts-comptables français',
      technologies: 'Symfony 3.4, jQuery, MySQL',
      responsibilities: [
        'Développement du noyau comptable (journal, balance, TVA, grand livre)',
        'Génération de documents fiscaux conformes',
        'Structuration du backoffice complet',
      ],
    },
  ],
  languages: [
    { name: 'Arabe', level: 'Natif', stars: 5 },
    { name: 'Français', level: 'Courant', stars: 5 },
    { name: 'Anglais', level: 'Intermédiaire', stars: 3 },
  ],
};

export const cvDataEn: CVData = {
  personal: {
    name: 'Mohamed AGGOUBI',
    title: 'FullStack Developer',
    phone: '+212 680 585 160',
    email: 'mohamedaggoubi@gmail.com',
    location: 'Casablanca, Morocco',
    photo: '/images/profile.jpg',
  },
  about:
    'Passionate Full Stack Developer specialized in PHP (Symfony) and JavaScript (Next.js, React.js), with over 11 years of experience developing high-performance web applications. I work in complex environments including SaaS applications, e-commerce, business management, ERP, and business portals. I master development best practices (TDD, DDD, CI/CD) and place great importance on user experience, performance, and code quality.',
  experience: [
    {
      period: 'Since 11/2025',
      title: 'Full Stack Developer',
      company: 'DeltaRM',
      location: 'Paris, France (remote)',
      responsibilities: [
        'Design and develop applications, websites and API services with Symfony for various clients',
        'Develop and maintain complex business modules within the DeltaRM suite (Symfony/PHP, PostgreSQL)',
        'Implement rich interfaces (Twig/jQuery) and optimize UX on Insurance, Control and Audit modules (dynamic datatables, wizard forms, PDF exports)',
        'Industrialize delivery: CI/CD pipelines (GitLab), automation of Doctrine/SQL migrations, Docker packaging',
        'Ensure quality through code reviews, security audits, exploratory and automated testing campaigns',
        'Ensure performance and scalability (Symfony profiling, PostgreSQL tuning, application cache/memoization) for large multi-client data volumes',
      ],
    },
    {
      period: '12/2023 to 09/2025',
      title: 'Full Stack Developer',
      company: 'Arxama',
      location: 'Lyon, France (remote)',
      responsibilities: [
        'Design and develop applications, websites and API services with Symfony for various clients',
        'Integrate responsive and user-friendly interfaces using React.js',
        'Collaborate with designers to integrate mockups and graphic concepts in front-end development',
        'Perform unit, integration and regression testing to ensure proper functioning of new features and updates',
        'Document code, features and processes to facilitate understanding and collaboration within the team',
        'Actively participate in SCRUM meetings, including sprint planning, reviews and retrospectives',
        'Maintain software products',
        'Use Git (GitLab) for version control',
      ],
    },
    {
      period: '04/2020 to 12/2023',
      title: 'Full Stack Developer',
      company: 'MAYA GROUP',
      location: 'Casablanca',
      responsibilities: [
        'Design and develop applications, websites and API services with Symfony',
        'Integrate responsive user interfaces with ReactJS',
        'Collaborate with designers for front-end development',
        'Perform unit, integration and regression testing',
        'Participate in SCRUM meetings and contribute to team collaboration',
      ],
    },
    {
      period: '07/2018 to 04/2020',
      title: 'Developer & Integrator',
      company: 'Enoxone Group',
      location: 'Geneva, Switzerland (remote)',
      responsibilities: [
        'Design and develop applications with Laravel and Wordpress',
        'Create and customize Wordpress modules and themes',
        'Collaborate with designers to integrate designs',
        'Participate in SCRUM meetings and customer support',
      ],
    },
    {
      period: '09/2014 to 07/2018',
      title: 'Backend Developer',
      company: 'Dyna Info',
      location: 'Casablanca',
      responsibilities: [
        'Design and develop applications with Foxpro and .NET Core, SQL Server',
        'Integrate mockups in HTML/CSS/JS',
        'Maintain existing applications',
      ],
    },
  ],
  education: [
    {
      year: '2022',
      degree: 'Master\'s Degree',
      institution: 'Faculty of Science and Technology - Settat',
      field: 'Information Systems Management',
    },
    {
      year: '2015',
      degree: 'Professional Bachelor\'s Degree',
      institution: 'ENITE - Casablanca',
      field: 'Information Systems and Databases',
    },
  ],
  skills: {
    languages: [
      { name: 'Arabic', proficiency: 'Native' },
      { name: 'French', proficiency: 'Fluent' },
      { name: 'English', proficiency: 'Intermediate' },
    ],
    programmingLanguages: ['PHP (8+)', 'JavaScript (ES6+)', 'TypeScript', 'C#', 'Python'],
    frameworks: ['Symfony (2.8 to 6.4)', 'ReactJS (17/18)', 'Next.js', 'React Native', '.NET Core', 'Laravel'],
    databases: ['MySQL', 'PostgreSQL', 'Oracle', 'SQL Server'],
    tools: ['Git', 'GitHub', 'GitLab', 'CI/CD', 'Docker', 'Postman', 'PhpStorm', 'VS Code', 'Xdebug'],
    methodologies: ['Scrum', 'TDD', 'DDD', 'BDD'],
    technologies: ['REST API', 'OAuth2', 'SOAP', 'Microservices', 'GraphQL'],
    cms: ['WordPress', 'Joomla', 'Prestashop'],
    systems: ['Linux', 'Windows Server', 'Nginx', 'Apache'],
  },
  projects: [
    {
      title: 'DeltaRM',
      period: 'Nov. 2025 – Present',
      description: 'SaaS risk management suite',
      technologies: 'Symfony 4.4, PHP, PostgreSQL, Twig/jQuery, Docker, GitLab CI/CD',
      responsibilities: [
        'Development and evolution of business modules (Insurance, Control, Audit, Recovery)',
        'Implementation and optimization of internal interfaces (dynamic datatables, wizard forms, PDF exports)',
        'Industrialization of deployments via GitLab CI/CD pipelines and Docker packaging',
        'Performance optimization: Symfony profiling, PostgreSQL tuning, application cache/memoization',
        'Quality contribution: code reviews, security audits, exploratory and automated tests',
      ],
    },
    {
      title: 'FRMF.ma – Royal Moroccan Football Federation',
      period: 'Jul. 2025 – Oct. 2025',
      description: 'Complete redesign of the FRMF official website in multi-module architecture',
      technologies: 'Symfony 7.2 (stateful & stateless), API Platform, PostgreSQL, Next.js 15, Tailwind, Docker',
      responsibilities: [
        'Development of Admin CMS in Symfony 7.2 (stateful): content management, media, pages, news',
        'Design and implementation of a stateless REST API with API Platform to feed the frontend and third-party applications',
        'Frontend development with Next.js 15: public pages, news, results, standings, national team, competitions',
        'Setting up Docker architecture and preparation of deployment environments',
        'Integration of a role, permission and editorial workflow management system',
        'Collaboration with the design team to produce a modern and responsive interface',
      ],
    },
    {
      title: 'Ligue Chaouia Doukkala',
      period: 'Feb 2025 – Jun 2025',
      description: 'Web application for managing clubs, licenses, competitions and appointments',
      technologies: 'Symfony 6.4, MySQL, REST API',
      responsibilities: [
        'Development of the federal backoffice (club management, licenses, sanctions, matches, calendars)',
        'Automation of the referee appointment process',
        'Implementation of a secure extranet for clubs (requests, case tracking)',
        'Development of the public/mobile portal: results, real-time standings',
        'Generation of official documents and federal exports (PDF, listings, reports)',
      ],
    },
    {
      title: "I'm Class",
      period: 'Feb. 2024 – Jan. 2025',
      description: 'E-commerce platform for personalized clothing (B2C)',
      technologies: 'Symfony 6.4, React 18, MySQL, Nginx, GitLab CI, CMI',
      responsibilities: [
        'Complete backoffice design (catalog management, promotions, deliveries)',
        'Development of a dynamic React frontend',
        'Implementation of secure CMI payment',
        'Generation of accounting exports (PDF, Excel)',
        'Application of DDD, TDD practices and GDPR compliance',
      ],
    },
    {
      title: 'Hosybat',
      period: 'Apr. 2023 - Jan. 2024',
      description: 'Construction site management application for a gas company',
      technologies: 'Symfony 6.3, MySQL 8, GitHub Actions',
      responsibilities: [
        'Design of a hierarchical system (projects > buildings > floors > units)',
        'Development of user role management',
        'Implementation of multi-step validation rules',
        'Deployment via CI/CD pipeline',
      ],
      result: '60% reduction in administrative time',
    },
    {
      title: 'Boudenib Industry ERP',
      period: 'Jan. - Mar. 2023',
      description: 'Modular multi-department web ERP',
      technologies: 'Symfony 6, MySQL, Trello, GitHub',
      responsibilities: [
        'Development of modules: production, inventory, HR, billing, installations',
        'Multi-profile management with specific roles',
        'Real-time dashboard with graphical statistics',
        'Design focused on modularity and scalability',
      ],
      result: '50% gain in administrative processing',
    },
    {
      title: 'Distributor Portal - TotalEnergies',
      period: 'Aug. - Dec. 2022',
      description: 'B2B portal for fuel order management',
      technologies: 'Symfony 5.4, React 17, PostgreSQL, OAuth2',
      responsibilities: [
        'SSO authentication, distributor profile management',
        'Integration with Total internal systems',
      ],
    },
    {
      title: 'Manager Portal - TotalEnergies',
      period: 'Mar. - Jul. 2022',
      description: 'Management backoffice for Total station managers',
      technologies: 'Symfony 5.4, Bootstrap, PostgreSQL',
      responsibilities: [
        'Development of HR modules, inventory management, performance tracking',
        'Automation of monthly reports (PDF)',
        'Code structure according to SOLID principles',
      ],
    },
    {
      title: 'FACNOTE',
      period: 'Dec. 2021 - Feb. 2022',
      description: 'Accounting SaaS for French chartered accountants',
      technologies: 'Symfony 3.4, jQuery, MySQL',
      responsibilities: [
        'Development of the accounting core (journal, balance sheet, VAT, general ledger)',
        'Generation of compliant tax documents',
        'Complete backoffice structure',
      ],
    },
  ],
  languages: [
    { name: 'Arabic', level: 'Native', stars: 5 },
    { name: 'French', level: 'Fluent', stars: 5 },
    { name: 'English', level: 'Intermediate', stars: 3 },
  ],
};
