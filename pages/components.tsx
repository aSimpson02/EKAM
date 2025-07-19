import { useRef } from "react";

export default function ComponentsPage() {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollAndSelectCustom = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        const select = formRef.current?.querySelector(
          "select[name='projectType']"
        ) as HTMLSelectElement;
        if (select) select.value = "Custom AI Model";
      }, 500);
    }
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <section className="text-center py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Ekam Components Hub
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto mb-8">
          Coming soon: reusable AI components to plug directly into your
          projects. For now, request a custom tool or hire expert developers
          below.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={scrollToForm}
            className="bg-gray-800 text-white font-semibold px-6 py-2 rounded hover:bg-gray-700"
          >
            Hire AI Experts
          </button>
          <button
            onClick={scrollAndSelectCustom}
            className="bg-white text-black font-semibold px-6 py-2 rounded hover:bg-gray-200"
          >
            Request Custom Tool
          </button>
        </div>
      </section>

      {/* Coming Soon Cards */}
      <section className="px-6 md:px-20 py-16">
        <h2 className="text-3xl font-bold text-center mb-6">
          Reusable AI Components (Coming Soon)
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {["Chat Assistant", "Vision Classifier", "Data Cleaner"].map((title) => (
            <div
              key={title}
              className="bg-gray-900 border border-gray-700 h-40 rounded-lg flex items-center justify-center text-gray-500 italic"
            >
              {title} – Coming Soon
            </div>
          ))}
        </div>
      </section>

      {/* Form Section */}
      <section ref={formRef} className="px-6 md:px-20 py-20 bg-[#0e0e0e]">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Hire Request Form
        </h2>
        <div className="bg-[#111827] rounded-xl p-6 md:p-10 grid md:grid-cols-2 gap-8">
          {/* Left Side */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Request a Custom AI Solution
            </h3>
            <p className="text-gray-400 mb-4">
              Need a specialized AI tool for your business? Our team can build
              custom solutions tailored to your needs.
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Detailed requirements analysis</li>
              <li>Custom model development</li>
              <li>Integration with your systems</li>
              <li>Ongoing support and maintenance</li>
              <li>Training and documentation</li>
            </ul>
            <blockquote className="text-gray-500 italic mt-4 border-l-4 border-gray-700 pl-4">
              "The custom AI solution developed by Ekam transformed our customer
              service operations, reducing response times by 65%."
            </blockquote>
          </div>

          {/* Right Side – Form */}
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your name"
              className="w-full p-3 rounded bg-gray-800 text-white"
            />
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full p-3 rounded bg-gray-800 text-white"
            />
            <select
              name="projectType"
              className="w-full p-3 rounded bg-gray-800 text-white"
            >
              <option value="Custom AI Model">Custom AI Model</option>
              <option value="AI Integration">AI Integration</option>
              <option value="AI Maintenance">AI Maintenance</option>
            </select>
            <textarea
              placeholder="Describe your project requirements..."
              rows={4}
              className="w-full p-3 rounded bg-gray-800 text-white"
            />
            <select className="w-full p-3 rounded bg-gray-800 text-white">
              <option value="5k-10k">$5,000 - $10,000</option>
              <option value="10k-25k">$10,000 - $25,000</option>
              <option value="25k+">$25,000+</option>
            </select>
            <button
              type="submit"
              className="bg-white text-black font-semibold px-6 py-3 rounded hover:bg-gray-200 w-full"
            >
              Submit Request
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

