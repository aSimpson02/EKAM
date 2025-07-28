'use client';

export default function AboutPage() {
  return (
    <div className="bg-[#0b1120] text-white px-6 py-16">
      {/* ABOUT US */}
      <section className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <p className="text-lg leading-8 text-gray-300">
          Founded in 2025 and incorporated in Hong Kong—one of the world’s foremost financial hubs—Ekam AI Consultancy is redefining business consultancy for the 21st century. As industries face the accelerating pace of change driven by artificial intelligence, many traditional businesses are struggling to keep up. Rather than fearing disruption, we believe in harnessing it. At Ekam, we help organizations embrace AI as a force for progress—using innovation not to replace human potential, but to elevate it.

        </p>
        <p className="text-lg mt-4 leading-8 text-gray-300">
          Our name, Ekam—a Sanskrit word meaning Unity—reflects our mission: to unite technology and business in a way that creates lasting value, transformation, and sustainable growth.
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Dhushyant */}
          <div className="border border-white rounded-lg p-6 text-center space-y-3">
            <h3 className="text-xl font-bold">Princess Jayapalashri Anil Urs of Mysore</h3>
            <p className="font-semibold text-gray-300">Business, Organisational Structure</p>
            <p className="text-gray-400">
              Granddaughter of the late Maharaja Jayachamaraja Wadiyar, Princess Jayapalashri Anil is a distinguished philanthropist, accomplished businesswoman, and author. She currently serves as a director of two prominent manufacturing firms in India. With a unique blend of royal heritage and entrepreneurial acumen, she brings a wealth of insight, leadership, and global perspective to Ekam. Her presence embodies the seamless fusion of tradition and innovation — a true testament to business with a regal touch.
            </p>
          </div>

          {/* Rehmat */}
          <div className="border border-white rounded-lg p-6 text-center space-y-3">
            <h3 className="text-xl font-bold">Rehmat</h3>
            <p className="font-semibold text-gray-300">Business Procedure</p>
            <p className="text-gray-400">
              Engineering student at the University of Bristol who uses mathematical modelling to approach problems in various scenarios for consulting.
            </p>
          </div>

          {/* Annabel */}
          <div className="border border-white rounded-lg p-6 text-center space-y-3">
            <h3 className="text-xl font-bold">Annabel Simpson</h3>
            <p className="font-semibold text-gray-300">The Tech and AI Wiz</p>
            <p className="text-gray-400">
              An AI and tech graduate from Imperial College London, she uses her vast knowledge of the AI and tech world to enhance a firm&apos;s processes.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
