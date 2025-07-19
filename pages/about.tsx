export default function AboutPage() {
  return (
    <div className="bg-[#0b1120] text-white px-6 py-16">
      {/* ABOUT US */}
      <section className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <p className="text-lg leading-8 text-gray-300">
          Founded in 2025 by three friends turned partners and incorporated in the financial capital of the world—London. We bring you business consultancy for the 21st century. The world has rapidly evolved this past century and we need to evolve too. With the rapid growth of AI, many old-school businesses are struggling to keep up.
        </p>
        <p className="text-lg mt-4 leading-8 text-gray-300">
          Hollywood has convinced us to fear the day robots take over—but what if we use this very innovation to become better? Rather than fearing change, what if we embrace it? Uniting tech and AI with businesses, we embody the true meaning of <span className="font-semibold italic text-white">'Ekam'</span>, the Sanskrit word for Unity.
        </p>
      </section>

      {/* WHAT WE BRING */}
      <section className="max-w-5xl mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-8">What We Bring to the Table</h2>
        <ul className="space-y-6 text-lg text-gray-300">
          <li className="flex gap-3">
            <span className="mt-1 text-blue-500">●</span>
            Our three partners will collaborate to understand your firm from A to Z. We explore processes, employee workflows, flaws, and inefficiencies to offer actionable AI-driven improvements.
          </li>
          <li className="flex gap-3">
            <span className="mt-1 text-blue-500">●</span>
            Our curated selection of AI agents allows us to deploy specific, cutting-edge tools tailored to your business needs.
          </li>
          <li className="flex gap-3">
            <span className="mt-1 text-blue-500">●</span>
            Our consultancy style is rooted in detailed reasoning, offering clear, tailored solutions to company setbacks.
          </li>
        </ul>
      </section>

      {/* OUR TEAM */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-1">Dhushyant</h3>
            <p className="text-gray-400 font-semibold">Business, Organisational Structure</p>
            <p className="mt-2 text-gray-500">
              A Business Management student at Hult University London, passionate about the functioning and procedures behind an enterprise.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-1">Rehmat</h3>
            <p className="text-gray-400 font-semibold">Business Procedure</p>
            <p className="mt-2 text-gray-500">
              Engineering student at the University of Bristol who uses mathematical modelling to approach problems in various scenarios for consulting.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-1">Annabel Simpson</h3>
            <p className="text-gray-400 font-semibold">The Tech and AI Wiz</p>
            <p className="mt-2 text-gray-500">
              An AI and tech graduate from Imperial College London, she uses her vast knowledge of the AI and tech world to enhance a firm's processes.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
