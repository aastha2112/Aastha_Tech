import React, { useState } from "react";
import { skills } from "../constants";
import { motion } from "framer-motion";

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section className="common flex flex-col items-center px-4 md:px-10 py-10  md:pt-20">
      {/* Heading */}
      <motion.h2
        className="text-center text-3xl md:text-5xl font-medium mb-15 md:mb-38  md:mt-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        <span className="text-blue-500 font-bold">Skills</span> & Expertise
      </motion.h2>

      {/* Skills Grid */}
      <div className="flex flex-col items-center gap-6 md:gap-10">
        <div className="grid grid-cols-3 md:grid-cols-4 p-2 gap-6 md:gap-20">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="block-container w-20 h-20 md:w-30 md:h-30 relative"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center shadow-lg">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-2/5 h-2/5 md:w-1/2 md:h-1/2 object-contain"
                />
              </div>

              {/* Chatbox with skill name */}
              {hoveredSkill === skill.name && (
                <div className="absolute -bottom-6 z-10 left-1/2  transform -translate-x-1/2  p-2 bg-gray-700 text-white rounded-lg shadow-lg">
                  <span>{skill.name}</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
