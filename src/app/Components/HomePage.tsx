
"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function HomePage() {
    return (
      <div className="relative flex text-amber-800 text-6xl font-bold z-[60]  bg-[#ffedd5]">
        {/* Image with overlay */}
        <div className="relative">
          <motion.img
            id="photo"
            src="/images/newPhoto.png"
            alt="Gabriel"
            initial={{ opacity: 0, y: -100 }}
            animate={{opacity: 1, y:0}}
            transition={{delay: 1, duration: 1}}
            className="w-450 h-320 object-cover"
          />
  
         </div>
  
        {/* Text */}
        <div className="absolute left-[70px] mt-20 text-center text-slate-200 font-extrabold">
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
          className="absolute left-[900px] w-[400px] mt-20 text-center max-w-[100%] text-4xl"
          >
            A sudent, software developer, and data scientist
            
          </motion.h2>
        </div>
      </div>
    );
  }