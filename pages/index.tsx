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
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden px-6 md:px-20 bg-[#0b1120]">
        <div className="absolute inset-0 z-0 blur-3xl opacity-50" style={{ background: "radial-gradient(ellipse at center, #007cf0, #00dfd8)" }} />
        <div className="z-10 text-center max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Custom AI Solutions<br /> for Bold Businesses
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-10">
            Ekam delivers tailored AI tools to help businesses scale smarter, faster, and more creatively.
          </p>
          <div className="flex justify-center gap-4">
            <a href="/marketplace" className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200">Browse AI Tools</a>
            <a href="/signup" className="border border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-gray-800">Get Started</a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#0d1528] px-6 md:px-20 py-32">
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
      <section className="px-6 md:px-20 py-32">
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
        <div className="text-center mt-16">
          <a href="/marketplace" className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200">View All Marketplace Tools</a>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-20 py-32 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business with AI?</h2>
        <p className="text-gray-400 mb-8">
          Join thousands of businesses and developers who are leveraging Ekam’s AI solutions to innovate and grow.
        </p>
        <div className="flex justify-center gap-4">
          <a href="/signup" className="border border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-gray-800">Sign Up Free</a>
        </div>
      </section>
    </div>
  );
}
