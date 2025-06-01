"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import img2 from "@/assets/about/2.avif"; // Ensure correct image path

const Faq = () => {
  return (
    <div className="   ">
      <div className="  px-6 pt-4">
        {/* Section Title */}
    <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h1 className="text-3xl font-bold pt-4 pb-2 text-green-700">
                কেন আপনি আমাদের বেছে নেবেন?
                </h1>
                <div className="h-1 w-24  bg-green-700"></div>
              </motion.div>
        {/* Content Section */}
        <div className=" py-6">
          {/* Text Section */}
          <motion.div
            className="w-full space-y-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-justify text-lg text-[#00264D]">
              স্বাধীন নিউ এনার্জি থ্রি-হুইল বৈদ্যুতিক গাড়ির সুবিধা হলো
              শক্তিশালী সক্ষমতা, চালচলন, সহজ রক্ষণাবেক্ষণ, সহজ মেরামত এবং
              সাশ্রয়ী মূল্য। এই গাড়িটি সরু রাস্তায় নমনীয়ভাবে চালানো যায়।
            </p>
            <p className="text-justify text-lg text-[#00264D]">
              স্বাধীন নিউ এনার্জি থ্রি-হুইল বৈদ্যুতিক গাড়িতে একটি রিভার্স বোতাম
              রয়েছে, যা রিভার্সের জন্য নিয়ন্ত্রণ করা সহজ। এই ফাংশনটি সরু গলিতে
              খুবই কার্যকর, যা পার্কিং এবং ড্রাইভিংকে সহজ করে তোলে।
            </p>
            <p className="text-justify text-lg text-[#00264D]">
              গাড়িটি শহর ও গ্রামীণ এলাকা, ব্যক্তিগত ভাড়া, বাগান, কারখানা এবং
              খনির এলাকা, পরিবেশগত পরিষ্কার এবং কমিউনিটি স্বল্প-দূরত্বের পরিবহনে
              ব্যাপকভাবে ব্যবহৃত হয়।
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
