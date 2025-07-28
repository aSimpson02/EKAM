import Head from 'next/head';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>EKAM | AI Marketplace for Tools and Talent</title>
        <meta name="description" content="Discover, list, or hire AI tool builders. EKAM connects developers and businesses with ready-to-use AI components." />
        <meta property="og:title" content="EKAM | AI Marketplace" />
        <meta property="og:description" content="Submit your AI tool, hire top talent, or browse plug-and-play AI solutions." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://ekam.app" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main className="min-h-screen w-full bg-gradient-to-br from-[#0b1120] via-[#0f172a] to-[#1a1f3b] text-white">
        {/* Hero Section */}
        <section className="py-24 px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 text-transparent bg-clip-text mb-6">
            Build. Share. Hire.
          </h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto mb-8">
            EKAM is your platform to list AI tools, discover reusable components, and hire expert AI developers.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/start-listing">
              <button className="px-6 py-3 bg-white text-black rounded-md font-semibold hover:bg-gray-200 transition">
                Submit Your Tool
              </button>
            </Link>
            <Link href="/hire">
              <button className="px-6 py-3 border border-white text-white rounded-md hover:bg-white hover:text-black transition">
                Hire AI Experts
              </button>
            </Link>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 px-6 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How EKAM Works</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
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
              <div key={i} className="bg-[#111827]/60 backdrop-blur-md p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tool Showcase */}
        <section className="py-20 px-6 max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Explore Featured Tools</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {["Sentiment Classifier", "Resume Ranker", "Image Enhancer"].map((tool, i) => (
              <div key={i} className="bg-[#111827]/60 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-2">{tool}</h3>
                <p className="text-gray-400">A powerful AI component to drop into your product in minutes.</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 px-6 text-center bg-gradient-to-t from-[#0b1120] via-[#111827] to-transparent">
          <h2 className="text-4xl font-bold mb-6">Ready to join the AI movement?</h2>
          <p className="text-lg text-gray-300 mb-8">Whether you build or buy, EKAM connects you to the future of AI tools.</p>
          <Link href="/start-listing">
            <button className="px-8 py-4 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition">
              Get Started Now
            </button>
          </Link>
        </section>
      </main>
    </>
  );
}
