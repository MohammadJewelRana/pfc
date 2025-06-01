import Container from "@/components/shared/Container";
import React from "react";
import Image from "next/image";

import img from "@/assets/why/1.webp";

export const Banner1 = () => {
  return (
    <div className="py-8">
      <Container>
        {/* Title */}
        <div className="mb-10 text-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-800 relative inline-block">
            Why PFC?
            <span className="block h-1 w-16 bg-gradient-to-r from-orange-400 to-orange-600 mt-2 mx-auto rounded-full animate-pulse"></span>
          </h1>
          <p className="mt-4 text-sm md:text-base text-gray-600 max-w-xl mx-auto">
            Discover why PFC stands out – from our commitment to excellence to
            our innovative solutions and dedicated community support.
          </p>
        </div>

        {/* Responsive Image */}
        <div className="relative w-full  h-[150px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
          <Image
            src={img}
            alt="Why PFC"
            fill
            className="object-contain"
            priority
          />
        </div>
      </Container>
    </div>
  );
};
