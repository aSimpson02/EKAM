// pages/business.tsx
export default function Businesses() {
  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-20 py-20">
      <h1 className="text-5xl font-bold mb-6">Solutions for Businesses</h1>
      <p className="text-gray-400 max-w-2xl mb-12">
        Discover how Ekam's AI solutions can help your business automate workflows, improve customer experience, and unlock insights.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">AI Consulting</h2>
          <p className="text-gray-400">Get tailored AI strategies and implementation from our expert consultants.</p>
        </div>
        <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">Custom AI Models</h2>
          <p className="text-gray-400">Develop domain-specific AI models for finance, healthcare, and e-commerce.</p>
        </div>
        <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">Enterprise APIs</h2>
          <p className="text-gray-400">Integrate scalable AI APIs into your existing tech stack with ease.</p>
        </div>
        <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">Analytics Dashboard</h2>
          <p className="text-gray-400">Track performance, usage, and ROI with powerful visualizations.</p>
        </div>
      </div>
    </div>
  );
}


