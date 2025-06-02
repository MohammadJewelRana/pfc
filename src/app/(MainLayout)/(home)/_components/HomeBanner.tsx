





// "use client";

// import Container from "@/components/shared/Container";
// import Image from "next/image";
// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import banner1 from "@/assets/banner/banner1.webp";
// import banner2 from "@/assets/banner/banner2.webp";
// import banner3 from "@/assets/banner.webp";

// const banners = [banner3, banner2,banner3, banner2];

// const HomeBanner = () => {
//   const [current, setCurrent] = useState(0);
//   const [direction, setDirection] = useState(1); // 1 = right to left

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setDirection(1);
//       setCurrent((prev) => (prev + 1) % banners.length);
//     }, 4000); // Slide every 4 seconds

//     return () => clearInterval(interval);
//   }, []);

//   const variants = {
//     enter: (direction: number) => ({
//       x: direction > 0 ? 300 : -300,
//       opacity: 0,
//     }),
//     center: { x: 0, opacity: 1 },
//     exit: (direction: number) => ({
//       x: direction > 0 ? -300 : 300,
//       opacity: 0,
//     }),
//   };

//   return (
//     <div className="pt-6 px-4 sm:px-6 md:px-8 bg-white dark:bg-gray-900">
//       <Container>
//         <div className="flex flex-col-reverse lg:flex-row items-center gap-6 md:gap-10">
//           {/* LEFT: Text */}
//           <div className="w-full lg:w-1/2 text-center lg:text-left">
//             <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-snug mb-4">
//               Complete F&B Solution for
//               <span className="text-[#F99436] block">
//                 Employee & Corporate Catering
//               </span>
//             </h1>

//             <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6">
//               We specialize in delivering safe, hygienic, and delicious food services
//               to businesses and employees across Bangladesh — tailored to your
//               company’s needs.
//             </p>

//             <div className="flex justify-center lg:justify-start">
//               <button className="bg-[#F99436] hover:bg-[#e57e1d] text-white text-base sm:text-lg font-medium px-8 sm:px-10 py-3 sm:py-4 rounded-full transition duration-300 shadow-lg hover:scale-105">
//                 Free Food Test
//               </button>
//             </div>
//           </div>

//           {/* RIGHT: Image Slider */}
//           <div className="w-full lg:w-1/2 flex flex-col items-center">
//             <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl h-72 sm:h-96 overflow-hidden rounded-lg  ">
//               <AnimatePresence custom={direction} mode="wait">
//                 <motion.div
//                   key={current}
//                   custom={direction}
//                   variants={variants}
//                   initial="enter"
//                   animate="center"
//                   exit="exit"
//                   transition={{ duration: 0.8 }}
//                   className="absolute inset-0"
//                 >
//                   <Image
//                     src={banners[current]}
//                     alt={`Banner ${current + 1}`}
//                     fill
//                     className="object-cover rounded-lg"
//                     priority
//                   />
//                 </motion.div>
//               </AnimatePresence>
//             </div>

//             {/* DOT INDICATORS */}
//             <div className="flex justify-center mt-4 gap-2">
//               {banners.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => {
//                     setDirection(index > current ? 1 : -1);
//                     setCurrent(index);
//                   }}
//                   className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                     current === index ? "bg-[#F99436]" : "bg-gray-300"
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Bottom Static Banner */}
//         <div className="w-full mt-8">
//           <Image
//             src={banner1}
//             alt="Bottom Banner"
//             className="w-full h-auto object-contain rounded-lg"
//             priority
//           />
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default HomeBanner;




























"use client"


import Container from "@/components/shared/Container";
import Image from "next/image";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import banner1 from "@/assets/banner/banner1.webp";
import banner2 from "@/assets/banner/banner2.webp";
import banner3 from '@/assets/banner.webp'

const banners = [banner3, banner2];

const HomeBanner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-6 px-4 sm:px-6 md:px-8 bg-white dark:bg-gray-900">
      <Container>
        <div className="flex flex-col-reverse lg:flex-row items-center gap-6 md:gap-10">
          {/* LEFT: Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-snug mb-4">
              Complete F&B Solution for
              <span className="text-[#F99436] block">Employee & Corporate Catering</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6">
              We specialize in delivering safe, hygienic, and delicious food services to businesses and employees across Bangladesh — tailored to your company’s needs.
            </p>

            <div className="flex justify-center lg:justify-start">
              <button className="bg-[#F99436] hover:bg-[#e57e1d] text-white text-base sm:text-lg font-medium px-8 sm:px-10 py-3 sm:py-4 rounded-full transition duration-300 shadow-lg hover:scale-105">
                 Free Food Test
              </button>
            </div>
          </div>

          {/* RIGHT: Auto Slider */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl h-72 sm:h-96 overflow-hidden rounded-lg shadow-md">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={banners[current]}
                    alt={`Banner ${current + 1}`}
                    fill
                    className="object-cover rounded-lg"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
        <div className="w-full mt-8">
           <Image
             src={banner1}
             alt="Doctor"
             className="w-full h-auto object-contain rounded-lg"
             priority
           />
         </div> 
      </Container>
    </div>
  );
};

export default HomeBanner;















// import Container from "@/components/shared/Container";
// import Image from "next/image";
// import React from "react";
// // import bannerImg from "@/assets/banner.webp";
// import bannerImg from "@/assets/banner/banner2.webp";
// import bannerImg1 from "@/assets/banner/banner1.webp";

// // import bannerImg1 from "@/assets/banner/banner1.webp";

// // f99436

// const HomeBanner = () => {
//   return (
//     <div className="pt-6 px-4 sm:px-6 md:px-8">
//       <Container>
//         {/* Top Section */}
//         <div className="flex flex-col-reverse lg:flex-row items-center  gap-5 md:gap-10">
//           {/* Text Section */}
//           <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
//             <div className="text-xl max-w-[500px]  md:text-5xl lg:text-4xl font-extrabold leading-tight tracking-wide text-gray-900 dark:text-white drop-shadow-lg mb-6">
//               <h1 className="pb-2 uppercase">
//                 {/* THE MOST COMPLETE  food and beverage SOLUTION PROVIDER */}
//                 The most complete F&B solution provider for employee & company
//                 catering in Bangladesh.
//               </h1>
//             </div>

//             <div className="flex justify-center lg:justify-start  ">
//               <button className="bg-[#F99436] text-white text-lg sm:text-xl font-semibold px-8 sm:px-12 py-3 sm:py-4 rounded-full shadow-lg hover:bg-[#F99436] transition-all duration-300 ease-in-out transform hover:scale-105">
//                 Free Food Test
//               </button>
//             </div>
//           </div>

//           {/* Image Section */}
//           <div className="w-full lg:w-1/2 flex justify-center">
//             <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl">
//               <Image
//                 src={bannerImg}
//                 alt="Doctor"
//                 className="w-full h-auto object-cover rounded-lg"
//                 priority
//               />
//             </div>
//           </div>
//         </div>

//         {/* Bottom Full-Width Banner */}
//         {/* <div className="w-full mt-8">
//           <Image
//             src={bannerImg1}
//             alt="Doctor"
//             className="w-full h-auto object-contain rounded-lg"
//             priority
//           />
//         </div> */}
//       </Container>
//     </div>
//   );
// };

// export default HomeBanner;
