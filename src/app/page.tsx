"use client";

import { motion, useAnimate } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [scope, animate] = useAnimate();
  const [showCurtain, setShowCurtain] = useState(true);
  const [bg, setBg] = useState("black")

  useEffect(() => {

    //opening page animation
    const runSequence = async () => {

      // step 1: Fade in Hello
      await animate("#hello", {opacity: 1, y:50}, {duration: 1.5});
      // Step 2: Fade in My name
      await animate("#intro-text", { opacity: 1, y:70 }, { duration: 0.8});

      //step 3: make intro text move up a little for spring effect
      await animate("#intro-text", {y:60 }, { duration: 0.2, delay: 0.3});

      // Step 4: Move text down and fade in photo
      await Promise.all([

        //move words down
        animate("#intro-text", { y: 300 }, { duration: 0.3}),

        animate("#photo-mask", { y: 300 }, { duration: 0.3}),

        // Fade in photo
        animate("#photo", { opacity: 1, scale: 1 }, { duration: 0.1, delay: 0.1 }),
      ]);

      //step 5: make intro text bounce again
      await animate("#intro-text", {y:285 }, { duration: 0.2});

      await animate("#fullCurtain", {y:"0%"}, {duration: 1.5, delay: 1, ease: "easeInOut"}
      ).then(()=>  {
        setBg("gray");
      });
    };

    runSequence();
  }, [animate]);

  return (
    <main className="flex flex-col items-center justify-start pt-50 -min-h-screen relative"
    ref={scope}
    style={{ backgroundColor: bg }}
    >
  
      {/* Text stays in normal flow */}
      <motion.h1
        id="hello"
        initial={{ opacity: 0, y: -100 }}
        className="text-9xl font-bold z-10"
      >
        Hello.
      </motion.h1>

      <motion.h1
        id="intro-text"
        initial={{ opacity: 0, y: 0 }}
        className="text-4xl font-bold z-10 mt-4"
      >
        My name is Gabriel
      </motion.h1>

      {/* Photo + mask absolutely positioned behind text */}
      <div className="absolute top-[365] left-1/2 -translate-x-1/2 mt-4">
        <motion.img
          id="photo"
          src="/images/tempPic.png"
          alt="Gabriel"
          initial={{ opacity: 0, scale: 0.8, y: -10 }}
          className="w-60 h-60 rounded-full border-2 border-blue-500 z-80"
        />

        <motion.div
          id="photo-mask"
          initial={{ height: "15rem" , y: -50}}
          className="w-60 h-60 rounded-full absolute top-0 left-0"
          style={{ backgroundColor: "#0a0a0a" }}
        />
      </div>

      <div className="relative w-full h-screen" >
        {showCurtain && (
          <motion.div
            id = "fullCurtain"
            initial={{ y: "-100%" }}
            onAnimationComplete={() => setShowCurtain(false)}
            className="fixed top-0 left-0 w-full h-[200vh] bg-gray-500 z-50 pointer-events-none"
          />
        )}
      </div>
    </main>
  );
}