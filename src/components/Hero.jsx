// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { CakeIcon, GiftIcon, StarIcon } from "@heroicons/react/24/solid";
// import Confetti from "react-confetti";

// const Balloon = ({ color, delay }) => {
//   return (
//     <motion.div
//       className={`absolute bottom-0 w-12 h-16 rounded-full ${color}`}
//       initial={{ y: "100vh", x: `${Math.random() * 100}vw` }}
//       animate={{
//         y: "-100vh",
//         transition: {
//           duration: 10 + Math.random() * 5,
//           repeat: Infinity,
//           delay: delay,
//         },
//       }}
//     >
//       {/* Balloon string */}
//       <div className="absolute bottom-0 left-1/2 w-0.5 h-8 bg-white transform -translate-x-1/2"></div>
//     </motion.div>
//   );
// };

// const GiftBox = ({ isOpen }) => {
//   return (
//     <motion.div
//       className="absolute inset-0 flex items-center justify-center"
//       initial={{ scale: 0 }}
//       animate={{ scale: isOpen ? 1 : 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       {/* <div className="w-32 h-32 bg-yellow-300 rounded-lg shadow-lg flex items-center justify-center">
//         {isOpen ? (
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5 }}
//             className="text-2xl font-bold text-white"
//           >
//             Surprise!
//           </motion.p>
//         ) : (
//           <GiftIcon className="w-16 h-16 text-white" />
//         )}
//       </div> */}
//     </motion.div>
//   );
// };

// const Hero = () => {
//   const [isGiftOpen, setIsGiftOpen] = useState(false);

//   const handleOpenGift = () => {
//     setIsGiftOpen(true);
//   };

//   return (
//     <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900">
//       {/* Animated Stars */}
//       {[...Array(20)].map((_, i) => (
//         <motion.div
//           key={i}
//           className="absolute text-yellow-300"
//           initial={{
//             x: `${Math.random() * 100}%`,
//             y: `${Math.random() * 100}%`,
//             scale: Math.random() * 0.5 + 0.5,
//           }}
//           animate={{
//             opacity: [0, 1, 0],
//             transition: {
//               duration: Math.random() * 2 + 1,
//               repeat: Infinity,
//               repeatType: "loop",
//             },
//           }}
//         >
//           <StarIcon className="w-3 h-3" />
//         </motion.div>
//       ))}

//       {/* Floating Balloons */}
//       {[1, 2, 3, 4, 5].map((i) => (
//         <Balloon
//           key={i}
//           color={
//             [
//               "bg-red-500",
//               "bg-blue-500",
//               "bg-green-500",
//               "bg-yellow-500",
//               "bg-pink-500",
//             ][i % 5]
//           }
//           delay={i * 2}
//         />
//       ))}

//       {/* Gift Box */}
//       <GiftBox isOpen={isGiftOpen} />

//       {/* Confetti */}
//       {isGiftOpen && (
//         <Confetti
//           width={window.innerWidth}
//           height={window.innerHeight}
//           recycle={false}
//           numberOfPieces={200}
//         />
//       )}

//       {/* Main Content */}
//       <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
//         <div className="flex items-center justify-center mb-4">
//           <CakeIcon className="w-12 h-12 text-yellow-300 mr-4" />
//           <motion.h1
//             initial={{ y: -50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8 }}
//             className="text-5xl md:text-7xl font-bold text-white"
//           >
//             Happy Birthday!
//           </motion.h1>
//           <CakeIcon className="w-12 h-12 text-yellow-300 ml-4" />
//         </div>

//         <motion.p
//           initial={{ y: 50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="text-xl md:text-2xl text-white mb-8"
//         >
//           Wishing you a day filled with joy and laughter
//         </motion.p>

//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           animate={{ scale: [1, 1.02, 1] }}
//           transition={{ duration: 2, repeat: Infinity }}
//           className="btn btn-primary btn-lg"
//           onClick={handleOpenGift}
//         >
//           <GiftIcon className="w-6 h-6 mr-2" />
//           Click
//         </motion.button>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React from "react";

const Hero = () => {
  return <div>Hero</div>;
};

export default Hero;
