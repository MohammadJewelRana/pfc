/* eslint-disable padding-line-between-statements */
"use client";
import { FaPhoneAlt, FaDownload } from "react-icons/fa";
import Link from "next/link";
import logo from "@/assets/logo/PFC1.jpg";
import Image from "next/image";

const NavbarHeader = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between h-auto py-3 gap-2 sm:gap-4">
          {/* Left section: Logo and Phone */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="relative h-10 md:h-14 w-20 cursor-pointer">
              <Image src={logo} fill className="object-contain" alt="logo" />
            </div>

            <Link href="tel:+8801680000200" passHref title="Call Us">
              <p className="flex items-center font-medium text-gray-700 text-sm sm:text-base md:text-lg hover:text-[#F99436] whitespace-nowrap">
                <FaPhoneAlt className="mr-2 text-white text-base p-1 rounded-full bg-[#F99436]" />
                +880 1680-000200
              </p>
            </Link>
          </div>

          {/* Right: Catalog Link */}
          <a
            href="/catalog.pdf"
            download="catalog.pdf"
            title="Download Catalog"
            className="flex items-center font-medium text-gray-700 text-sm sm:text-base md:text-lg hover:text-[#F99436] whitespace-nowrap"
          >
            <span className="mr-2">Catalog</span>
            <FaDownload className="text-[#F99436] text-base" />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default NavbarHeader;
