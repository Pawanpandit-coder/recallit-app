import React from "react";

function Hero() {
  return (
    <section className=" py-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            Enhance Your Learning Productivity with{" "}
            <span className="bg-linear-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Recalit
            </span>
          </h1>

          <p className="mt-4 text-gray-500 text-lg">
            Track your learnings, recall your thinking, and capture every moment
            of life. Build consistency, improve memory, and 10X your growth with
            Recalit.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <a
              href="#"
              className="bg-linear-to-r from-purple-500 to-blue-500 hover:opacity-90 text-white px-6 py-3 rounded-lg font-semibold shadow-md text-center transition"
            >
              Get Started 🚀
            </a>

            <a
              href="#"
              className="border border-gray-300 hover:border-gray-500 px-6 py-3 rounded-lg font-semibold text-gray-700 text-center transition"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2"
            alt="journal productivity"
            className="rounded-2xl shadow-xl w-full max-w-md hover:scale-105 transition duration-300"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
