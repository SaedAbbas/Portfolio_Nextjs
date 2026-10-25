"use client";
import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import GlassIcons from "./ui/SkillsIcons";
import { skills } from "@/data";

// مكتبة WebGL (ogl) ما بتنحمّل إلا لما نوصل للقسم، فما بتأخر فتح الموقع
const CircularGallery = dynamic(() => import("./ui/CircularGallery"), {
  ssr: false,
});

const Skills = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [showGallery, setShowGallery] = useState(false);

  useEffect(() => {
    if (!ref.current || window.innerWidth < 768) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowGallery(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px" }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="py-10 relative md:h-[600px]" id="skills">
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

      {showGallery && (
        <CircularGallery
          bend={4}
          textColor="#ffffff"
          borderRadius={0}
          scrollEase={0.08}
        />
      )}

      <div className="md:hidden">
        <GlassIcons skills={skills} className="custom-class" />
      </div>
    </div>
  );
};

export default Skills;
