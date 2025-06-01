import { FaRegCopyright } from "react-icons/fa";

import logo from "@/assets/logo/PFC1.jpg";

import React from "react";
import Image from "next/image";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

// import 
import Container from "./Container";

const Footer = () => {
  return (
    // <footer className="bg-[#1f744d] text-white pt-2">
    <footer className="bg-black text-white pt-2  px-4 md:px-8">
      <Container>
        {/* Top Section */}
        <div className="max-w-7xl mx-auto px-4">
          {/* Small device layout */}
          <div className="flex flex-col gap-2 md:hidden">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <div className="relative h-8 w-32">
                <Image
                  alt="logo"
                  src={logo}
                  fill
                  className="object-contain p-2 "
                />
              </div>
            </div>

            {/* Contact Info - phone left, email right */}
            <div className="flex justify-between text-sm text-gray-300">
              <p className="flex items-center gap-1">
                <FaPhoneAlt className="text-white" />
                +880 1896062848
              </p>
              <p className="flex items-center gap-1">
                <FaEnvelope className="text-white" />
                hello@docticket.com
              </p>
            </div>
          </div>

          {/* Medium and larger devices layout */}
          <div className="hidden md:flex flex-row justify-between items-center gap-4">
            {/* Left Side */}
            <div className="flex items-center gap-6">
              {/* Logo */}
              <div className="relative h-8 w-40">
                <Image
                  alt="logo"
                  src={logo}
                  fill
                  className="object-contain  "
                />
              </div>

              {/* Divider */}
              <div className="w-px h-5 bg-white/30 mt-3" />
            </div>

            {/* Right Side - Contact Info */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 text-sm text-gray-300 pt-3">
              <p className="flex items-center gap-1">
                <FaPhoneAlt className="text-white" />
                +880 1896-062848
              </p>

              {/* Divider only visible on md+ */}
              <div className="hidden md:block w-px h-5 bg-white/30" />

              <p className="flex items-center gap-1">
                <FaEnvelope className="text-white" />
                hello@docticket.com
              </p>
            </div>
          </div>
        </div>

        {/* Horizontal Divider */}
        <hr className="border-t border-white/20 mt-2" />

        {/* Bottom Section */}
        <div className="text-center text-gray-300 text-sm py-2 flex items-center justify-center gap-1">
          <FaRegCopyright />
          <span>{new Date().getFullYear()}, PFC.</span>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
