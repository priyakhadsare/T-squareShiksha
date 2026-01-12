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
    name: "College Of Engineering Pune",
    image: coep,
  },
  {
    id: 2,
    name: "Pimpri chinchwad college of engineering",
    image: pccoe,
  },
  {
    id: 3,
    name: "MIT college of engineering",
    image: mit,
  },

  {
    id: 4,
    name: "VIIT college of engineering",
    image: vit,
  },

  
];

const Btech = () => {
  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{once: true}}
      transition={{staggerChildren: 0.2}}
      id="btech" 
      className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <Title 
        title="B.Tech Colleges" 
        desc="Explore top engineering colleges and kickstart your technical career journey."
      />
      
      <div className="flex gap-5 flex-wrap justify-center w-full">
        {colleges.map((college) => (
          <motion.div
            key={college.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-[250px] rounded-xl shadow-lg overflow-hidden bg-white dark:bg-gray-800 text-center cursor-pointer transition-transform duration-300 hover:scale-105"
          >
            <img
              src={college.image}
              alt={college.name}
              className="w-full h-40 object-cover"
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

export default Btech;
