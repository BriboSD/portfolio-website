"use client";
import { motion, useTransform } from "framer-motion";
import JobDesc from "./JobDesc"

export default function Experience() {
    return (
        <motion.div
          className="flex flex-col items-center min-h-[60vh] px-20 py-10 gap-y-20 bg-[#ffedd5] z-[60]" //bg-[#FAC893]
          >
            <motion.div
            initial={{opacity: 0, y: -50}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 1, delay: 0.15}}
            className="text-4xl text-rose-700"
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
              description={[
                "Proposed, researched, and implemented tools for multi-agent frameworks in an ai-native legal document review service",
                "Introduced new functionality that allowed for the extraction, examination, and visualization of statistics about a corpus of documents through dynamic query crafting and metadata analysis.",
                "Worked alongside team members to reduce latency and increase accuracy in agent responses"
              ]} 
              leftSide={true}
              />

            </div>

            {/* Daily Bruin*/}
            
            <div 
            className="w-full flex ml-130 "
            >
              <JobDesc name={"The Daily Bruin"} 
              position={"Data Journalism Contributor"} 
              date={"October 2024 - June 2025"} 
              location={"Los Angeles, CA"} 
              description={[
                "Requested Data, made graphs using chart.js, and collaborated on large shared github repos",
                "Used JavaScript and Chart.js to create interactive visualizations.",
                "Used large-scale Github repositories to collaboratively manage article resources and do version control."
              
              ]} 
              leftSide={false}
              />
            </div>

            {/* NASA Langley*/}
            <div 
            className="w-full flex mr-130 "
            >
              <JobDesc name={"NASA Langley Research Center"} 
              position={"Student Volunteer"} 
              date={"June 2021 - August 2021"} 
              location={"Hampton, VA"} 
              description={[
                "Worked as a Student Volunteer with a paired mentor, Senior Systems Engineer Dr. Bart Singer, at NASA Langley Research Center on a virtual basis.",
                "Reviewed agency records using NASA-issued computer, identified reports to inform future missions, contacted authors for further information, coordinated with mentor, and presented information to review panel of more than 20 NASA employees"

              ]
              } 
              leftSide={true}
              />

            </div>


          </motion.div>
            
        
    )   
}