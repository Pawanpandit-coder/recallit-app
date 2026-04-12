import React from "react";

function Subscriptions() {
  return (
    <section class="bg-gray-100 py-20">
      <div class="max-w-7xl mx-auto px-6">
        <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-900">
          Our Pricing
        </h2>

        <p class="text-center text-gray-500 mt-4">
          Choose a plan that fits your needs.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div class="bg-white rounded-xl shadow p-8 text-center">
            <h3 class="text-xl font-semibold">Basic</h3>
            <p class="text-4xl font-bold mt-4">$0</p>
            <p class="text-gray-500 mt-2">Free forever</p>
            <ul class="text-gray-500 mt-6 space-y-2">
              <li>1 Project</li>
              <li>Community Support</li>
              <li>Basic Features</li>
            </ul>
            <button class="mt-6 bg-gray-900 text-white px-6 py-3 rounded-lg">
              Get Started
            </button>
          </div>

          <div class="bg-white rounded-xl shadow p-8 text-center border-2 border-blue-500">
            <h3 class="text-xl font-semibold">Pro</h3>
            <p class="text-4xl font-bold mt-4">$19</p>
            <p class="text-gray-500 mt-2">Per month</p>
            <ul class="text-gray-500 mt-6 space-y-2">
              <li>10 Projects</li>
              <li>Priority Support</li>
              <li>Advanced Features</li>
            </ul>
            <button class="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
              Choose Plan
            </button>
          </div>

          <div class="bg-white rounded-xl shadow p-8 text-center">
            <h3 class="text-xl font-semibold">Enterprise</h3>
            <p class="text-4xl font-bold mt-4">$49</p>
            <p class="text-gray-500 mt-2">Per month</p>
            <ul class="text-gray-500 mt-6 space-y-2">
              <li>Unlimited Projects</li>
              <li>24/7 Support</li>
              <li>All Features</li>
            </ul>
            <button class="mt-6 bg-gray-900 text-white px-6 py-3 rounded-lg">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Subscriptions;
