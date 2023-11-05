'use client'
import React from "react";
import { motion } from "framer-motion";

const Subtract = () => {
  return (
    <div>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="520"
        className="max-lg:h-[400px]"
        viewBox="0 0 414 828"
        fill="none"
        initial={{opacity:0}}
        animate={{opacity:1}}
      >
        <path
          fill="none"
          stroke="white"
          strokeWidth="2"
          d="M0 828C228.646 828 414 642.646 414 414C414 185.354 228.646 0 0 0V2C227.541 2 412 186.459 412 414C412 641.541 227.541 826 0 826V828Z"
        >
          <motion.animate
            attributeName="stroke-dasharray"
            from="0"
            to="100%"
            dur="2s"
          />
          <motion.animate
            attributeName="stroke-dashoffset"
            from="100%"
            to="0"
            dur="2s"
          />
        </path>
      </motion.svg>
    </div>
  );
};

export default Subtract;
