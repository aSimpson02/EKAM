'use client';

import React from "react";
import Link from "next/link";

export default function SolutionsPage() {
  return (
    <div className="bg-[#0b1120] text-white min-h-screen px-8 py-16">
      {/* Header */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">AI Solutions</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Discover our comprehensive range of AI solutions designed to transform your business and drive innovation.
        </p>
      </section>

      {/* Feature Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center mb-24">
        <div className="bg-[#111827] p-6 rounded-xl border border-gray-800">
          <h2 className="text-xl font-semibold mb-2">AI Models</h2>
          <p className="text-gray-400 text-sm">Coming soon – Pre-trained models tailored to finance, healthcare, and marketing.</p>
        </div>

        <div className="bg-[#111827] p-6 rounded-xl border border-gray-800">
          <h2 className="text-xl font-semibold mb-2">APIs</h2>
          <p className="text-gray-400 text-sm">
            Plug-and-play APIs for NLP, computer vision, and automation that integrate seamlessly with your systems.
          </p>
        </div>

        <div className="bg-[#111827] p-6 rounded-xl border border-gray-800">
          <h2 className="text-xl font-semibold mb-2">Consulting</h2>
          <p className="text-gray-400 text-sm">
            On-demand AI consulting from vetted experts who guide your strategy and implementation.
          </p>
        </div>

        <div className="bg-[#111827] p-6 rounded-xl border border-gray-800">
          <h2 className="text-xl font-semibold mb-2">Education</h2>
          <p className="text-gray-400 text-sm">
            Courses and certifications for AI upskilling—built for both tech and business professionals.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center">
        <h2 className="text-2xl font-bold mb-4">Why Choose Our Solutions</h2>
        <p className="text-gray-300 max-w-xl mx-auto mb-8">
          Our AI solutions are built with enterprise-grade quality, security, and scalability in mind.
        </p>
        <Link href="/marketplace">
          <button className="bg-white text-black px-6 py-2 rounded-md font-semibold hover:bg-gray-200 transition">
            Explore the Marketplace
          </button>
        </Link>
      </section>
    </div>
  );
}
