'use client';

import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="bg-[#0b1120] text-white min-h-screen">
      {/* Hero Section */}
      <section className="px-6 md:px-20 py-24 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
          Discover the Future<br /> of AI Solutions
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
          Ekam brings cutting-edge AI tools and solutions to transform your business. Explore our marketplace of curated AI solutions designed for developers and businesses alike.
        </p>
        <div className="flex justify-center gap-4">
          <a href="/marketplace" className="bg-white text-black font-semibold px-6 py-3 rounded hover:bg-gray-200">Browse AI Tools</a>
          <a href="/signup" className="border border-white text-white font-semibold px-6 py-3 rounded hover:bg-gray-800">Get Started Free</a>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#0d1528] px-6 md:px-20 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose Ekam</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            ['High-Performance AI', 'Access state-of-the-art AI models and tools optimized for performance and efficiency.'],
            ['Enterprise Security', 'All solutions meet rigorous security standards to protect your data and applications.'],
            ['Analytics & Insights', 'Gain valuable insights from your data with advanced analytics and visualization tools.'],
            ['Developer-Friendly', 'Comprehensive documentation, SDKs, and APIs designed for seamless integration.'],
            ['Community Support', 'Join a thriving community of developers and businesses sharing knowledge and best practices.'],
            ['Global Reach', 'Deploy AI solutions globally with our distributed infrastructure and localization support.'],
          ].map(([title, desc]) => (
            <div key={title} className="bg-[#111827] border border-[#1f2937] p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-400 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Solutions */}
      <section className="px-6 md:px-20 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Marketplace Tools</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              tag: 'Natural Language Processing',
              title: 'Text Synthesis Pro',
              desc: 'Advanced natural language processing for content generation and analysis.',
              link: '/marketplace/text-synthesis-pro'
            },
            {
              tag: 'Healthcare',
              title: 'MedVision AI',
              desc: 'Medical imaging analysis and diagnostics powered by computer vision.',
              link: '/marketplace/medvision-ai'
            },
            {
              tag: 'Development Tools',
              title: 'CodeAssist AI',
              desc: 'Intelligent code completion and refactoring for developers.',
              link: '/marketplace/codeassist-ai'
            }
          ].map(({ tag, title, desc, link }) => (
            <div key={title} className="bg-[#111827] border border-[#1f2937] rounded-xl p-6">
              <div className="text-sm text-white bg-gray-700 px-2 py-1 inline-block mb-2 rounded-full">{tag}</div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-400 text-sm mb-4">{desc}</p>
              <a href={link} className="text-white underline hover:text-gray-300">Learn more →</a>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a href="/marketplace" className="bg-white text-black font-semibold px-6 py-3 rounded hover:bg-gray-200">View All Marketplace Tools</a>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#0d1528] px-6 md:px-20 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: 'Sarah Johnson',
              role: 'Marketing Director, TechGrowth Inc.',
              quote: 'Ekam’s AI tools have revolutionized our content creation process, reducing time-to-market by 60%.'
            },
            {
              name: 'Michael Chen',
              role: 'Lead Developer, InnovateSoft',
              quote: 'As a developer, I appreciate the well-documented APIs and the robust community support around Ekam’s solutions.'
            },
            {
              name: 'Dr. Emily Rodriguez',
              role: 'Chief Medical Officer, HealthFirst Network',
              quote: 'The healthcare AI solutions from Ekam have significantly improved our diagnostic accuracy and patient outcomes.'
            },
          ].map(({ name, role, quote }) => (
            <div key={name} className="bg-[#111827] border border-[#1f2937] p-6 rounded-xl">
              <p className="italic text-gray-300 mb-4">"{quote}"</p>
              <div className="text-sm text-gray-400">
                <strong className="text-white block">{name}</strong>
                {role}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-20 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business with AI?</h2>
        <p className="text-gray-400 mb-8">
          Join thousands of businesses and developers who are leveraging Ekam’s AI solutions to innovate and grow.
        </p>
        <div className="flex justify-center gap-4">
          <a href="/marketplace" className="bg-white text-black font-semibold px-6 py-3 rounded hover:bg-gray-200">Explore Marketplace</a>
          <a href="/signup" className="border border-white text-white font-semibold px-6 py-3 rounded hover:bg-gray-800">Sign Up Free</a>
        </div>
      </section>
    </div>
  );
}
