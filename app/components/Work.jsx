import { assets, workData } from '@/assets/assets';
import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from 'framer-motion'; // ispravno: framer-motion, ne "motion/react"

const Work = ({ isDarkMode }) => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? workData : workData.slice(0, 3);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='work'
      className='w-full px-[12%] py-10 scroll-mt-20'
    >
      {/* Naslovi */}
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className='text-center mb-6 text-5xl font-Ovo '
      >
        JS & PHP Apps and Mini Games from My Learning Journey
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className='text-center font-Ovo'
      >
        These applications were created during my learning process of JavaScript and PHP.
         Through them, I practiced fundamental concepts and tried to apply them in practice.
        I built 9 JavaScript applications and 3 PHP projects — 
        each representing a part of my journey to understanding programming and web development.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
      >
      </motion.p>

      {/* Projekti */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-10 dark:text-black'
      >
        {visibleProjects.map((project, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            key={index}
            className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
              <div>
                <h2 className='font-semibold'>{project.title}</h2>
                <p className='text-sm text-gray-700'>{project.description}</p>
              </div>
              <div className='relative group'>
                <a
                  href={project.github}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='border rounded-full border-black w-9 h-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-red-100 transition'
                >
                  <Image src={assets.github} alt='github' className='w-5' />
                </a>
                <span className='absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-xs px-2 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  Visit Project
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Show More / Less dugme */}
          <motion.button
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        onClick={() => {
          if (showAll) {
            const workSection = document.getElementById('work');
            if (workSection) {
              workSection.scrollIntoView({ behavior: 'smooth' });
            }
          }
          setShowAll(!showAll);
        }}
        className='w-max flex items-center justify-center gap-2 text-gray-700 
          border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover
          duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover'
      >
        {showAll ? 'Show less' : 'Show more'}
        <Image
          src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold}
          alt='Right arrow'
          className={`w-4 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}
        />
      </motion.button>

      

    </motion.div>
  );
};

export default Work;
