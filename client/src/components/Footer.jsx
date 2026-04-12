import React from "react";

function Footer() {
  return (
    <footer className="bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-white mt-16">

  <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

    {/* Logo + About */}
    <div>
      <h2 className="text-2xl font-semibold mb-3 text-purple-400">
        Recalit 
      </h2>
      <p className="text-gray-400 text-sm leading-relaxed">
        Recalit helps you track your learnings, recall your thoughts, and 
        capture every meaningful moment. Build consistency and grow smarter 
        every day.
      </p>
    </div>

    {/* Links */}
    <div>
      <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
      <ul className="space-y-2 text-gray-400 text-sm">
        <li>
          <a href="#" className="hover:text-white transition">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-white transition">
            Journals
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-white transition">
            Recall
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-white transition">
            About
          </a>
        </li>
      </ul>
    </div>

    {/* Contact */}
    <div>
      <h2 className="text-xl font-semibold mb-3">Contact</h2>
      <p className="text-gray-400 text-sm">📧 support@recalit.com</p>
      <p className="text-gray-400 text-sm mt-1">📱 +91 9876543210</p>

      {/* Mini CTA */}
      <p className="text-gray-500 text-xs mt-4">
        Keep writing. Keep growing. 🚀
      </p>
    </div>

  </div>

  {/* Bottom */}
  <div className="border-t border-gray-700 text-center py-4 text-gray-500 text-sm">
    © 2026 Recalit. All rights reserved.
  </div>

</footer>
  );
}

export default Footer;
