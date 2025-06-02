import Container from "@/components/shared/Container";
import React from "react";
import Image from "next/image";

// import img from "@/assets/why/mobile.png";


import img from "@/assets/why/desktop.png";


// import img from "@/assets/why/1.webp";

import { Title } from "@/components/shared/Title";

export const Banner1 = () => {
  return (
    <div className="py-2 lg:py-8">
      <Container>
        {/* Title */}

        <Title
          heading="   Why Pocket Friendly Catering (PFC)?"
          subHeading="   "
        />

        {/* Responsive Image */}
        <div className=" mt-8 relative w-full  h-[150px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden ">
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
