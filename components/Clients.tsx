"use client";
import React from "react";
import { testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        Client testimonials
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#5010FE] to-[#A78BFA]">
          {" "}
          satisfied clients{" "}
        </span>
        and feedback
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
