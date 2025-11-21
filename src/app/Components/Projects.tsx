"use client";

import { motion } from "framer-motion"
import ProjectDesc from "./ProjectDesc"

export default function Projects() {
    const projects = [
        {
          image: "/images/BruinPlanImg.png",
          title: "BruinPlan",
          description:
            "A centralized website designed to help UCLA students create and maintain class schedules and four year plans, helping them stay on track for graduation. Worked on the Django backend writing routes for the supabase database. Developed within UCLA's premier product dvelopment organization, DevX.",
          techUsed: ["Python", "Django", "Supabase"],
          projLink: "https://github.com/apant123/bruinplan"
        },
        {
          image: "/images/bpop.png",
          title: "BPop",
          description:
            "A full-stack Depop-style app designed for the UCLA community to buy and sell items with a MongoDB backend. I implented security features like password hashing using bcrypt and JWT for session management, and defined and managed the site's databse.",
          techUsed: ["React", "Javascript", "MongoDB"],
          projLink: "https://github.com/kcabalonga/Bpop"
        },
        {
          image: "/images/Website.png",
          title: "Personal Website",
          description:
            "I created this website without a template, using react and the motion library for animations. I used nextjs as my react framework, and hosted this website through Vercel. Thanks for stopping by!",
          techUsed: ["React", "Javascript", "Tailwind css"],
          projLink: "https://github.com/BriboSD/portfolio-website"
        },
        {
          image: "/images/CNN.png",
          title: "Image Classifier",
          description:
            "A Convolutional Neural Network (CNN) model I created that is trained on the CIFAR10 dataset.",
          techUsed: ["Python", "PyTorch", "Machine Learning"],
          projLink: "https://github.com/BriboSD/CNNmodel/blob/main/Gabriel'sCNNModel.ipynb"
        },
        
        {
            image: "/images/superAP.png",
            title: "SAP Reinforcement Learning Model (work in progress)",
            description:
              "The current personal project I am working on. A reinforcement model for the auto-battler game Super Auto Pets. I forked an existing repository with the definitions for various game elements, and am defining the action and observation spaces based on these in a custom gymnaisum environment. ",
            techUsed: ["Python", "NumPy", "Machine Learning"],
            projLink: "https://github.com/BriboSD/sapai_updated_trainer"
          },
      ];

    return (
        <motion.div
        className="flex flex-col items-center min-h-[60vh] px-10 py-15 lg:px-20 lg:py-30 gap-y-10 lg:gap-y-40 bg-[#FFD3A8] z-[60]" //bg-slate-300
        >
            <motion.div
            initial={{opacity: 0, y: -50}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 1, delay: 0.15}}
            className=" text-2xl lg:text-4xl text-amber-700"
            >
              Projects (Click to see repo)
            </motion.div>
        
            <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:max-w-9xl mx-auto">
                {projects.map((project, index) => (
                    <ProjectDesc
                    key={index}
                    image={project.image}
                    title={project.title}
                    description={project.description}
                    techUsed={project.techUsed}
                    projlink={project.projLink}
                    />

                    
            ))}
            </motion.div>  
            
        </motion.div>
    );
}