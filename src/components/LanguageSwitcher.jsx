import React from 'react';
import { useLanguage } from '../services/translation.jsx';

const LanguageSwitcher = () => {
  const { currentLanguage, changeLanguage } = useLanguage();

  const languages = [
    { code: 'en', name: 'EN', flag: '🇺🇸' },
    { code: 'zh', name: '中文', flag: '🇨🇳' }
  ];

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="flex gap-2">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={`px-3 py-1 rounded-lg text-sm font-medium transition-all duration-200 ${
              currentLanguage === lang.code
                ? 'bg-blue-500 text-white shadow-lg'
                : 'bg-white/80 text-gray-700 hover:bg-white hover:shadow-md'
            }`}
          >
            <span className="mr-1">{lang.flag}</span>
            {lang.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;