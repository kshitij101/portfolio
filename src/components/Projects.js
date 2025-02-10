import React, { useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import ProjectsData from "../data/projects";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="text-gray-600 body-font">
      <div className="px-3 py-5 mx-auto text-center sm:mx-6 md:mx-12 md:pt-5 md:mt-5 xl:mx-40">
        <div id="projects" className="flex flex-wrap w-full flex-col items-center text-center">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-3 text-gray-900">
            Projects
          </h1>
        </div>
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 sm:gap-x-3 md:gap-x-5 lg:gap-x-2 lg:gap-y-5 xl:gap-y-10 xl:gap-x-5 mt-4 md:mt-8">
          {ProjectsData.reverse().map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col flex-wrap h-80 w-[95%] mx-auto shadow-md md:shadow-lg rounded-xl cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <img src={project.image} alt={project.name} className="h-80 rounded-xl" />
              <div className="absolute flex flex-col justify-center items-center bottom-0 left-0 right-0 h-0 overflow-hidden group-hover:h-full transition-[height_0.5s] duration-500 bg-darkblue rounded-xl">
                <h3 className="text-2xl font-medium text-white my-2">
                  {project.name}
                </h3>
                <div className="flex flex-wrap items-center gap-3 mt-3">
                  {project?.icons?.map((icon, index) => (
                    <img src={icon} alt={`icon-${index}`} className="w-10 h-10" key={index} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 sm:w-2/3 md:w-1/2 text-center">
            <h2 className="text-2xl font-bold mb-3">{selectedProject.name}</h2>
            <p className="text-lg mb-3">{selectedProject.description}</p>
            <div className="flex flex-wrap justify-center items-center gap-3 mb-3">
              {selectedProject.icons.map((icon, index) => (
                <img src={icon} alt={`icon-${index}`} className="w-12 h-12" key={index} />
              ))}
            </div>
            <div className="flex justify-center gap-5 mt-5">
              <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="text-xl text-blue-500">
                <FaGithub />
              </a>
              <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="text-xl text-blue-500">
                <FaExternalLinkAlt />
              </a>
            </div>
            <button onClick={() => setSelectedProject(null)} className="mt-5 bg-red-500 text-white px-4 py-2 rounded">
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
