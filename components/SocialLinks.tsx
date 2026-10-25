import { FaGithub, FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa6";
import { socialMedia } from "@/data";
import { cn } from "@/lib/utils";

const icons = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  facebook: FaFacebookF,
  instagram: FaInstagram,
};

export default function SocialLinks({ className }: { className?: string }) {
  return (
    <ul className={cn("flex items-center gap-3", className)}>
      {socialMedia.map(({ id, label, link }) => {
        const Icon = icons[id];
        return (
          <li key={id}>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="grid size-11 place-items-center rounded-full border border-line text-muted transition-colors hover:border-accent/50 hover:text-fg"
            >
              <Icon className="size-[18px]" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
