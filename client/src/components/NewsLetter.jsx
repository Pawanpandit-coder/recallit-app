import React from "react";

function NewsLetter() {
  return (
    <section className="bg-linear-to-r from-purple-500 to-blue-500 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold">
          Stay Consistent with Recalit
        </h2>

        <p className="mt-4 text-purple-100 max-w-xl mx-auto">
          Get reminders, journaling tips, and recall insights to boost your
          memory and productivity straight to your inbox.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-5 py-3 rounded-lg text-gray-900 w-full outline-none shadow-sm"
          />

          <button className="bg-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-black transition">
            Subscribe 
          </button>
        </div>
      </div>
    </section>
  );
}

export default NewsLetter;
