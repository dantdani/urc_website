"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuClose = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-lg h-20 backdrop-blur-lg"
            : "bg-transparent h-24"
        }`}
      >
        <nav className="max-w-screen-xl mx-auto flex items-center justify-between h-full px-4 sm:px-6">
          {/* Logo with Larger White Circle */}
          <Link href="/" onClick={handleMenuClose}>
            <div className="flex items-center h-full cursor-pointer">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center p-2">
                <Image
                  src="/images/urc_logo.png"
                  alt="URC Rover Team Logo"
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`text-lg font-serif ${
                isScrolled ? "text-[#A51C30]" : "text-white"
              } hover:text-[#D0202D]`}
            >
              Home
            </Link>
            <Link
              href="/team"
              className={`text-lg font-serif ${
                isScrolled ? "text-[#A51C30]" : "text-white"
              } hover:text-[#D0202D]`}
            >
              Team
            </Link>
            <Link
              href="/projects"
              className={`text-lg font-serif ${
                isScrolled ? "text-[#A51C30]" : "text-white"
              } hover:text-[#D0202D]`}
            >
              Projects
            </Link>
            <Link
              href="/contact/Options"
              className={`text-lg font-serif ${
                isScrolled ? "text-[#A51C30]" : "text-white"
              } hover:text-[#D0202D]`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-[#A51C30] text-2xl focus:outline-none"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300`}
        >
          <div className="p-4 flex flex-col space-y-6">
            <Link href="/" onClick={handleMenuClose}>
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center p-2">
                <Image
                  src="/images/urc_logo.png"
                  alt="URC Rover Team Logo"
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
            </Link>
            <Link
              href="/"
              onClick={handleMenuClose}
              className="text-lg font-serif text-[#A51C30] hover:text-[#D0202D]"
            >
              Home
            </Link>
            <Link
              href="/team"
              onClick={handleMenuClose}
              className="text-lg font-serif text-[#A51C30] hover:text-[#D0202D]"
            >
              Team
            </Link>
            <Link
              href="/projects"
              onClick={handleMenuClose}
              className="text-lg font-serif text-[#A51C30] hover:text-[#D0202D]"
            >
              About
            </Link>
            <Link
              href="/contact"
              onClick={handleMenuClose}
              className="text-lg font-serif text-[#A51C30] hover:text-[#D0202D]"
            >
              Contact
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
