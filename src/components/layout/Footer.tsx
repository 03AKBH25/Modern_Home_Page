import { ArrowUpRight } from "lucide-react";
import {
  SiGithub,
  SiLinkedin,
  SiX,
} from "@icons-pack/react-simple-icons";

const footerLinks = {
  Product: ["Overview", "Features", "Changelog"],
  Resources: ["Documentation", "Guides", "API"],
  Company: ["About", "Careers", "Contact"],
};

function Footer() {
  return (
    <footer className="border-t border-white/[0.07]">
      {/* Final CTA */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.025] blur-3xl"
        />

        <div className="relative mx-auto max-w-4xl px-6 py-24 text-center sm:py-32">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-600">
            Ready when you are
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            Your next release
            <br />
            <span className="text-zinc-600">starts here.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-md text-sm leading-6 text-zinc-500 sm:text-base">
            Bring your ideas, code, and team into one focused workspace.
          </p>

          <button className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition-all duration-200 hover:-translate-y-0.5 hover:bg-zinc-200">
            Start building
            <ArrowUpRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </button>
        </div>
      </section>

      {/* Footer content */}
      <div className="mx-auto max-w-7xl border-t border-white/[0.06] px-6 py-12 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_repeat(3,1fr)]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white text-sm font-bold text-black">
                D
              </div>

              <span className="text-sm font-semibold text-white">
                devflow
              </span>
            </div>

            <p className="mt-4 max-w-xs text-xs leading-5 text-zinc-600">
              A focused workspace for teams that want to keep shipping.
            </p>

            {/* Socials */}
            <div className="mt-5 flex items-center gap-2">
              <SocialButton label="GitHub">
                <SiGithub size={14} />
              </SocialButton>

              <SocialButton label="X">
                <SiX size={14} />
              </SocialButton>

              <SocialButton label="LinkedIn">
                <SiLinkedin size={14} />
              </SocialButton>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="text-xs font-medium text-zinc-300">
                {category}
              </p>

              <div className="mt-4 space-y-3">
                {links.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="block text-xs text-zinc-600 transition-colors duration-200 hover:text-zinc-300"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-3 border-t border-white/[0.06] pt-6 text-[10px] text-zinc-700 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 DevFlow. All rights reserved.</p>

          <div className="flex gap-5">
            <a
              href="#"
              className="transition-colors hover:text-zinc-400"
            >
              Privacy
            </a>

            <a
              href="#"
              className="transition-colors hover:text-zinc-400"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

interface SocialButtonProps {
  children: React.ReactNode;
  label: string;
}

function SocialButton({ children, label }: SocialButtonProps) {
  return (
    <a
      href="#"
      aria-label={label}
      className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.07] text-zinc-600 transition-colors duration-200 hover:border-white/[0.14] hover:text-zinc-300"
    >
      {children}
    </a>
  );
}

export default Footer;