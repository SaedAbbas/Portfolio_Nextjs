import Image from "next/image";
import { FiArrowRight, FiMapPin } from "react-icons/fi";
import { siteConfig } from "@/data";
import SocialLinks from "./SocialLinks";

const highlights = ["React", "Next.js", "TypeScript", "Tailwind CSS"];

export default function Hero() {
  return (
    <section id="about" className="relative isolate pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Static background glow + grid: no JS, no continuous animation */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[520px] w-[900px] max-w-[160vw] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(124_92_255/0.28),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(255_255_255/0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.04)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      </div>

      <div className="container-x grid items-center gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
        <div className="text-center lg:text-left">
          <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-3.5 py-1.5 text-xs text-muted">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            Available for new projects
          </span>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Hi, I&apos;m {siteConfig.name}.
            <br />
            <span className="text-gradient">I build fast, polished web experiences.</span>
          </h1>

          <p className="animate-fade-up mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted text-pretty [animation-delay:160ms] sm:text-lg lg:mx-0">
            {siteConfig.role} focused on React and Next.js — turning ideas into
            responsive, accessible and high-performance interfaces that people
            enjoy using.
          </p>

          <p className="animate-fade-up mt-4 inline-flex items-center gap-1.5 text-sm text-muted [animation-delay:200ms]">
            <FiMapPin className="text-accent-2" /> {siteConfig.location}
          </p>

          <div className="animate-fade-up mt-8 flex flex-col items-center gap-3 [animation-delay:240ms] sm:flex-row sm:justify-center lg:justify-start">
            <a href="#projects" className="btn btn-primary w-full sm:w-auto">
              View my work <FiArrowRight />
            </a>
            <a href="#contact" className="btn btn-ghost w-full sm:w-auto">
              Get in touch
            </a>
          </div>

          <div className="animate-fade-up mt-10 flex flex-col items-center gap-6 [animation-delay:320ms] sm:flex-row sm:justify-center lg:justify-start">
            <SocialLinks />
            <span className="hidden h-6 w-px bg-line sm:block" />
            <ul className="flex flex-wrap justify-center gap-2">
              {highlights.map((h) => (
                <li key={h} className="rounded-md border border-line px-2.5 py-1 font-mono text-xs text-muted">
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[300px] sm:max-w-[360px] lg:max-w-[420px]">
          <div aria-hidden className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-accent/40 to-accent-2/10 blur-2xl" />
          <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-white/10 bg-surface p-2">
            <Image
              src="/saedabbas.webp"
              alt="Portrait of Saed Abbas"
              width={560}
              height={560}
              priority
              fetchPriority="high"
              sizes="(min-width: 1024px) 420px, (min-width: 640px) 360px, 300px"
              className="size-full rounded-[1.6rem] object-cover"
            />
          </div>
          <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-3 whitespace-nowrap rounded-2xl border border-line bg-surface-2/90 px-4 py-3 shadow-xl backdrop-blur">
            <span className="text-2xl font-semibold text-gradient">5+</span>
            <span className="text-xs leading-tight text-muted">
              Production-ready
              <br />
              projects shipped
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
