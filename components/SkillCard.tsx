type SkillCardProps = {
  title: string;
  icon: React.ReactNode;
  skills: string[];
};

export function SkillCard({ title, icon, skills }: SkillCardProps) {
  return (
    <div className="group p-6 rounded-lg border border-zinc-800 hover:border-secondary transition-colors bg-zinc-900/50">
      <div className="flex items-center gap-3 mb-4">
        <div className="text-secondary group-hover:text-secondary-light transition-colors">
          {icon}
        </div>
        <h3 className="text-base font-normal text-zinc-100">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="text-xs text-zinc-400 px-2 py-1 rounded bg-zinc-800/50"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
