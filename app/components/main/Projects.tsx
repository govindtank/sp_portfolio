"use client";

import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { Projects_data } from "@/constants";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center pb-40 z-[20]"
      id="projects"
    >
      <h1 className="text-2xl md:text-3xl lg:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        PROJECTS
      </h1>

      <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5 md:px-10">
        {Projects_data.map((project, index) => (
          <ProjectCard
            key={index}
            src={project.src}
            title={project.title}
            subtitle={project.subtitle}
            tech={project.tech}
            description={project.description}
            demoUrl={project.demoUrl}
            demoText={project.demoText}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
