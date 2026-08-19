import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  eyebrow: string;
  title: string;
  description: string;
  icon: LucideIcon;
  visual: React.ReactNode;
}

function FeatureCard({
  eyebrow,
  title,
  description,
  icon: Icon,
  visual,
}: FeatureCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] transition-colors duration-300 hover:border-white/[0.14]">
      {/* Visual */}
      <div className="relative h-56 overflow-hidden border-b border-white/[0.06] bg-[#0d0d0f] p-5">
        {visual}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-5 flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03]">
          <Icon size={15} className="text-zinc-400" />
        </div>

        <p className="mb-2 text-xs font-medium uppercase tracking-[0.15em] text-zinc-600">
          {eyebrow}
        </p>

        <h3 className="text-xl font-medium tracking-tight text-zinc-100">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-zinc-500">
          {description}
        </p>
      </div>
    </article>
  );
}

export default FeatureCard;