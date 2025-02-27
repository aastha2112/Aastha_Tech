import { useEffect, useState } from "react";

const GradientCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{
        background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(255, 255, 255, 0.3), transparent 50%)`,
        mixBlendMode: "overlay",
      }}
    />
  );
};

export default GradientCursor;
