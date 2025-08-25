// app/page.tsx
import DoubtZeroBanner from "@/components/home/banner";
import { ArrowRightIcon } from "@/icons";
import Link from "next/link";
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      <DoubtZeroBanner/>
      {/* Hero Section */}
     

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
           <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Multi Languages Support</h3>
            <p className="text-gray-600">
              Get answers in multiple languages including Hindi, English, and more.
            </p>
          </div>
            <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Cost Effective</h3>
              <p className="text-gray-600">
                Affordable pricing plans to suit every student&apos;s budget.
              </p>  
            </div>
            <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Safe and Secure</h3>
              <p className="text-gray-600">
                Your data privacy is our top priority. We ensure secure interactions.
              </p>  
        </div>
        </div>
      </section>
        {/* Features Section */}
      <section id="features" className="py-20 px-6 w-full border-t  bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-6xl mx-auto text-center mb-12">
           <h2 className="text-3xl font-semibold text-center mb-12">
          Features at a Glance
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Customizable Answer Types</h3>
            <p className="text-gray-600">
              Choose from short answers, detailed explanations, or summaries to fit your learning needs.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Class and Subject Filters</h3>
            <p className="text-gray-600">
              Filter responses based on your class level and subject for more relevant answers.
            </p>
            </div>
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Interactive Chat Interface</h3>
            <p className="text-gray-600">
              User-friendly chat interface that makes asking questions and receiving answers easy and intuitive.
            </p> 
            </div>
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Progress Tracking</h3>
            <p className="text-gray-600">
              Keep track of your learning journey with saved chat histories and progress metrics.
            </p> 
            </div>
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Multi-Device Sync</h3>
            <p className="text-gray-600">
              Access your doubts and answers across all your devices seamlessly.
            </p> 
            </div>
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Expert-Reviewed Content</h3>
            <p className="text-gray-600">
              Answers are continuously improved and reviewed by educational experts to ensure accuracy.
            </p>
            </div>
          
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
        <Link
          href="/ask-doubts"
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 font-semibold rounded-2xl shadow hover:bg-gray-100 transition"
        >
          Get Started Free <ArrowRightIcon />
        </Link>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 text-center text-gray-500 text-sm border-t">
        © {new Date().getFullYear()} doubtZero. All rights reserved.
      </footer>
    </main>
  );
}
