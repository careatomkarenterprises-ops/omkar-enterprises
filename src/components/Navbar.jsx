import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-omkarBlue text-white px-6 py-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          Omkar Enterprises
        </Link>

        {/* Links */}
        <div className="space-x-6">
          <Link to="/" className="hover:text-omkarGold">Home</Link>
          <Link to="/about" className="hover:text-omkarGold">About</Link>
          <Link to="/services" className="hover:text-omkarGold">Services</Link>
          <Link to="/blog" className="hover:text-omkarGold">Blog</Link>
          <Link to="/contact" className="hover:text-omkarGold">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
