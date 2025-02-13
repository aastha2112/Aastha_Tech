import Trendify from "../assets/ProjectSS/Trendify.png";
import BingeBox from "../assets/ProjectSS/BingeBox.png";

const Projects = () => {
  return (
    <>
      <h1
        className="text-center text-5xl font-medium  pt-13 
"
      >
        {" "}
        Proje
        <span
          className="text-blue-500 font-bold
"
        >
          cts
        </span>
      </h1>
      <div className="common">
        <div className="grid grid-cols-2 gap-20">
          <div className="relative bg-[#183850] p-6 rounded-xl shadow-lg w-100 h-120 flex flex-col items-center text-white text-lg font-semibold before:absolute before:inset-0 before:bg-gradient-to-t before:from-blue-500 before:to-transparent before:opacity-20 before:rounded-xl hover:before:opacity-40 before:pointer-events-none transition-all">
            <img
              src={Trendify}
              alt="Project Thumbnail"
              className="w-full h-50 rounded-lg mb-4 object-cover"
            />
            <h3 className="text-2xl font-bold">Trendify</h3>
            <p className="text-md text-gray-300 text-center mt-2">
              A modern fashion e-commerce platform with user authentication,
              real-time inventory, and seamless payment integration.
            </p>
            <a
              href="https://aastha2112.github.io/Trendify/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-semibold hover:bg-blue-500"
            >
              View Project
            </a>
          </div>

          <div className="relative bg-[#183850] p-6 rounded-xl shadow-lg w-100 h-120 flex flex-col items-center text-white text-lg font-semibold before:absolute before:inset-0 before:bg-gradient-to-t before:from-blue-500 before:to-transparent before:opacity-20 before:rounded-xl hover:before:opacity-40 before:pointer-events-none transition-all">
            <img
              src={BingeBox}
              alt="Project Thumbnail"
              className="w-full h-50 rounded-lg mb-4 object-cover "
            />
            <h3 className="text-2xl font-bold">BingeBox</h3>
            <p className="text-md text-gray-300 text-center mt-2">
              A smart entertainment hub with user authentication, real-time
              recommendations, and a seamless streaming experience.
            </p>
            <a
              href="https://aastha2112.github.io/BingeBox/"
              target="_blank"
              className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-semibold hover:bg-blue-500"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
