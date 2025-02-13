import React from "react";
import { Link } from "react-router-dom";
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
          <div className="relative bg-[#183850] p-6 rounded-xl shadow-lg  h-30 flex items-center justify-between text-white text-lg font-semibold before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-500 before:to-transparent before:opacity-20 before:rounded-xl hover:before:opacity-40 mb-5">
            <h2 className="text-5xl">
              <ImLinkedin />
            </h2>
            <p>/aasthalakhanpal7</p>
          </div>
          <div className="relative bg-[#183850] p-6 rounded-xl shadow-lg  h-30 flex items-center justify-between text-white text-lg font-semibold before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-500 before:to-transparent before:opacity-20 before:rounded-xl hover:before:opacity-40 mb-5">
            <h2 className="text-5xl">
              <FaGithub />
            </h2>
            <p> aastha2112</p>
          </div>
          <div className="relative bg-[#183850] p-6 rounded-xl shadow-lg  h-30 flex items-center justify-between text-white text-lg font-semibold before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-500 before:to-transparent before:opacity-20 before:rounded-xl hover:before:opacity-40 v">
            <h2 className="text-5xl">
              <IoCallSharp />
            </h2>
            <p>+91 82196-88585</p>
          </div>
        </div>

        {/* <p>Looking forward to collaborating on exciting projects! 🚀</p> */}
      </div>
    </>
  );
};

export default Contact;
