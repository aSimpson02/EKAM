export default function DevelopersPage() {
  return (
    <div className="px-6 md:px-20 py-12 bg-white text-gray-900">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-5xl font-extrabold mb-4">Join Ekam</h1>
        <h2 className="text-4xl font-bold mb-6">Monetize Your Models, APIs, and Tools</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Connect with businesses and researchers worldwide looking for AI solutions. Turn your expertise into a sustainable revenue stream on the premier marketplace for AI developers.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-black text-white px-6 py-3 rounded-md font-semibold hover:opacity-90">
            Start Listing Now
          </button>
          <button className="border border-gray-300 px-6 py-3 rounded-md font-semibold hover:bg-gray-100">
            Learn More
          </button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mt-24">
        <h3 className="text-3xl font-bold text-center mb-4">Benefits for AI Developers</h3>
        <p className="text-center text-gray-600 mb-12">
          Join thousands of AI developers who are growing their business and impact through Ekam
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Global Reach */}
          <div className="border rounded-lg p-6 shadow-sm">
            <h4 className="text-xl font-semibold mb-2">Global Reach</h4>
            <p className="text-gray-600 mb-4">
              Gain instant access to a global network of businesses, researchers, and organizations actively seeking AI solutions.
            </p>
            <ul className="list-disc list-inside text-gray-600 text-sm">
              <li>Access to enterprise clients</li>
              <li>Industry-specific exposure</li>
              <li>Featured placement opportunities</li>
            </ul>
          </div>

          {/* Revenue Streams */}
          <div className="border rounded-lg p-6 shadow-sm">
            <h4 className="text-xl font-semibold mb-2">Revenue Streams</h4>
            <p className="text-gray-600 mb-4">
              Choose from flexible pricing models that work for your business.
            </p>
            <ul className="list-disc list-inside text-gray-600 text-sm">
              <li>Competitive commission rates</li>
              <li>Subscription & usage-based options</li>
              <li>Fast, reliable payments</li>
            </ul>
          </div>

          {/* Developer Tools */}
          <div className="border rounded-lg p-6 shadow-sm">
            <h4 className="text-xl font-semibold mb-2">Developer Tools</h4>
            <p className="text-gray-600 mb-4">
              Access comprehensive tools and resources designed specifically for AI developers.
            </p>
            <ul className="list-disc list-inside text-gray-600 text-sm">
              <li>Developer dashboard</li>
              <li>API management tools</li>
              <li>Usage analytics & reporting</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="mt-24">
        <h3 className="text-3xl font-bold text-center mb-10">Simple Steps to Get Started</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="border rounded-lg p-6 shadow-sm">
            <div className="text-4xl font-bold mb-2">1</div>
            <h4 className="text-xl font-semibold mb-2">Sign Up</h4>
            <p className="text-gray-600 text-sm">
              Register as an AI developer. Complete your profile to increase visibility to clients.
            </p>
          </div>
          <div className="border rounded-lg p-6 shadow-sm">
            <div className="text-4xl font-bold mb-2">2</div>
            <h4 className="text-xl font-semibold mb-2">List Products</h4>
            <p className="text-gray-600 text-sm">
              Upload your AI models, APIs, or tools. Set pricing, usage terms, and create listings.
            </p>
          </div>
          <div className="border rounded-lg p-6 shadow-sm">
            <div className="text-4xl font-bold mb-2">3</div>
            <h4 className="text-xl font-semibold mb-2">Earn & Grow</h4>
            <p className="text-gray-600 text-sm">
              Start earning as customers subscribe. Use analytics to improve your offerings.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mt-24 text-center">
        <h3 className="text-3xl font-bold mb-4">Ready to Monetize Your AI Solutions?</h3>
        <p className="text-gray-600 mb-6">
          Join thousands of AI developers who are already generating revenue and building their reputation on Ekam.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-black text-white px-6 py-3 rounded-md font-semibold hover:opacity-90">
            Start Listing Now
          </button>
          <button className="border border-gray-300 px-6 py-3 rounded-md font-semibold hover:bg-gray-100">
            Schedule a Demo
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-4">No upfront costs. Only pay when you make a sale. <a href="#" className="underline">View pricing</a></p>
      </section>
    </div>
  );
}
