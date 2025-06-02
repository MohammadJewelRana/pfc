import Container from "@/components/shared/Container";
import { Title } from "@/components/shared/Title";
import Image from "next/image";
import React from "react";

// Company logos (you can replace these with actual logo imports or URLs)
import logo1 from "@/assets/logo/PFC.jpg";
import logo2 from "@/assets/logo/PFC.jpg";
import logo3 from "@/assets/logo/PFC.jpg";
import logo4 from "@/assets/logo/PFC.jpg";
import logo5 from "@/assets/logo/PFC.jpg";

const companyLogos = [
  { name: "Google", logo: logo1 },
  { name: "Microsoft", logo: logo2 },
  { name: "Unilever", logo: logo3 },
  { name: "Amazon", logo: logo4 },
  { name: "Nestlé", logo: logo5 },
];

export const Company = () => {
  return (
    <div className="py-10 bg-gray-50 dark:bg-gray-900">
      <Container>
        <Title
          heading="Companies We've Proudly Served"
          subHeading="  delivering hygienic and delicious food solutions"
        />

        <div className="grid grid-cols-2   md:grid-cols-4 lg:grid-cols-5 gap-6 mt-10 justify-items-center items-center border">
          {companyLogos.map((company, index) => (
            <div key={index} className="w-24 h-24 sm:w-28 sm:h-28 relative border">
              <Image
                src={company.logo}
                alt={company.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};
