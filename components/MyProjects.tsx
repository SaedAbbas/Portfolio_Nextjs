"use client";

import { projects } from "@/data";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsSection() {
  const cardVariants = {
    hidden: { opacity: 0, y: 60, rotateX: 15 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: i * 0.25,
        duration: 0.7,
        ease: "easeOut",
      },
    }),
    hover: {
      scale: 1.06,
      rotateY: 8,
      boxShadow: "0 15px 40px rgba(80, 16, 254, 0.5)",
      borderColor: "#5010FE",
      transition: { duration: 0.4, ease: "easeOut" },
    },
    idle: {
      y: [0, -8, 0],
      boxShadow: [
        "0 5px 20px rgba(80, 16, 254, 0.2)",
        "0 10px 30px rgba(80, 16, 254, 0.4)",
        "0 5px 20px rgba(80, 16, 254, 0.2)",
      ],
      transition: {
        y: { repeat: Infinity, duration: 4, ease: "easeInOut" },
        boxShadow: { repeat: Infinity, duration: 4, ease: "easeInOut" },
      },
    },
  };

  return (
    <motion.section id="projects" className="py-24 px-4 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="max-md:hidden text-4xl md:text-5xl font-extrabold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-[#5010FE] to-[#A78BFA]">
          Discover <span className="text-white">My Masterpieces</span>
        </h1>
        <h1 className="md:hidden text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#5010FE] to-[#8B5CF6]">
          Discover My Projects
        </h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              animate="idle"
              variants={cardVariants}
              viewport={{ once: true }}
              className="relative bg-[#04071D] rounded-2xl overflow-hidden shadow-xl border border-[#5010FE]/30"
            >
              <div className="relative w-full h-48 md:h-64 group overflow-hidden">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#04071D]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              </div>

              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-[#e1daf4] ">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed max-md:line-clamp-2">
                  {project.des}
                </p>

                <div className="flex flex-wrap gap-3 mb-4">
                  {project.iconLists.map((icon, idx) => (
                    <Image
                      key={idx}
                      src={icon}
                      alt="tech"
                      width={20}
                      height={20}
                      className="opacity-80"
                    />
                  ))}
                </div>

                <div className="flex gap-4">
                  <Link
                    href={project.link}
                    target="_blank"
                    className="inline-block px-5 py-2 text-sm font-medium text-white bg-[#5010FE] rounded-xl hover:bg-[#353a80] transition-colors duration-300"
                  >
                    Live Demo
                  </Link>
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      className="inline-block px-5 py-2 text-sm font-medium text-white border border-[#5010FE] rounded-xl hover:bg-[#5010FE]/20 transition-colors duration-300"
                    >
                      GitHub
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
