
"use client";
import { motion, useScroll, useTransform } from "framer-motion";


export default function AboutMe( {scrollYProgress, fontClass }) {

    const ypos = useTransform(scrollYProgress, [0, 0.25], [0, -350]);
    return (
        // overall section container
        <motion.div
          className="flex flex-row justify-center items-start min-h-screen px-20 py-32 bg-orange-200 text-amber-100 z-[60]"
          style={{ y: ypos }}
        >
          {/* "me at a glance part"*/}
          <motion.div
            className="flex flex-col w-1/2 pr-12 space-y-6"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {/* Title */}
            <h1 className={`${fontClass} text-8xl tracking-wide text-red-700`}>
              ME AT A GLANCE
            </h1>
    
            {/* bullet point section */}
            <ul className="text-2xl leading-relaxed font-semibold space-y-3">
          <li>
            <span className="text-amber-700">School:</span>{" "}
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
    
          {/* more in-depth overview thing */}
          <motion.div
            className="flex flex-col w-1/2 pl-12 text-xl leading-relaxed text-yellow-600 font-medium"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <p className="mb-6">
              I’m a software developer who thrives on solving challenging problems and
              creating impactful digital experiences. My background combines coding,
              analytical thinking, and creativity — allowing me to bridge the gap
              between technical rigor and thoughtful design.
            </p>
    
            <p>
              Outside of code, I’m often exploring new technologies, experimenting
              with personal projects, or learning about human–computer interaction.
              My goal is to build systems that not only work well — but feel
              intuitive, meaningful, and enjoyable to use.
            </p>
          </motion.div>
        </motion.div>
      );
}