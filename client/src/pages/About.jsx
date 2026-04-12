export default function About() {
  return (
    <section className="max-w-5xl mx-auto px-6 ">
      {/* Heading */}
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          About Recalit 
        </h2>

        <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
          Recalit helps you capture your thoughts, recall your learnings, and
          grow consistently. Turn daily reflections into powerful long-term
          memory and personal development.
        </p>
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Description */}
        <div className="text-gray-600 leading-relaxed space-y-4">
          <p>
            Writing down your thoughts is one of the most powerful ways to
            improve clarity and understanding. Recalit allows you to journal
            your daily experiences and ideas in a simple and distraction-free
            environment.
          </p>

          <p>
            With its smart recall system, you revisit your past entries at the
            right time intervals. This helps reinforce memory, boost learning,
            and build deeper self-awareness over time.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid gap-4">
          <div className="p-5 bg-white/80   rounded-xl border border-gray-200 hover:shadow-md transition">
            <h3 className="font-semibold text-gray-800">📓 Smart Journaling</h3>
            <p className="text-sm text-gray-500 mt-1">
              Capture your daily thoughts, ideas, and experiences effortlessly.
            </p>
          </div>

          <div className="p-5 bg-white/80   rounded-xl border border-gray-200 hover:shadow-md transition">
            <h3 className="font-semibold text-gray-800">🔁 Recall System</h3>
            <p className="text-sm text-gray-500 mt-1">
              Revisit your past entries at the perfect time to strengthen
              memory.
            </p>
          </div>

          <div className="p-5 bg-white/80   rounded-xl border border-gray-200 hover:shadow-md transition">
            <h3 className="font-semibold text-gray-800">📈 Growth Tracking</h3>
            <p className="text-sm text-gray-500 mt-1">
              See how your thoughts and learning evolve over time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
