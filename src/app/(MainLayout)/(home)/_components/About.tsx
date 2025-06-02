"use client";
import Container from "@/components/shared/Container";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

import img2 from "@/assets/about/1.png";
// import img2 from "@/assets/banner/banner2.webp";
// import img2 from "@/assets/banner.webp";

import { Title } from "@/components/shared/Title";

const About = () => {
  return (
    <div className="py-8 px-2 ">
      <Container>
        {/* Why Choose Us Section */}
        <div className="">
          <Title
            heading=" About Pocket Friendly Catering (PFC)"
            subHeading="   "
          />

          <div className="text-[#00264D] flex flex-wrap items-stretch gap-12 pt-6">
            {/* Image */}
            <motion.div
              className="w-full md:w-2/5 min-h-64 relative rounded-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={img2}
                fill
                className="object-cover rounded-lg"
                alt="logo"
              />
            </motion.div>

            {/* Text */}
            <motion.div
              className="w-full md:w-3/5 flex-1"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-justify text-lg">
                PFC is the most complete one-stop all-in-one F&B solution
                provider in Bangladesh. <br /> <br /> We focus on corporate services for
                companies, offices, and governments. With 6+ kitchens around
                Dhaka and more than 25 menu choices, we serve thousands of
                orders every day in Dhaka city. We provide the most complete
                products and services in Bangladesh, starting from healthy rice
                boxes for morog polao, tehari, kacchi biriyani, khichuri and
                Indonesian cuisine. <br /><br />We also offer branded frozen food, healthy
                food, buffets, food stalls, BBQ, vegan & vegetarian catering,
                in-home fine dining, Food Facility Management and many more. <br /><br />
                It's time to enjoy the most complete culinary
                experience under one roof!
              </p>
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
