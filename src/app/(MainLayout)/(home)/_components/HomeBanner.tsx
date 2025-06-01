import Container from "@/components/shared/Container";
import Image from "next/image";
import React from "react";
import bannerImg from "@/assets/banner.webp";
import bannerImg1 from "@/assets/banner/banner1.webp";

const HomeBanner = () => {
  return (
    <div className="  flex items-center pt-4 px-6 md:px-8">
      <Container>
        {/* Responsive Flexbox Layout */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">
          {/* Left Side - Text */}

          <div className="w-full lg:w-1/2 h-full flex flex-col justify-center lg:text-left">
            <div className="text-4xl md:text-5xl lg:text-5xl font-extrabold mb-8 leading-10 tracking-wide text-gradient   drop-shadow-lg">
              <h1 className="pb-3">THE MOST COMPLETE </h1>
              <h1 className="pb-3">IN INDONESIA </h1>
              <h1 className="">SOLUTION PROVIDER</h1>
            </div>

            <div className="flex justify-start items-center mt-4">
              <button className="bg-orange-500 text-white  text-xl font-semibold px-12 py-4 rounded-full shadow-lg hover:bg-orange-600 transition-all duration-300 ease-in-out transform hover:scale-105 ">
                Free Food Test
              </button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="w-full relative h-[300px] md:h-[400px] lg:h-[350px]">
              <Image
                src={bannerImg}
                alt="Doctor"
                fill
                className="object-contain rounded-lg"
                priority
              />
            </div>
          </div>
        </div>

        <div className="w-full relative">
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
