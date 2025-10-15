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
    "Développeur Full Stack passionné, spécialisé en PHP (Symfony) et JavaScript (React.js, Next.js), avec plus de 9 ans d'expérience dans le développement d'applications web performantes. J'interviens dans des environnements complexes, notamment en e-commerce, gestion d'entreprise, ERP, applications SaaS, et portails métiers. Je maîtrise les bonnes pratiques de développement (TDD, DDD, CI/CD) et j'accorde une grande importance à l'expérience utilisateur, la performance et la qualité du code.",
  experience: [
    {
      period: 'Depuis 12/2023',
      title: 'Développeur Full Stack',
      company: 'Arxama',
      location: 'Lyon, France (à distance)',
      responsibilities: [
        'Concevoir et développer des applications, sites web et services API sous Symfony pour divers clients',
        'Intégrer des interfaces utilisateur réactives et conviviales en utilisant ReactJS',
        'Collaborer avec les designers pour intégrer les maquettes et les concepts graphiques',
        'Effectuer des tests unitaires, d\'intégration et de régression',
        'Documenter le code, les fonctionnalités et les processus',
        'Participer activement aux réunions SCRUM',
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
      title: 'FRMF.ma',
      period: 'Depuis 10/2025',
      description: 'Site web de la Fédération Royale Marocaine de Football',
      technologies: 'Symfony 7, Next.js 15, MySQL, Docker, GitLab CI',
      responsibilities: [
        'Développement backend Symfony stateful avec CMS complet personnalisé',
        'Création d\'une API RESTful stateless pour le frontend',
        'Développement frontend avec Next.js 15 (App Router, Server Components)',
        'Architecture microservices avec séparation backend/frontend',
        'Implémentation de fonctionnalités avancées de gestion de contenu',
        'Optimisation des performances et SEO',
        'Déploiement via CI/CD avec Docker',
      ],
    },
    {
      title: "I'm Class",
      period: 'Fév. 2024 - Déc. 2024',
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
    'Passionate Full Stack Developer specialized in PHP (Symfony) and JavaScript (React.js, Next.js), with over 9 years of experience developing high-performance web applications. I work in complex environments including e-commerce, business management, ERP, SaaS applications, and business portals. I master development best practices (TDD, DDD, CI/CD) and place great importance on user experience, performance, and code quality.',
  experience: [
    {
      period: 'Since 12/2023',
      title: 'Full Stack Developer',
      company: 'Arxama',
      location: 'Lyon, France (remote)',
      responsibilities: [
        'Design and develop applications, websites and API services with Symfony for various clients',
        'Integrate responsive and user-friendly interfaces using ReactJS',
        'Collaborate with designers to integrate mockups and graphic concepts',
        'Perform unit, integration and regression testing',
        'Document code, features and processes',
        'Actively participate in SCRUM meetings',
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
      title: 'FRMF.ma',
      period: 'Since 10/2025',
      description: 'Royal Moroccan Football Federation website',
      technologies: 'Symfony 7, Next.js 15, MySQL, Docker, GitLab CI',
      responsibilities: [
        'Backend development with Symfony stateful and complete custom CMS',
        'Creation of stateless RESTful API for frontend',
        'Frontend development with Next.js 15 (App Router, Server Components)',
        'Microservices architecture with backend/frontend separation',
        'Implementation of advanced content management features',
        'Performance optimization and SEO',
        'CI/CD deployment with Docker',
      ],
    },
    {
      title: "I'm Class",
      period: 'Feb. 2024 - Dec. 2024',
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
