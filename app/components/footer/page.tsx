import Link from "next/link";
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" py-8 text-white">
      <div className="container mx-auto px-4">
        {/* Menggunakan Flex untuk membagi area */}
        <div className="flex justify-between items-center">
          {/* Copyright Kiri */}
          <div className="text-[#9795B5] text-sm">
            © 2024 Chet GPT Team | All Rights Reserved
          </div>

          {/* Navigasi Tengah */}
          <div className="flex space-x-12">
            <Link
              href="/"
              className="text-[#9795B5] hover:text-green-400 transition"
            >
              Home
            </Link>
            <a
              href="/about"
              className="text-[#9795B5] hover:text-green-400 transition"
            >
              About
            </a>
            <a
              href="/pricing"
              className="text-[#9795B5] hover:text-green-400 transition"
            >
              Pricing
            </a>
            <a
              href="/contact"
              className="text-[#9795B5] hover:text-green-400 transition"
            >
              Contact
            </a>
          </div>

          {/* Ikon Sosial Media Kanan */}
          <div className="flex space-x-8">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9795B5] hover:text-green-400 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9795B5] hover:text-green-400 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9795B5] hover:text-green-400 transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
