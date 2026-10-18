import React, { createContext, useContext, useEffect } from 'react';
import english from './en.json';
import { useLocation, useNavigate } from 'react-router-dom';
import { Language, localizedPath, routeInfo } from '../seo/config';

type TranslationKey = keyof typeof english;
export type Translator = (key: TranslationKey) => string;
const storageKey = 'portfolio-language';

const LanguageContext = createContext({
  language: 'tr' as Language,
  locale: 'tr-TR',
  setLanguage: (_language: Language) => {},
  t: (key: TranslationKey): string => key,
});

export const LanguageProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { language } = routeInfo(location.pathname);
  const setLanguage = (next: Language) => {
    navigate(localizedPath(location.pathname, next) + location.search + location.hash);
  };

  useEffect(() => {
    document.documentElement.lang = language;
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
