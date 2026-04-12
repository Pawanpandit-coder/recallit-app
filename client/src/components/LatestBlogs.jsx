import React from "react";
import img1 from '../assets/journal_insighs_1.jpg'
import img2 from '../assets/journal_insighs_2.jpg'
import img3 from '../assets/journal_insighs_3.jpg'

function LatestBlogs() {
  return (
    <section className="bg-linear-to-br from-purple-50 via-white to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
          Journal Insights ✨
        </h2>

        <p className="text-center text-gray-500 mt-4 max-w-2xl mx-auto">
          Discover how journaling, recall systems, and consistent reflection can
          transform your learning and personal growth.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Card 1 */}
          <div className="bg-white/80   rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition">
            <img
              src={img1}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">
                📓 Power of Daily Journaling
              </h3>
              <p className="text-gray-500 mt-2 text-sm">
                Learn how writing your thoughts daily can improve clarity,
                focus, and emotional awareness.
              </p>
              <a
                href="#"
                className="inline-block mt-4 text-purple-500 font-semibold hover:underline"
              >
                Read More →
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white/80   rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition">
            <img
              src={img2}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">
                🔁 Science of Recall
              </h3>
              <p className="text-gray-500 mt-2 text-sm">
                Understand how spaced repetition and recall techniques boost
                your memory and long-term retention.
              </p>
              <a
                href="#"
                className="inline-block mt-4 text-blue-500 font-semibold hover:underline"
              >
                Read More →
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white/80   rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition">
            <img
              src={img3}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">
                📈 Track Your Growth Journey
              </h3>
              <p className="text-gray-500 mt-2 text-sm">
                See how tracking your thoughts and progress over time can help
                you grow smarter every day.
              </p>
              <a
                href="#"
                className="inline-block mt-4 text-green-500 font-semibold hover:underline"
              >
                Read More →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LatestBlogs;
