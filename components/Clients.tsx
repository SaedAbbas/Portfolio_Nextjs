"use client";
import React from "react";
import { testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading max-md:hidden">
        Client testimonials,
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#5010FE] to-[#A78BFA]">
          {" "}
          satisfied clients{" "}
        </span>
        and feedback
      </h1>
      <h1 className="md:hidden text-center text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#5010FE] to-[#8B5CF6]">
        Client testimonials
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10 my-12">
        <div className=" md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
            className=""
          />
        </div>
      </div>
    </section>
  );
};

export default Clients;
