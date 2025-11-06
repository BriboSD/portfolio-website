
"use client";
import { motion, useScroll, useTransform } from "framer-motion";


export default function AboutMe( {scrollYProgress, fontClass }) {

    const ypos = useTransform(scrollYProgress, [0, 0.25], [0, -300]);
    return (
        // overall section container
        <motion.div
          className="flex flex-col lg:flex-row justify-center min-h-[60vh] py-14 bg-orange-200 text-amber-100 z-[60]"
        >
          {/* "me at a glance part"*/}
          <motion.div
            className="flex flex-col items-center lg:pr-12 space-y-6"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0,  }}
            transition={{ duration: 1, delay: 0.2}}
          >
        
            {/* Title */}
            <h1 className={`${fontClass} text-3xl w-[160px] lg:text-6xl tracking-wide text-red-700 transform lg:translate-x-[20px] lg:w-[400px]`}>
              ME AT A GLANCE
            </h1>
    
            {/* bullet point section */}
            <ul className="text-xs pl-4 pr-1 lg:text-base lg:w-[400px] leading-relaxed font-semibold space-y-4">
              <li>
                <span className="text-neutral-800">School:</span>{" "}
                <span className="text-rose-800">
                  University of California, Los Angeles
                </span>
              </li>
              <li>
                <span className="text-neutral-800">Disciplines:</span>{" "}
                <span className="text-rose-800">
                  Cognitive Science Major, Data Science Engineering Minor
                </span>
              </li>
              <li>
                <span className="text-neutral-800">Year:</span>{" "}
                <span className="text-rose-800">Undergrad Junior</span>
              </li>
              <li>
                <span className="text-neutral-700">Hometown:</span>{" "}
                <span className="text-rose-800">Washington, D.C.</span>
              </li>
              <li>
                <span className="text-neutral-800">Hobbies:</span>{" "}
                <span className="text-rose-800">
                  Travel, Board Games, Horror Movies, Video Games
                </span>
              </li>
            </ul>
          </motion.div>

          {/* line divider for computer interface*/}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.6, delay: 1, ease: "easeInOut" }}
            className="hidden lg:block lg:mr-20 lg:mt-30 lg:w-[4px] bg-red-600 mx-8 origin-top"
            style={{ height: "20vh" }}
            />

          {/* line divider for mobile interface*/}

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 1, ease: "easeInOut" }}
            className="block lg:hidden h-[1px] w-[40vw] bg-red-600 my-8 self-center"
          />
    
          {/* more in-depth overview thing */}
          <motion.div
            className="flex flex-col text-center w-full pr-5 pl-5 lg:w-[50dvw] lg:mt-10 items-center text-xs lg:text-lg leading-relaxed text-neutral-700 font-medium"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <p className="mb-6">
                I am a Washington D.C. native and am currently a 3rd year student at University of California, Los Angeles. I am currently pursuing 
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