import React from "react";

export default function Services() {
  return (
    <section className="py-16 max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-omkarBlue mb-10 text-center">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-3">Lending Solutions</h3>
          <p className="text-gray-600">Flexible and secure lending options tailored to your needs.</p>
        </div>
        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-3">Investment Plans</h3>
          <p className="text-gray-600">Grow your wealth with safe, high-return investment opportunities.</p>
        </div>
        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-3">Business Advisory</h3>
          <p className="text-gray-600">Expert guidance to help your business thrive and scale up.</p>
        </div>
      </div>
    </section>
  );
}
