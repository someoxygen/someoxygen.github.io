import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const label = language === 'tr' ? 'TR — İngilizceye geç' : 'EN — Switch to Turkish';
  return (
    <button
      className="theme-toggle language-toggle"
      type="button"
      aria-label={label}
      title={label}
      onClick={() => setLanguage(language === 'tr' ? 'en' : 'tr')}
    >
      {language.toUpperCase()}
    </button>
  );
};

export default LanguageToggle;
