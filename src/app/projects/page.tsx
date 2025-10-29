'use client'
import Card from "@/components/Card";
import { projectData } from "@/data";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const [ cantidad ] = useState(8);
  const [position, setPosition] = useState(0);

  const projects = projectData.projects.slice(position * cantidad, position * cantidad + cantidad);

  const handleClick = (index: number) => {
    setPosition(index);
  };

  return (
    <div className="h-screen w-[88%] items-start justify-start p-20 pt-8 ">
      <motion.h1 
        className="text-4xl font-bold mb-10 text-[#fffff]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h1>
      <motion.div 
        key={position}
        className="grid grid-cols-4 gap-3 grid-rows-1"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.4 }}
          >
            <Card title={project.title} description={project.description} images={project.images} url={project.url} />
          </motion.div>
        ))}
      </motion.div>
      <motion.div 
        className="flex gap-2 mt-8 justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        { Array.from({length : projectData.projectsLength / cantidad}).map((_, index) => (
          <motion.button 
            key={index} 
            onClick={() => handleClick(index)} 
            className={`w-10 h-10 rounded-full ${position === index ? 'bg-[#AB568F]' : 'bg-gray-700 hover:bg-gray-600'} text-white font-semibold transition-all duration-200 hover:scale-110 active:scale-95`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {index + 1}
          </motion.button>
        )) }
      </motion.div>
    </div>
  );
}