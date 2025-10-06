"use client";

import { motion, useAnimate } from "framer-motion";
import { useEffect, useState } from "react";
import StartupAnimation from "./Components/StartupAnimation";
import HomePage from "./Components/HomePage";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import AboutMe from "./Components/AboutMe";




export default function Home() {
  const [scope, animate] = useAnimate();
  const [showCurtain, setShowCurtain] = useState(true);
  const [bg, setBg] = useState("#422006")
  
  const tabs = [
    { id: "homepage", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "about", label: "About Me" },
  ];
  const [selectedTab, setSelectedTab] = useState("homepage")
  const [startSeen, setStartSeen] = useState(false)


  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-full"
    ref={scope}
    style={{ backgroundColor: bg }}
    >
      {!startSeen ? (
        <StartupAnimation animate={animate} setStartSeen={setStartSeen} setBg={setBg}/>
      ) : (
      <>
        <div className="absolute top-[30px] text-amber-800 text-3xl font-bold z-[60] mt-4">
          {/* Tab logic */}
          <div className="flex space-x-22 mb-4 mt-8">
            {tabs.map((tab, index) => {

              let initialX = 0;
              let initialY = 0;
              if (tab.id == "homepage") initialX = -30;
              else if (tab.id == "projects") initialY = -30
              else if (tab.id == "experience") initialY = 30
              else if (tab.id == "about") initialX = 30

              return (
                <motion.div key={tab.id} className="relative flex flex-col items-center">
                  <motion.button 
                  key={tab.id}
                  initial={{x: initialX, y: initialY, opacity: 0}}
                  animate={{x: 0, y: 0, opacity: 1, transition: {duration: 0.5, delay: index*0.2}}}
                  onClick={() => setSelectedTab(tab.id)}
                  whileHover={{ scale: 1.2, color: "#d97706"}}
                  >
                    {tab.label}  
                  </motion.button>
                

                {selectedTab === tab.id && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 h-[3px] bg-red-900"
                    style={{top: "100%"}}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                </motion.div>
              );
          })}
          </div>
        </div>
        <div className="absolute inset-0 z-[60] pointer-events-none">
            {selectedTab === "homepage" && <HomePage/>}
            {selectedTab === "experience" && <Experience/>}
            {selectedTab === "projects" && <Projects/>}
            {selectedTab === "about" && <AboutMe/>}
        </div>
      </>
        
      )
    }
    </main>
  );
}