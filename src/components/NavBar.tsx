'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { InfoIcon, LibraryBig, Languages } from 'lucide-react'
import { useTranslation } from 'react-i18next'

function NavBar() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className='flex items-center justify-between h-full'>
      <div className='bg-[#161616] backdrop-blur-xl h-[50%] rounded-r-xl'>
        <ul className='flex flex-col h-full justify-around px-1 items-center'>
          <li className='flex items-center pl-2'>
            <Image src='/image.png' alt='Icon' width={50} height={50} className='rounded-full'/>
            <div className='flex flex-col items-center justify-center text-lg'>
              <Link href='/' className='pl-2 pr-2'>{t('nav.name')}</Link>
              <span className='text-sm'>Full Stack Developer</span>
            </div>
          </li>
          <li className='flex items-center hover:underline underline-offset-8 decoration-2 decoration-slate-400'>
            <LibraryBig className='inline-block mr-1'/>
            <Link href='projects' className='block py-2 px-1 text-xl'>{t('nav.projects')}</Link>
          </li>
          <li className='flex items-center hover:underline underline-offset-8 decoration-2 decoration-slate-400'>
            <InfoIcon className='inline-block mr-1'/>
            <Link href='aboutme' className='block py-2 px-1 text-xl'>{t('nav.aboutMe')}</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar