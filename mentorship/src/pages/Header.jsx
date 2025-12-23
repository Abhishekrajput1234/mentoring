import { useState } from "react";
import { Link } from "react-router-dom";

export default function Headerpage() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-slate-900 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link to="/" className="text-2xl font-bold tracking-wide">
            MentorHub
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 font-medium">
            <Link to="/" className="hover:text-blue-400 transition">Home</Link>
            <Link to="/about" className="hover:text-blue-400 transition">About</Link>
            <Link to="/program" className="hover:text-blue-400 transition">Programs</Link>
            <Link to="/testimonials" className="hover:text-blue-400 transition">Testimonials</Link>
            <Link to="/contact" className="hover:text-blue-400 transition">Contact</Link>

            {/* Admin Button */}
            <Link
              to="/admin"
              className="border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-4 py-2 rounded-lg transition"
            >
              Admin
            </Link>

            {/* Register Button */}
            <Link
              to="/register"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
            >
              Register
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  open
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-slate-800 px-4 py-4 space-y-3 font-medium">
          <Link to="/" className="block hover:text-blue-400">Home</Link>
          <Link to="/about" className="block hover:text-blue-400">About</Link>
          <Link to="/program" className="block hover:text-blue-400">Programs</Link>
          <Link to="/testimonials" className="block hover:text-blue-400">Testimonials</Link>
          <Link to="/contact" className="block hover:text-blue-400">Contact</Link>

          {/* Admin Button */}
          <Link
            to="/admin"
            className="block text-center border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black py-2 rounded-lg transition"
            onClick={() => setOpen(false)}
          >
            Admin
          </Link>

          {/* Register Button */}
          <Link
            to="/register"
            className="block text-center bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition"
            onClick={() => setOpen(false)}
          >
            Register
          </Link>
        </div>
      )}
    </nav>
  );
}
