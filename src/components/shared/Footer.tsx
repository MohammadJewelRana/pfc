// // import { FaRegCopyright, FaPhoneAlt } from "react-icons/fa";
// // import { MdLocationOn } from "react-icons/md";
// import logo from "@/assets/logo/PFC1.jpg";
// // import React from "react";
// // import Image from "next/image";
// // import Container from "./Container";

// import { Divider } from "@nextui-org/divider";
// import Link from "next/link";
// import {
//   FaAddressBook,
//   FaFacebook,
//   FaInstagram,
//   FaLinkedin,
//   FaPhone,
//   FaRegCopyright,
//   FaTwitter,
//   FaYoutube,
// } from "react-icons/fa";

// // import logo from "@/assets/logo/logo.png";
// import facebookImage from "@/assets/logo/facebook.png";
// import Image from "next/image";
// import Container from "./Container";
// import ModalPopup from "../Modal/ModalPopup";

// const Footer = () => {
//   return (
//     <div>
//       <div className=" bg-black text-white px-4">
//         <Container>
//           <div className="grid grid-cols-1 md:grid-cols-3   gap-4 pt-4 pb-4">
//             {/* col-1 */}

//             <div className="w-full mx-auto flex flex-col md:flex-col items-start gap-4 pb-2">
//               {/* Logo Section */}
//               <div className="f">
//                 <div className="relative w-44 h-12 rounded-lg">
//                   <Link href="/">
//                     <Image
//                       src={logo}
//                       alt="tts_logo"
//                       fill
//                       className="object-contain"
//                       priority
//                     />
//                   </Link>
//                 </div>
//               </div>

//               {/* Social Media Icons */}
//               <div className="flex gap-6 text-xl">
//                 <Link href="https://www.facebook.com" target="_blank">
//                   <span className="group relative flex items-center">
//                     <FaFacebook className="text-white hover:text-black transition duration-300 cursor-pointer text-3xl" />
//                     <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 transition duration-300 bg-gray-800 text-white text-xs px-2 py-1 rounded-md">
//                       Facebook
//                     </span>
//                   </span>
//                 </Link>

//                 <Link href="https://www.linkedin.com" target="_blank">
//                   <span className="group relative flex items-center">
//                     <FaLinkedin className="text-white hover:text-black transition duration-300 cursor-pointer text-3xl" />
//                     <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 transition duration-300 bg-gray-800 text-white text-xs px-2 py-1 rounded-md">
//                       LinkedIn
//                     </span>
//                   </span>
//                 </Link>
//               </div>

//               {/* Copyright */}
//               <div className="flex gap-2 items-center text-white text-sm mt-2 md:mt-0">
//                 <FaRegCopyright />
//                 <span className="capitalize">
//                   {new Date().getFullYear()}, PFC.
//                 </span>
//               </div>
//             </div>

//             {/* col- 2  */}
//             <div>
//               <p className="text-2xl pb-4">Address </p>
//               <div className="flex gap-4 items-start  ">
//                 <FaAddressBook className="text-2xl text-white pt-1" />
//                 <div>
//                   <p className="text-justify font-bold text-xl">
//                     Pocket Friendly Catering (PFC)
//                   </p>
//                   <p className="text-md text-gray-300">
//                     House No-23, Road No-03 <br />
//                     Dhanmondi, Dhaka-1209
//                   </p>
//                 </div>
//               </div>
//             </div>
//             {/* col- 2  */}
//             <div>
//               <p className="text-2xl pb-4">Contact </p>
//               <div className="flex gap-4 items-start ">
//                 <FaPhone className="text-2xl text-white pt-1" />
//                 <div>
//                   <p className="text-justify font-bold text-xl">
//                     +880 1xxx-xxxxxx
//                   </p>
//                   <p className="text-md py-2"> 07:00 AM - 10:00 PM</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </Container>
//       </div>
//       <hr />
//     </div>
//   );
// };

// export default Footer;




import { FaRegCopyright, FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import logo from "@/assets/logo/whiteLogo.png";
// import logo from "@/assets/logo/PFC1.jpg";
import React from "react";
import Image from "next/image";
import Container from "./Container";

const Footer = () => {
  return (
  <div>
    <div className="bg-[#F99436] h-2"></div>
       <footer className="bg-black text-white px-4 md:px-8">
      <Container>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:justify-between items-center gap-4 py-4 text-center sm:text-left">
          {/* Left Section: Logo and Copyright */}
          <div className="flex items-center gap-4 flex-shrink-0">
            {/* Logo */}
            <div className="relative h-8 w-32">
              <Image alt="logo" src={logo} fill className="object-contain" />
            </div>

            {/* Copyright */}
            <div className="text-sm text-gray-300 flex items-center gap-1">
              <FaRegCopyright />
              <span>{new Date().getFullYear()}, PFC.</span>
            </div>
          </div>

          {/* Middle Section: Address */}
          <div className="text-sm text-gray-300 flex items-center gap-2 flex-shrink-0">
            <MdLocationOn className="text-white text-lg" />
            <span>House-23, Road-3 , Dhanmondi, Dhaka - 1209.</span>
          </div>

          {/* Right Section: Phone */}
          <div className="text-sm text-gray-300 flex items-center gap-2 flex-shrink-0">
            <FaPhoneAlt className="text-white" />
            <span>+880 1680-000200</span>
          </div>
        </div>
      </Container>
    </footer>
  </div>
  );
};

export default Footer;
