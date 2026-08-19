import {
  Bot,
  Check,
  GitBranch,
  Layers3,
  Rocket,
} from "lucide-react";
import FeatureCard from "./FeatureCard";

function Features() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
      {/* Section heading */}
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-600">
          One workflow
        </p>

        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
          From idea to production.
          <br />
          <span className="text-zinc-600">Without the busywork.</span>
        </h2>

        <p className="mt-5 text-sm leading-6 text-zinc-500 sm:text-base">
          Keep planning, development, AI assistance, and deployments connected
          so your team can focus on building.
        </p>
      </div>

      {/* Feature cards */}
      <div className="mt-14 grid gap-4 lg:grid-cols-3">
        <FeatureCard
          eyebrow="Plan"
          title="Know what matters."
          description="Turn ideas into focused work with projects, issues, priorities, and a clear view of what's next."
          icon={Layers3}
          visual={<PlanVisual />}
        />

        <FeatureCard
          eyebrow="Build"
          title="Let AI handle the friction."
          description="Get useful context-aware suggestions without leaving the workflow where your code and tasks already live."
          icon={Bot}
          visual={<BuildVisual />}
        />

        <FeatureCard
          eyebrow="Ship"
          title="Deploy with confidence."
          description="Connect every change to a deployment and know exactly what's running in production."
          icon={Rocket}
          visual={<ShipVisual />}
        />
      </div>
    </section>
  );
}

/* ---------- Visual 1: Planning ---------- */

function PlanVisual() {
  return (
    <div className="flex h-full flex-col justify-between">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[9px] text-zinc-600">Current sprint</p>
          <p className="mt-1 text-xs font-medium text-zinc-300">
            Product launch
          </p>
        </div>

        <span className="rounded-full border border-white/[0.07] px-2 py-1 text-[8px] text-zinc-600">
          8 tasks
        </span>
      </div>

      <div className="space-y-2">
        <MiniTask label="Authentication flow" done />
        <MiniTask label="Analytics dashboard" done />
        <MiniTask label="Team invitations" done />
        <MiniTask label="Production deployment" />
      </div>

      <div className="h-1 overflow-hidden rounded-full bg-white/[0.06]">
        <div className="h-full w-[76%] rounded-full bg-zinc-300" />
      </div>
    </div>
  );
}

/* ---------- Visual 2: AI ---------- */

function BuildVisual() {
  return (
    <div className="relative h-full">
      <div className="absolute left-0 top-0 w-[75%] rounded-xl border border-white/[0.07] bg-black/20 p-3">
        <div className="mb-3 flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-zinc-600" />
          <span className="text-[8px] text-zinc-600">
            auth-controller.ts
          </span>
        </div>

        <div className="space-y-1.5 font-mono text-[8px]">
          <p className="text-zinc-700">01</p>
          <p className="text-zinc-500">02 &nbsp; async authenticate()</p>
          <p className="text-zinc-600">03 &nbsp; const session =</p>
          <p className="text-zinc-500">04 &nbsp; await createSession()</p>
          <p className="text-zinc-700">05</p>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-[62%] rounded-xl border border-white/[0.1] bg-[#151517] p-3 shadow-xl shadow-black/40">
        <div className="flex items-center gap-2">
          <div className="flex h-5 w-5 items-center justify-center rounded-md bg-white/[0.07]">
            <Bot size={10} className="text-zinc-300" />
          </div>

          <span className="text-[9px] font-medium text-zinc-300">
            DevFlow AI
          </span>
        </div>

        <p className="mt-3 text-[9px] leading-4 text-zinc-500">
          I found a possible session expiry issue.
        </p>

        <div className="mt-2 flex items-center gap-1.5 text-[8px] text-zinc-400">
          <Check size={9} />
          Suggested fix ready
        </div>
      </div>
    </div>
  );
}

/* ---------- Visual 3: Deployment ---------- */

function ShipVisual() {
  return (
    <div className="flex h-full flex-col justify-between">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[9px] text-zinc-600">Production</p>
          <p className="mt-1 text-xs font-medium text-zinc-300">
            v2.4.1
          </p>
        </div>

        <div className="flex items-center gap-1.5 rounded-full border border-white/[0.07] px-2 py-1">
          <span className="h-1.5 w-1.5 rounded-full bg-zinc-400" />
          <span className="text-[8px] text-zinc-500">Live</span>
        </div>
      </div>

      <div className="relative flex items-center justify-between px-2">
        <DeploymentNode label="Commit" active />
        <DeploymentLine />
        <DeploymentNode label="Build" active />
        <DeploymentLine />
        <DeploymentNode label="Production" active />
      </div>

      <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-2">
        <div className="flex items-center gap-2">
          <GitBranch size={11} className="text-zinc-600" />

          <span className="text-[8px] text-zinc-500">
            main → production
          </span>

          <span className="ml-auto text-[8px] text-zinc-600">
            32s
          </span>
        </div>
      </div>
    </div>
  );
}

/* ---------- Small visual components ---------- */

interface MiniTaskProps {
  label: string;
  done?: boolean;
}

function MiniTask({ label, done = false }: MiniTaskProps) {
  return (
    <div className="flex items-center gap-2">
      <div
        className={`flex h-3 w-3 items-center justify-center rounded-full border ${
          done
            ? "border-zinc-500 bg-zinc-500"
            : "border-zinc-700"
        }`}
      >
        {done && <Check size={7} className="text-black" />}
      </div>

      <span
        className={`text-[9px] ${
          done ? "text-zinc-600 line-through" : "text-zinc-400"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

interface DeploymentNodeProps {
  label: string;
  active?: boolean;
}

function DeploymentNode({
  label,
  active = false,
}: DeploymentNodeProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className={`h-3 w-3 rounded-full border ${
          active
            ? "border-zinc-400 bg-zinc-400"
            : "border-zinc-700"
        }`}
      />

      <span className="text-[8px] text-zinc-600">{label}</span>
    </div>
  );
}

function DeploymentLine() {
  return <div className="h-px flex-1 bg-white/[0.08]" />;
}

export default Features;