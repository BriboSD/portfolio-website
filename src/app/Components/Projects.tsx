"use client";

import { motion } from "framer-motion"
import ProjectDesc from "./ProjectDesc"

export default function Projects() {
    const projects = [
        {
          image: "/images/bpop.png",
          title: "AI Book Assistant",
          description:
            "An intelligent book Q&A system that retrieves and answers questions based on embedded text chunks.",
        },
        {
          image: "/images/bpop.png",
          title: "B-Pop Marketplace",
          description:
            "A full-stack Depop-style app for buying and selling items with a MongoDB backend.",
        },
      ];

    return (
        <motion.div
        className="flex flex-col items-center min-h-[60vh] px-20 py-30 gap-y-40 bg-slate-300 z-[60]"
        >
            <motion.div
            initial={{opacity: 0, y: -50}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 1, delay: 0.15}}
            className="text-4xl text-teal-600"
            >
              Projects
            </motion.div>
        
            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-9xl mx-auto">
                {projects.map((project, index) => (
                    <ProjectDesc
                    key={index}
                    image={project.image}
                    title={project.title}
                    description={project.description}
                    />
            ))}
            </motion.div>  
            
        </motion.div>
    );
}