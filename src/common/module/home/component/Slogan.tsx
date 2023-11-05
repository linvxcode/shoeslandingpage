"use client";
import React from "react";
import { motion } from "framer-motion";

const Slogan = () => {
  return (
    <motion.div className="absolute w-[50%] top-0 right-[180px] xl:right-[240px]"
    initial={{ opacity: 0 }}
    animate={{ opacity: [0, 1, 0, 1, 0, 1], transition: { duration: 0.5 }}}
    >
      <h1 className="xl:text-7xl text-6xl text-white">NEW ARRIVAL</h1>
    </motion.div>
  );
};
export default Slogan;
