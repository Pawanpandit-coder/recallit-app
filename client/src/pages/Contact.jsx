import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Message sent successfully!");
  };

  return (
    <section className="max-w-5xl mx-auto px-6">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Contact Recalit 
        </h2>

        <p className="text-gray-500 mt-3 max-w-xl mx-auto">
          Have questions about journaling or recall features? We'd love to hear
          from you. Share your thoughts and let's grow together.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="p-5 bg-white/80   rounded-xl border border-gray-200 shadow-sm">
            <h3 className="font-semibold text-gray-800">📧 Email</h3>
            <p className="text-gray-500 text-sm mt-1">support@recalit.com</p>
          </div>

          <div className="p-5 bg-white/80   rounded-xl border border-gray-200 shadow-sm">
            <h3 className="font-semibold text-gray-800">💡 Feedback</h3>
            <p className="text-gray-500 text-sm mt-1">
              Share your ideas to improve your journaling and recall experience.
            </p>
          </div>

          <div className="p-5 bg-white/80   rounded-xl border border-gray-200 shadow-sm">
            <h3 className="font-semibold text-gray-800">🛠 Support</h3>
            <p className="text-gray-500 text-sm mt-1">
              Facing issues? We're here to help you stay consistent and
              productive.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/80   p-6 rounded-xl border border-gray-200 shadow-sm space-y-5"
        >
          <div>
            <label className="text-sm text-gray-700 font-medium">Name</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="text-sm text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="text-sm text-gray-700 font-medium">Message</label>
            <textarea
              name="message"
              rows="4"
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none"
              placeholder="Write your thoughts..."
            ></textarea>
          </div>

          <button className="w-full bg-linear-to-r from-purple-500 to-blue-500 text-white py-2 rounded-lg font-medium hover:opacity-90 transition">
            Send Message 🚀
          </button>
        </form>
      </div>
    </section>
  );
}
