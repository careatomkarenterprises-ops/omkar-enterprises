import React from "react";

export default function Blog() {
  return (
    <section className="py-16 max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-omkarBlue mb-6 text-center">Latest Updates</h2>
      <p className="text-gray-700 text-center">
        Stay tuned for insights, financial tips, and news from Omkar Enterprises.
      </p>
      <div className="mt-6 p-6 border rounded-lg shadow text-center">
        <h3 className="text-xl font-semibold mb-2">📢 Website Launch</h3>
        <p className="text-gray-600">We are excited to welcome you to our official website!</p>
      </div>
    </section>
  );
}
