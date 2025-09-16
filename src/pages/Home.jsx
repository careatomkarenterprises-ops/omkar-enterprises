import React from "react";

export default function Home() {
  return (
    <section className="py-16 text-center">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-omkarBlue mb-4">
          Welcome to Omkar Enterprises
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Your trusted partner for financial services, lending, and investment opportunities.
        </p>
        <a
          href="/contact"
          className="bg-omkarBlue text-white px-6 py-3 rounded-lg hover:bg-omkarGold transition"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}
