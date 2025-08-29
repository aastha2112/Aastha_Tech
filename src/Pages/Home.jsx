import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const CyberpunkBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    let particles = [];

    const resizeCanvas = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);

    class Particle {
      constructor() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 0.6 - 0.3;
        this.speedY = Math.random() * 0.6 - 0.3;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > w) this.speedX *= -1;
        if (this.y < 0 || this.y > h) this.speedY *= -1;
      }
      draw() {
        ctx.fillStyle = "rgba(0, 183, 255, 0.3)";
        ctx.shadowBlur = 15;
        ctx.shadowColor = "#00b7ff";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < 80; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "#16425b";
      ctx.fillRect(0, 0, w, h);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />
  );
};

const Home = ({ scrollToSection, refs }) => {
  return (
    <div className="relative flex flex-col items-center justify-center text-center min-h-screen w-full px-6 md:px-16 lg:px-24 pt-20 md:pt-32 overflow-hidden bg-[#16425b]">
      <CyberpunkBackground />

      <motion.div
        className="relative flex flex-col items-center md:items-start z-10 max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <h1 className="text-4xl sm:text-5xl font-semibold mb-2">Hi, 👋</h1>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold">
          I<span className="text-blue-500">'</span>m{" "}
          <strong className="bg-gradient-to-r from-blue-500 to-[#84d6ff] bg-clip-text text-transparent">
            Aastha
          </strong>
          !
        </h1>

        <motion.p
          className="text-lg sm:text-xl mt-3 px-4 py-2 rounded-lg font-semibold bg-gradient-to-r from-blue-500 to-[#16425b] text-white shadow-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          SOFTWARE DEVELOPER
        </motion.p>

        <p className="text-md lg:text-left md:text-left sm:text-lg mt-4 text-gray-300 px-2 sm:px-0 ">
          A Software Developer based in India, specializing in React, Next,
          TypeScript and JavaScript. Passionate about clean code, performance,
          and seamless user experiences.
        </p>

        <h3 className="mt-5 text-lg font-medium text-white">
          Let’s build something amazing!
        </h3>

        <div className="flex flex-col sm:flex-row gap-4 mt-5 z-20">
          <motion.button
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 shadow-md transition-all"
            onClick={() => scrollToSection(refs.contactRef)}
            whileHover={{ scale: 1.05 }}
          >
            Contact me
          </motion.button>

          <motion.button
            className="rounded-full border-2 border-blue-500 px-6 py-3 text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-700 shadow-md transition-all"
            onClick={() => scrollToSection(refs.projectsRef)}
            whileHover={{ scale: 1.05 }}
          >
            See my work
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
