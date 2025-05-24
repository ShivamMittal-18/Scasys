import React from 'react';
import { motion } from 'motion/react';

const Marquee = () => {
  const text = "We are scasys";

  return (
    <div
      id="marquee"
      className="w-full z-10 py-10 md:py-12 bg-[#1C398E] overflow-hidden"
    >
      <div className="text border-t border-b border-green-100 flex whitespace-nowrap">
        {[...Array(3)].map((_, i) => (
          <motion.h1
            key={i}
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 4 }}
            className="px-4 text-[30vw] sm:text-[16vw] md:text-[14vw] lg:text-[15vw] leading-none uppercase text-white"
          >
            &nbsp;{text}
          </motion.h1>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
