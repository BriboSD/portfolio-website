
"use client";
import { motion, useScroll, useTransform } from "framer-motion";


export default function AboutMe( {scrollYProgress, fontClass }) {

    const ypos = useTransform(scrollYProgress, [0, 0.25], [0, -300]);
    return (
        // overall section container
        <motion.div
          className="flex flex-row justify-center items-start min-h-[60vh] px-20 py-14 bg-orange-200 text-amber-100 z-[60]"
          style={{ y: ypos }}
        >
          {/* "me at a glance part"*/}
          <motion.div
            className="flex flex-col w-1/2 pr-12 ml-15 space-y-6"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0,  }}
            transition={{ duration: 1, delay: 0.6}}
          >
        
            {/* Title */}
            <h1 className={`${fontClass} text-6xl tracking-wide text-red-700 w-[400px]`}>
              ME AT A GLANCE
            </h1>
    
            {/* bullet point section */}
            <ul className="text-l leading-relaxed font-semibold space-y-4">
          <li>
            <span className="text-amber-800">School:</span>{" "}
            <span className="text-yellow-600">
              University of California, Los Angeles
            </span>
          </li>
          <li>
            <span className="text-amber-800">Disciplines:</span>{" "}
            <span className="text-yellow-600">
              Cognitive Science Major, Data Science Engineering Minor
            </span>
          </li>
          <li>
            <span className="text-amber-800">Year:</span>{" "}
            <span className="text-yellow-600">Undergrad Junior</span>
          </li>
          <li>
            <span className="text-amber-800">Hometown:</span>{" "}
            <span className="text-yellow-600">Washington, D.C.</span>
          </li>
          <li>
            <span className="text-amber-800">Hobbies:</span>{" "}
            <span className="text-yellow-600">
              Travel, Board Games, Horror Movies, Video Games
            </span>
          </li>
        </ul>
          </motion.div>

        {/* line divider*/}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.6, delay: 1, ease: "easeInOut" }}
            className="mr-20 mt-30 w-[4px] bg-red-600 mx-8 origin-top"
            style={{ height: "20vh" }}
            />
    
          {/* more in-depth overview thing */}
          <motion.div
            className="flex flex-col w-[1000px] mt-20 text-l leading-relaxed text-yellow-700 font-medium mr-10"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <p className="mb-6">
                I am a Washington D.C. native and am currently in my 3rd year student at University of California, Los Angeles. I am currently pursuing 
                a BS in Cognitive Science, with a concentration in computing, and a Data Science Engineering Minor.
                I love to work with databases and data pipelines, be it through writing database queries for a 
                website's api, or through processing, cleaning, and analyzing databases to answer research questions 
                and train AI models.
            </p>
    
            <p>
              Outside of code, I love to spend my time playing board games with friends, watching horror movies, playing video games,
              and travelling!
            </p>
          </motion.div>
        </motion.div>
      );
}