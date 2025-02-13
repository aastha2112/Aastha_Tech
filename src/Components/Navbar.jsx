import React from "react";

const Navbar = ({ scrollToSection, refs }) => {
  return (
    <div>
      <nav className="navbar flex justify-between w-full fixed top-0 ">
        <h1
          className="logo pl-5 pr-2 text-[#81c3d7] text-5xl font-black 
"
        >
          A
        </h1>
        <div
          className="flex justify-evenly w-3xl
"
        >
          <button
            className=" navlink"
            onClick={() => scrollToSection(refs.homeRef)}
          >
            Home
          </button>

          <button
            className="navlink"
            onClick={() => scrollToSection(refs.aboutRef)}
          >
            About
          </button>
          <button
            className="navlink"
            onClick={() => scrollToSection(refs.skillsRef)}
          >
            Skills
          </button>
          <button
            className="navlink"
            onClick={() => scrollToSection(refs.projectsRef)}
          >
            Projects
          </button>
          <button
            className="navlink"
            onClick={() => scrollToSection(refs.contactRef)}
          >
            Contact
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
