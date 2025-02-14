import { motion } from "framer-motion";
import profilePic from "../assets/profilePic/prof1.webp";

const About = () => {
  return (
    <motion.section
      id="about"
      className="common flex flex-col items-center px-6 pt-28 md:pt-36 pb-16 md:pb-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Heading */}
      <motion.h2
        className="text-center text-4xl font-semibold mb-6"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Something About <span className="text-blue-500 font-bold">Me</span>
      </motion.h2>

      {/* Content Section */}
      <motion.div
        className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 w-full max-w-6xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        {/* Image */}
        <motion.div
          className="relative bg-gradient-to-b from-blue-600 to-[#2f6690] p-4 md:p-6 rounded-xl shadow-xl"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src={profilePic}
            alt="Profile Picture"
            className="w-[200px] sm:w-[250px] md:w-[320px] rounded-lg border-4 border-[#eef4ed]"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="text-center md:text-left max-w-2xl px-2 sm:px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <p className="text-lg sm:text-xl leading-relaxed text-gray-300 mb-5">
            I am a detail-oriented{" "}
            <span className="bg-gradient-to-r from-blue-500 to-[#84d6ff] bg-clip-text text-transparent font-extrabold">
              Frontend Developer
            </span>{" "}
            passionate about crafting seamless user experiences.
          </p>

          <p className="text-lg sm:text-xl leading-relaxed text-gray-300">
            I specialize in **React, Redux, JavaScript, HTML, and CSS**, always
            striving for clean code and performance optimization. Beyond coding,
            I love **exploring new places**, **UI/UX trends**, and **building
            side projects**.
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default About;
