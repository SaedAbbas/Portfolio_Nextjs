"use client";

import { projects } from "@/data";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-10 text-white">
      <div className="max-w-7xl mx-auto text-center">
      <h1 className="heading my-12 mb-16">
        Here are some of <span className="text-purple">my projects</span>
      </h1>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-[#0c0324] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative w-full h-56">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{project.des}</p>

                <div className="flex flex-wrap gap-3 mb-4">
                  {project.iconLists.map((icon, index) => (
                    <Image key={index} src={icon} alt="tech" width={24} height={24} />
                  ))}
                </div>

                <div className="flex gap-4">
                  <Link
                    href={project.link}
                    target="_blank"
                    className="text-sm text-blue-400 hover:underline"
                  >
                    Live Demo
                  </Link>
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      className="text-sm text-gray-400 hover:underline"
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
    </section>
  );
}



