export default function ComponentsPage() {
  return (
    <div className="bg-black text-white px-6 md:px-20 py-12">
      {/* Header */}
      <h1 className="text-5xl font-extrabold mb-4 text-center">Component Showcase</h1>
      <p className="text-center text-gray-400 mb-12">Hire AI experts or explore reusable components here.</p>

      {/* Hire Request Section */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold mb-6">Hire Request Section</h2>

        <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
          <div className="flex justify-center gap-4 mb-6">
            <button className="bg-gray-800 text-white px-4 py-2 rounded-md">Hire AI Experts</button>
            <button className="bg-white text-black px-4 py-2 rounded-md">Request Custom Tool</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left: Request Info */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">Request a Custom AI Solution</h3>
              <p className="text-gray-300 mb-4">
                Need a specialized AI tool for your business? Our team of experts can build custom solutions tailored to your specific requirements.
              </p>
              <ul className="text-gray-400 list-disc list-inside mb-6 space-y-2">
                <li>Detailed requirements analysis</li>
                <li>Custom model development</li>
                <li>Integration with your existing systems</li>
                <li>Ongoing support and maintenance</li>
                <li>Training and documentation</li>
              </ul>
              <blockquote className="text-sm italic text-gray-500 mt-4 border-l-4 border-gray-600 pl-4">
                “The custom AI solution developed by Ekam has transformed our customer service operations, reducing response times by 65%.”
              </blockquote>
            </div>

            {/* Right: Form */}
            <form className="bg-gray-800 p-6 rounded-lg space-y-4">
              <h4 className="text-lg font-semibold">Tell us about your project</h4>
              <input
                type="text"
                placeholder="Your name"
                className="w-full p-2 rounded-md bg-gray-900 border border-gray-700 text-white"
              />
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full p-2 rounded-md bg-gray-900 border border-gray-700 text-white"
              />
              <select className="w-full p-2 rounded-md bg-gray-900 border border-gray-700 text-white">
                <option>Custom AI Model</option>
                <option>API Integration</option>
                <option>Tool or Plugin</option>
              </select>
              <textarea
                rows={4}
                placeholder="Describe your project requirements..."
                className="w-full p-2 rounded-md bg-gray-900 border border-gray-700 text-white"
              />
              <select className="w-full p-2 rounded-md bg-gray-900 border border-gray-700 text-white">
                <option>$5,000 - $10,000</option>
                <option>$10,000 - $25,000</option>
                <option>$25,000+</option>
              </select>
              <button className="bg-white text-black px-4 py-2 rounded-md w-full mt-2">Submit Request</button>
            </form>
          </div>
        </div>
      </section>

      {/* Industry Packs Section */}
      <section>
        <h2 className="text-3xl font-bold mb-4">Industry Packs</h2>
        <p className="text-gray-400 mb-10">Pre-configured bundles of AI tools and models designed for specific industries and use cases</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Healthcare Pack */}
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <h3 className="text-2xl font-semibold mb-2">Healthcare AI Pack</h3>
            <p className="text-gray-400 mb-6">Comprehensive AI solutions for healthcare providers and medical research.</p>

            <div className="mb-4">
              <h4 className="font-semibold mb-2">Included Tools:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm text-gray-300">
                <li className="bg-gray-800 p-2 rounded">Medical Vision AI</li>
                <li className="bg-gray-800 p-2 rounded">Patient Insights</li>
                <li className="bg-gray-800 p-2 rounded">Medical NLP</li>
              </ul>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold mb-2">Key Features:</h4>
              <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
                <li>Medical imaging analysis</li>
                <li>Patient data insights</li>
                <li>Clinical text processing</li>
                <li>Research acceleration tools</li>
                <li>Regulatory compliance support</li>
              </ul>
            </div>

            <div className="flex justify-between items-center mt-4">
              <span className="text-xl font-bold">$4999<span className="text-base font-normal"> /year</span></span>
              <button className="bg-white text-black px-4 py-2 rounded-md">View Details →</button>
            </div>
          </div>

          {/* Finance Pack */}
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <h3 className="text-2xl font-semibold mb-2">Finance AI Pack</h3>
            <p className="text-gray-400 mb-6">AI-powered tools for financial institutions and investment firms.</p>

            <div className="mb-4">
              <h4 className="font-semibold mb-2">Included Tools:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm text-gray-300">
                <li className="bg-gray-800 p-2 rounded">Fraud Detector</li>
                <li className="bg-gray-800 p-2 rounded">Market Predictor</li>
                <li className="bg-gray-800 p-2 rounded">Risk Analyzer</li>
              </ul>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold mb-2">Key Features:</h4>
              <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
                <li>Fraud detection systems</li>
                <li>Market prediction models</li>
                <li>Risk analysis frameworks</li>
                <li>Automated reporting</li>
                <li>Regulatory compliance</li>
              </ul>
            </div>

            <div className="flex justify-between items-center mt-4">
              <span className="text-xl font-bold">$5999<span className="text-base font-normal"> /year</span></span>
              <button className="bg-white text-black px-4 py-2 rounded-md">View Details →</button>
            </div>
          </div>
        </div>

        {/* Custom Pack CTA */}
        <p className="text-center text-gray-400 mt-12">
          Need a custom industry solution? Contact our team for a tailored AI pack.
        </p>
      </section>
    </div>
  );
}

