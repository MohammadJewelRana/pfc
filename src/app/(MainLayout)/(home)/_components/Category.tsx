"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "@/components/shared/Container"; // Ensure this is correctly exported
import SwiperCategory from "./SwiperCategory";

const Category = () => {
  return (
    <div className="pb-12  pt-4">
      <Container>
        {/* title  */}
        <div className="text-center pb-4">
             <motion.h2
               // className="text-4xl md:text-5xl font-extrabold  bg-green-700 text-transparent bg-clip-text"
               className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-green-500 to-green-800 text-transparent bg-clip-text py-4"
               initial={{ opacity: 0, y: -20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, ease: "easeOut" }}
             >
                প্রোডাক্টস
             </motion.h2>
   
             <motion.p
               className="text-xl text-gray-600 mt-3 font-medium"
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
             >
               {/* Discover the Future of Electric Three-Wheelers */}
               ইলেকট্রিক থ্রি-হুইলার 
             </motion.p>
   
             <motion.div
               className="mt-3 w-20 h-1 bg-gradient-to-r from-green-400 to-green-800 mx-auto rounded-full"
               initial={{ scaleX: 0 }}
               animate={{ scaleX: 1 }}
               transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
             ></motion.div>
           </div>

        {/* category  */}
        <SwiperCategory />
      </Container>
    </div>
  );
};

export default Category;
