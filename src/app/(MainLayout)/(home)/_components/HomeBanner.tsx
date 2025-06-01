import Container from "@/components/shared/Container";
import Image from "next/image";
import React from "react";
import bannerImg from "@/assets/banner.webp";
import bannerImg1 from "@/assets/banner/banner1.webp";

// f99436

const HomeBanner = () => {
  return (
    <div className="pt-6 px-4 sm:px-6 md:px-8">
      <Container>
        {/* Top Section */}
        <div className="flex flex-col-reverse lg:flex-row items-center  gap-5 md:gap-10">
          {/* Text Section */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
            <div className="text-xl  md:text-5xl lg:text-5xl font-extrabold leading-tight tracking-wide text-gray-900 dark:text-white drop-shadow-lg mb-6">
              <h1 className="pb-2">
                THE MOST COMPLETE IN INDONESIA SOLUTION PROVIDER
              </h1>
            </div>

            <div className="flex justify-center lg:justify-start  ">
              <button className="bg-[#F99436] text-white text-lg sm:text-xl font-semibold px-8 sm:px-12 py-3 sm:py-4 rounded-full shadow-lg hover:bg-[#F99436] transition-all duration-300 ease-in-out transform hover:scale-105">
                Free Food Test
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl">
              <Image
                src={bannerImg}
                alt="Doctor"
                className="w-full h-auto object-contain rounded-lg"
                priority
              />
            </div>
          </div>
        </div>

        {/* Bottom Full-Width Banner */}
        <div className="w-full mt-8">
          <Image
            src={bannerImg1}
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
