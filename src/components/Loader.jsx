// // components/Loader.jsx
// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Loader({ onFinish }) {
//   const [progress, setProgress] = useState(0);
//   const [show, setShow] = useState(true);
//   const [isScaling, setIsScaling] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setProgress((prev) => {
//         if (prev >= 100) {
//           clearInterval(interval);
//           setTimeout(() => {
//             setIsScaling(true);
//             setTimeout(onFinish, 1200); // trigger landing page reveal after scale animation
//           }, 300);
//           return 100;
//         }
//         return prev + 1;
//       });
//     }, 15); // fast count-up
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <AnimatePresence>
//       {show && (
//         <motion.div
//           className="fixed inset-0 z-50 flex items-center justify-center bg-black"
//           initial={{ opacity: 1 }}
//           animate={{}}
//           onAnimationComplete={() => {}}
//         >
//           {/* Sliding background cards */}
//           {[...Array(3)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute w-[90%] h-[90%] bg-neutral-900 rounded-xl"
//               style={{ top: `${5 * i}%`, left: `${5 * i}%` }}
//               initial={{ x: "100%" }}
//               animate={{ x: 0 }}
//               transition={{ delay: i * 0.2, duration: 0.8, ease: "easeOut" }}
//             />
//           ))}

//           {/* White content card */}
//           <motion.div
//             className="z-10 min-h-[80%] w-[80%] pt-2 sm:pt-1 md:pt-0.5 bg-[#F1F1F1]"
//             initial={{ scale: 0.95 }}
//             animate={isScaling ? { 
//               width: "100vw", 
//               height: "100vh",
//               borderRadius: 0 
//             } : { scale: 1 }}
//             transition={{ duration: isScaling ? 1.5 : 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
//             onAnimationComplete={() => {
//               if (isScaling) {
//                 setTimeout(() => {
//                   setShow(false);
//                 }, 800);
//               }
//             }}
//           >
//             <div className="relative text">
//               {/* <div className="bg-[#F1F1F1] font-bold text-2xl text-black">Scasys</div> */}
//               <img className="" src="public\assets\images\loader1.png" alt="" />
//               <div className="absolute w-full bottom-0 flex p-5 pr-20 justify-between text-black pt-4 text-5xl">
//                 <span>Loading:</span>
//                 <span className="font-bold">{progress}%</span>
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }

// components/Loader.jsx
// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Loader({ onFinish }) {
//   const [progress, setProgress] = useState(0);
//   const [show, setShow] = useState(true);
//   const [isScaling, setIsScaling] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setProgress((prev) => {
//         if (prev >= 100) {
//           clearInterval(interval);
//           setTimeout(() => {
//             setIsScaling(true);
//             setTimeout(onFinish, 1200); // trigger landing page reveal after scale animation
//           }, 300);
//           return 100;
//         }
//         return prev + 1;
//       });
//     }, 15); // fast count-up
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <AnimatePresence>
//       {show && (
//         <motion.div
//           className="fixed inset-0 z-50 flex items-center justify-center bg-black"
//           initial={{ opacity: 1 }}
//           animate={{}}
//           onAnimationComplete={() => {}}
//         >
//           {/* Sliding background cards */}
//           {[...Array(3)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute w-[90%] h-[90%] bg-neutral-900 rounded-xl"
//               style={{ top: `${5 * i}%`, left: `${5 * i}%` }}
//               initial={{ x: "100%" }}
//               animate={{ x: 0 }}
//               transition={{ delay: i * 0.2, duration: 0.8, ease: "easeOut" }}
//             />
//           ))}

