export default function Marketplace() {
  return (
    <div className="bg-black text-white px-6 md:px-20 py-12 min-h-screen">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-5xl font-extrabold mb-4">AI Marketplace</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Discover and implement cutting-edge AI solutions from our curated collection of models, APIs, and tools.
        </p>
      </section>

      {/* Filters and Sort */}
      <section className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-4">
        <div className="flex gap-2 flex-wrap">
          <button className="bg-white text-black px-4 py-2 rounded-md font-medium">All</button>
          <button className="bg-gray-800 text-white px-4 py-2 rounded-md font-medium">AI Model</button>
          <button className="bg-gray-800 text-white px-4 py-2 rounded-md font-medium">API</button>
          <button className="bg-gray-800 text-white px-4 py-2 rounded-md font-medium">Tool</button>
          <button className="bg-gray-800 text-white px-4 py-2 rounded-md font-medium">Plugin</button>
        </div>
        <div className="flex gap-2">
          <button className="border border-gray-600 px-4 py-2 rounded-md text-white">Price ▼</button>
          <button className="border border-gray-600 px-4 py-2 rounded-md text-white">Rating ☆</button>
        </div>
      </section>

      <p className="text-gray-400 text-sm mb-6">Showing 9 results</p>

      {/* Marketplace Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold">SentimentAnalyzer Pro</h2>
            <span className="text-xs px-2 py-1 bg-gray-800 rounded-full border border-gray-600">NLP</span>
          </div>
          <p className="text-sm text-gray-400 mb-1">AI Model • $299</p>
          <p className="text-sm text-gray-300 mb-4">
            Advanced sentiment analysis model with 95% accuracy for customer feedback analysis.
          </p>
          <p className="text-sm mb-4">★ 4.8</p>
          <div className="flex gap-2">
            <button className="border border-gray-600 px-4 py-2 rounded-md">View Details</button>
            <button className="bg-white text-black px-4 py-2 rounded-md">Add to Cart</button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold">MedicalVision API</h2>
            <span className="text-xs px-2 py-1 bg-gray-800 rounded-full border border-gray-600">Healthcare</span>
          </div>
          <p className="text-sm text-gray-400 mb-1">API • $499</p>
          <p className="text-sm text-gray-300 mb-4">
            HIPAA-compliant API for medical image analysis and anomaly detection.
          </p>
          <p className="text-sm mb-4">★ 4.9</p>
          <div className="flex gap-2">
            <button className="border border-gray-600 px-4 py-2 rounded-md">View Details</button>
            <button className="bg-white text-black px-4 py-2 rounded-md">Add to Cart</button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold">FinancialForecaster</h2>
            <span className="text-xs px-2 py-1 bg-gray-800 rounded-full border border-gray-600">Finance</span>
          </div>
          <p className="text-sm text-gray-400 mb-1">AI Model • $399</p>
          <p className="text-sm text-gray-300 mb-4">
            Predictive model for financial markets with historical data integration.
          </p>
          <p className="text-sm mb-4">★ 4.7</p>
          <div className="flex gap-2">
            <button className="border border-gray-600 px-4 py-2 rounded-md">View Details</button>
            <button className="bg-white text-black px-4 py-2 rounded-md">Add to Cart</button>
          </div>
        </div>
      </section>
    </div>
  );
}

