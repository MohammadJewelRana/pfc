import Container from "@/components/shared/Container";
import React from "react";
import Image from "next/image";

import img from "@/assets/why/1.webp";
import { Title } from "@/components/shared/Title";

export const Banner1 = () => {
  return (
    <div className="py-8">
      <Container>
        {/* Title */}

        <Title
          heading="   Why PFC?"
          subHeading="   our commitment to excellence to
                      our innovative solutions and dedicated community support."
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
