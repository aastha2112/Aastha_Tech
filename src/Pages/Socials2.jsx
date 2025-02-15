import { motion } from "framer-motion";
import { ImLinkedin } from "react-icons/im";
import { FaGithub, FaInstagram } from "react-icons/fa";

const Socials = () => {
  const socialLinks = [
    {
      id: 1,
      icon: <ImLinkedin className="text-blue-500" />,
      link: "https://www.linkedin.com/in/aasthalakhanpal7/",
    },
    {
      id: 2,
      icon: <FaGithub className="text-gray-300" />,
      link: "https://github.com/aastha2112",
    },
    {
      id: 3,
      icon: <FaInstagram className="text-pink-500" />,
      link: "https://www.instagram.com/7aastha",
    },
  ];

  return (
    <motion.div
      className="flex justify-center gap-6 sm:gap-8 mt-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {socialLinks.map((social) => (
        <motion.a
          key={social.id}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#183850] p-4 sm:p-5 rounded-full shadow-lg text-3xl sm:text-4xl flex items-center justify-center transition-all duration-300 hover:scale-110 z-50"
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          {social.icon}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Socials;
