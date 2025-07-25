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
        "rounded-full px-6 py-3 backdrop-blur-lg shadow-xl",
        "bg-[rgba(17,25,40,0.75)]"
      )}
    >
      <div className="flex items-center justify-center gap-6 text-gray-200 text-sm sm:text-base z-50">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={`${item.href}`}
            className="hover:text-[#38BDF8] transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </motion.nav>
  );
}
