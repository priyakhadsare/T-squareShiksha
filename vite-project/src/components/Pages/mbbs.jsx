import React from "react";
import { motion } from "motion/react";
import Title from "../Title";
import bj from "../../assets/bj.png";
import pearl from "../../assets/pearl.png";
import ww_design from "../../assets/ww_design.png";
import vit from "../../assets/vit.png";

const colleges = [
  {
    id: 1,
    name: "BJ Medical College",
    image: bj,
  },
  {
    id: 2,
    name: "Medical College In Mumbai",
    image: pearl,
  },
  {
    id: 3,
    name: "AIIMS Nagpur",
    image: ww_design,
  },

  {
    id: 4,
    name: "Government Medical College in Nagpur",
    image: vit,
  },

  
];

const MBBS = () => {
  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{once: true}}
      transition={{staggerChildren: 0.2}}
      id="mbbs" 
      className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <Title 
        title="MBBS Colleges" 
        desc="Explore top medical colleges and begin your journey towards becoming a healthcare professional."
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

export default MBBS;

