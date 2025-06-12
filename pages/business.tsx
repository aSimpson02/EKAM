export default function BusinessPage() {
  return (
    <div className="bg-black text-white px-6 md:px-20 py-12">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-5xl font-extrabold mb-4">AI Solutions to<br />Transform Your Business</h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Discover how Ekam's enterprise-grade solutions can drive efficiency, innovation, and growth across your organization. Our curated marketplace connects you with the right AI tools for your specific business challenges.
        </p>
      </section>

      {/* Use Cases */}
      <section className="mt-24">
        <h2 className="text-3xl font-bold text-center mb-4">AI Use Cases for Your Industry</h2>
        <p className="text-center text-gray-300 mb-12">
          Explore how businesses like yours are leveraging AI to solve complex challenges and drive growth
        </p>
        <h3 className="text-xl font-semibold mb-6">Popular Use Cases</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
            <h4 className="text-xl font-semibold mb-2">Predictive Analytics</h4>
            <p className="text-gray-300 mb-4">
              Leverage AI-powered predictive models to forecast market trends, customer behavior, and business outcomes with unprecedented accuracy.
            </p>
            <ul className="list-disc list-inside text-gray-400 text-sm">
              <li>Forecast revenue and growth with greater precision</li>
              <li>Identify emerging market opportunities before competitors</li>
              <li>Optimize inventory and resource allocation</li>
            </ul>
          </div>
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
            <h4 className="text-xl font-semibold mb-2">Process Automation</h4>
            <p className="text-gray-300 mb-4">
              Streamline operations and reduce manual workload by automating repetitive tasks and complex workflows across departments.
            </p>
            <ul className="list-disc list-inside text-gray-400 text-sm">
              <li>Reduce operational costs by up to 40%</li>
              <li>Minimize human error in critical processes</li>
              <li>Free up employee time for higher-value activities</li>
            </ul>
          </div>
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
            <h4 className="text-xl font-semibold mb-2">Customer Insights</h4>
            <p className="text-gray-300 mb-4">
              Gain deeper understanding of your customers through AI-powered analysis of behavior patterns, preferences, and feedback.
            </p>
            <ul className="list-disc list-inside text-gray-400 text-sm">
              <li>Create hyper-personalized customer experiences</li>
              <li>Identify at-risk customers before they churn</li>
              <li>Discover untapped cross-selling opportunities</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Business Value */}
      <section className="mt-24">
        <h2 className="text-3xl font-bold text-center mb-4">The Business Value of AI Solutions</h2>
        <p className="text-center text-gray-300 mb-12">
          Implementing the right AI tools can transform your operations and drive significant business outcomes
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <h4 className="text-xl font-semibold mb-2">Cost Efficiency</h4>
            <p className="text-gray-300 mb-2">
              Reduce operational expenses by automating routine tasks, optimizing resource allocation, and minimizing errors that lead to costly rework.
            </p>
            <p className="text-sm text-gray-500">Average cost reduction: 25–40%</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Smarter Decisions</h4>
            <p className="text-gray-300 mb-2">
              Make data-driven decisions with AI-powered analytics that uncover insights, identify patterns, and predict outcomes with greater accuracy than traditional methods.
            </p>
            <p className="text-sm text-gray-500">Decision accuracy improvement: 30–60%</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Easy Integration</h4>
            <p className="text-gray-300 mb-2">
              Implement AI solutions that work seamlessly with your existing systems and workflows, minimizing disruption while maximizing business impact.
            </p>
            <p className="text-sm text-gray-500">Average implementation time: 4–8 weeks</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mt-24 bg-gray-900 p-10 rounded-xl border border-gray-700 flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-xl">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business with AI?</h3>
          <p className="text-gray-300 mb-4">
            Browse our marketplace to find the perfect AI solutions for your specific business challenges. Our curated selection ensures enterprise-grade quality, security, and scalability.
          </p>
          <div className="flex gap-4 items-center flex-wrap">
            <button className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200">
              Find Solutions
            </button>
            <p className="text-sm text-gray-400">
              Not sure where to start?{' '}
              <a href="#" className="underline text-white">Schedule a consultation</a> with our AI experts.
            </p>
          </div>
        </div>
        <div className="hidden md:block mt-8 md:mt-0 md:ml-10 w-full md:w-1/2 h-40 bg-gray-800 rounded-lg"></div>
      </section>
    </div>
  );
}


