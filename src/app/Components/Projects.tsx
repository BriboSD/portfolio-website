"use client";

import { motion } from "framer-motion"
import ProjectDesc from "./ProjectDesc"

export default function Projects() {
    const projects = [
        {
          image: "/images/bpop.png",
          title: "BPop",
          description:
            "A full-stack Depop-style app designed for the UCLA community to buy and sell items with a MongoDB backend. I implented security features like password hashing using bcrypt and JWT for session management, and defined and managed the site's databse.",
          techUsed: ["React", "Javascript", "MongoDB"]
        },
        {
          image: "/images/website.png",
          title: "Personal Website",
          description:
            "I created this website without a templae, using react and the motion library for animations. I used nextjs as my react framework, and hosted this website through Vercel. Thanks for stopping by!",
          techUsed: ["React", "Javascript", "tailwind css"]
        },
        {
          image: "/images/CNN.png",
          title: "Image Classifier",
          description:
            "A Convolutional Neural Network (CNN) model I created that is trained on the CIFAR10 dataset. Defined {put parameters I defined here} ",
          techUsed: ["python", "pyTorch", "Machine Learning"]
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
                    techUsed={project.techUsed}
                    />

                    
            ))}
            </motion.div>  
            
        </motion.div>
    );
}