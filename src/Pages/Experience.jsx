import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaReact } from "react-icons/fa";

const experiences = [
  {
    role: "Software Developer",
    company: "Betatest Solutions Pvt. Ltd.",
    period: "Feb, 2025 - Present",
    description:
      "Built full-stack applications with React.js, Next.js, Nest.js, and PostgreSQL, including APIs, authentication, integrations, and a React Native mobile app.",
    icon: <FaCode className="text-purple-400 text-3xl" />,
  },

  {
    role: "Full Stack Developer Trainee",
    company: "Masai School",
    period: "Oct, 2024 - June, 2025",
    description:
      "Developed end-to-end apps using React.js, Node.js, and Firebase. Implemented authentication, database models, and APIs.",
    icon: <FaDatabase className="text-cyan-400 text-3xl" />,
  },
  {
    role: "Frontend Developer",
    company: "Freelance",
    period: "May, 2024 - Present",
    description:
      "Built responsive, high-performance UIs with React, Redux, and Tailwind. Focused on seamless UX and reusable components.",
    icon: <FaReact className="text-blue-400 text-3xl" />,
  },
];

const Experience = () => {
  return (
    <div
      id="experience"
      className="relative flex flex-col items-center justify-center min-h-screen w-full px-6 md:px-16 lg:px-24 py-20 overflow-hidden bg-[#16425b]"
    >
      {/* Section Header */}
      <motion.h2
        className="text-4xl sm:text-5xl font-bold text-white z-10 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-center text-4xl md:text-5xl font-semibold mb-12   ">
          Experi<span className="text-blue-500 font-bold">ence</span>
        </h1>
      </motion.h2>

      {/* Timeline */}
      <div className="relative w-full max-w-4xl flex flex-col gap-8 z-10">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="relative bg-[#1c3b52] rounded-2xl shadow-lg p-6 border-l-4 border-blue-500"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="flex items-center gap-4 mb-3">
              {exp.icon}
              <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
            </div>
            <p className="text-gray-300 font-medium">{exp.company}</p>
            <p className="text-sm text-gray-400 mb-3">{exp.period}</p>
            <p className="text-gray-300">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
