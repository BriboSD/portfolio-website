
import { motion } from "framer-motion";


export default function JobDesc({ name, position, date, location, description, leftSide }) {
    return (
        <motion.div
          className="bg-amber-50 text-amber-900 rounded-2xl shadow-md p-6 w-full max-w-3xl mx-auto my-6 border border-amber-200"
          initial={leftSide ? ({ opacity: 0, x: -50 }) : ( {opacity: 0, x: 50 })}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          
          <div className="flex flex-col sm:flex-row sm:justify-between items-center mb-3">
            <h2 className="text-base font-bold text-red-700">{name}</h2>
            <p className="text-base font-semibold text-amber-800">{position}</p>
          </div>
    
          
          <div className="flex flex-col items-center sm:flex-row sm:justify-between mb-4">
            <p className="text-sm text-amber-700">{date}</p>
            <p className="text-sm text-amber-700">{location}</p>
          </div>
    
          <ul className="list-disc list-inside text-xs lg:text-sm text-amber-900 leading-relaxed space-y-1">
            {Array.isArray(description)
              ? description.map((item, index) => <li key={index}>{item}</li>) : <li>{description}</li>}
          </ul>
        </motion.div>
      );
}