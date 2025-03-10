import { motion } from "framer-motion";
import Trendify from "../assets/ProjectSS/Trendify.png";
// import BingeBox from "../assets/ProjectSS/BingeBox.png";
import Drum_Kit from "../assets/ProjectSS/Drum_Kit.png";
import Digital_Clock from "../assets/ProjectSS/Digital_Clock.png";
import Weatherly from "../assets/ProjectSS/WeatherlySS.png";
import StoryCraftUI from "../assets/ProjectSS/StoryCraftUI.png";

const Projects = () => {
  return (
    <section className="common flex flex-col items-center px-4 md:px-10  md:pt-8 pb-16 md:pb-24">
      {/* Heading */}
      <h1 className="text-center text-4xl md:text-5xl font-semibold mb-12 md:pt-8 mt-8 md:mt-15 md:mb-30">
        Proje<span className="text-blue-500 font-bold">cts</span>
      </h1>

      {/* Projects Grid */}
      <div className="w-full max-w-6xl flex flex-col md:grid md:grid-cols-2  gap-12 md:gap-14">
        {[
          {
            name: "Weatherly",
            img: Weatherly,
            liveLink:
              "https://weatherly-hfyas7hox-aastha-lakhanpals-projects.vercel.app/",
            codeLink: "https://github.com/aastha2112/Weatherly/tree/master",
            desc: "A weather app providing real-time updates on temperature, humidity, wind speed, and more, with a seamless city search feature.",
            tech: ["React", "TailwindCSS", "Vercel"],
          },
          {
            name: "Trendify",
            img: Trendify,
            liveLink: "https://aastha2112.github.io/Trendify/",
            codeLink: "https://github.com/aastha2112/Trendify",
            desc: "A modern fashion e-commerce platform with user authentication, real-time inventory, and seamless payment integration.",
            tech: ["HTML", "CSS", "JavaScript", "Glitch"],
          },
          {
            name: "StoryCraft",
            img: StoryCraftUI,
            liveLink: "https://storycraft-baba5.web.app/",
            codeLink: "https://github.com/aastha2112/StoryCraft",
            desc: "A collaborative storytelling platform with real-time contributions and user authentication.",
            tech: ["React", "Redux", "Firebase", "ChakraUI"],
          },
          {
            name: "Drum Kit",
            img: Drum_Kit,
            liveLink:
              "https://aastha2112.github.io/JavaScript30/01%20-%20JavaScript%20Drum%20Kit/",
            codeLink:
              "https://github.com/aastha2112/JavaScript30/tree/master/01%20-%20JavaScript%20Drum%20Kit",
            desc: "A fun and interactive drum kit that lets users play different drum sounds with keyboard presses or clicks.",
            tech: ["JavaScript", "CSS", "HTML"],
          },
          {
            name: "Digital Clock",
            img: Digital_Clock,
            liveLink:
              "https://aastha2112.github.io/JavaScript30/digital_clock/",
            codeLink:
              "https://github.com/aastha2112/JavaScript30/tree/master/digital_clock",
            desc: "A responsive digital clock that displays the day, hours, minutes, and seconds, with a smooth light and dark theme switch.",
            tech: ["JavaScript", "CSS", "HTML"],
          },
        ].map((project, index) => (
          <motion.div
            key={project.name}
            className="bg-[#183850] p-6 rounded-xl shadow-lg flex flex-col items-center text-white text-lg font-semibold hover:shadow-2xl transition-all w-full md:w-full z-20"
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
            <div className="flex gap-4 mt-6 ">
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
