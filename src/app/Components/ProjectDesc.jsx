"use client";
import { motion } from "framer-motion";

export default function ProjectDesc({ image, title, description, techUsed, projlink }) {

  return (


    <motion.a
      href={projlink}
      target="_blank"
      rel="noopener noreferrer"
      className="relative w-[7W0dvh] h-[50dvh] bg-orange-100 shadow-lg overflow-hidden cursor-pointer"
      initial="rest"
      whileHover="hover"
      animate="rest"
    >

      <div className="p-0">
        <h3 className="text-xl font-semibold mb-3 mt-3 text-amber-800 text-center">{title}</h3>
      </div>

      <motion.img
        src={image}
        alt={title}
        className="w-full h-[45dvh] transform -translate-y-[2%]  object-cover z-10"
        variants={{
            hover: { scale: 1.19},
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
      />

          {/* cover for image*/}
      <motion.div
      variants={{
        hover: {scale: 1.05, opacity: 0.6},
        rest: {scale: 1, opacity: 0}
      }}
      transition={{ duration: 0.4, ease: "easeOut"}}
      className="absolute inset-0 w-full h-full bg-black "
      />
      
      <motion.div className="absolute inset-0 w-full h-full z-20 pl-2 pr-2"
      variants={{
        hover: {opacity: 1},
        rest: {opacity: 0}
      }}
      transition={{duration: 0.4, ease: "easeOut"}}
      >
           <motion.h3 className="text-2xl font-semibold mb-2 mt-2 text-center text-white">{title}</motion.h3>
           <motion.p className="text-white text-base text-center transform translate-y-[50%] leading-relaxed">{description}</motion.p>

           {techUsed && techUsed.length > 0 && (
          <div className="flex flex-wrap justify-center transform translate-y-[600%] gap-3 mt-2">
            {techUsed.map((tech, index) => (
              <motion.span
                key={index}
                className="text-white outline-2 outline-white px-3 py-1 rounded-full text-sm font-medium shadow-sm"
                variants={{
                  rest: { opacity: 0, y: 10 },
                  hover: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        )}
        </motion.div>
    </motion.a>
  );
}