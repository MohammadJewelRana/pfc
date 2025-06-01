import Container from "@/components/shared/Container";
import React from "react";
import Image from "next/image";

import img from "@/assets/why/1.webp";

export const Banner1 = () => {
  return (
    <div className="py-8">
      <Container>
        {/* Title */}
        <div className="mb-6 text-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
            Why PFC?
          </h1>
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
