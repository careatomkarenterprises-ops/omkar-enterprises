import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Blog from "./pages/blog";      // lowercase matches file
import Contact from "./pages/contact"; // lowercase matches file

export default function App() {
  return (
    <Router>
      <Navbar />
      <main className="min-h-[60vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<blog />} />
          <Route path="/contact" element={<contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
