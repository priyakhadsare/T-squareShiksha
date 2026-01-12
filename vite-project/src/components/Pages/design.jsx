import React from "react";
import { motion } from "motion/react";
import Title from "../Title";
import symboisis from "../../assets/symboisis.png";
import ww_design from "../../assets/ww_design.png";
import dypatil from "../../assets/dypatil.png";
import nift from "../../assets/nift.png";

const colleges = [
  {
    id: 1,
    name: "Symbiosis Institute of Design (SID), Pune",
    image: symboisis,
  },
  {
    id: 2,
    name: "Whistling Woods International (WWI), Mumbai",
    image: ww_design,
  },
  {
    id: 3,
    name: "Dr. D.Y. Patil Vidyapeeth, Pune",
    image: dypatil,
  },

  {
    id: 4,
    name: "NIFT Mumbai",
    image: nift,
  },

  
];

const Design = () => {
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
      id="design" 
      className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <Title 
        title="Design Colleges" 
        desc="Unleash your creativity at leading design institutes and shape the future of visual arts."
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

export default Design;

