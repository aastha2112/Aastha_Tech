import profilePic from "../assets/profilePic/prof1.webp";

const About = () => {
  return (
    <>
      <h2
        className="text-center text-5xl font-medium  pt-13
"
      >
        Something About{" "}
        <span
          className="text-blue-500 font-bold
"
        >
          Me
        </span>
      </h2>
      <div className="common  gap-20 items-center justify-center">
        <div className="profile-pic-div bg-[#2f6690] p-6 mt-3">
          <img src={profilePic} alt="profile picture" />
        </div>{" "}
        <div>
          <div className="w-2xl">
            <p className=" text-2xl w-xl mb-5 mt-3">
              I am a detail-oriented{" "}
              <span className="bg-gradient-to-r from-blue-500 to-[#84d6ff] bg-clip-text text-transparent font-extrabold text-xl">
                Frontend Developer
              </span>{" "}
              who enjoys bringing creative ideas to life through code. With a
              strong foundation in React, Redux, JavaScript, HTML, and CSS, I
              focus on building intuitive, high-performance, and accessible user
              interfaces.
            </p>
            <p className=" text-2xl w-xl mb-5">
              I constantly explore new technologies and best practices to stay
              ahead in the ever-evolving web development landscape. When I’m not
              coding, you’ll find me exploring new places, reading about UI/UX
              trends, or experimenting with side projects.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
