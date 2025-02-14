import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({ scrollToSection, refs }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar - Fixed for Desktop */}
      <nav className="navbar fixed top-0 w-full flex justify-between items-center  p-5  z-50">
        <h1 className="logo pl-5 pr-2 text-[#81c3d7] text-5xl font-black">A</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex justify-center space-x-8">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <button
              key={item}
              className="navlink text-white text-center text-lg hover:text-[#81c3d7] transition-all"
              onClick={() => scrollToSection(refs[`${item.toLowerCase()}Ref`])}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setIsOpen(true)}
        >
          <FiMenu />
        </button>
      </nav>

      <div className="overflow-hidden w-screen h-screen fixed top-0 left-0"></div>

      {/* Sidebar - Mobile View */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 right-0 w-4/5 max-w-[300px] h-full bg-[#183850] shadow-lg p-5 z-50 flex flex-col items-end"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
          >
            {/* Close Button */}
            <button
              className="text-white text-3xl self-end mb-5"
              onClick={() => setIsOpen(false)}
            >
              <FiX />
            </button>

            {/* Sidebar Links */}
            <div className="flex flex-col space-y-6 text-white text-lg w-full">
              {["Home", "About", "Skills", "Projects", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    className="navlink hover:text-[#81c3d7] transition-all text-left w-full px-4"
                    onClick={() => {
                      scrollToSection(refs[`${item.toLowerCase()}Ref`]);
                      setIsOpen(false);
                    }}
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
