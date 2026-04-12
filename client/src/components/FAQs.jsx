import React from "react";

function FAQs() {
  return (
   <section className=" py-20">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
      Frequently Asked Questions ❓
    </h2>

    <p className="text-center text-gray-500 mt-4">
      Everything you need to know about Recalit.
    </p>

    {/* FAQ List */}
    <div className="mt-12 max-w-3xl mx-auto space-y-6">

      {/* Q1 */}
      <div className="border border-gray-200 rounded-xl p-6 bg-white/80   hover:shadow-md transition">
        <h3 className="font-semibold text-lg text-purple-600">
          📓 What is Recalit and how does it help me?
        </h3>
        <p className="text-gray-500 mt-2">
          Recalit is a smart journaling and recall system that helps you track 
          your daily learnings, revisit important thoughts, and improve memory 
          retention over time.
        </p>
      </div>

      {/* Q2 */}
      <div className="border border-gray-200 rounded-xl p-6 bg-white/80   hover:shadow-md transition">
        <h3 className="font-semibold text-lg text-blue-600">
          🔁 How does the recall system work?
        </h3>
        <p className="text-gray-500 mt-2">
          Recalit reminds you of your past entries at the right time intervals 
          (like 1 day, 3 days, 7 days), helping you reinforce your memory and 
          retain knowledge effectively.
        </p>
      </div>

      {/* Q3 */}
      <div className="border border-gray-200 rounded-xl p-6 bg-white/80   hover:shadow-md transition">
        <h3 className="font-semibold text-lg text-green-600">
          📈 Can I track my personal growth?
        </h3>
        <p className="text-gray-500 mt-2">
          Yes! Recalit allows you to monitor your journaling consistency and 
          see how your thoughts, habits, and learning evolve over time.
        </p>
      </div>

      {/* Q4 */}
      <div className="border border-gray-200 rounded-xl p-6 bg-white/80   hover:shadow-md transition">
        <h3 className="font-semibold text-lg text-pink-600">
          🔒 Is my data safe?
        </h3>
        <p className="text-gray-500 mt-2">
          Your data is securely stored and only accessible to you. Privacy and 
          security are a top priority in Recalit.
        </p>
      </div>

    </div>

  </div>
</section>
  );
}

export default FAQs;
