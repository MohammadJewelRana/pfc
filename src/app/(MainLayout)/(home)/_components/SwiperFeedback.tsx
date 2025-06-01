"use client";

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper/modules";

import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";

import fd1 from "@/assets/feedback/4.png";
import Container from "@/components/shared/Container";
import { Title } from "@/components/shared/Title";

export default function SwiperFeedback() {
  const feedbackData = [
    {
      id: 2,
      name: "Al-Amin Bamna",
      feedback:
        "Their electric trucks are highly profitable, affordable, and environmentally friendly for our business!",
      image: fd1,
    },
    {
      id: 3,
      name: "Md Jewel Rana",
      feedback:
        "Their cargo trucks are very reliable and have made our work much easier.",
      image: fd1,
    },
    {
      id: 4,
      name: "Fahim Islam",
      feedback:
        "You can customize their electric trucks according to your needs.",
      image: fd1,
    },
  ];

  return (
    <div className="pt-8   bg-[#ecf1f8cc]  ">
      <Container>
        <Title
          heading=" Feedback That Matters"
          subHeading="Our customers’ experience is our top priority."
        />
        <Swiper
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="mySwiper  "
          freeMode={true}
          modules={[FreeMode, Pagination]}
          pagination={{
            clickable: true,
          }}
          slidesPerView={1}
          spaceBetween={30}
        >
          {feedbackData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex flex-col items-center justify-center p-4 w-full pb-12  ">
                {/* Image Section */}
                <div className="flex justify-center relative h-20 w-28">
                  <Image
                    alt="feedback"
                    className="  object-contain"
                    fill
                    src={item.image}
                  />
                </div>

                {/* Text Section */}
                <div className="text-center mt-2  ">
                  <p className="font-bold">{item.name}</p>
                  <div className="relative">
                    {/* Quote Icon */}
                    <FaQuoteLeft className="text-[#F99436] text-3xl absolute top-0 left-0 mt-1" />

                    {/* Feedback Text */}
                    <h1 className="  pt-4 ml-9 leading-relaxed px-2">
                      {item.feedback}
                    </h1>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
}
