import Link from "next/link";
import { useRouter } from "next/router";
import { Home, LayoutGrid, Briefcase, PlusCircle, User, Link2 } from "lucide-react";
import { useMemo, useState } from "react";

type Tab = {
  href: string;
  label: string;
  Icon: any;
};

const tabs: Tab[] = [
  { href: "/", label: "Home", Icon: Home },
  { href: "/marketplace", label: "Market", Icon: LayoutGrid },
  { href: "/business", label: "Business", Icon: Briefcase },
  { href: "/start-listing", label: "List", Icon: PlusCircle },
  { href: "/dashboard", label: "Me", Icon: User },
];

const extraLinks = [
  { href: "/about", label: "About" },
  { href: "/developers", label: "Developers" },
  { href: "/solutions", label: "Solutions" },
  { href: "/components", label: "Components" },
];

export default function BottomTabNav() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const activeHref = useMemo(() => {
    const p = router.pathname;
    // treat dynamic-ish /admin/* or /dashboard subpaths as active for their base
    if (p.startsWith("/admin")) return "/dashboard";
    return p;
  }, [router.pathname]);

  return (
    <>
      {/* Links drawer */}
      {open && (
        <div
          className="fixed inset-0 z-[60] bg-black/40"
          onClick={() => setOpen(false)}
        >
          <div
            className="absolute bottom-[76px] left-3 right-3 rounded-2xl border border-white/10 bg-neutral-950 p-3 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-2 pb-2">
              <div className="text-sm font-semibold text-neutral-200">Links</div>
              <button
                className="rounded-lg px-2 py-1 text-xs text-neutral-300 hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                Close
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {extraLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-sm text-neutral-200 hover:bg-white/10"
                >
                  {l.label}
                </Link>
              ))}

              <a
                href="https://github.com/aSimpson02/EKAM"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-sm text-neutral-200 hover:bg-white/10"
              >
                GitHub
              </a>

              <a
                href="mailto:hello@ekam.ai"
                className="rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-sm text-neutral-200 hover:bg-white/10"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Bottom bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-neutral-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-stretch justify-between px-2 pb-[env(safe-area-inset-bottom)]">
          {tabs.map(({ href, label, Icon }) => {
            const active =
              activeHref === href ||
              (href !== "/" && activeHref.startsWith(href));

            return (
              <Link
                key={href}
                href={href}
                className={[
                  "flex w-full flex-col items-center justify-center gap-1 rounded-xl px-2 py-3",
                  "text-xs",
                  active ? "text-white" : "text-neutral-400 hover:text-neutral-200",
                ].join(" ")}
              >
                <Icon size={20} className={active ? "" : "opacity-90"} />
                <span className={active ? "font-semibold" : ""}>{label}</span>
              </Link>
            );
          })}

          {/* Links button */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex w-full flex-col items-center justify-center gap-1 rounded-xl px-2 py-3 text-xs text-neutral-400 hover:text-neutral-200"
          >
            <Link2 size={20} />
            <span>Links</span>
          </button>
        </div>
      </nav>
    </>
  );
}
