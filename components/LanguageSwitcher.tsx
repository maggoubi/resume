'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Languages, Check } from 'lucide-react';
import { useState, useEffect } from 'react';

interface LanguageSwitcherProps {
  locale: 'fr' | 'en';
  setLocale: (locale: 'fr' | 'en') => void;
}

const languages = [
  { code: 'fr', name: 'Français' },
  { code: 'en', name: 'English' },
];

export default function LanguageSwitcher({ locale, setLocale }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Rendu initial côté serveur - même structure que côté client
    return (
      <div className="fixed top-6 right-6 z-50">
        <div className="relative">
          <button
            className="flex items-center gap-3 px-5 py-3 bg-white rounded-2xl shadow-lg transition-all duration-300 border-2 border-transparent"
            aria-label="Change language"
            disabled
          >
            <Languages className="w-5 h-5 text-primary-600 transition-transform duration-300" />
            <span className="font-bold text-gray-700 text-lg">
              {locale.toUpperCase()}
            </span>
          </button>
        </div>
      </div>
    );
  }

  const currentLanguage = languages.find((lang) => lang.code === locale) || languages[0];

  return (
    <div className="fixed top-6 right-6 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative"
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-3 px-5 py-3 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary-500 group"
          aria-label="Change language"
        >
          <Languages className="w-5 h-5 text-primary-600 group-hover:rotate-12 transition-transform duration-300" />
          <span className="font-bold text-gray-700 text-lg">
            {currentLanguage.code.toUpperCase()}
          </span>
        </button>

        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0"
                onClick={() => setIsOpen(false)}
              />
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full right-0 mt-2 w-48 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
              >
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLocale(lang.code as 'fr' | 'en');
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-5 py-4 transition-all duration-200 ${
                      locale === lang.code
                        ? 'bg-gradient-to-r from-primary-50 to-blue-50 text-primary-700'
                        : 'hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <span className="font-semibold text-base">{lang.code.toUpperCase()}</span>
                    {locale === lang.code && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      >
                        <Check className="w-5 h-5 text-primary-600" />
                      </motion.div>
                    )}
                  </button>
                ))}
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
