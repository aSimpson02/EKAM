import React from "react";

export default function SolutionsPage() {
  return (
    <div className="bg-black text-white min-h-screen px-8 py-16">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">AI Solutions</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Discover our comprehensive range of AI solutions designed to transform your business and drive innovation.
        </p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center mb-24">
        <div className="bg-gray-900 p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">AI Models</h2>
          <p className="text-gray-400 text-sm">
            Pre-trained models tailored to finance, healthcare, and marketing, ready to deploy for immediate business impact.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">APIs</h2>
          <p className="text-gray-400 text-sm">
            Plug-and-play APIs for NLP, computer vision, and automation that integrate seamlessly with your existing systems.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">Consulting</h2>
          <p className="text-gray-400 text-sm">
            On-demand AI consulting services from vetted experts who can guide your AI strategy, implementation, and optimization.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">Education</h2>
          <p className="text-gray-400 text-sm">
            Tutorials, courses, and certification programs for AI upskilling, designed for technical and non-technical professionals.
          </p>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-bold mb-4">Why Choose Our Solutions</h2>
        <p className="text-gray-300 max-w-xl mx-auto mb-8">
          Our AI solutions are built with enterprise-grade quality, security, and scalability in mind.
        </p>
        <button className="bg-white text-black px-6 py-2 rounded-md font-semibold hover:bg-gray-200 transition">
          Explore the Marketplace
        </button>
      </section>
    </div>
  );
}
