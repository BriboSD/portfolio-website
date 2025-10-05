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
        <div className="absolute top-[70px] text-amber-800 text-3xl font-bold z-[60] mt-4">
          {/* Tab logic */}
          <div className="flex space-x-22 mb-4 mt-8">
            {tabs.map(tab => (
              <button 
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              >
                {tab.label}  
              </button>
            ))}
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