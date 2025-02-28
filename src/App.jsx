import { useRef } from "react";
import "./App.css";
import Navbar2 from "./Components/Navbar2";
import Home2 from "./Pages/Home2";
import Projects2 from "./Pages/Projects2";
import Contact2 from "./Pages/Contact2";
import Skills2 from "./Pages/Skills2";
import About2 from "./Pages/About2";
import Footer from "./Components/Footer";
import GradientCursor from "./Components/GradientCursor";
import Home from "./Pages/Home";

const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <GradientCursor />
      <Navbar2
        scrollToSection={scrollToSection}
        refs={{ homeRef, aboutRef, skillsRef, projectsRef, contactRef }}
      />
      <div ref={homeRef}>
        <Home
          scrollToSection={scrollToSection}
          refs={{ projectsRef, contactRef }}
        />
      </div>

      <div ref={aboutRef}>
        <About2 />
      </div>
      <div ref={skillsRef}>
        <Skills2 />
      </div>
      <div ref={projectsRef}>
        <Projects2 />
      </div>
      <div ref={contactRef}>
        <Contact2 />
      </div>
      <Footer />
    </>
  );
};

export default App;
