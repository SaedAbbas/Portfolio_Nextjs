"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { navItems } from "@/data";

export default function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={cn(
        "fixed top-4 left-1/2 transform -translate-x-1/2 z-50 rounded-full px-8 md:px-6 py-3 backdrop-blur-lg shadow-xl bg-gradient-to-r from-[#5010FE] to-[#5821f2] max-md:mx-2 max-md:w-[calc(100%-16px)]",
        "border border-white/10"
      )}
    >
      <div className="flex items-center justify-center gap-4 max-md:gap-0 text-white text-sm md:text-base font-medium z-50">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "relative px-2 sm:px-3 sm:py-2 rounded-full transition-all duration-300",
              "hover:bg-white/10 hover:text-white",
              "after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2",
              "after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300",
              "hover:after:w-full"
            )}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </motion.nav>
  );
}
