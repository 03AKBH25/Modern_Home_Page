import { ArrowRight, Sparkles } from "lucide-react";
import ProductPreview from "./ProductPreview";

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-white/[0.04] blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 pb-24 pt-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:pb-32 lg:pt-24">
        {/* Hero content */}
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-zinc-300">
            <Sparkles size={13} />
            <span>One workspace. Ship faster.</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
            Ship software.
            <br />
            <span className="text-zinc-500">Not status updates.</span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg">
            DevFlow brings your code, tasks, deployments, and AI teammate into
            one focused workspace built for teams that want to keep shipping.
          </p>

          {/* Actions */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <button className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition-all duration-200 hover:-translate-y-0.5 hover:bg-zinc-200">
              Start building
              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </button>

            <button className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-medium text-zinc-300 transition-all duration-200 hover:border-white/20 hover:bg-white/[0.06] hover:text-white">
              Explore the workspace
            </button>
          </div>

          {/* Small supporting message */}
          <p className="mt-5 text-xs text-zinc-600">
            Built for developers who prefer momentum over meetings.
          </p>
        </div>

        {/* Product preview placeholder */}
        <div className="relative">
          <ProductPreview/>
        </div>
      </div>
    </section>
  );
}

export default Hero;