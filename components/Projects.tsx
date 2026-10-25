import Image from "next/image";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { projects, siteConfig } from "@/data";
import SectionHeader from "./SectionHeader";

export default function Projects() {
  return (
    <section id="projects" className="section border-t border-line">
      <div className="container-x">
        <SectionHeader
          eyebrow="Projects"
          title="Selected"
          highlight="work"
          description="Real-world applications built end-to-end — from UI architecture to deployment."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <article
              key={project.id}
              className={`reveal card group flex flex-col overflow-hidden transition-colors duration-300 hover:border-accent/40 ${
                i === 0 ? "md:col-span-2" : ""
              }`}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title} live demo`}
                className={`relative block overflow-hidden border-b border-line bg-surface-2 ${
                  i === 0 ? "aspect-[16/9] md:aspect-[2/1]" : "aspect-[16/9]"
                }`}
              >
                <Image
                  src={project.img}
                  alt={`${project.title} screenshot`}
                  fill
                  sizes={i === 0 ? "(min-width: 1024px) 760px, (min-width: 768px) 100vw, 100vw" : "(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw"}
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </a>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
                    {project.title}
                  </h3>
                  <span className="font-mono text-xs text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted text-pretty">
                  {project.des}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-md bg-accent/10 px-2.5 py-1 font-mono text-[11px] text-accent-2"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex gap-3 pt-6">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary flex-1 !py-2.5 sm:flex-none"
                  >
                    Live demo <FiArrowUpRight />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost flex-1 !py-2.5 sm:flex-none"
                  >
                    <FiGithub /> Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="reveal mt-12 text-center">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-fg"
          >
            More on GitHub <FiArrowUpRight />
          </a>
        </div>
      </div>
    </section>
  );
}
