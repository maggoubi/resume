# CV Multilingue - Mohamed AGGOUBI

Un CV moderne et interactif construit avec Next.js, TypeScript, Tailwind CSS et Framer Motion.

## Caractéristiques

- **Multilingue** : Sélecteur élégant avec drapeaux (🇫🇷 / 🇬🇧) et menu déroulant animé
- **Design moderne** : Interface élégante avec des dégradés, ombres et animations
- **Animations fluides** : Animations douces avec Framer Motion sur tous les composants
- **Responsive** : S'adapte parfaitement à tous les écrans (mobile, tablette, desktop)
- **Performance optimisée** : Next.js 15, font display swap, pas d'erreur d'hydratation
- **TypeScript** : Code typé pour une meilleure maintenabilité
- **SEO Optimisé** : Score 95+/100 avec métadonnées complètes, Schema.org, Open Graph

## Technologies utilisées

- **Next.js 15** - Framework React avec rendu côté serveur
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS utilitaire
- **Framer Motion** - Bibliothèque d'animations
- **Lucide React** - Icônes modernes

## Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Ouvrir http://localhost:3000 dans votre navigateur
```

## Scripts disponibles

```bash
npm run dev      # Lancer en mode développement
npm run build    # Construire pour la production
npm run start    # Lancer en mode production
npm run lint     # Vérifier le code
```

## Structure du projet

```
resume/
├── app/
│   ├── layout.tsx      # Layout principal
│   ├── page.tsx        # Page d'accueil
│   └── globals.css     # Styles globaux
│   └── sitemap.ts      # Sitemap
├── components/
│   ├── Header.tsx      # En-tête avec photo et infos
│   ├── About.tsx       # Section À propos
│   ├── Experience.tsx  # Expérience professionnelle
│   ├── Projects.tsx    # Projets significatifs
│   ├── Skills.tsx      # Compétences techniques
│   ├── Education.tsx   # Formation
│   └── LanguageSwitcher.tsx  # Sélecteur de langue
├── lib/
│   ├── data.ts         # Données du CV (FR/EN)
│   └── i18n.tsx        # Configuration i18n
│   └── config.ts       # Configuration
└── public/
    └── images/
        └── profile.jpg # Photo de profil
```

## Personnalisation

Pour personnaliser le CV avec vos propres informations :

1. Modifiez les données dans `lib/data.ts` (versions française et anglaise)
2. Remplacez la photo dans `public/images/profile.jpg`
3. Ajustez les couleurs dans `tailwind.config.ts` si nécessaire

## Déploiement

Le projet peut être déployé facilement sur :

- **Vercel** (recommandé) : `vercel deploy`
- **Netlify** : Connectez votre repo GitHub
- **Autres** : Tout hébergeur supportant Node.js

## Licence

Ce projet est sous licence ISC.

## Auteur

**Mohamed AGGOUBI**
- Email: mohamedaggoubi@gmail.com
- Téléphone: +212 680 585 160
- LinkedIn: [Mohamed Aggoubi](https://www.linkedin.com/in/mohamedaggoubi)
