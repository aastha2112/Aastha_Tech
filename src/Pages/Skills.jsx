import React from "react";
import { skills } from "../constants";

const Skills = () => {
  console.log(skills);
  return (
    <>
      <h2
        className="text-center text-5xl font-medium  pt-13
"
      >
        <span
          className="text-blue-500 font-bold
"
        >
          Skills
        </span>{" "}
        & Expertise{" "}
      </h2>
      <div className=" common ">
        <div>
          <div className=" grid grid-cols-4 gap-20">
            {skills.map((skill) => (
              <div className="block-container w-30 h-30" key={skill.name}>
                <div className="btn-back rounded-xl" />
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
