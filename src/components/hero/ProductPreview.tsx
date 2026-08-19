import {
  Activity,
  Bell,
  Check,
  ChevronDown,
  Circle,
  GitBranch,
  GitPullRequest,
  LayoutDashboard,
  MoreHorizontal,
  Plus,
  Search,
  Settings,
  Sparkles,
} from "lucide-react";

const navigationItems = [
  {
    label: "Overview",
    icon: LayoutDashboard,
    active: true,
  },
  {
    label: "Issues",
    icon: Circle,
    active: false,
  },
  {
    label: "Pull requests",
    icon: GitPullRequest,
    active: false,
  },
  {
    label: "Deployments",
    icon: GitBranch,
    active: false,
  },
];

function ProductPreview() {
  return (
    <div className="relative">
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-8 rounded-[2rem] bg-white/[0.025] blur-3xl"
      />

      {/* Browser window */}
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d0f] shadow-2xl shadow-black/60">
        {/* Browser top bar */}
        <div className="flex h-11 items-center border-b border-white/[0.07] px-4">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
          </div>

          <div className="mx-auto flex items-center gap-2 rounded-md border border-white/[0.06] bg-white/[0.025] px-3 py-1 text-[10px] text-zinc-600">
            app.devflow.io
          </div>

          <div className="w-10" />
        </div>

        {/* Application */}
        <div className="flex min-h-[420px]">
          {/* Sidebar */}
          <aside className="hidden w-44 shrink-0 border-r border-white/[0.07] p-3 sm:block">
            {/* Workspace */}
            <div className="mb-6 flex items-center gap-2 px-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-white text-[10px] font-bold text-black">
                A
              </div>

              <div className="min-w-0">
                <p className="truncate text-[10px] font-medium text-zinc-300">
                  Acdyon
                </p>
                <p className="text-[9px] text-zinc-600">Engineering</p>
              </div>

              <ChevronDown size={11} className="ml-auto text-zinc-600" />
            </div>

            {/* Navigation */}
            <div className="space-y-1">
              {navigationItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-[10px] ${
                      item.active
                        ? "bg-white/[0.07] text-zinc-200"
                        : "text-zinc-600"
                    }`}
                  >
                    <Icon size={12} />
                    {item.label}
                  </div>
                );
              })}
            </div>

            {/* Bottom navigation */}
            <div className="mt-8 space-y-1 border-t border-white/[0.06] pt-4">
              <div className="flex items-center gap-2 px-2 py-1.5 text-[10px] text-zinc-600">
                <Activity size={12} />
                Analytics
              </div>

              <div className="flex items-center gap-2 px-2 py-1.5 text-[10px] text-zinc-600">
                <Settings size={12} />
                Settings
              </div>
            </div>
          </aside>

          {/* Main dashboard */}
          <div className="min-w-0 flex-1">
            {/* Dashboard header */}
            <div className="flex items-center justify-between border-b border-white/[0.07] px-4 py-3">
              <div>
                <p className="text-[9px] text-zinc-600">Project</p>
                <h3 className="text-xs font-medium text-zinc-200">
                  Acdyon Platform
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <button className="rounded-md p-1.5 text-zinc-600 hover:bg-white/[0.05] hover:text-zinc-300">
                  <Search size={12} />
                </button>

                <button className="rounded-md p-1.5 text-zinc-600 hover:bg-white/[0.05] hover:text-zinc-300">
                  <Bell size={12} />
                </button>

                <div className="h-5 w-5 rounded-full bg-zinc-700" />
              </div>
            </div>

            {/* Dashboard content */}
            <div className="space-y-4 p-4">
              {/* Project heading */}
              <div className="flex items-end justify-between">
                <div>
                  <p className="mb-1 text-[9px] text-zinc-600">Overview</p>
                  <h2 className="text-base font-medium tracking-tight text-zinc-100">
                    Ship with confidence.
                  </h2>
                </div>

                <button className="flex items-center gap-1 rounded-md border border-white/[0.08] px-2 py-1 text-[9px] text-zinc-500">
                  This week
                  <ChevronDown size={9} />
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2">
                <StatCard label="Tasks shipped" value="48" />
                <StatCard label="Deployments" value="12" />
                <StatCard label="Cycle time" value="2.4d" />
              </div>

              {/* Main cards */}
              <div className="grid gap-3 sm:grid-cols-[1.25fr_0.75fr]">
                {/* Progress */}
                <div className="rounded-xl border border-white/[0.07] bg-white/[0.015] p-3">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <p className="text-[9px] text-zinc-600">Current sprint</p>
                      <p className="mt-0.5 text-[11px] font-medium text-zinc-300">
                        Product launch
                      </p>
                    </div>

                    <MoreHorizontal size={13} className="text-zinc-600" />
                  </div>

                  <div className="mb-2 flex items-center justify-between text-[9px]">
                    <span className="text-zinc-600">Progress</span>
                    <span className="text-zinc-400">84%</span>
                  </div>

                  <div className="h-1 overflow-hidden rounded-full bg-white/[0.06]">
                    <div className="h-full w-[84%] rounded-full bg-white" />
                  </div>

                  <div className="mt-4 space-y-2">
                    <Task
                      label="Authentication flow"
                      completed
                    />
                    <Task
                      label="Dashboard analytics"
                      completed
                    />
                    <Task
                      label="Deploy production build"
                      completed={false}
                    />
                  </div>
                </div>

                {/* AI assistant */}
                <div className="rounded-xl border border-white/[0.07] bg-white/[0.015] p-3">
                  <div className="mb-3 flex items-center gap-2">
                    <div className="flex h-5 w-5 items-center justify-center rounded-md bg-white/[0.08]">
                      <Sparkles size={11} className="text-zinc-300" />
                    </div>

                    <span className="text-[10px] font-medium text-zinc-300">
                      DevFlow AI
                    </span>
                  </div>

                  <p className="text-[10px] leading-4 text-zinc-500">
                    I found a potential issue in your authentication flow.
                  </p>

                  <div className="mt-3 rounded-lg border border-white/[0.06] bg-black/20 p-2">
                    <p className="text-[9px] text-zinc-600">Suggested action</p>
                    <p className="mt-1 text-[9px] text-zinc-400">
                      Add session expiry handling.
                    </p>
                  </div>

                  <button className="mt-3 w-full rounded-md bg-white/[0.06] py-1.5 text-[9px] font-medium text-zinc-300 transition-colors hover:bg-white/[0.1]">
                    Review suggestion
                  </button>
                </div>
              </div>

              {/* Deployment */}
              <div className="rounded-xl border border-white/[0.07] bg-white/[0.015] p-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-md bg-white/[0.05]">
                      <GitBranch size={12} className="text-zinc-500" />
                    </div>

                    <div>
                      <p className="text-[9px] text-zinc-600">
                        Latest deployment
                      </p>
                      <p className="text-[10px] text-zinc-300">
                        production / v2.4.1
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 rounded-full border border-white/[0.07] px-2 py-1 text-[8px] text-zinc-500">
                    <span className="h-1.5 w-1.5 rounded-full bg-zinc-400" />
                    Live
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating deployment badge */}
      <div className="absolute -bottom-4 -left-4 hidden items-center gap-2 rounded-xl border border-white/10 bg-[#111113] px-3 py-2 shadow-xl shadow-black/50 sm:flex">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/[0.07]">
          <Check size={12} className="text-zinc-300" />
        </div>

        <div>
          <p className="text-[9px] font-medium text-zinc-300">
            Deployment successful
          </p>
          <p className="text-[8px] text-zinc-600">Production · just now</p>
        </div>
      </div>

      {/* Floating create button */}
      <button
        aria-label="Create new task"
        className="absolute -right-3 -top-3 hidden h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-[#151517] text-zinc-400 shadow-xl shadow-black/50 transition-transform duration-200 hover:scale-105 hover:text-white sm:flex"
      >
        <Plus size={15} />
      </button>
    </div>
  );
}

/* ---------- Small internal components ---------- */

interface StatCardProps {
  label: string;
  value: string;
}

function StatCard({ label, value }: StatCardProps) {
  return (
    <div className="rounded-xl border border-white/[0.07] bg-white/[0.015] p-3">
      <p className="text-[8px] text-zinc-600">{label}</p>
      <p className="mt-1 text-sm font-medium tracking-tight text-zinc-200">
        {value}
      </p>
    </div>
  );
}

interface TaskProps {
  label: string;
  completed: boolean;
}

function Task({ label, completed }: TaskProps) {
  return (
    <div className="flex items-center gap-2">
      <div
        className={`flex h-3.5 w-3.5 items-center justify-center rounded-full border ${
          completed
            ? "border-zinc-500 bg-zinc-500"
            : "border-zinc-700"
        }`}
      >
        {completed && <Check size={8} className="text-black" />}
      </div>

      <span
        className={`text-[9px] ${
          completed ? "text-zinc-500 line-through" : "text-zinc-400"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

export default ProductPreview;