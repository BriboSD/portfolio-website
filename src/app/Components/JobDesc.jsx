
import { motion, useTransform } from "framer-motion";


export default function JobDesc({ name, position, date, location, description, leftSide }) {
    return (
        <motion.div
          className="bg-amber-50 text-amber-900 rounded-2xl shadow-md p-6 w-full max-w-3xl mx-auto my-6 border border-amber-200"
          initial={leftSide ? ({ opacity: 0, x: -50 }) : ( {opacity: 0, x: 50 })}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Header section: name + position */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3">
            <h2 className="text-2xl font-bold text-red-700">{name}</h2>
            <p className="text-lg font-semibold text-amber-800">{position}</p>
          </div>
    
          {/* Subheader: date + location */}
          <div className="flex flex-col sm:flex-row sm:justify-between mb-4">
            <p className="text-sm text-amber-700">{date}</p>
            <p className="text-sm text-amber-700">{location}</p>
          </div>
    
          {/* Description */}
          <p className="text-base text-amber-900 leading-relaxed">{description}</p>
        </motion.div>
      );
}