import { motion } from "framer-motion";
import Trendify from "../assets/ProjectSS/Trendify.png";
import BingeBox from "../assets/ProjectSS/BingeBox.png";

const Projects = () => {
  return (
    <section className="common flex flex-col items-center px-4 md:px-10 pt-20 md:pt-28 pb-16 md:pb-24">
      {/* Heading */}
      <h1 className="text-center text-4xl md:text-5xl font-semibold mb-12 mt-240 md:mt-15 md:mb-30">
        Proje<span className="text-blue-500 font-bold">cts</span>
      </h1>

      {/* Projects Grid */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-12 md:gap-14">
        {[
          {
            name: "Trendify",
            img: Trendify,
            liveLink: "https://aastha2112.github.io/Trendify/",
            codeLink: "https://github.com/aastha2112/Trendify",
            desc: "A modern fashion e-commerce platform with user authentication, real-time inventory, and seamless payment integration.",
            tech: ["HTML", "CSS", "JavaScript", "Glitch"],
          },
          {
            name: "BingeBox",
            img: BingeBox,
            liveLink: "https://aastha2112.github.io/BingeBox/",
            codeLink: "https://github.com/aastha2112/BingeBox",
            desc: "A smart entertainment hub with user authentication, real-time recommendations, and a seamless streaming experience.",
            tech: ["React", "CSS", "HTML"],
          },
        ].map((project, index) => (
          <motion.div
            key={project.name}
            className="bg-[#183850] p-6 rounded-xl shadow-lg flex flex-col items-center text-white text-lg font-semibold hover:shadow-2xl transition-all w-full md:w-1/2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: false }}
          >
            {/* Project Image */}
            <img
              src={project.img}
              alt={project.name}
              className="w-full h-48 rounded-lg mb-4 object-cover hover:scale-105 transition-transform duration-300"
            />

            {/* Project Name */}
            <h3 className="text-xl md:text-2xl font-bold">{project.name}</h3>

            {/* Description */}
            <p className="text-md text-gray-300 text-center mt-2 px-4">
              {project.desc}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-gray-800 border border-gray-600 px-3 py-1 text-sm rounded-md text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-6">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white py-2 px-5 rounded-lg text-sm font-semibold hover:bg-blue-500 transition-all duration-300"
              >
                Live Demo
              </a>
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 text-white py-2 px-5 rounded-lg text-sm font-semibold hover:bg-gray-600 transition-all duration-300"
              >
                View Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
