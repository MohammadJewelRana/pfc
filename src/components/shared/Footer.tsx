import { FaRegCopyright, FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import logo from "@/assets/logo/PFC1.jpg";
import React from "react";
import Image from "next/image";
import Container from "./Container";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-4 md:px-8">
      <Container>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:justify-between items-center gap-4 py-4 text-center sm:text-left">
          {/* Left Section: Logo and Copyright */}
          <div className="flex items-center gap-4 flex-shrink-0">
            {/* Logo */}
            <div className="relative h-8 w-32">
              <Image alt="logo" src={logo} fill className="object-contain" />
            </div>

            {/* Copyright */}
            <div className="text-sm text-gray-300 flex items-center gap-1">
              <FaRegCopyright />
              <span>{new Date().getFullYear()}, PFC.</span>
            </div>
          </div>

          {/* Middle Section: Address */}
          <div className="text-sm text-gray-300 flex items-center gap-2 flex-shrink-0">
            <MdLocationOn className="text-white text-lg" />
            <span>123 Main Street, Mirpur, Dhaka</span>
          </div>

          {/* Right Section: Phone */}
          <div className="text-sm text-gray-300 flex items-center gap-2 flex-shrink-0">
            <FaPhoneAlt className="text-white" />
            <span>+880 1896-062848</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
