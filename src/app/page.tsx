// app/page.tsx

import TextLogo from "@/components/chat/text-logo";
import { ArrowRightIcon } from "@/icons";

 
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6 bg-gradient-to-b from-indigo-50 to-white">
        <TextLogo/>
        <p className="text-lg text-gray-600 max-w-2xl mb-8">
          Eliminating doubts, 24/7. Your personal AI tutor available anytime, anywhere to help you learn faster and smarter.
        </p>
        <div className="flex gap-4">
          <a
            href="/ask-doubts"
            className="px-6 py-3 bg-indigo-600 text-white rounded-2xl shadow hover:bg-indigo-700 transition"
          >
            Ask Doubts
          </a>
          <a
            href="#features"
            className="px-6 py-3 bg-white text-indigo-600 border border-indigo-200 rounded-2xl shadow hover:bg-gray-100 transition"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Why Choose doubt<span className="text-indigo-600">Zero</span>?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">24/7 Availability</h3>
            <p className="text-gray-600">
              Ask your doubts anytime, day or night, and get instant explanations powered by AI.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Personalized Learning</h3>
            <p className="text-gray-600">
              Adaptive responses tailored to your subject, learning speed, and style.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Multi-Subject Support</h3>
            <p className="text-gray-600">
              From Math to Science to Programming — get help across multiple domains.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="get-started"
        className="py-20 px-6 text-center bg-indigo-600 text-white"
      >
        <h2 className="text-3xl font-bold mb-6">
          Ready to eliminate your doubts?
        </h2>
        <p className="text-lg mb-8">
          Join thousands of students already using doubtZero to learn smarter.
        </p>
        <a
          href="/ask-doubts"
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 font-semibold rounded-2xl shadow hover:bg-gray-100 transition"
        >
          Get Started Free <ArrowRightIcon className="w-5 h-5" />
        </a>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 text-center text-gray-500 text-sm border-t">
        © {new Date().getFullYear()} doubtZero. All rights reserved.
      </footer>
    </main>
  );
}
