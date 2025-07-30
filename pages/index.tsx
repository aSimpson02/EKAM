'use client';

import Head from 'next/head';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>EKAM | AI Marketplace for Tools and Talent</title>
        <meta
          name="description"
          content="Discover, list, or hire AI tool builders. EKAM connects developers and businesses with ready-to-use AI components."
        />
        <meta property="og:title" content="EKAM | AI Marketplace" />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://ekam.app" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main className="min-h-screen text-white">
        {/* Hero Section - Gradient Background */}
        <section
          className="py-28 px-6 text-center"
          style={{
            background: 'linear-gradient(to bottom right, #1D2B41, #125C83, #5271A2)',
          }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Custom AI Solutions for Bold Businesses
          </h1>

          <p className="text-gray-100 text-lg max-w-xl mx-auto mb-10">
            Ekam delivers tailored AI tools to help businesses scale smarter, faster, and more creatively.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/marketplace">
              <button className="px-6 py-3 bg-white text-black rounded-md font-semibold hover:bg-gray-200 transition">
                Browse AI Tools
              </button>
            </Link>
            <Link href="/signup">
              <button className="px-6 py-3 border border-white text-white rounded-md font-semibold hover:bg-white hover:text-black transition">
                Get Started
              </button>
            </Link>
          </div>
        </section>

        {/* How It Works Section - Solid Dark Background */}
        <section className="py-24 px-6 text-center bg-[#1D2B41]">
          <h2 className="text-4xl font-bold mb-12">How EKAM Works</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Submit Your Tool",
                desc: "Upload your AI models, APIs or datasets to get discovered by businesses and researchers.",
              },
              {
                title: "Browse Components",
                desc: "Explore a growing collection of reusable AI tools built by the community.",
              },
              {
                title: "Hire Talent",
                desc: "Request custom solutions or find trusted AI developers to build your idea.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#111827]/60 backdrop-blur-md p-6 rounded-xl border border-white/10"
              >
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section - Same Solid Background */}
        <section className="py-20 px-6 text-center bg-[#1D2B41]">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto">
            Join thousands of businesses and developers who are leveraging Ekam’s AI solutions to innovate and grow.
          </p>
          <Link href="/signup">
            <button className="px-6 py-3 bg-white text-black rounded-md font-semibold hover:bg-gray-200 transition">
              Sign Up Free
            </button>
          </Link>
        </section>
      </main>
    </>
  );
}
