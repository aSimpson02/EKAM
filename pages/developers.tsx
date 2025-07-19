'use client';

import Link from 'next/link';
import { useRef } from 'react';

export default function DevelopersPage() {
  const benefitsRef = useRef<HTMLDivElement>(null);

  const scrollToBenefits = () => {
    benefitsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#0a0d1a] text-white px-6 py-16">
      {/* HERO: Join Ekam */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">Join Ekam</h1>
        <h2 className="text-2xl font-semibold mb-6">Monetize Your Models, APIs, and Tools</h2>
        <p className="mb-8 text-gray-300">
          Connect with businesses and researchers worldwide looking for AI solutions.
          Turn your expertise into a sustainable revenue stream on the premier marketplace for AI developers.
        </p>
        <div className="flex justify-center gap-4 mb-16">
          <Link href="/start-listing">
            <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-300">
              Start Listing Now
            </button>
          </Link>
          <button
            onClick={scrollToBenefits}
            className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black font-semibold"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* BENEFITS Section */}
      <div ref={benefitsRef} className="text-center mt-20">
        <h2 className="text-3xl font-bold mb-4">Benefits for AI Developers</h2>
        <p className="mb-10 text-gray-400">
          Join thousands of AI developers who are growing their business and impact through Ekam.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="border border-gray-700 rounded-lg p-6 bg-[#121624]">
            <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
            <p className="text-gray-300">Get discovered by businesses and researchers around the world.</p>
          </div>
          <div className="border border-gray-700 rounded-lg p-6 bg-[#121624]">
            <h3 className="text-xl font-semibold mb-2">Revenue Streams</h3>
            <p className="text-gray-300">Turn your models and APIs into monetizable assets.</p>
          </div>
          <div className="border border-gray-700 rounded-lg p-6 bg-[#121624]">
            <h3 className="text-xl font-semibold mb-2">Developer Tools</h3>
            <p className="text-gray-300">Access deployment tools, analytics, and listing support.</p>
          </div>
        </div>
      </div>

      {/* HOW IT WORKS Section */}
      <div className="mt-24 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#121624] rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold mb-2">1. Create Your Listing</h3>
            <p className="text-gray-300">Add your AI model, API, or tool with a clear description and pricing.</p>
          </div>
          <div className="bg-[#121624] rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold mb-2">2. Get Discovered</h3>
            <p className="text-gray-300">Businesses browse the marketplace and find your solution by category, need, or rating.</p>
          </div>
          <div className="bg-[#121624] rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold mb-2">3. Earn Revenue</h3>
            <p className="text-gray-300">Start earning when someone purchases or integrates your listing.</p>
          </div>
        </div>
      </div>

      {/* WAYS TO EARN MORE Section */}
      <div className="mt-24 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Ways to Earn More</h2>
        <p className="mb-10 text-gray-400">
          Ekam helps you turn your work into a steady stream of income. Boost your revenue with these extra features:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#121624] p-6 rounded-lg border border-gray-700">
            <h3 className="text-xl font-semibold mb-2">Premium Listings</h3>
            <p className="text-gray-300">Appear at the top of search results and boost your visibility.</p>
          </div>
          <div className="bg-[#121624] p-6 rounded-lg border border-gray-700">
            <h3 className="text-xl font-semibold mb-2">Referral Program</h3>
            <p className="text-gray-300">Earn commission by inviting others to Ekam with your referral link.</p>
          </div>
          <div className="bg-[#121624] p-6 rounded-lg border border-gray-700">
            <h3 className="text-xl font-semibold mb-2">Bundle Offers</h3>
            <p className="text-gray-300">Package multiple tools into a single offering for higher earnings per sale.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

