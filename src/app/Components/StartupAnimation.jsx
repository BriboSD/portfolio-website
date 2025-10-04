"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function StartupAnimation({ animate, setStartSeen, setBg }) {
  useEffect(() => {
    const runSequence = async () => {
      await animate("#hello", { opacity: 1, y: 50 }, { duration: 1.5 });
      await animate("#intro-text", { opacity: 1, y: 70 }, { duration: 0.8 });
      await animate("#intro-text", { y: 60 }, { duration: 0.2, delay: 0.3 });

      await Promise.all([
        animate("#intro-text", { y: 300 }, { duration: 0.3 }),
        animate("#photo-mask", { y: 300 }, { duration: 0.3 }),
        animate("#photo", { opacity: 1, scale: 1 }, { duration: 0.1, delay: 0.1 }),
      ]);

      await animate("#intro-text", { y: 285 }, { duration: 0.2 });

      await Promise.all([
        animate("#fullCurtain", { y: "0%" }, { duration: 1.5, delay: 1, ease: "easeInOut" }),
        (async () => {
          await animate("#welcome-text", { y: 20 }, { duration: 0.5, delay: 1.5 });
          await animate("#welcome-text", { y: 0 }, { duration: 0.2, ease: "easeOut" });
        })(),
      ]);

      setBg("#ffedd5");
      setStartSeen(true);
    };

    runSequence();
  }, [animate]);

  return (
    <>
      <motion.h1 id="hello" initial={{ opacity: 0, y: -100 }} className="text-9xl text-yellow-100 font-bold z-10">
        Hello.
      </motion.h1>

      <motion.h1 id="intro-text" initial={{ opacity: 0, y: 0 }} className="text-4xl text-orange-300 font-bold z-10 mt-4">
        My name is Gabriel
      </motion.h1>

      <div className="absolute top-[365px] left-1/2 -translate-x-1/2 mt-4">
        <motion.img
          id="photo"
          src="/images/tempPic.png"
          alt="Gabriel"
          initial={{ opacity: 0, scale: 0.8, y: -10 }}
          className="w-60 h-60 rounded-full border-2 border-blue-500 z-80"
        />
        <motion.div
          id="photo-mask"
          initial={{ height: "15rem", y: -50 }}
          className="w-60 h-60 rounded-full absolute top-0 left-0"
          style={{ backgroundColor: "#713f12" }}
        />
      </div>

      <div className="relative w-full h-screen">
        <motion.div
          id="fullCurtain"
          initial={{ y: "-100%" }}
          className="fixed top-0 left-0 w-full h-[200vh] bg-orange-100 z-50 pointer-events-none"
        />
      </div>

      <motion.h1
        id="welcome-text"
        initial={{ y: -500 }}
        className="absolute top-[300px] left-1/2 -translate-x-1/2 text-amber-800 text-6xl font-bold z-[60] mt-4"
      >
        Welcome to my portfolio!
      </motion.h1>
    </>
  );
}