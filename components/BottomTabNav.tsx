import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";
import {
  Home,
  LayoutGrid,
  Briefcase,
  PlusCircle,
  User,
  ChevronRight,
  X,
  Mail,
  Phone,
  Github,
  Instagram,
  Facebook,
  Menu,
} from "lucide-react";

type Tab = { href: string; label: string; Icon: any };

const tabs: Tab[] = [
  { href: "/", label: "Home", Icon: Home },
  { href: "/marketplace", label: "Market", Icon: LayoutGrid },
  { href: "/business", label: "Business", Icon: Briefcase },
  { href: "/start-listing", label: "List", Icon: PlusCircle },
  { href: "/dashboard", label: "Me", Icon: User },
];

const companyLinks = [
  { href: "/about", label: "About EKAM" },
  { href: "/solutions", label: "Solutions" },
  { href: "/developers", label: "Developers" },
  { href: "/marketplace", label: "Marketplace" },
];

const supportLinks = [
  { href: "/login", label: "Log in" },
  { href: "/signup", label: "Sign up" },
  // Add real pages later if/when you create them:
  // { href: "/terms", label: "Terms of Use" },
  // { href: "/privacy", label: "Privacy Policy" },
];

export default function BottomTabNav() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const activePath = useMemo(() => router.pathname, [router.pathname]);

  const isActive = (href: string) =>
    href === "/" ? activePath === "/" : activePath.startsWith(href);

  return (
    <>
      {/* Slide-up footer panel */}
      {open && (
        <div className="fixed inset-0 z-[60] bg-black/50" onClick={() => setOpen(false)}>
          <div
            className="absolute left-0 right-0 bottom-[70px] md:bottom-0 mx-auto w-full max-w-6xl px-3"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="rounded-2xl border border-white/10 bg-[#081923] shadow-2xl overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                <div className="text-sm font-semibold text-white">EKAM</div>
                <button
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-xs text-white/70 hover:bg-white/5"
                >
                  <X size={16} />
                  Close
                </button>
              </div>

              <div className="grid gap-8 p-5 md:grid-cols-3">
                {/* Left: help / contact */}
                <div>
                  <div className="text-sm font-semibold text-white/90">We’re here to assist</div>
                  <p className="mt-2 text-sm text-white/60">
                    Contact us for support, partnerships, or onboarding.
                  </p>

                  <div className="mt-4 space-y-3">
                    <a
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-sm text-white/80 hover:bg-white/10"
                      href="mailto:hello@ekam.ai"
                    >
                      <Mail size={18} />
                      <div className="flex-1">
                        <div className="font-medium text-white/90">Send us an email</div>
                        <div className="text-xs text-white/60">hello@ekam.ai</div>
                      </div>
                      <ChevronRight size={16} className="opacity-60" />
                    </a>

                    <a
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-sm text-white/80 hover:bg-white/10"
                      href="tel:+0000000000"
                    >
                      <Phone size={18} />
                      <div className="flex-1">
                        <div className="font-medium text-white/90">Talk to us</div>
                        <div className="text-xs text-white/60">Add number later</div>
                      </div>
                      <ChevronRight size={16} className="opacity-60" />
                    </a>
                  </div>

                  <div className="mt-5 flex items-center gap-3">
                    <a
                      className="rounded-xl border border-white/10 bg-white/5 p-3 text-white/70 hover:bg-white/10 hover:text-white"
                      href="https://github.com/aSimpson02/EKAM"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub"
                    >
                      <Github size={18} />
                    </a>
                    <button
                      className="rounded-xl border border-white/10 bg-white/5 p-3 text-white/70 hover:bg-white/10 hover:text-white"
                      aria-label="Instagram"
                      onClick={() => {}}
                      type="button"
                    >
                      <Instagram size={18} />
                    </button>
                    <button
                      className="rounded-xl border border-white/10 bg-white/5 p-3 text-white/70 hover:bg-white/10 hover:text-white"
                      aria-label="Facebook"
                      onClick={() => {}}
                      type="button"
                    >
                      <Facebook size={18} />
                    </button>
                  </div>
                </div>

                {/* Company column */}
                <div>
                  <div className="text-sm font-semibold text-white/90">Company</div>
                  <ul className="mt-3 space-y-2">
                    {companyLinks.map((l) => (
                      <li key={l.href}>
                        <Link
                          href={l.href}
                          onClick={() => setOpen(false)}
                          className="group flex items-center gap-2 text-sm text-white/70 hover:text-white"
                        >
                          <ChevronRight size={16} className="opacity-60 group-hover:opacity-100" />
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Support column */}
                <div>
                  <div className="text-sm font-semibold text-white/90">Support</div>
                  <ul className="mt-3 space-y-2">
                    {supportLinks.map((l) => (
                      <li key={l.href}>
                        <Link
                          href={l.href}
                          onClick={() => setOpen(false)}
                          className="group flex items-center gap-2 text-sm text-white/70 hover:text-white"
                        >
                          <ChevronRight size={16} className="opacity-60 group-hover:opacity-100" />
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 text-xs text-white/40">
                    © {new Date().getFullYear()} EKAM. All rights reserved.
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10 px-5 py-3 text-[11px] text-white/40">
                Built for teams shipping real AI.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom tab bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#06141d]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-stretch justify-between px-2 pb-[env(safe-area-inset-bottom)]">
          {tabs.map(({ href, label, Icon }) => {
            const active = isActive(href);

            return (
              <Link
                key={href}
                href={href}
                className={[
                  "flex w-full flex-col items-center justify-center gap-1 px-2 py-3",
                  "text-[11px] md:text-xs",
                  active ? "text-white" : "text-white/55 hover:text-white/85",
                ].join(" ")}
              >
                <Icon size={19} className={active ? "" : "opacity-90"} />
                <span className={active ? "font-semibold" : ""}>{label}</span>
                {/* active indicator */}
                <span
                  className={[
                    "mt-1 h-[2px] w-7 rounded-full",
                    active ? "bg-white/80" : "bg-transparent",
                  ].join(" ")}
                />
              </Link>
            );
          })}

          {/* More button */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex w-full flex-col items-center justify-center gap-1 px-2 py-3 text-[11px] md:text-xs text-white/55 hover:text-white/85"
          >
            <Menu size={19} />
            <span>More</span>
            <span className="mt-1 h-[2px] w-7 rounded-full bg-transparent" />
          </button>
        </div>
      </nav>
    </>
  );
}
