"use client";
import { motion } from "framer-motion";

export default function ProjectDesc({ image, title, description }) {

    const overlayvariants = {
        hover: {opacity: 1},
        rest: {opacity: 0}

    }
  return (


    <motion.div
      className="relative w-full h-140 overflow-hidden bg-orange-100 shadow-lg cursor-pointer"
    >

      <img
        src={image}
        alt={title}
        className="w-full h-100 object-cover"
        variants={{
            rest: { scale: 1 },
            hover: { scale: 1.1 },
          }}
          transition={{ duration: 0.4 }}
      />

      <motion.div
      variants={overlayvariants}
      className="w-full h-100 bg-black"
      >
        {/* here goes overlay logic (i.e. animation, and text from component import*/}
      </motion.div>

      <div className="p-5">
        <h3 className="text-2xl font-semibold mb-2 text-amber-800">{title}</h3>
        <p className="text-amber-900 text-base leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}