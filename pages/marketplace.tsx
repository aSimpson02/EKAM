'use client';

import { useState } from 'react';

const allItems = [
  {
    id: 1,
    name: 'SentimentAnalyzer Pro',
    type: 'AI Model',
    price: 299,
    rating: 4.8,
    description: 'Advanced sentiment analysis model...',
    tag: 'NLP',
  },
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
    id: 3,
    name: 'FinancialForecaster',
    type: 'AI Model',
    price: 399,
    rating: 4.7,
    description: 'Predictive model for financial markets...',
    tag: 'Finance',
  },
  // Add Tool, Plugin, etc...
];

const filters = ['All', 'AI Model', 'API', 'Tool', 'Plugin'];

export default function MarketplacePage() {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filteredItems = selectedFilter === 'All'
    ? allItems
    : allItems.filter(item => item.type === selectedFilter);

  return (
    <div className="p-8 text-white">
      <h1 className="text-4xl font-bold mb-2">AI Marketplace</h1>
      <p className="mb-6">Discover and implement cutting-edge AI solutions...</p>

      {/* Filter buttons */}
      <div className="flex gap-2 mb-4">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setSelectedFilter(f)}
            className={`px-4 py-2 rounded-lg ${
              selectedFilter === f
                ? 'bg-white text-black'
                : 'bg-gray-800 text-white'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <p className="mb-4 text-sm text-gray-400">Showing {filteredItems.length} results</p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div key={item.id} className="bg-[#1c1f26] rounded-xl p-4">
            <h2 className="text-xl font-semibold mb-1">{item.name}</h2>
            <p className="text-sm mb-2 text-gray-400">{item.type} • ${item.price}</p>
            <p className="mb-2 text-sm">{item.description}</p>
            <p className="text-sm mb-4">⭐ {item.rating}</p>
            <div className="flex gap-2">
              <button className="border px-4 py-2 rounded-lg">View Details</button>
              <button className="bg-white text-black px-4 py-2 rounded-lg">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

