"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      const durations = {
        fast: "20s",
        normal: "40s",
        slow: "80s",
      };
      containerRef.current.style.setProperty(
        "--animation-duration",
        durations[speed]
      );
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-screen overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-8 py-6 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[85vw] max-w-[600px] relative rounded-3xl border border-slate-800 p-8 md:p-12 md:w-[55vw] transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/20"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              boxShadow:
                "0 0 15px rgba(59, 130, 246, 0.2), inset 0 0 8px rgba(59, 130, 246, 0.1)",
            }}
            key={idx}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)] rounded-3xl border border-blue-500/30"
                style={{
                  background:
                    "linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))",
                  filter: "blur(4px)",
                }}
              ></div>
              <span className="relative z-20 text-base md:text-xl leading-[1.8] text-white font-medium tracking-wide italic">
                "{item.quote}"
              </span>
              <div className="relative z-20 mt-8 flex flex-row items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-500/50 transition-transform duration-300 hover:scale-105">
                  <img
                    src={item.image}
                    alt={`${item.name}'s profile`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="flex flex-col gap-2">
                  <span className="text-2xl font-extrabold leading-[1.4] text-white tracking-tight">
                    {item.name}
                  </span>
                  <span className="text-sm leading-[1.6] text-blue-200 font-light uppercase tracking-wider">
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};