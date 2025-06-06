import { motion } from "framer-motion";
import ProfPic from "../assets/profilePic/ProfPic.jpg";

const About = () => {
  const handleDownloadResume = () => {
    const resumeUrl = "/Aastha_Tech/Aastha_Dev_Frontend.pdf";
    console.log("button clicked!");
    window.open(resumeUrl, "_blank");

    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Aastha_Dev_Frontend.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.section
      id="about"
      className="common flex flex-col items-center px-6  md:pt-26 pb-16 md:pb-24 "
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Heading */}
      <motion.h2
        className="text-center font-semibold mb-20 mt-16 md:mt-20 text-4xl sm:text-5xl"
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
            src={ProfPic}
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
          <p className="text-lg sm:text-2xl leading-relaxed text-gray-300 mb-5">
            I am a detail-oriented{" "}
            <span className="bg-gradient-to-r from-blue-500 to-[#84d6ff] bg-clip-text text-2xl text-transparent font-extrabold">
              Frontend Developer
            </span>{" "}
            passionate about creating intuitive, high-performance user
            interfaces. With expertise in React, Redux, Next.js, TypeScript, and
            JavaScript, I focus on delivering seamless experiences while staying
            up-to-date with the latest web development trends.
          </p>

          <p className="text-lg sm:text-2xl leading-relaxed text-gray-300">
            When I’m not coding, I enjoy exploring new places, reading about
            UI/UX design, and working on side projects.
          </p>
          <button
            onClick={handleDownloadResume}
            style={{ pointerEvents: "auto" }}
            className="mt-8 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg text-lg transition-all duration-300 flex items-center gap-2 z-10 relative"
          >
            📄 Download Resume
          </button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default About;
