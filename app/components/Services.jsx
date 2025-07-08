import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Services = () => {
  return (
    <motion.div
    initial={{opacity: 0}}
     whileInView={{opacity: 1}}
     transition={{duration: 1}}
     id="services" className='w-full px-[12%] py-10 scroll-mt-20'>

       <motion.h4
       initial={{ y: -20, opacity: 0}}
       whileInView={{ y: 0, opacity: 1}}
       transition={{delay: 0.3, duration: 0.5 }}
        className='text-center mb-2 text-lg font-Ovo'>What I offer
        </motion.h4>

      <motion.h2
      initial={{ y: -20, opacity: 0}}
      whileInView={{ y: 0, opacity: 1}}
      transition={{ delay: 0.5, duration: 0.5 }}
       className='text-center text-5xl font-Ovo'>My Services</motion.h2>

      <motion.p
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{ delay: 0.7, duration: 0.5 }}
       className='text-center max-w-2x1 mx-auto mt-5 mb-12 font-Ovo'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
         Voluptate inventore cum quasi vitae iusto non voluptates, pariatur architecto sed quo. 
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, nam?
      </motion.p>

      <motion.div
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1}}
      transition={{ delay: 0.9, duration: 0.6 }}
       className='grid grid-cols-auto gap-6 my-10'>
          {serviceData.map(({icon, title, description, link}, index)=>(
            <motion.div
            whileHover={{scale: 1.05}}
             key={index}
               className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer
                hover:bg-lightHover hover:-translate-y-1 duration-500
                dark:hover:bg-darkHover dark:hover:shadow-white'>
                <Image src={icon} alt='' className='w-10' />
                <h3 className='text-lg my-4 text-gray-700 dark:text-white'>{title}</h3>
                <p className='text-sm text-gray-600 leading-5 dark:text-white/80'>
                  {description}
                </p>
                <a
  href={link}
  target="_blank"
  rel="noopener noreferrer"
  className={`
    inline-flex items-center justify-between gap-3 mt-5 
    border border-black dark:border-white 
    rounded-full px-5 py-2 transition duration-300 
    hover:scale-105 hover:shadow-md 
    dark:bg-transparent bg-white 
    dark:hover:bg-white/10 hover:bg-[#f4e1fc]
    text-sm font-medium
  `}
>
  <span className="text-black dark:text-white">Visit GitHub</span>

  <div
    className={`
      p-2 rounded-full 
      bg-black dark:bg-white 
      transition-transform duration-300 
      group-hover:scale-110
    `}
  >
    <Image src={assets.github} alt="GitHub" className="w-4 invert dark:invert-0" />
  </div>
</a>

            </motion.div>
          ))}
      </motion.div>

    </motion.div>
  )
}

export default Services
