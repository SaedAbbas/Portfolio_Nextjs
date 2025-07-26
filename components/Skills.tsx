import React from "react";
import CircularGallery from "./ui/CircularGallery";

const Skills = () => {
  return (
    <div className="py-16 relative h-[700px]">
      <h1 className="heading">
        Core <span className="text-purple">Skills</span> & Expertise
        
      </h1>
      <CircularGallery
        bend={2}
        textColor="#ffffff"
        borderRadius={0}
        scrollEase={0.02}
      />
    </div>
  );
};

export default Skills;
