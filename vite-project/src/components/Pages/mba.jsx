import React from "react";
import { motion } from "motion/react";
import Title from "../Title";
import patil from "../../assets/patil.png";
import symboisis from "../../assets/symboisis.png";
import indira from "../../assets/indira.png";
import jbims from "../../assets/jbims.png";
import pibm from "../../assets/pibm.png";
import sbiims from "../../assets/sbiims.png";
import iims from "../../assets/iims.png";
import iiebm from "../../assets/iiebm.png";

const colleges = [
  
  {
    id: 1,
    name: "Symbiosis Institute Of Business Management (SIBM) Pune",
    image: symboisis,
  },
  {
    id: 2,
    name: "Jamnalal Bajaj Institute Of Management Studies",
    image: jbims,
  },

  {
    id: 3,
    name: "DR.D.Y.PATIL B-SCHOOL Global Business School And Research Centre",
    image: patil,
  },
  {
    id:4,
    name: "Indira Institute Of Management MBA",
    image:indira,

  },
  {
    id:5,
    name:"Pune Institute Of Business Management PIBM",
    image:pibm,
  },
  {
    id:6,
    name:"SaiBalaji International Institute Of Management Science",
    image:sbiims,

    
  },
  {
    id:7,
    name:"International Institute Of Management And Human Resource Development",
    image:iims,
  },
  {
    id:8,
    name:"Pune Business School",
    image:iiebm,
  },


  
];

const MBA = () => {
  const handleCollegeClick = () => {
    const contactSection = document.getElementById('contact-us');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{once: true}}
      transition={{staggerChildren: 0.2}}
      id="mba" 
      className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <Title 
        title="MBA Colleges" 
        desc="Find the best business schools to advance your management career and leadership skills."
      />
      
      <div className="flex gap-5 flex-wrap justify-center w-full">
        {colleges.map((college) => (
          <motion.div
            key={college.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            onClick={handleCollegeClick}
            className="w-[250px] rounded-xl shadow-lg overflow-hidden bg-white dark:bg-gray-800 text-center cursor-pointer transition-transform duration-300 hover:scale-105"
          >
            <img
              src={college.image}
              alt={college.name}
              className="w-full h-40 object-cover pointer-events-none"
            />
            <h3 className="p-4 text-lg font-semibold text-gray-800 dark:text-white">
              {college.name}
            </h3>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default MBA;
