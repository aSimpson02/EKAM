import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-[#0b1120] text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f4c6a] via-[#0b1120] to-[#0b1120]" />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 py-20 text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            EKAM
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/80 md:text-lg">
            AI marketplace for tools, components, and talent — built for teams
            that want to ship faster.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/marketplace"
              className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-white/90"
            >
              Browse AI Tools
            </Link>

            <Link
              href="/signup"
              className="rounded-xl border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>


      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-center text-3xl font-semibold md:text-4xl">
          How EKAM Works
        </h2>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:translate-y-[-2px] hover:bg-white/10">
            <div className="text-lg font-semibold">Submit Your Tool</div>
            <p className="mt-2 text-sm text-white/70">
              Upload your AI models, APIs or datasets so businesses and
              researchers can discover them.
            </p>
            <div className="mt-4">
              <Link
                href="/start-listing"
                className="text-sm font-semibold text-white/90 hover:text-white"
              >
                Start listing →
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:translate-y-[-2px] hover:bg-white/10">
            <div className="text-lg font-semibold">Browse Components</div>
            <p className="mt-2 text-sm text-white/70">
              Explore a growing collection of reusable AI tools built by the
              community.
            </p>
            <div className="mt-4">
              <Link
                href="/marketplace"
                className="text-sm font-semibold text-white/90 hover:text-white"
              >
                Explore marketplace →
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:translate-y-[-2px] hover:bg-white/10">
            <div className="text-lg font-semibold">Hire Talent</div>
            <p className="mt-2 text-sm text-white/70">
              Request custom solutions or find trusted AI developers to build
              your idea.
            </p>
            <div className="mt-4">
              <Link
                href="/developers"
                className="text-sm font-semibold text-white/90 hover:text-white"
              >
                Find developers →
              </Link>
            </div>
          </div>
        </div>
      </section>

  
      <section className="mx-auto max-w-6xl px-4 pb-14">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
          <div className="text-center">
            <div className="text-xs uppercase tracking-[0.25em] text-white/50">
              Trusted by builders
            </div>
            <h3 className="mt-2 text-2xl font-semibold md:text-3xl">
              Built for teams shipping real AI
            </h3>
            <p className="mt-2 text-sm text-white/70">
              Browse tools, hire talent, and move from idea to deployment faster.
            </p>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {[
              { k: "Tools", v: "Growing weekly" },
              { k: "Developers", v: "Verified talent" },
              { k: "Businesses", v: "Faster delivery" },
            ].map((x) => (
              <div
                key={x.k}
                className="rounded-xl border border-white/10 bg-[#070b16] p-5 text-center transition hover:translate-y-[-2px] hover:bg-white/10"
              >
                <div className="text-lg font-semibold text-white">{x.k}</div>
                <div className="mt-1 text-sm text-white/60">{x.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

  
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="rounded-2xl border border-white/10 bg-[#0a0f1f] p-10 text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-white/70 md:text-base">
            Join businesses and developers leveraging EKAM’s AI marketplace to
            innovate and grow.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/signup"
              className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-white/90"
            >
              Sign Up Free
            </Link>
            <Link
              href="/marketplace"
              className="rounded-xl border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              Browse Tools
            </Link>
          </div>

          <p className="mt-3 text-xs text-white/50">No credit card required.</p>
        </div>
      </section>
    </div>
  );
}
