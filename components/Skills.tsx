import React from "react";
import CircularGallery from "./ui/CircularGallery";
import CircularGallerySmall from "./ui/CircularGallerySmall";

const Skills = () => {
  return (
    <div className="py-10 relative h-[600px]" id="skills">
      <h1 className="heading">
        Core <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#5010FE] to-[#A78BFA]">Skills</span> & Expertise
      </h1>

        <CircularGallery
          bend={4}
          textColor="#ffffff"
          borderRadius={0}
          scrollEase={0.08}
        />

      <div className="md:hidden block">
        <CircularGallerySmall
          bend={2}
          textColor="#ffffff"
          borderRadius={0}
          scrollEase={0.2}
        />
      </div>
    </div>
  );
};

export default Skills;
