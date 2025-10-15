'use client';

import { useState } from 'react';
import { cvDataFr, cvDataEn } from '@/lib/data';
import Header from '@/components/Header';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import WeglobBanner from '@/components/WeglobBanner';

export default function Home() {
  const [locale, setLocale] = useState<'fr' | 'en'>('fr');
  const data = locale === 'fr' ? cvDataFr : cvDataEn;

  return (
    <main className="min-h-screen">
      <LanguageSwitcher locale={locale} setLocale={setLocale} />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <Header data={data} locale={locale} />
        <About data={data} locale={locale} />
        <Experience data={data} locale={locale} />
        <Projects data={data} locale={locale} />
        <Skills data={data} locale={locale} />
        <Education data={data} locale={locale} />
        <WeglobBanner locale={locale} />
      </div>
    </main>
  );
}
