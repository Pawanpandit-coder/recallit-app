import React from "react";

function CTA() {
  return (
    <div>
      <section className=" py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
            Our Productivity Enhancer Features
          </h2>

          <p className="text-center text-gray-500 mt-4 max-w-2xl mx-auto">
            Track your learnings, recall your thinking, and capture every moment
            of life. Build consistency, improve memory, and 10X your growth with
            Recalit.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Feature 1 */}
            <div className="p-6 border border-gray-200 rounded-xl bg-white/80   hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3 text-purple-600">
                📓 Smart Journaling
              </h3>
              <p className="text-gray-500">
                Write your daily thoughts, ideas, and experiences in a clean and
                distraction-free journaling environment.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 border border-gray-200 rounded-xl bg-white/80   hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">
                🔁 Recall System
              </h3>
              <p className="text-gray-500">
                Revisit your past learnings at the perfect time to strengthen
                memory and retain knowledge effectively.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 border border-gray-200 rounded-xl bg-white/80   hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3 text-green-600">
                📈 Track Your Growth
              </h3>
              <p className="text-gray-500">
                Monitor your progress, build consistency, and see how your
                thoughts and skills evolve over time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CTA;
