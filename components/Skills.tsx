import Image from "next/image";
import { skillGroups } from "@/data";
import SectionHeader from "./SectionHeader";

export default function Skills() {
  return (
    <section id="skills" className="section border-t border-line">
      <div className="container-x">
        <SectionHeader
          eyebrow="Skills"
          title="Tools I use to"
          highlight="ship great products"
          description="A modern front-end stack focused on performance, maintainability and a great developer experience."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div key={group.title} className="reveal card p-5">
              <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {group.items.map((skill) => (
                  <li
                    key={skill.label}
                    className="flex items-center gap-3 rounded-xl border border-transparent px-2 py-2 transition-colors hover:border-line hover:bg-white/[0.03]"
                  >
                    <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-white/[0.04]">
                      <Image
                        src={skill.icon}
                        alt=""
                        width={22}
                        height={22}
                        className="size-[22px] object-contain"
                      />
                    </span>
                    <span className="text-sm font-medium">{skill.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
