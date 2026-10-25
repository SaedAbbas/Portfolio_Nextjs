import { FiArrowUpRight, FiMail } from "react-icons/fi";
import { navItems, siteConfig } from "@/data";
import SocialLinks from "./SocialLinks";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line pt-20 sm:pt-28">
      <div className="container-x">
        <div className="reveal relative isolate overflow-hidden rounded-3xl border border-line bg-surface px-6 py-14 text-center sm:px-12 sm:py-20">
          <div
            aria-hidden
            className="absolute inset-x-0 -top-40 -z-10 mx-auto h-80 w-[640px] max-w-full rounded-full bg-[radial-gradient(closest-side,rgb(124_92_255/0.35),transparent)]"
          />
          <span className="eyebrow">Contact</span>
          <h2 className="heading mx-auto max-w-2xl">
            Have a project in mind? <span className="text-gradient">Let&apos;s build it together.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted text-pretty sm:text-lg">
            I&apos;m open to freelance work and full-time roles. Send me a message and
            I&apos;ll get back to you as soon as possible.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={`mailto:${siteConfig.email}`} className="btn btn-primary w-full sm:w-auto">
              <FiMail /> {siteConfig.email}
            </a>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost w-full sm:w-auto"
            >
              View GitHub <FiArrowUpRight />
            </a>
          </div>

          <SocialLinks className="mt-10 justify-center" />
        </div>
      </div>

      <footer className="container-x mt-20 flex flex-col items-center justify-between gap-6 border-t border-line py-8 text-sm text-muted md:flex-row">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="transition-colors hover:text-fg">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </footer>
    </section>
  );
}
