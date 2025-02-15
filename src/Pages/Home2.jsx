import { motion } from "framer-motion";
import profilePic from "../assets/profilePic/ProfilePicture.webp";

const Home = ({ scrollToSection, refs }) => {
  return (
    <motion.div
      className="common flex flex-col items-center text-center md:text-left md:flex-row gap-8 md:gap-16 md:mb-24 pt-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="relative p-4 rounded-full bg-gradient-to-b from-blue-600 to-[#2f6690] shadow-xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          src={profilePic}
          alt="Profile"
          className="w-32 sm:w-40 md:w-52 lg:w-60 rounded-full border-4 border-[#eef4ed]"
        />
      </motion.div>

      <motion.div
        className="flex flex-col items-center md:items-start"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <h1 className="text-4xl sm:text-5xl font-semibold mb-2">Hi, 👋</h1>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold">
          I<span className="text-blue-500">'</span>m{" "}
          <strong className="bg-gradient-to-r from-blue-500 to-[#84d6ff] bg-clip-text text-transparent">
            Aastha
          </strong>
          !
        </h1>

        <motion.p
          className="text-lg sm:text-xl mt-3 px-4 py-2 rounded-lg font-semibold bg-gradient-to-r from-blue-500 to-[#16425b] text-white shadow-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          FRONT-END DEVELOPER
        </motion.p>

        <p className="text-md sm:text-lg mt-4 text-gray-300 px-2 sm:px-0">
          A Web Developer based in India, specializing in React, Redux, and
          JavaScript. Passionate about clean code, performance, and seamless
          user experiences.
        </p>

        <h3 className="mt-5 text-lg font-medium text-white">
          Let’s build something amazing!
        </h3>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-5 z-20">
          <motion.button
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 shadow-md transition-all"
            onClick={() => scrollToSection(refs.contactRef)}
            whileHover={{ scale: 1.05 }}
          >
            Contact me
          </motion.button>

          <motion.button
            className="rounded-full border-2 border-blue-500 px-6 py-3 text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-700 shadow-md transition-all"
            onClick={() => scrollToSection(refs.projectsRef)}
            whileHover={{ scale: 1.05 }}
          >
            See my work
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
