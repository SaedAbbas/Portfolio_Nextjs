'use client';
import React from "react";
import { Spotlight } from "./ui/spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative pt-36 pb-20">
      {/* Spotlights */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-top-20 md:-left-32 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purble"
        />
        <Spotlight
          className="top-28 left-80 h-[80vh] w-[50vw]"
          fill="blue"
        />
      </div>

      {/* Grid Background */}
      <div className="absolute top-0 left-0 h-screen w-full flex items-center justify-center dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]">
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-center gap-10 px-4 md:px-8 lg:px-20">
        {/* Text Section */}
        <div className="max-w-[90vw] md:max-w-xl lg:max-w-2xl flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="uppercase tracking-widest text-xs text-blue-100 mb-2">
            Dynamic Web Magic with Next.js
          </h2>
          <TextGenerateEffect
            className="text-[32px] sm:text-4xl md:text-5xl lg:text-6xl"
            duration={2}
            filter={false}
            words="Transforming Concepts into Seamless User Experiences"
          />
          <p className="md:tracking-wider mt-4 mb-6 text-sm md:text-lg lg:text-2xl">
            Hi, I&apos;m Saed Abbas, a Next.js Developer based in Palestine - Gaza.
          </p>
          <Link href="#about">
            <MagicButton
              title="Show my Work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
