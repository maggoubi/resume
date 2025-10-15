'use client';

import { motion } from 'framer-motion';
import { Rocket, ExternalLink, Sparkles } from 'lucide-react';

interface WeglobBannerProps {
  locale: 'fr' | 'en';
}

export default function WeglobBanner({ locale }: WeglobBannerProps) {
  const content = {
    fr: {
      title: 'Besoin d\'une solution digitale professionnelle ?',
      description: 'Découvrez Weglob, agence experte en développement d\'applications de gestion, création de sites internet, applications mobiles et solutions CRM/ERP. Une équipe de spécialistes qui transforme vos idées en solutions digitales performantes avec un accompagnement personnalisé de la conception à la maintenance.',
      cta: 'Découvrir Weglob',
    },
    en: {
      title: 'Need a professional digital solution?',
      description: 'Discover Weglob, an agency specialized in management application development, website creation, mobile applications and CRM/ERP solutions. A team of specialists who transform your ideas into high-performance digital solutions with personalized support from design to maintenance.',
      cta: 'Discover Weglob',
    },
  };

  const text = content[locale];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-blue-600 to-purple-600 rounded-3xl p-8 md:p-10 shadow-2xl mb-8"
    >
      {/* Effets de fond animés */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-overlay filter blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10">
        <div className="flex items-start gap-4 mb-6">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl">
              <Rocket className="w-8 h-8 text-white" />
            </div>
          </motion.div>

          <div className="flex-1">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center gap-3"
            >
              {text.title}
              <Sparkles className="w-6 h-6 text-yellow-300 animate-pulse" />
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-white/95 text-base md:text-lg leading-relaxed mb-6"
            >
              {text.description}
            </motion.p>

            <motion.a
              href="https://weglob.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-primary-600 font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              <span>{text.cta}</span>
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </motion.a>
          </div>
        </div>

        {/* Badge "Powered by" */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="flex items-center gap-2 text-white/80 text-sm mt-6 pt-6 border-t border-white/20"
        >
          <Sparkles className="w-4 h-4" />
          <span>Weglob.com - Votre partenaire digital</span>
        </motion.div>
      </div>
    </motion.div>
  );
}
