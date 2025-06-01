"use client";

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import { FaRegCircle } from "react-icons/fa";

export default function ModalPopup({ data, className1 }: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleOpen = () => onOpen();

  const { name, image = [], packageItems = [], minOrder, pricePerBox } = data || {};

  return (
    <>
      <div className="flex flex-wrap gap-3">
        <p className={className1} onClick={handleOpen}>
          View Details
        </p>
      </div>

      <Modal backdrop="blur" isOpen={isOpen} size="2xl" onClose={onClose}>
        <ModalContent className="bg-white text-black rounded-xl shadow-xl">
          {(onClose) => (
            <>
              {/* Header */}
              <ModalHeader className="bg-[#F99436] text-white py-4 px-6 rounded-t-xl text-xl font-bold">
                {name}
              </ModalHeader>

              {/* Body */}
              <ModalBody className="p-6">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  {/* Left: Text */}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-4 text-gray-800">
                      Package Includes:
                    </h3>
                    <ul className="space-y-3 mb-6">
                      {packageItems.map((item: string, idx: number) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-base text-gray-700"
                        >
                          <FaRegCircle className="text-yellow-600" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="space-y-2 text-gray-800">
                      <p>
                        <span className="font-semibold">Minimum Order:</span>{" "}
                        {minOrder || ''} Boxes
                      </p>
                      <p>
                        <span className="font-semibold">Price:</span>{" "}
                        {pricePerBox || ''} Tk per box
                      </p>
                    </div>
                  </div>

                  {/* Right: Image */}
                  <div className="relative w-[320px] h-[200px] rounded-lg overflow-hidden shadow-md">
                    {image[0] && (
                      <Image
                        src={image[0]}
                        alt={name}
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>
                </div>

                {/* Bottom Info Text */}
                <div className=" text-center font-medium bg-[#F99436] text-white py-3 px-4 rounded-md text-base shadow-sm">
                  For Confirm your Order Call us:{" "}
                  <span className="font-bold">0123456789</span>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
