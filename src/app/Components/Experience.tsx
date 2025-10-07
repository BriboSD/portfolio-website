"use client";
import { motion, useTransform } from "framer-motion";
import JobDesc from "./JobDesc"

export default function Experience() {
    return (
        <motion.div
          className="flex flex-col items-center min-h-[60vh] px-20 py-30 gap-y-40 bg-rose-300 z-[60]"
          >
            <motion.div
            initial={{opacity: 0, y: -50}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 1, delay: 0.15}}
            className="text-7xl text-rose-700"
            >
              Work Experience
            </motion.div>

            {/* beagle*/}
            <div 
            className="w-full flex mr-130"
            >

              <JobDesc name={"Discover Beagle, Inc."} 
              position={"Backend Development Intern"} 
              date={"June 2025 - September 2025"} 
              location={"Bellevue, WA (Remote)"} 
              description={"Worked on multi-agent systems to create graphs"} 
              leftSide={true}
              />

            </div>

            {/* Daily Bruin*/}
            <div 
            className="w-full flex ml-130 "
            >
              <JobDesc name={"The Daily Bruin."} 
              position={"Data Journalism Contributor"} 
              date={"October 2024 - June 2025"} 
              location={"Los Angeles, CA"} 
              description={"Requested Data, made graphs using chart.js, and collaborated on large shared github repos"} 
              leftSide={false}
              />

            </div>



          </motion.div>
            
        
    )   
}