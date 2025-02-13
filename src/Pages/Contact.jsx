import { HiOutlineMail } from "react-icons/hi";
import { ImLinkedin } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";

const Contact = () => {
  return (
    <>
      <h1
        className="text-center text-5xl font-medium  pt-13
"
      >
        Contact{" "}
        <span
          className="text-blue-500 font-bold
"
        >
          Me
        </span>
      </h1>
      <div className="common ">
        <div>
          <div className="relative bg-[#183850] p-6 rounded-xl shadow-lg  h-30 flex items-center justify-between text-white text-lg font-semibold before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-500 before:to-transparent before:opacity-20 before:rounded-xl hover:before:opacity-40 mb-5">
            <h2 className="text-5xl  mr-5">
              <HiOutlineMail />
            </h2>
            <p>aasthalakhanpal11@gmail.com</p>
          </div>
          <div className="relative bg-[#183850] p-6 rounded-xl shadow-lg  h-30 flex items-center justify-between text-white text-lg font-semibold before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-500 before:to-transparent before:opacity-20 before:rounded-xl hover:before:opacity-40 mb-5 before:pointer-events-none">
            <a
              href="https://www.linkedin.com/in/aasthalakhanpal7/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-5xl"
            >
              <ImLinkedin />
            </a>
            <p>/aasthalakhanpal7</p>
          </div>
          <div className="relative bg-[#183850] p-6 rounded-xl shadow-lg  h-30 flex items-center justify-between text-white text-lg font-semibold before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-500 before:to-transparent before:opacity-20 before:rounded-xl hover:before:opacity-40 mb-5 before:pointer-events-none">
            <a
              href="https://github.com/aastha2112"
              target="_blank"
              rel="noopener noreferrer"
              className="text-5xl"
            >
              <FaGithub />
            </a>
            <p> aastha2112</p>
          </div>
          <div className="relative bg-[#183850] p-6 rounded-xl shadow-lg  h-30 flex items-center justify-between text-white text-lg font-semibold before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-500 before:to-transparent before:opacity-20 before:rounded-xl hover:before:opacity-40 v">
            <h2 className="text-5xl">
              <IoCallSharp />
            </h2>
            <p>+91 82196-88585</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
