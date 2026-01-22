import React from "react";
import { motion } from "motion/react";
import Title from "../Title";
import bharti from "../../assets/bharti.png";
import pccoe from "../../assets/pccoe.png";
import vit from "../../assets/vit.png";
import patil from "../../assets/patil.png";
import sinhgad from "../../assets/sinhgad.png";

const colleges = [
  {
    id: 1,
    name: "Bharti Vidyapeeth",
    image: bharti,
  },
  {
    id: 2,
    name: "Pimpri chinchwad college of engineering",
    image: pccoe,
  },
  {
    id: 3,
    name: "DY Patil College Of Engineering",
    image: patil,
  },

  {
    id: 4,
    name: "VIIT college of engineering",
    image: vit,
  },
  {
    id: 5,
    name: "Sinhgad Institute Of Engineering And technology",
    image: sinhgad,
  },



];

const Btech = () => {
  const handleCollegeClick = () => {
    const contactSection = document.getElementById("contact-us");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
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

export default Btech;
