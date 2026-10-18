import React, { createContext, useContext, useEffect, useState } from 'react';
import english from './en.json';

type Language = 'tr' | 'en';
type TranslationKey = keyof typeof english;
export type Translator = (key: TranslationKey) => string;
const storageKey = 'portfolio-language';

function initialLanguage(): Language {
  try {
    return localStorage.getItem(storageKey) === 'en' ? 'en' : 'tr';
  } catch {
    return 'tr';
  }
}

const LanguageContext = createContext({
  language: 'tr' as Language,
  locale: 'tr-TR',
  setLanguage: (_language: Language) => {},
  t: (key: TranslationKey): string => key,
});

export const LanguageProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(initialLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
    const description = document.querySelector('meta[name="description"]');
    description?.setAttribute('content', language === 'tr'
      ? 'Mustafa Yücel — Senior Full Stack Engineer. .NET, Node.js, React, Angular ve Flutter ile kurumsal yazılımlar, web ve mobil uygulamalar.'
      : 'Mustafa Yücel — Senior Full Stack Engineer. Enterprise software, web and mobile applications with .NET, Node.js, React, Angular and Flutter.');
    try {
      localStorage.setItem(storageKey, language);
    } catch {
      // Language switching remains available when storage is blocked.
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{
      language,
      locale: language === 'tr' ? 'tr-TR' : 'en-US',
      setLanguage,
      t: (key) => language === 'en' ? english[key] : key,
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
