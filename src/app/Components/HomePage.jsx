
"use client";
import { motion, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function HomePage({scrollYProgress}) {
  const ypos = useTransform(scrollYProgress, [0, 0.25], [0, 400]);
    return (
      <motion.div className="relative flex text-amber-800 text-6xl z-[60] mt-20 ml-30 bg-[#ffedd5]"
      style={{y: ypos}}
      >
        {/* Animated line box */}
        <motion.svg viewBox="0 0 160 160" width={630} height={630} className="absolute ml-150">
          <motion.path
            fill="none"
            stroke="#DC2626"
            strokeWidth="1"
            d="M 5,5 L 153,5 L 153,120 L 5,120 Z"
            strokeDasharray="0 1"
            initial={{ pathLength: 0 }}       // start hidden
            animate={{ pathLength: 1 }}       // draw fully
            transition={{ duration: 2, ease: "easeInOut" }} // animation settings
          />
        </motion.svg>
        
        {/* line going down from top*/}
        <motion.div
        initial={{ height: 0 }}
        animate={{ height: "20vh" }}
        transition={{ duration: 0.6, delay: 1, ease: "easeIn" }}
        className="relative top-[-150px] left-[900px] w-[4px] bg-red-600 -translate-x-1/2 z-[5]"
      />
        {/* line going down from bottom*/}
        <motion.div
        initial={{ height: 0 }}
        animate={{ height: "30vh" }}
        transition={{ duration: 1.5, delay: 1.5, ease: "easeOut" }}
        className="relative top-[470px] left-[900px] w-[4px] bg-red-600 -translate-x-1/2 z-[5]"
      />


        {/* Image with overlay */}
        <div className="relative">
          <motion.img
            id="photo"
            src="/images/newPhoto.png"
            alt="Gabriel"
            initial={{ opacity: 0, y: -100 }}
            animate={{opacity: 1, y:0}}
            transition={{delay: 1, duration: 1}}
            className="w-130 h-130 mt-0 rounded-full object-cover"
          />
  
         </div>
  
        {/* Text */}
        <div className="absolute mt-20 left-[650px] mt-5 text-center font-extrabold">
          <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{opacity: 1, y:0}}
          transition={{delay: 2, duration: 1}}
          className="w-[500px] text-7xl"
          >
            Hey, My name is Gabriel! 
            
          </motion.h1>

          <motion.h2
          initial={{ opacity: 0, y: 100 }}
          animate={{opacity: 1, y:0}}
          transition={{delay: 2.3, duration: 1}}
          className="w-[500px]  mt-20 text-center max-w-[100%] text-4xl"
          >
            A student, software developer, and data scientist
            
          </motion.h2>
        </div>
      </motion.div>
    );
  }