import React from "react";

function Testimonials() {
  return (
    <div>
  <section className="bg-linear-to-br from-purple-50 via-white to-blue-50 py-20">

    <div className="max-w-7xl mx-auto px-6">

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
        What Our Users Say 💬
      </h2>

      <p className="text-center text-gray-500 mt-4 max-w-2xl mx-auto">
        Learners and thinkers are using Recalit to improve memory, stay consistent, 
        and grow every day.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">

        {/* Card 1 */}
        <div className="bg-white/80   p-6 rounded-xl shadow-sm hover:shadow-lg transition">
          <p className="text-gray-500 text-sm leading-relaxed">
            Recalit helped me stay consistent with journaling. The recall system 
            is amazing — I actually remember what I learn now!
          </p>
          <div className="mt-4">
            <h4 className="font-semibold text-gray-800">Rahul Sharma</h4>
            <span className="text-sm text-gray-400">Student</span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white/80   p-6 rounded-xl shadow-sm hover:shadow-lg transition">
          <p className="text-gray-500 text-sm leading-relaxed">
            I love how simple and clean the journaling experience is. It feels 
            like writing my thoughts in a personal diary.
          </p>
          <div className="mt-4">
            <h4 className="font-semibold text-gray-800">Ankit Verma</h4>
            <span className="text-sm text-gray-400">Developer</span>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white/80   p-6 rounded-xl shadow-sm hover:shadow-lg transition">
          <p className="text-gray-500 text-sm leading-relaxed">
            Tracking my thoughts over time helped me understand myself better. 
            Recalit is now part of my daily routine.
          </p>
          <div className="mt-4">
            <h4 className="font-semibold text-gray-800">Priya Singh</h4>
            <span className="text-sm text-gray-400">Designer</span>
          </div>
        </div>

      </div>

    </div>

  </section>
</div>
  );
}

export default Testimonials;
