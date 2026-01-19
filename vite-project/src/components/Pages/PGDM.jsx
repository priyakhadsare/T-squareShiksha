import React from "react";
import { motion } from "motion/react";
import Title from "../Title";
import coep from "../../assets/coep.png";
import pccoe from "../../assets/pccoe.png";
import mit from "../../assets/mit.png";
import vit from "../../assets/vit.png";

const colleges = [
  {
    id: 1,
    name: "International Institute Of Management Studies",
    image: coep,
  },
  {
    id: 2,
    name: "Indira College",
    image: pccoe,
  },
  {
    id: 3,
    name: "PIBM",
    image: mit,
  },

  {
    id: 4,
    name: "DY Patil",
    image: vit,
  },

  {
    id:5,
    name:"IIEBM",
    image:vit,
  },

  
    
];

const PGDM = () => {
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
      id="pgdm" 
      className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <Title 
        title="PGDM Colleges" 
        desc="Explore top PGDM institutions and advance your management career with specialized programs."
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

export default PGDM;
