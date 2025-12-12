import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-[#081923] text-white/70">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="space-y-10">
          <div className="space-y-2">
            <div className="text-sm font-semibold text-white">
              We’re here to assist you
            </div>
            <div className="text-sm text-white/60">
              Contact our team for partnerships, onboarding, support, or listings.
            </div>

            <div className="mt-4 space-y-1 text-sm">
              <div className="text-white/80">Email</div>
              <a className="block hover:text-white" href="mailto:hello@ekam.ai">
                hello@ekam.ai
              </a>

              <div className="mt-3 text-white/80">Phone</div>
              <a className="block hover:text-white" href="tel:+0000000000">
                +00 000 000 0000
              </a>
            </div>

            <div className="mt-5 space-y-1 text-sm">
              <div className="text-white/80">Social</div>
              <a
                className="block hover:text-white"
                href="https://github.com/aSimpson02/EKAM"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <div className="text-white/40">Instagram</div>
              <div className="text-white/40">LinkedIn</div>
            </div>
          </div>


          <div className="space-y-2 text-sm">
            <div className="text-sm font-semibold text-white">Company</div>
            <Link className="block hover:text-white" href="/about">
              About
            </Link>
            <Link className="block hover:text-white" href="/solutions">
              Solutions
            </Link>
            <Link className="block hover:text-white" href="/developers">
              Developers
            </Link>
            <Link className="block hover:text-white" href="/business">
              For Business
            </Link>
            <Link className="block hover:text-white" href="/marketplace">
              Marketplace
            </Link>
          </div>


          <div className="space-y-2 text-sm">
            <div className="text-sm font-semibold text-white">Support</div>
            <Link className="block hover:text-white" href="/login">
              Log in
            </Link>
            <Link className="block hover:text-white" href="/signup">
              Sign up
            </Link>
            <div className="text-white/40">Terms of Use</div>
            <div className="text-white/40">Privacy Policy</div>
            <div className="text-white/40">Cookie Policy</div>
          </div>


          <div className="border-t border-white/10 pt-6 text-xs text-white/50 space-y-2">
            <div>© {new Date().getFullYear()} EKAM. All rights reserved.</div>
            <div className="text-white/40">Built for teams shipping real AI.</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
