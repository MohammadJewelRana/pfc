 
// import { Spinner } from "@nextui-org/react";
// import React from "react";

// const Loading = () => {
//   return (
//     <div className="bg-black/10  h-screen fixed inset-0 z-[999] backdrop-blur-md flex justify-center items-center">
//       {/* <Spinner size="lg" /> */}

//       <Spinner color="warning" label="Loading"   />
//     </div>
//   );
// };

// export default Loading;


import { Spinner } from "@nextui-org/react";
import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/30 backdrop-blur-md">
      <div className="flex flex-col items-center gap-3 p-6 bg-white/20 rounded-2xl shadow-xl backdrop-blur-md">
        <Spinner size="lg" color="warning" className="animate-pulse" />
        <p className="text-lg font-semibold text-white">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
