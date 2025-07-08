import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { assets, project } from '@/assets/assets';


const SiteProjects = ({ isDarkMode }) => {
  return (
    <section className="w-full px-[12%] py-10" id="site-projects">
      <h4 className="text-4xl font-Ovo text-center mb-10 dark:text-white">
        My Web Projects
      </h4>

      <h2 className="font-Ovo text-center mb-10 dark:text-white"> 
        A collection of websites and landing pages I built while learning HTML, CSS, JavaScript, Bootstrap, and jQuery.
        Through these projects, I explored front-end concepts and practiced building responsive, interactive layouts.
      </h2>

      {project.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-center gap-8 mb-16"
        >
          {/* Slika levo */}
          <div className="w-full lg:w-1/2 shadow-xl dark:shadow-white/10 border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer
                hover:bg-lightHover hover:-translate-y-1 duration-500
                dark:hover:bg-darkHover dark:hover:shadow-white">
            <Image
              src={project.bgImage}
              alt={project.title}
              width={800}
              height={500}
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          {/* Opis i linkovi desno */}
          <div className="w-full lg:w-1/2 space-y-4 text-center lg:text-left">
            <h3 className="text-2xl font-bold text-black font-Ovo dark:text-white">
              {project.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 font-Ovo">
              {project.description}
            </p>
            <div className="flex justify-center lg:justify-start gap-4 mt-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className=" border border-black dark:border-white rounded-full p-3 transition duration-300 hover:translate-y-[-2px]
                 hover:bg-[#f4e1fc] dark:bg-white dark:hover:translate-y-[-2px] dark:hover:[#f4e1fc]"
              >
                <Image src={assets.github} alt="GitHub" className="w-5" />
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-black dark:border-white rounded-full p-3 transition duration-300 hover:translate-y-[-2px]
              hover:bg-[#f4e1fc] dark:bg-white dark:hover:translate-y-[-2px] dark:hover:[#f4e1fc]"
              >
                <Image src={assets.right_arrow_bold} alt="Live Site" className="w-5" />
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default SiteProjects;