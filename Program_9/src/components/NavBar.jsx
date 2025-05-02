import { useState } from "react";
import { NavLink } from "react-router-dom";
export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
      <div className="px-6 py-4 text-xl border-b-2 border-black font-bold fixed w-full bg-white z-50">
          <header className="flex justify-between items-center">
              <h2 className="font-extrabold text-3xl">Routes</h2>

              {/* Desktop Nav */}
              <ul className="gap-10 font-bold text-center hidden md:flex">
                  <li>
                      <NavLink to="/" className={({ isActive }) => isActive ? "text-amber-500" : "text-black"}>Home</NavLink>
                  </li>
                  <li>
                      <NavLink to="/contact" className={({ isActive }) => isActive ? "text-amber-500" : "text-black"}>Contact</NavLink>
                  </li>
                  <li>
                      <NavLink to="/about" className={({ isActive }) => isActive ? "text-amber-500" : "text-black"}>About</NavLink>
                  </li>
              </ul>

              {/* Desktop Button */}
              <button className="hidden md:block bg-amber-500 text-white px-4 py-2 rounded-full">
                  Get Started
              </button>

              {/* Mobile Menu Toggle */}
              <button className="md:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
                  ☰
              </button>
          </header>

          {/* Mobile Nav */}
          {menuOpen && (
              <ul className="flex flex-col gap-4 mt-4 md:hidden">
                  <li>
                      <NavLink to="/" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "text-amber-500" : "text-black"}>Home</NavLink>
                  </li>
                  <li>
                      <NavLink to="/contact" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "text-amber-500" : "text-black"}>Contact</NavLink>
                  </li>
                  <li>
                      <NavLink to="/about" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "text-amber-500" : "text-black"}>About</NavLink>
                  </li>
                  <li>
                      <button className="bg-amber-500 text-white px-4 py-2 rounded-full">
                          Get Started
                      </button>
                  </li>
              </ul>
          )}
      </div>
  );
}
