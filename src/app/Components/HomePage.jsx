
"use client";
import { motion, useTransform } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

export default function HomePage({scrollYProgress}) {
  const ypos = useTransform(scrollYProgress, [0, 0.25], [0, 400]);
    return (
      <motion.div className="relative w-full flex flex-row text-amber-800 items-center text-6xl z-[60] bg-[#ffedd5]"
      >
        {/* Animated line box */}
        <motion.svg viewBox="0 0 160 160" width={630} height={630} className="absolute ml-155 mt-40 hidden lg:block">
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
        className="relative top-[-300px] left-[930px] w-[4px] bg-red-600 -translate-x-1/2 z-[5]"
      />
        {/* line going down from bottom*/}
        <motion.div
        initial={{ height: 0 }}
        animate={{ height: "30vh" }}
        transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
        className="relative top-[360px] left-[930px] w-[4px] bg-red-600 -translate-x-1/2 z-[5]"
      />

        {/* column that will hold image and socials buttons */}
        <div className="relative flex flex-col items-center" style={{ y: ypos }}>
          <motion.img
            id="photo"
            src="/images/newPhoto.png"
            alt="Gabriel"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className=" transform lg:translate-x-[2dvw] w-40 h-40 sm:w-80 sm:h-80 md:w-100 md:h-100 lg:w-130 lg:h-130 mt-20 rounded-full object-cover"
          />

          {/* GitHub Button */}
          <motion.div className="transform lg:translate-x-[2dvw]  translate-y-[1dvh] md:translate-y-[5dvh] lg:translate-y-[5dvh] flex flex-row gap-6">
            <motion.a
              href="https://github.com/BriboSD"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.8 }}
              className="
                bg-amber-800 text-[#ffedd5] p-2 md:p-3 lg:p-3 rounded-full
                hover:bg-amber-600
                transition-colors duration-300
                flex items-center justify-center
                w-10 h-10 lg:w-18 lg:h-18
              "
            >
              <Github className="w-8 h-8 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9" />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/gabriel-schwinden-1951632b3"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2, duration: 0.8 }} // small delay offset for nice stagger
              className="
                bg-amber-800 text-[#ffedd5] p-2 md:p-3 lg:p-3 rounded-full
                hover:bg-amber-600
                transition-colors duration-300
                flex items-center justify-center
                w-10 h-10 lg:w-18 lg:h-18
              "
            >
              <Linkedin className="w-8 h-8 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 " />
            </motion.a>

          </motion.div>
          
        </div>
  
        {/* Text */}
        <div className="relative transform w-[50dvw] sm:w-[45dvw] lg:w-[37dvw] mt-5 text-center font-extrabold translate-x-[dvw] sm:translate-x-[5dvw] lg:translate-x-[9dvw]">
          <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{opacity: 1, y:0}}
          transition={{delay: 2, duration: 1}}
          className="text-2xl transform translate-y-[3dvh] sm:text-5xl md:text-7xl "
          >
            Hey, My name is Gabriel! 
            
          </motion.h1>

          <motion.h2
          initial={{ opacity: 0, y: 100 }}
          animate={{opacity: 1, y:0}}
          transition={{delay: 2.3, duration: 1}}
          className=" mt-10 lg:mt-30 text-center text-sm sm:text-xl lg:text-4xl lg:translate-x-"
          >
            A student, software developer, and data scientist
            
          </motion.h2>
        </div>
      </motion.div>
    );
  }