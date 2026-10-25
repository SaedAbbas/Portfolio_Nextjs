import { testimonials } from "@/data";
import SectionHeader from "./SectionHeader";

const initials = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

function Card({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <figure className="card flex w-[300px] shrink-0 flex-col justify-between p-6 sm:w-[380px]">
      <blockquote className="text-sm leading-relaxed text-fg/90">
        <span className="mb-3 block font-serif text-4xl leading-none text-accent-2/60">&ldquo;</span>
        {t.quote}
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
        <span className="grid size-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-accent/80 to-accent-2/60 text-sm font-semibold text-white">
          {initials(t.name)}
        </span>
        <span>
          <span className="block text-sm font-medium">{t.name}</span>
          <span className="block text-xs text-muted">{t.title}</span>
        </span>
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="section border-t border-line">
      <div className="container-x">
        <SectionHeader
          eyebrow="Testimonials"
          title="What clients"
          highlight="say about me"
        />
      </div>

      {/* CSS-only marquee (GPU transform, pauses on hover) */}
      <div className="reveal group relative mt-14 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-marquee gap-6 [--marquee-duration:55s] group-hover:[animation-play-state:paused]">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div key={i} aria-hidden={i >= testimonials.length || undefined}>
              <Card t={t} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
