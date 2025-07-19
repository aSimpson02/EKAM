'use client';

import { useState } from 'react';

const allItems = [
  {
    id: 2,
    name: 'MedicalVision API',
    type: 'API',
    price: 499,
    rating: 4.9,
    description: 'HIPAA-compliant API for medical image analysis...',
    tag: 'Healthcare',
  },
  {
    id: 4,
    name: 'Developer Tools Pack',
    type: 'Tool',
    price: 199,
    rating: 4.6,
    description: 'A suite of tools to streamline your ML workflow...',
    tag: 'Developer',
  },
  {
    id: 5,
    name: 'AutoTranscriber Plugin',
    type: 'Plugin',
    price: 89,
    rating: 4.5,
    description: 'Real-time audio-to-text transcription for videos and podcasts.',
    tag: 'Productivity',
  },
  // Removed AI Models for now
];

const filters = ['All', 'AI Model', 'API', 'Tool', 'Plugin'];

export default function MarketplacePage() {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filteredItems =
    selectedFilter === 'All'
      ? allItems
      : allItems.filter((item) => item.type === selectedFilter);

  return (
    <div className="min-h-screen bg-[#0b1120] text-white p-8">
      <h1 className="text-4xl font-bold mb-2">AI Marketplace</h1>
      <p className="mb-6 text-gray-300">
        Discover and implement cutting-edge AI solutions built for your industry.
      </p>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-4">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setSelectedFilter(f)}
            className={`px-4 py-2 rounded-lg font-medium ${
              selectedFilter === f
                ? 'bg-white text-black'
                : 'bg-gray-800 text-white hover:bg-gray-700'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Show "Coming Soon" if 'AI Model' selected */}
      {selectedFilter === 'AI Model' && (
        <div className="bg-[#1c1f26] p-6 rounded-xl text-center text-gray-400 border border-gray-700">
          <p className="text-lg font-semibold mb-2 text-white">AI Models – Coming Soon</p>
          <p className="text-sm">
            Our curated selection of AI models is launching soon. Stay tuned for powerful pretrained models.
          </p>
        </div>
      )}

      {/* Results Count */}
      {selectedFilter !== 'AI Model' && (
        <>
          <p className="mb-4 text-sm text-gray-400">
            Showing {filteredItems.length} results
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div key={item.id} className="bg-[#1c1f26] rounded-xl p-6 border border-gray-700">
                <h2 className="text-xl font-semibold mb-1">{item.name}</h2>
                <p className="text-sm mb-2 text-gray-400">
                  {item.type} • ${item.price}
                </p>
                <p className="mb-2 text-sm text-gray-300">{item.description}</p>
                <p className="text-sm mb-4 text-yellow-400">⭐ {item.rating}</p>
                <div className="flex gap-2">
                  <button className="border border-white px-4 py-2 rounded-lg text-white hover:bg-gray-800">
                    View Details
                  </button>
                  <button className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
