import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { portfolioGamesData } from '@/assets/assets'; // provera da je named export

const PortfolioGames = ({ isDarkMode }) => {
  return (
    <section className="w-full px-[12%] py-10" id="portfolio">
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-4xl font-Ovo text-center mb-10 dark:text-white"
      >
        Java Games 
      </motion.h4>

      <motion.div
        className="flex flex-row flex-wrap justify-center gap-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        {portfolioGamesData.map((game, index) => (
          <motion.div
            key={index}
            className="w-[300px] flex-shrink-0 shadow-xl dark:shadow-white/10 border border-gray-400 rounded-lg p-4 hover:shadow-black hover:-translate-y-1 duration-500 dark:hover:bg-darkHover"
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src={game.bgImage}
              alt={game.title}
              width={300}
              height={300}
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold font-Ovo text-center dark:text-white">
              {game.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-center font-Ovo mt-2">
              {game.description}
            </p>
            <div className="flex justify-center mt-4">
              <a
                href={game.jarLink}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                target="_blank"
              >
                Download .jar
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default PortfolioGames;
