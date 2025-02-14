import { motion } from "framer-motion";
import Trendify from "../assets/ProjectSS/Trendify.png";
import BingeBox from "../assets/ProjectSS/BingeBox.png";

const Projects = () => {
  return (
    <section className="common flex flex-col items-center px-4 md:px-10 mt-14 md:mt-20 py-12 md:py-16">
      {/* Animated Heading */}
      <motion.h1
        className="text-center text-3xl md:text-5xl font-semibold mb-6 md:mb-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }} // Ensures animation on every scroll
      >
        Proje
        <span className="text-blue-500 font-bold">cts</span>
      </motion.h1>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 w-full max-w-6xl">
        {[
          {
            name: "Trendify",
            img: Trendify,
            link: "https://aastha2112.github.io/Trendify/",
            desc: "A modern fashion e-commerce platform with user authentication, real-time inventory, and seamless payment integration.",
          },
          {
            name: "BingeBox",
            img: BingeBox,
            link: "https://aastha2112.github.io/BingeBox/",
            desc: "A smart entertainment hub with user authentication, real-time recommendations, and a seamless streaming experience.",
          },
        ].map((project, index) => (
          <motion.div
            key={project.name}
            className="relative bg-[#183850] p-6 rounded-xl shadow-lg flex flex-col items-center text-white text-lg font-semibold before:absolute before:inset-0 before:bg-gradient-to-t before:from-blue-500 before:to-transparent before:opacity-20 before:rounded-xl hover:before:opacity-40 before:pointer-events-none transition-all w-full"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: false }} // Re-animates every time it enters view
          >
            <img
              src={project.img}
              alt={project.name}
              className="w-full h-48 rounded-lg mb-4 object-cover"
            />
            <h3 className="text-xl md:text-2xl font-bold">{project.name}</h3>
            <p className="text-md text-gray-300 text-center mt-2 px-4">
              {project.desc}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-semibold hover:bg-blue-500 transition-all duration-300"
            >
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
