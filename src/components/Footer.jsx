
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 text-sm py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p>© {new Date().getFullYear()} Omkar Enterprises. All rights reserved.</p>
        <div className="flex space-x-4 mt-3 md:mt-0">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-white">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white">Instagram</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
