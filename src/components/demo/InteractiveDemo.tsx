import { useState } from "react";
import {
  Activity,
  ArrowUpRight,
  Bot,
  Check,
  GitBranch,
  Sparkles,
} from "lucide-react";

type DemoTab = "ai" | "deployments";

function InteractiveDemo() {
  const [activeTab, setActiveTab] = useState<DemoTab>("ai");

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
      {/* Heading */}
      <div className="max-w-xl">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-600">
          See it in action
        </p>

        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
          Your workflow,
          <br />
          <span className="text-zinc-600">thinking with you.</span>
        </h2>

        <p className="mt-5 text-sm leading-6 text-zinc-500 sm:text-base">
          DevFlow connects the context around your work so useful information
          surfaces when you actually need it.
        </p>
      </div>

      {/* Interactive product panel */}
      <div className="mt-12 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0d0d0f] shadow-2xl shadow-black/40">
        {/* Top bar */}
        <div className="flex flex-col gap-4 border-b border-white/[0.07] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03]">
              <Activity size={14} className="text-zinc-400" />
            </div>

            <div>
              <p className="text-[10px] text-zinc-600">Engineering</p>
              <p className="text-xs font-medium text-zinc-300">
                Activity center
              </p>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex rounded-lg border border-white/[0.07] bg-black/20 p-1">
            <TabButton
              active={activeTab === "ai"}
              onClick={() => setActiveTab("ai")}
              icon={<Bot size={12} />}
            >
              AI suggestions
            </TabButton>

            <TabButton
              active={activeTab === "deployments"}
              onClick={() => setActiveTab("deployments")}
              icon={<GitBranch size={12} />}
            >
              Deployments
            </TabButton>
          </div>
        </div>

        {/* Content */}
        <div className="min-h-[380px] p-5 sm:p-8">
          {activeTab === "ai" ? <AiPanel /> : <DeploymentPanel />}
        </div>
      </div>
    </section>
  );
}

/* ---------- Tabs ---------- */

interface TabButtonProps {
  children: React.ReactNode;
  active: boolean;
  icon: React.ReactNode;
  onClick: () => void;
}

function TabButton({
  children,
  active,
  icon,
  onClick,
}: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 rounded-md px-3 py-2 text-[10px] font-medium transition-all duration-200 ${
        active
          ? "bg-white/[0.08] text-zinc-200 shadow-sm"
          : "text-zinc-600 hover:text-zinc-400"
      }`}
    >
      {icon}
      {children}
    </button>
  );
}

/* ---------- AI Panel ---------- */

function AiPanel() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
      {/* Conversation */}
      <div className="rounded-xl border border-white/[0.07] bg-white/[0.015] p-5">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/[0.07]">
            <Sparkles size={13} className="text-zinc-300" />
          </div>

          <div>
            <p className="text-[10px] font-medium text-zinc-300">
              DevFlow AI
            </p>
            <p className="text-[8px] text-zinc-600">
              Context-aware assistant
            </p>
          </div>
        </div>

        <div className="mt-8 space-y-5">
          <div className="max-w-md rounded-xl border border-white/[0.06] bg-black/20 p-4">
            <p className="text-[10px] leading-5 text-zinc-500">
              I noticed your authentication issue is connected to session
              expiry handling in the latest pull request.
            </p>
          </div>

          <div className="ml-auto max-w-sm rounded-xl bg-white/[0.06] p-4">
            <p className="text-[10px] leading-5 text-zinc-400">
              Can you show me what you would change?
            </p>
          </div>

          <div className="max-w-md rounded-xl border border-white/[0.06] bg-black/20 p-4">
            <div className="flex items-center gap-2 text-[9px] text-zinc-500">
              <Check size={11} />
              Suggested fix generated
            </div>

            <div className="mt-3 rounded-lg bg-black/30 p-3 font-mono text-[8px] leading-4 text-zinc-600">
              <p>
                + const expiresAt = session.expiresAt;
              </p>
              <p>
                + if (Date.now() &gt; expiresAt) logout();
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Insight */}
      <div className="flex flex-col justify-between rounded-xl border border-white/[0.07] bg-white/[0.015] p-5">
        <div>
          <p className="text-[9px] uppercase tracking-[0.15em] text-zinc-600">
            Suggested action
          </p>

          <h3 className="mt-3 text-lg font-medium tracking-tight text-zinc-200">
            Session expiry handling
          </h3>

          <p className="mt-3 text-xs leading-5 text-zinc-600">
            AI connected the current issue to your authentication flow and
            generated a potential fix based on the surrounding context.
          </p>
        </div>

        <button className="mt-8 flex w-full items-center justify-between rounded-lg border border-white/[0.07] px-4 py-3 text-[10px] font-medium text-zinc-400 transition-colors hover:border-white/[0.14] hover:text-zinc-200">
          Review suggestion
          <ArrowUpRight size={13} />
        </button>
      </div>
    </div>
  );
}

/* ---------- Deployment Panel ---------- */

function DeploymentPanel() {
  const deployments = [
    {
      version: "v2.4.1",
      branch: "main",
      time: "2 min ago",
      status: "Live",
    },
    {
      version: "v2.4.0",
      branch: "main",
      time: "2 hours ago",
      status: "Live",
    },
    {
      version: "v2.3.9",
      branch: "release",
      time: "Yesterday",
      status: "Live",
    },
  ];

  return (
    <div>
      <div className="mb-6">
        <p className="text-[9px] uppercase tracking-[0.15em] text-zinc-600">
          Production
        </p>

        <div className="mt-2 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-zinc-400" />

          <h3 className="text-lg font-medium tracking-tight text-zinc-200">
            All systems operational
          </h3>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-white/[0.07]">
        {deployments.map((deployment, index) => (
          <div
            key={deployment.version}
            className={`flex flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between ${
              index !== deployments.length - 1
                ? "border-b border-white/[0.06]"
                : ""
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.04]">
                <GitBranch size={13} className="text-zinc-600" />
              </div>

              <div>
                <p className="text-[10px] font-medium text-zinc-300">
                  {deployment.version}
                </p>

                <p className="mt-1 text-[8px] text-zinc-600">
                  {deployment.branch} · {deployment.time}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1.5 rounded-full border border-white/[0.07] px-2 py-1 text-[8px] text-zinc-500">
                <Check size={9} />
                {deployment.status}
              </span>

              <ArrowUpRight size={12} className="text-zinc-700" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InteractiveDemo;