//           {/* White content card */}
//           <motion.div
//             className="z-10 min-h-[80%] w-[80%] pt-2 sm:pt-1 md:pt-0.5 bg-[#F1F1F1] flex flex-col justify-center items-center relative"
//             initial={{ scale: 0.95 }}
//             animate={isScaling ? { 
//               width: "100vw", 
//               height: "100vh",
//               borderRadius: 0 
//             } : { scale: 1 }}
//             transition={{ duration: isScaling ? 1.5 : 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
//             onAnimationComplete={() => {
//               if (isScaling) {
//                 setTimeout(() => {
//                   setShow(false);
//                 }, 800);
//               }
//             }}
//           >
//             {/* Main text content */}
//             <div className="textstructure px-4 sm:px-6 md:px-8 lg:px-[2.5vw]">
//               {["We Create", "We Innovate", "We Revolutionize"].map((item, idx) => (
//                 <div key={idx} className="masker">
//                   <div className="w-fit flex items-center overflow-hidden">
//                     <h1
//                       className={`bg-gradient-to-r from-blue-900 to-blue-400 bg-clip-text uppercase text-[#212121] text-[8vw] sm:text-3xl md:text-5xl lg:text-4xl xl:text-[5vw] leading-tight sm:leading-tight md:leading-tight lg:leading-[5.2vw] font-bold ${
//                         idx !== 0 && "-mt-1 sm:-mt-2 md:-mt-3 lg:-mt-4"
//                       }`}
//                     >
//                       {item}
//                     </h1>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Loading progress */}
//             <div className="absolute w-full bottom-5 sm:bottom-8 md:bottom-12 flex px-5 sm:px-8 md:px-12 pr-10 sm:pr-16 md:pr-20 justify-between text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
//               <span>Loading:</span>
//               <span className="font-bold">{progress}%</span>
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }

// components/Loader.jsx
// // components/Loader.jsx
// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Loader({ onFinish }) {
//   const [progress, setProgress] = useState(0);
//   const [show, setShow] = useState(true);
//   const [isScaling, setIsScaling] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setProgress((prev) => {
//         if (prev >= 100) {
//           clearInterval(interval);
//           setTimeout(() => {
//             setIsScaling(true);
//             setTimeout(onFinish, 1000); // slightly reduced
//           }, 200); // slightly reduced
//           return 100;
//         }
//         return prev + 2; // faster count-up
//       });
//     }, 14); // slightly faster speed
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <AnimatePresence>
//       {show && (
//         <motion.div
//           className="fixed inset-0 z-50 flex items-center justify-center bg-black"
//           initial={{ opacity: 1 }}
//         >
//           {/* Sliding background cards */}
//           {[...Array(3)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute w-[90%] h-[90%] bg-neutral-900 rounded-xl"
//               style={{ top: `${5 * i}%`, left: `${5 * i}%` }}
//               initial={{ x: "100%" }}
//               animate={{ x: 0 }}
//               transition={{ delay: i * 0.2, duration: 0.8, ease: "easeOut" }}
//             />
//           ))}

