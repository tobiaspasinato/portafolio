'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="flex h-[100%] w-[88%] flex-col items-start justify-start p-20 ">
      <motion.h1 
        className="font-bold text-4xl text-start p-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {t('about.title')}
      </motion.h1>
      <div className='flex flex-fill justify-center items-center h-[400px]'>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image src='/image.png' alt='Icon' width={400} height={400} className='rounded items-center'/>
        </motion.div>
        <div className='w-20'/>
        <motion.div 
          className='flex flex-col items-center'
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h2 
            className='font-bold text-4xl text-start p-5 text-[#AB568F]'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {t('about.subtitle')}
          </motion.h2>
          <motion.p 
            className='text-lg text-start p-5'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {t('about.student')}
          </motion.p>
          <motion.p 
            className='text-lg text-start p-5'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            {t('about.nationality')}
          </motion.p>
          <motion.p 
            className='text-lg text-start p-5'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {t('about.languages')}
          </motion.p>
          <motion.a 
            href='/CVTobiasPasinato.pdf'
            download='CVTobiasPasinato.pdf'
            className='bg-black/60 text-white px-8 py-4 text-xl rounded-lg mt-5 hover:bg-black/80 transition-colors cursor-pointer'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('about.downloadCV')}
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
