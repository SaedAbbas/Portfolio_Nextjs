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
        "fixed top-4 left-1/2 transform -translate-x-1/2 z-50",
        "rounded-full px-2 md:px-6 py-3 backdrop-blur-lg shadow-xl max-md:mx-auto max-md:w-[100%-10px]",
        "bg-[#2c00a7]"
      )}
    >
      <div className="flex items-center justify-center box-border gap-3 max-md:gap-0 text-white text-sm sm:text-base z-50">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={`${item.href}`}
            className="hover:font-medium box-border transition duration-100 px-2 py-1 rounded-3xl hover:bg-white hover:text-[#2c00a7] "
          >
            {item.label}
          </Link>
        ))}
      </div>
    </motion.nav>
  );
}
