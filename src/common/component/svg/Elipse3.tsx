'use client'
import React from "react";
import {motion} from 'framer-motion'
const Elipse3 = () => {
  return (
    <div>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="100%"
        viewBox="0 0 16 16"
        fill="none"
        initial={{opacity:0}}
        animate={{opacity: 1, transition:{type: 'spring', duration: 2}}}
      >
        <circle cx="8" cy="8" r="8" fill="white" />
      </motion.svg>
    </div>
  );
};

export default Elipse3;
