import React, { useState } from "react";
import SkillsData from "../data/skills";

const categorizedSkills = {
  Backend: ["Node", "Express", "MongoDB", "MySQL", "Prisma", "Firebase"],
  Frontend: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Redux", "Next", "Tailwind"],
  Systems: ["Postman", "VS Code", "Git", "GitHub"]
};

const Skills = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="p-4 pt-0 mt-5 mx-auto md:p-5 md:mx-20 lg:mx-32 xl:mx-56">
        <div id="skills" className="flex flex-wrap w-full mb-4 flex-col justify-center text-center md:mb-7">
          <h1 className="sm:text-4xl text-3xl font-medium mb-2 text-gray-900">Skills</h1>
          {/* <p data-aos="zoom-in" data-aos-duration="1000" data-aos-once="false" className="text-lg font-medium leading-relaxed text-dark-orange ">
            My Technical Expertise
          </p> */}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(categorizedSkills).map(([category, skills]) => (
            <div key={category} data-aos="zoom-in" data-aos-duration="1500" data-aos-once="false" className="p-6 border-2 rounded-md shadow-md text-center">
              <h2 className="text-xl font-bold mb-4">{category}</h2>
              <div className="grid grid-cols-3 gap-4">
                {SkillsData.filter(skill => skills.includes(skill.name)).map((skill, index) => (
                  <div key={index} className="relative flex flex-col items-center group">
                    <img src={skill.image} alt={skill.name} className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 transition duration-700 hover:scale-110" />
                    <div className="absolute bottom-full mb-2 hidden group-hover:block bg-gray-800 text-white text-xs px-2 py-1 rounded-md shadow-lg">
                      {skill.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
