'use client'
import Heading from "@/common/component/element/Heading";
import React from "react";
import { motion } from "framer-motion";

const HeaderHome = () => {
  return (
    <motion.div className="flex flex-col max-lg:justify-start max-lg:items-start mt-32" 
    initial={{opacity: 0, translateY: 50}}
    animate={{opacity: 1, translateY: 0, transition:{type: 'spring', duration: 2}}}
    >
      <Heading title="SPORT" />
      <h1 className="xl:text-6xl text-5xl font-bold text-white md:text-[#353333]">
        Landing <span className="">Page</span>
      </h1>
      <h2 className="flex lg:w-[50%] mt-5 leading-normal max-lg:line-clamp-3 text-white md:text-[#353333]">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&rsquo;s standard dummy text
        ever since the 1500s,
      </h2>
      <div className="flex mt-5 gap-5">
        <button className="text-lg relative overflow-hidden group text-white bg-[#1E1E1E] shadow-xl py-2 px-14 rounded-full">
          <h1 className="group-hover:z-[9] lg:group-hover:text-black lg:transition-all lg:duration-300 relative">
            Login
          </h1>
          <div className="absolute inset-0 lg:translate-y-[100%] lg:bg-[#fff] lg:transition-transform lg:duration-300 lg:group-hover:translate-y-[0%]"></div>
        </button>
        <button className="outline outline-[1px] lg:outline-[#57C3FF] py-2 px-8 rounded-full">
          <h1 className=" text-base tracking-widest font-bold lg:text-[#57C3FF]">
            Start Trial
          </h1>
        </button>
      </div>
    </motion.div>
  );
};

export default HeaderHome;
