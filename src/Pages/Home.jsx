import React from "react";
import profilePic from "../assets/profilePic/ProfilePicture.webp";

const Home = ({ scrollToSection, refs }) => {
  return (
    <div className="common gap-20">
      <div className="homeText flex flex-col ">
        <h1 className="text-5xl mb-3">Hi, 👋</h1>
        <h1 className="text-8xl">
          I<span className="text-blue-500">'</span>m{" "}
          <strong className=" bg-gradient-to-r from-blue-500 to-[#84d6ff] bg-clip-text text-transparent">
            Aastha
          </strong>{" "}
          !
        </h1>
        <div className="flex flex-col gap-3">
          <p className="text-xl mt-3 p-2  flex bg-gradient-to-r from-blue-500 to-[#16425b]">
            {" "}
            FRONT-END DEVELOPER
          </p>
          <p className="text-lg mt-5 text-[#eef4ed]">
            A Web Developer based in India, specializing in React, Redux, and
            JavaScript. I love crafting seamless, interactive, and visually
            appealing web applications. Passionate about clean code,
            performance, and accessibility, I strive to enhance user experiences
            with every project.
          </p>
          <h3 className="mt-6 text-lg ">Let’s build something amazing!</h3>
          <div className="flex gap-5 mt-4">
            <button
              className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600"
              onClick={() => scrollToSection(refs.contactRef)}
            >
              Contact me
            </button>
            <button
              className="rounded-full  border-blue-500 border-3 px-6 py-3 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-700"
              onClick={() => scrollToSection(refs.projectsRef)}
            >
              See my work
            </button>
          </div>
        </div>
      </div>
      <div className="profile-pic-div bg-[#2f6690] p-6">
        <img src={profilePic} alt="profile picture" />
      </div>
    </div>
  );
};

export default Home;
