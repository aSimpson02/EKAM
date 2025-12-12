import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-[#081923] text-white/70">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-3">

          <div>
            <div className="text-sm font-semibold text-white">We’re here to assist you</div>
            <p className="mt-3 text-sm text-white/60">
              Contact our team for partnerships, onboarding, support, or listings.
            </p>

            <div className="mt-5 space-y-2 text-sm">
              <div className="text-white/80">Email</div>
              <a className="block hover:text-white" href="mailto:hello@ekam.ai">
                hello@ekam.ai
              </a>

              <div className="mt-4 text-white/80">Phone</div>
              <a className="block hover:text-white" href="tel:+0000000000">
                +00 000 000 0000
              </a>
            </div>

            <div className="mt-6 space-y-2 text-sm">
              <div className="text-white/80">Social</div>
              <a
                className="block hover:text-white"
                href="https://github.com/aSimpson02/EKAM"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <span className="block text-white/40">Instagram</span>
              <span className="block text-white/40">LinkedIn</span>
            </div>
          </div>


          <div>
            <div className="text-sm font-semibold text-white">Company</div>
            <div className="mt-4 space-y-3 text-sm">
              <Link className="block hover:text-white" href="/about">About</Link>
              <Link className="block hover:text-white" href="/solutions">Solutions</Link>
              <Link className="block hover:text-white" href="/developers">Developers</Link>
              <Link className="block hover:text-white" href="/business">For Business</Link>
              <Link className="block hover:text-white" href="/marketplace">Marketplace</Link>
            </div>
          </div>


          <div>
            <div className="text-sm font-semibold text-white">Support</div>
            <div className="mt-4 space-y-3 text-sm">
              <Link className="block hover:text-white" href="/login">Log in</Link>
              <Link className="block hover:text-white" href="/signup">Sign up</Link>

              <span className="block text-white/40">Terms of Use</span>
              <span className="block text-white/40">Privacy Policy</span>
              <span className="block text-white/40">Cookie Policy</span>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-white/50">
          <div>© {new Date().getFullYear()} EKAM. All rights reserved.</div>
          <div className="mt-2 text-white/40">Built for teams shipping real AI.</div>
        </div>
      </div>
    </footer>
  );
}
