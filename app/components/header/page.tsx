import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Image src="/Frame 31 1.svg" width={159} height={36} alt="Logo" />

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="text-gray-700 hover:text-green-600">
            Home
          </a>
          <a href="#services" className="text-gray-700 hover:text-green-600">
            Our Services
          </a>
          <a href="#about" className="text-gray-700 hover:text-green-600">
            About Us
          </a>
          <a href="#contact" className="text-gray-700 hover:text-green-600">
            Contact Us
          </a>
        </nav>

        {/* Get Started Button */}
        <a
          href="#"
          className="hidden md:inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
        >
          Get Started
        </a>

        {/* Mobile Menu */}
        <button className="md:hidden text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
