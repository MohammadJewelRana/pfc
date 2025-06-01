import React from "react";

export const Title = ({ heading, subHeading }: any) => {
  return (
    <div>
      <div className="mb-2 text-center">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-gray-800 relative inline-block capitalize">
          {heading}
          <span className="block h-1 w-16 bg-gradient-to-r from-orange-400 to-[#F99436] mt-1 mx-auto rounded-full animate-pulse"></span>
        </h1>
        <p className="mt-2 text-sm md:text-base text-gray-600 max-w-xl mx-auto capitalize">
          {subHeading}
        </p>
      </div>
    </div>
  );
};
