import React from "react";
import CircularGallery from "./ui/CircularGallery";
import GlassIcons from "./ui/SkillsIcons";
import { skills } from "@/data";

const Skills = () => {
  return (
    <div className="py-10 relative md:h-[600px]" id="skills">
      <h1 className="heading max-md:hidden">
        Core{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#5010FE] to-[#A78BFA]">
          Skills
        </span>{" "}
        & Expertise
      </h1>

      <h1 className="md:hidden text-center text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#5010FE] to-[#8B5CF6]">
        Core Skills & Expertise
      </h1>

      <CircularGallery
        bend={4}
        textColor="#ffffff"
        borderRadius={0}
        scrollEase={0.08}
      />

      <div className="md:hidden">
        <GlassIcons skills={skills} className="custom-class" />
      </div>
    </div>
  );
};

export default Skills;
