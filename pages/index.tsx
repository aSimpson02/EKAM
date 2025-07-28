import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>EKAM | AI Marketplace for Tools and Talent</title>
        <meta name="description" content="Discover, list, or hire AI tool builders. EKAM connects developers and businesses with ready-to-use AI components." />
        <meta property="og:title" content="EKAM | AI Marketplace" />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://ekam.app" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-[#0b1120] via-[#0f172a] to-[#1a1f3b] text-white">
        {/* Hero Section */}
        <section className="py-24 px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 text-transparent bg-clip-text mb-6"
          >
            Build. Share. Hire.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-gray-300 text-lg max-w-xl mx-auto mb-8"
          >
            EKAM is your platform to list AI tools, discover reusable components, and hire expert AI developers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex justify-center gap-4"
          >
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
          </motion.div>
        </section>

        {/* How It Works */}
        <section className="py-20 px-6 max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            How EKAM Works
          </motion.h2>

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
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-[#111827]/60 backdrop-blur-md p-6 rounded-xl border border-white/10"
              >
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* TODO: Repeat same motion patterns for Tool Showcase and CTA */}
      </main>
    </>
  );
}
