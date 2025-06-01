/* eslint-disable padding-line-between-statements */
"use client";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import logo from "@/assets/logo/PFC1.jpg";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NavbarHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Get current route


  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/">
            <div className="relative h-12 w-32">
              <Image src={logo} fill className="object-contain" alt="logo" />
            </div>
          </Link>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button
              className="text-3xl text-gray-700"
              onClick={() => setIsMenuOpen(true)}
            >
              <FaBars />
            </button>
          </div>

          {/* Desktop Links */}
    

          {/* Order Button */}
          <div className="hidden md:block">
            <Link href="/contact" passHref>
              <button className="flex items-center px-4 py-2 text-white bg-orange-400    rounded-md transition duration-300 ease-in-out hover:bg-green-400 hover:scale-105">
                Contact With Us
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-[#00264D] bg-opacity-70 backdrop-blur-md z-50 flex flex-col items-center justify-center space-y-8">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaTimes />
            </button>

            {/* Mobile Nav Items */}
          

            <Link href="/contact" passHref>
              <button
                className="mt-4 px-6 py-3 text-lg text-white bg-green-600 rounded-md transition duration-300 ease-in-out hover:bg-green-500 hover:scale-105"
                onClick={() => setIsMenuOpen(false)}
              >
                যোগাযোগ করুন
              </button>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavbarHeader;
