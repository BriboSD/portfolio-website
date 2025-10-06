"use client";

import { motion, useAnimate, useScroll, useTransform} from "framer-motion";
import { useEffect, useState } from "react";
import StartupAnimation from "./Components/StartupAnimation";
import HomePage from "./Components/HomePage";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import AboutMe from "./Components/AboutMe";
import { Bebas_Neue } from 'next/font/google'


const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  const [scope, animate] = useAnimate();
  const [showCurtain, setShowCurtain] = useState(true);
  const [bg, setBg] = useState("#ffedd5") 
  const [underlineLoaded, setUnderlineLoaded] = useState(false);
  const {scrollYProgress} = useScroll();

  const aboutypos = useTransform(scrollYProgress, [0, 0.25], [0, -500]);
  //422006 <-- old brown color
  
  const tabs = [
    { id: "homepage", label: "Home" },
    { id: "about", label: "About Me" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
  ];
  const [selectedTab, setSelectedTab] = useState("homepage")
  const [startSeen, setStartSeen] = useState(true)


  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-full"
    ref={scope}
    style={{ backgroundColor: bg }}
    >
      {!startSeen ? (
        <StartupAnimation animate={animate} setStartSeen={setStartSeen} setBg={setBg}/>
      ) : (
      <>

        {/* tab navigation bar */}
        <nav className="sticky top-0 w-full bg-[#ffedd5] text-amber-800 text-1xl font-bold z-[70] py-4 flex justify-center">
          {/* Tab logic */}
          <div className="flex space-x-22 mb-4 mt-1">
          <motion.div
            initial={{ x: "-100vw", y: 0, width: "100vw", height: "4px" }}
            animate={{
              x: "0%",
              y: ["0%"], // rise up
              height: ["4px", "150px"], // grow taller
            }}
            transition={{
              x: { duration: 0.5 },
              y: { delay: 1, duration: 0.2 },
              height: { delay: 0.8, duration: 0.1, ease: "easeOut" },
            }}
            style={{ backgroundColor: "#461901", position: "absolute", bottom: 0, left: 0 }}
          />
            {tabs.map((tab, index) => {

              let initialX = 0;
              let initialY = 0;
              if (tab.id == "homepage") initialX = -30;
              else if (tab.id == "projects") initialY = -30
              else if (tab.id == "experience") initialY = 30
              else if (tab.id == "about") initialX = 30

              return (
                
                <motion.div key={tab.id} className="relative flex flex-col items-center">
                  {/* tab titles */}
                  <motion.button 
                  key={tab.id}
                  initial={{x: initialX, y: initialY, opacity: 0}}
                  className="text-amber-100"
                  animate={{x: 0, y: 0, opacity: 1, transition: {duration: 0.5, delay: 1.2+index*0.2}}}
                  onClick={() => setSelectedTab(tab.id)}
                  whileHover={{ scale: 1.2, color: "#fcd34d"}}
                  >
                    {tab.label}  
                  </motion.button>
                
                {/* underline logic */}
                {selectedTab === tab.id && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 h-[3px] bg-yellow-600"
                    animate={{ opacity: 1 }}
                    style={{top: "100%"}}
                    initial={underlineLoaded ? false : { opacity: 0 }}  // only fade-in once
                    transition={{ type: "spring", stiffness: 500, damping: 30, delay: underlineLoaded ? 0 : 2.3  }}
                    onAnimationComplete={() => !underlineLoaded && setUnderlineLoaded(true)}
                  />
                )}
                </motion.div>
              );
          })}
          </div>
        </nav>

        <div className="relative w-full overflow-y-scroll scroll-smooth snap-y snap-mandatory pt-0">
          <motion.section id="homepage" className="snap-start min-h-screen relative z-[10]">
            <HomePage scrollYProgress={scrollYProgress} />
          </motion.section>

          <motion.section id="about" className="snap-start min-h-screen bg-emerald-100 relative z-[50]"
            style={{
              y: aboutypos
            }}
          >
            <AboutMe scrollYProgress={scrollYProgress} fontClass={bebas.className}/>
          </motion.section>

          <section id="projects" className="snap-start min-h-screen">
            <Projects />
          </section>

          <section id="experience" className="snap-start min-h-screen">
            <Experience />
          </section>
        </div>
      </>
        
      )
    }
    </main>
  );
}