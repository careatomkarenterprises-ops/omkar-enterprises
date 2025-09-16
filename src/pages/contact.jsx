import React from "react";

export default function Contact() {
  return (
    <section className="py-16">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-omkarBlue text-center mb-6">Contact Us</h2>

        {/* Contact Form */}
        <form
          action="https://formspree.io/f/myzdqkjq"
          method="POST"
          className="space-y-4 bg-white p-6 rounded-lg shadow-sm"
        >
          <input
            className="w-full border rounded-md px-3 py-2"
            name="name"
            type="text"
            placeholder="Name"
            required
          />
          <input
            className="w-full border rounded-md px-3 py-2"
            name="email"
            type="email"
            placeholder="Email"
            required
          />
          <input
            className="w-full border rounded-md px-3 py-2"
            name="phone"
            type="tel"
            placeholder="Phone"
          />
          <textarea
            className="w-full border rounded-md px-3 py-2"
            name="message"
            rows="4"
            placeholder="Message"
            required
          />
          <button
            type="submit"
            className="w-full bg-omkarBlue text-white py-3 rounded-2xl hover:bg-omkarGold transition"
          >
            Submit
          </button>
        </form>

        {/* Contact Info */}
        <div className="text-center mt-6 text-sm text-gray-600">
          <p>📍 BK No. 684, Sai Baba Colony, Opp. Rajaram Furniturewala, Ulhasnagar – 421003</p>
          <p>📞 +91 8554858464 | ✉️ santosh.shendkar83@gmail.com</p>
        </div>
      </div>
    </section>
  );
}
