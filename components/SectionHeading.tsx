import Reveal from "@/components/Reveal";

export default function SectionHeading({
  index,
  title,
  subtitle,
}: {
  index: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <div className="flex flex-col gap-3">
        <span className="font-mono text-sm text-purple-400">{index}</span>
        <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          {title}
        </h2>
        {subtitle && (
          <p className="max-w-2xl text-pretty text-ink-muted">{subtitle}</p>
        )}
        <span className="mt-2 h-px w-24 bg-gradient-to-r from-purple-500 to-transparent" />
      </div>
    </Reveal>
  );
}
