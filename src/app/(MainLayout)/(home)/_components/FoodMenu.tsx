"use client";

import Container from "@/components/shared/Container";
import { Title } from "@/components/shared/Title";

import React, { useState } from "react";
import Image from "next/image";

import rice2 from "@/assets/menu/rice/2.jpg";
import rice1 from "@/assets/menu/rice/3.jpg";
import rice3 from "@/assets/menu/rice/4.jpg";
import rice4 from "@/assets/menu/rice/5.jpg";

import ModalPopup from "@/components/Modal/ModalPopup";

const products = [
  {
    category: "rice",
    items: [
      {
        id: 1,
      
           name: "Egg Fried Rice",
        minOrder: 30,
        pricePerBox: 120,
        packageItems: ["rice ", "fish", "vegetables", "daal","rice", "fish",  ],
        image: [rice1],
      },
      {
        id: 2,
         name: "Classic Rice Bowl",
        minOrder: 25,
        pricePerBox: 110,
        packageItems: ["fried rice", "egg", "vegetables"],
        image: [rice2],
      },
      {
        id: 3,
        name: "Chicken Fried Rice",
        minOrder: 35,
        pricePerBox: 140,
        packageItems: ["fried rice", "chicken", "salad"],
        image: [rice3],
      },
      {
        id: 33,
        name: "Chicken Fried Rice",
        minOrder: 35,
        pricePerBox: 140,
        packageItems: ["fried rice", "chicken", "salad"],
        image: [rice4],
      },
    ],
  },
  {
    category: "snack box",
    items: [
      {
        id: 4,
        name: "Fish Curry Box",
        minOrder: 30,
        pricePerBox: 130,
        packageItems: ["boiled rice", "fish curry", "vegetables", "daal"],
        image: [rice1, rice1],
      },
      {
        id: 5,
        name: "Grilled Fish Meal",
        minOrder: 20,
        pricePerBox: 150,
        packageItems: ["grilled fish", "rice", "sauce", "salad"],
        image: [rice1, rice1],
      },
    ],
  },
  {
    category: "buffet",
    items: [
      {
        id: 6,
        name: "Kacchi Biryani Regular",
        minOrder: 40,
        pricePerBox: 180,
        packageItems: ["kacchi", "salad", "raita", "egg"],
        image: [rice1, rice1],
      },
      {
        id: 7,
        name: "Kacchi Biryani Premium",
        minOrder: 50,
        pricePerBox: 200,
        packageItems: ["kacchi", "beef", "salad", "egg", "raita"],
        image: [rice1, rice1],
      },
      {
        id: 8,
        name: "Mutton Kacchi Special",
        minOrder: 30,
        pricePerBox: 210,
        packageItems: ["mutton kacchi", "raita", "salad"],
        image: [rice1, rice1],
      },
    ],
  },
  {
    category: "coffee",
    items: [
      {
        id: 9,
        name: "Beef Curry Box",
        minOrder: 30,
        pricePerBox: 160,
        packageItems: ["beef curry", "rice", "vegetables"],
        image: [rice1, rice1],
      },
      {
        id: 10,
        name: "Chicken Roast Meal",
        minOrder: 25,
        pricePerBox: 140,
        packageItems: ["roast chicken", "polao", "egg", "salad"],
        image: [rice1, rice1],
      },
      {
        id: 11,
        name: "Mutton Curry Combo",
        minOrder: 20,
        pricePerBox: 180,
        packageItems: ["mutton curry", "plain rice", "daal"],
        image: [rice1, rice1],
      },
    ],
  },
  {
    category: "vegetable",
    items: [
      {
        id: 12,
        name: "Mixed Veg Meal",
        minOrder: 20,
        pricePerBox: 100,
        packageItems: ["vegetables", "rice", "daal"],
        image: [rice1, rice1],
      },
      {
        id: 13,
        name: "Vegetable Polao",
        minOrder: 25,
        pricePerBox: 110,
        packageItems: ["veg polao", "raita", "salad"],
        image: [rice1, rice1],
      },
    ],
  },
  {
    category: "combo",
    items: [
      {
        id: 14,
        name: "Chicken & Fish Combo",
        minOrder: 30,
        pricePerBox: 160,
        packageItems: ["chicken roast", "fish fry", "rice", "vegetables"],
        image: [rice1, rice1],
      },
      {
        id: 15,
        name: "Deluxe Meal Combo",
        minOrder: 50,
        pricePerBox: 200,
        packageItems: ["mutton", "egg", "polao", "raita", "salad"],
        image: [rice1, rice1],
      },
      {
        id: 16,
        name: "Vegetable Combo Box",
        minOrder: 20,
        pricePerBox: 120,
        packageItems: ["veg curry", "fried rice", "egg", "raita"],
        image: [rice1, rice1],
      },
    ],
  },
];

export const FoodMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState("rice");
  const currentItems =
    products.find((cat) => cat.category === selectedCategory)?.items || [];

  return (
    <div className="py-10">
      <Container>
        <Title
          heading="ONE-STOP Solution"
          subHeading="ONE-STOP Solution for all company needs"
        />

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-3 my-6">
          {products.map((cat) => (
            <button
              key={cat.category}
              className={`px-4 py-2 rounded-lg border text-sm font-medium capitalize transition duration-300 ${
                selectedCategory === cat.category
                  ? "bg-[#F99436] text-white"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-[#f9943627]"
              }`}
              onClick={() => setSelectedCategory(cat.category)}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1   md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
            >
              <div className="relative w-full h-48">
                <Image
                  src={item.image[0]}
                  alt={item.name}
                  fill
                  className=""
                  sizes="(max-width: 768px) 100vw,
                         (max-width: 1200px) 50vw,
                         33vw"
                />
              </div>
              <div className=" px-2 pt-2 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                <p className="text-sm text-gray-600 mb-1">
                  Minimum Order:{" "}
                  <span className="font-medium">{item.minOrder} box</span>
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  Per Box Price:{" "}
                  <span className="font-medium">TK {item.pricePerBox}</span>
                </p>
              </div>

              <ModalPopup
                data={item}
                className1="mt-auto bg-[#F99436] text-white px-4 py-2 rounded-b-2 hover:bg-[#f99436c9] transition duration-300 w-full text-center cursor-pointer"
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};