//           {/* White content card */}
//           <motion.div
//             className="z-10 min-h-[80%] w-[80%] pt-2 sm:pt-1 md:pt-0.5 bg-[#F1F1F1] flex flex-col justify-start items-start relative"
//             initial={{ width: "80%", height: "80%", borderRadius: "1rem" }}
//             animate={
//               isScaling
//                 ? {
//                     width: "100vw",
//                     height: "100vh",
//                     borderRadius: "0rem",
//                   }
//                 : { scale: 1 }
//             }
//             transition={{ duration: isScaling ? 1.2 : 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
//             onAnimationComplete={() => {
//               if (isScaling) {
//                 setTimeout(() => {
//                   setShow(false);
//                 }, 700);
//               }
//             }}
//           >
//             {/* Main text content */}
//             <div className="textstructure mt-[15vh] px-4 sm:px-6 md:px-8 lg:px-[2.5vw]">
//               {["We Create", "We Innovate", "We Revolutionize"].map((item, idx) => (
//                 <div key={idx} className="masker">
//                   <div className="w-fit flex items-center overflow-hidden">
//                     <h1
//                       className={`bg-gradient-to-r from-blue-900 to-blue-400 bg-clip-text uppercase text-[#212121] text-[12vw] sm:text-4xl md:text-6xl lg:text-5xl xl:text-[7vw] leading-tight sm:leading-tight md:leading-tight lg:leading-[7.2vw] font-bold ${
//                         idx !== 0 && "-mt-1 sm:-mt-2 md:-mt-3 lg:-mt-4"
//                       }`}
//                     >
//                       {item}
//                     </h1>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Loading progress */}
//             <div className="text absolute w-full bottom-5 sm:bottom-8 md:bottom-12 flex px-5 sm:px-8 md:px-12 pr-10 sm:pr-16 md:pr-20 justify-between text-black text-2xl sm:text-3xl md:text-4xl lg:text-8xl">
//               <span className="text-sm">Loading:</span>
//               <span className="font-bold">{progress}%</span>
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Loader({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [isScaling, setIsScaling] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsScaling(true); // start scaling
            setTimeout(() => {
              setIsDone(true); // hide black bg only after scale finishes
              onFinish();      // show main content
            }, 1300);
          }, 200);
          return 100;
        }
        return prev + 2;
      });
    }, 14);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50">
      {/* Black background, fade out softly */}
      <motion.div
        className="absolute inset-0 bg-black"
        initial={{ opacity: 1 }}
        animate={{ opacity: isDone ? 0 : 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />

      {/* Sliding background cards */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[90%] h-[90%] bg-neutral-900 rounded-xl"
          style={{ top: `${5 * i}%`, left: `${5 * i}%` }}
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{ delay: i * 0.2, duration: 0.8, ease: "easeOut" }}
        />
      ))}

      {/* Expanding content card */}
      <motion.div
        className="relative z-10 pt-2 sm:pt-1 md:pt-0.5 bg-[#F1F1F1] flex flex-col justify-start items-start"
        style={{
          position: "absolute",
          left: 0,
          top: 0,
        }}
        initial={{ width: "80%", height: "80%", borderRadius: "1rem", top: "10%", left: "10%" }}
        animate={
          isScaling
            ? {
                width: "100vw",
                height: "100vh",
                borderRadius: 0,
                top: 0,
                left: 0,
              }
            : {}
        }
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Hero Text */}
        <div className="textstructure mt-[30vh] sm:mt-[30vh] md:mt-[30vh] lg:mt-[10vw] px-4 sm:px-6 md:px-8 lg:px-[2.5vw]">
                {["We Create", "We Innovate", "We Revolutionize"].map((item, idx) => {
                  return (
                    <div key={idx} className="masker">
                      <div className="w-fit flex items-center overflow-hidden">
                        {/* {idx === 1 && (
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "10vw"}}
                            transition={{ ease:[0.76, 0, 0.24, 1], duration: 1.5 }}
                            className="w-[90px] sm:w-[90px] md:w-[100px] lg:w-[9vw] h-[50px] sm:h-[40px] md:h-[50px] lg:h-[5vw] relative bottom-[3px] sm:bottom-[4px] md:bottom-[6px] lg:bottom-[0.6vw] mr-2 sm:mr-3 md:mr-4 lg:mr-[0.7vw] bg-blue-900 rounded-lg sm:rounded-xl"
                          />
                        )} */}
                        <h1
                          className={`bg-gradient-to-r from-blue-900 to-blue-400 bg-clip-text uppercase text-[#212121] text-[14vw] sm:text-5xl md:text-8xl lg:text-7xl xl:text-[9vw] leading-tight sm:leading-tight md:leading-tight lg:leading-[9.2vw] font-bold ${
                            idx !== 0 && "-mt-2 sm:-mt-3 md:-mt-4 lg:-mt-7"
                          }`}
                        >
                          {item}
                        </h1>
                      </div>
                    </div>
                  );
                })}
              </div>

        {/* Loading % */}
        <div className="text absolute w-full bottom-5 sm:bottom-8 md:bottom-12 flex px-5 sm:px-8 md:px-12 pr-10 sm:pr-16 md:pr-20 justify-between text-black text-2xl sm:text-3xl md:text-4xl lg:text-8xl">
          <span className="ab text-lg">Loading:</span>
          <span className="font-bold">{progress}%</span>
        </div>
      </motion.div>
    </div>
  );
}

