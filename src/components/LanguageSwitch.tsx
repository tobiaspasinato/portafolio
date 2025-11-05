'use client'

import React from 'react'
import { useTranslation } from 'react-i18next'

function LanguageSwitch() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || 'en';

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="absolute right-0 m-4">
      <select
        value={currentLang}
        onChange={handleLanguageChange}
        className="bg-black/60 backdrop-blur-xl text-white px-3 py-2 pr-8 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-white/40 cursor-pointer transition-all duration-300 hover:bg-black/70 appearance-none text-base"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
          backgroundPosition: 'right 0.5rem center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '1.5em 1.5em'
        }}
        aria-label="Select language"
      >
        <option value="en" className="bg-gray-900 text-white">
          🇺🇸 English
        </option>
        <option value="es" className="bg-gray-900 text-white">
          🇪🇸 Español
        </option>
      </select>
    </div>
  )
}

export default LanguageSwitch