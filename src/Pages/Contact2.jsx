import { motion } from "framer-motion";
import { HiOutlineMail } from "react-icons/hi";
import { ImLinkedin } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";

const Contact = () => {
  const fadeInAnimation = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 md:px-10 py-16">
      <div className="w-full max-w-3xl mt-80">
        {/* Contact Heading */}
        <h1 className="text-center text-4xl sm:text-5xl font-semibold mb-12 md:mb-16">
          Contact <span className="text-blue-500 font-bold">Me</span>
        </h1>

        {/* Contact Cards */}
        <div className="flex flex-col gap-6">
          {[
            {
              icon: (
                <HiOutlineMail className="text-4xl sm:text-5xl text-blue-400" />
              ),
              text: "aasthalakhanpal11@gmail.com",
            },
            {
              icon: (
                <a
                  href="https://www.linkedin.com/in/aasthalakhanpal7/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ImLinkedin className="text-4xl sm:text-5xl text-blue-500" />
                </a>
              ),
              text: "/aasthalakhanpal7",
            },
            {
              icon: (
                <a
                  href="https://github.com/aastha2112"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-4xl sm:text-5xl text-gray-300" />
                </a>
              ),
              text: "aastha2112",
            },
            {
              icon: (
                <IoCallSharp className="text-4xl sm:text-5xl text-green-400" />
              ),
              text: "+91 82196-88585",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              className="bg-[#183850] p-4 sm:p-6 rounded-xl shadow-lg w-full flex items-center gap-4 text-white text-lg font-semibold hover:shadow-2xl transition-all"
            >
              {item.icon}
              <p className="text-sm sm:text-lg">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
