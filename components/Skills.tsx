'use client';

import { motion } from 'framer-motion';
import {
  Code2,
  Layers,
  Database,
  Wrench,
  GitBranch,
  Blocks,
  Globe,
  Server,
  Star,
} from 'lucide-react';
import type { CVData } from '@/lib/data';

interface SkillsProps {
  data: CVData;
  locale: 'fr' | 'en';
}

const icons = {
  languages: Code2,
  frameworks: Layers,
  databases: Database,
  tools: Wrench,
  methodologies: GitBranch,
  technologies: Blocks,
  cms: Globe,
  systems: Server,
};

export default function Skills({ data, locale }: SkillsProps) {
  const skillCategories = [
    { key: 'programmingLanguages', label: locale === 'fr' ? 'Langages' : 'Languages', icon: icons.languages },
    { key: 'frameworks', label: 'Frameworks', icon: icons.frameworks },
    { key: 'databases', label: locale === 'fr' ? 'Bases de données' : 'Databases', icon: icons.databases },
    { key: 'tools', label: locale === 'fr' ? 'Outils & DevOps' : 'Tools & DevOps', icon: icons.tools },
    { key: 'methodologies', label: locale === 'fr' ? 'Méthodologies' : 'Methodologies', icon: icons.methodologies },
    { key: 'technologies', label: 'Technologies', icon: icons.technologies },
    { key: 'cms', label: 'CMS', icon: icons.cms },
    { key: 'systems', label: locale === 'fr' ? 'Systèmes' : 'Systems', icon: icons.systems },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl shadow-lg p-8 mb-8"
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
        <span className="w-2 h-8 bg-primary-500 rounded-full" />
        {locale === 'fr' ? 'Compétences Techniques' : 'Technical Skills'}
      </h2>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {skillCategories.map((category, index) => {
          const Icon = category.icon;
          const skills = data.skills[category.key as keyof typeof data.skills] as string[];

          return (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 border border-gray-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary-500 rounded-lg">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{category.label}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + idx * 0.05, duration: 0.3 }}
                    className="px-3 py-1.5 bg-white rounded-full text-sm font-medium text-gray-700 border border-gray-200 hover:border-primary-500 hover:text-primary-600 transition-all"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-8 pt-8 border-t border-gray-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          {locale === 'fr' ? 'Langues' : 'Languages'}
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {data.languages.map((lang, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-xl p-6 border border-primary-200"
            >
              <h4 className="text-lg font-bold text-gray-900 mb-2">{lang.name}</h4>
              <p className="text-gray-600 mb-3">{lang.level}</p>
              <div className="flex gap-1">
                {[...Array(5)].map((_, idx) => (
                  <Star
                    key={idx}
                    className={`w-5 h-5 ${
                      idx < lang.stars ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
