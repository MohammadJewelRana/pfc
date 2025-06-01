/* eslint-disable padding-line-between-statements */
"use client";
import { FaPhoneAlt, FaDownload } from "react-icons/fa";
import Link from "next/link";
import logo from "@/assets/logo/PFC1.jpg";
import Image from "next/image";

const NavbarHeader = () => {
  return (
    <header className="sticky top-0 z-50 bg-white ">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/">
            <div className="relative h-12 md:h-16 w-24 cursor-pointer">
              <Image src={logo} fill className="object-contain " alt="logo" />
            </div>
          </Link>

          {/* Phone and Catalog */}
          <div className="flex items-center space-x-4">
            {/* Phone */}
            <Link href="tel:+8801xxxxxxxxx" passHref title="Call Us">
              <p className="flex items-center font-medium text-gray-700 text-[14px] md:text-md lg:text-lg hover:text-[#F99436]">
                <FaPhoneAlt className="mr-2 text-white text-lg p-1 rounded-full bg-[#F99436]" />
                +880 1xxx-xxxxxx
              </p>
            </Link>

            {/* Catalog PDF Download */}
            <a
              href="/catalog.pdf"
              download="catalog.pdf"
              title="Download Catalog"
              className="flex items-center font-medium text-gray-700 text-[14px] md:text-md lg:text-lg hover:text-[#F99436] transition"
            >
              <span className="mr-2">Catalog</span>
              <FaDownload className="text-[#F99436] text-md" />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavbarHeader;
