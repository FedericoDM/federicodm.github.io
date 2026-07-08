type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: string;
};

export function SectionHeading({ index, eyebrow, title }: SectionHeadingProps) {
  return (
    <div className="space-y-3">
      <p className="text-xs font-mono uppercase tracking-widest text-secondary">
        <span className="text-zinc-600">{index}</span>
        <span className="text-zinc-700 mx-2">—</span>
        {eyebrow}
      </p>
      <h2 className="text-2xl font-normal text-zinc-100">{title}</h2>
      <div className="w-11 h-px bg-secondary" />
    </div>
  );
}