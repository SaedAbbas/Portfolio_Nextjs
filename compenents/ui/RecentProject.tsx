import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./3d-pin";
import Image from "next/image";

const RecentProject = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        Asmall selection of <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center  p-4 gap-16 mt-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
          >
            <PinContainer title={project.title} href={project.link}>
              <div className="flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <Image src="/bg.png" alt="bg-img"  />
                </div>
                <Image
                  className="z-10 absolute bottom-0"
                  src={project.img}
                  alt={project.title}
                  
                />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">{project.title}</h1>
              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">{project.des}</p>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProject;
