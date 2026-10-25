export default function SectionHeader({
  eyebrow,
  title,
  highlight,
  description,
}: {
  eyebrow: string;
  title: string;
  highlight: string;
  description?: string;
}) {
  return (
    <div className="reveal mx-auto max-w-2xl text-center">
      <span className="eyebrow">
        <span className="h-px w-6 bg-accent-2/60" />
        {eyebrow}
        <span className="h-px w-6 bg-accent-2/60" />
      </span>
      <h2 className="heading">
        {title} <span className="text-gradient">{highlight}</span>
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted text-pretty sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
