"use client";
import { Instagram, Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="flex h-screen w-[88%] flex-col items-center justify-center text-center p-70 ">
      <motion.div 
        className='bg-black/60 backdrop-blur-xl rounded-xl m-20 w-full items-center p-10'
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1 
          className="text-4xl p-5"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Hello, I&apos;m Tobias Pasinato
        </motion.h1>
        
        <motion.h3  
          className="text-3xl font-bold p-5 text-[#AB568F]"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Full Stack Developer
        </motion.h3>
        
        <motion.div 
          className="flex p-5 gap-4 items-center justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <motion.a 
            href="https://www.linkedin.com/in/tob%C3%ADas-pasinato-4252232b8/" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Linkedin className='size-15 p-2 text-[#AB568F]'/>
          </motion.a>
          
          <motion.a 
            href="https://www.instagram.com/tobiiaspasinato" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Instagram className='size-15 p-2'/>
          </motion.a>
          
          <motion.a 
            href="https://github.com/tobiaspasinato" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Github className='size-15 p-2 text-[#AB568F]'/>
          </motion.a>
        </motion.div>
      </motion.div>
    </main>
  );
}
