"use client";
// @flow strict
import { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 z-[9999] w-[90%] max-w-6xl mt-2 rounded-xl bg-[#0d1224]/20 backdrop-blur-md shadow-md border border-white/20">
      
      <div className="flex items-center justify-between px-8 py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className="text-[#ffffff] text-3xl font-bold"
          >
            DIGANT PATEL
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex md:space-x-4">
          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/#about"
            >
              <div className="text-sm text-[#ffffff] transition-colors duration-300 hover:text-pink-600 font-bold">
                ABOUT
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/#experience"
            >
              <div className="text-sm text-[#ffffff] transition-colors duration-300 hover:text-pink-600 font-bold">
                EXPERIENCE
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/#skills"
            >
              <div className="text-sm text-[#ffffff] transition-colors duration-300 hover:text-pink-600 font-bold">
                SKILLS
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/#education"
            >
              <div className="text-sm text-[#ffffff] transition-colors duration-300 hover:text-pink-600 font-bold">
                EDUCATION
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/#projects"
            >
              <div className="text-sm text-[#ffffff] transition-colors duration-300 hover:text-pink-600 font-bold">
                PROJECTS
              </div>
            </Link>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-md text-[#ffffff] hover:text-pink-600 transition-colors duration-300"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="px-8 pb-6 space-y-2">
          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/#about"
              onClick={closeMenu}
            >
              <div className="text-sm text-[#ffffff] transition-colors duration-300 hover:text-pink-600 font-bold">
                ABOUT
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/#experience"
              onClick={closeMenu}
            >
              <div className="text-sm text-[#ffffff] transition-colors duration-300 hover:text-pink-600 font-bold">
                EXPERIENCE
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/#skills"
              onClick={closeMenu}
            >
              <div className="text-sm text-[#ffffff] transition-colors duration-300 hover:text-pink-600 font-bold">
                SKILLS
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/#education"
              onClick={closeMenu}
            >
              <div className="text-sm text-[#ffffff] transition-colors duration-300 hover:text-pink-600 font-bold">
                EDUCATION
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/#projects"
              onClick={closeMenu}
            >
              <div className="text-sm text-[#ffffff] transition-colors duration-300 hover:text-pink-600 font-bold">
                PROJECTS
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    </div>
  );
}

export default Navbar;