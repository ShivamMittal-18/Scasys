// import React, { useEffect, useState } from "react";

// const Playful = () => {
//   const [rotate1, setRotate1] = useState(0);
//   const [rotate2, setRotate2] = useState(0);

//   useEffect(() => {
//     window.addEventListener("mousemove", (e) => {
//       let mouseX = e.clientX;
//       let mouseY = e.clientY;

//       let deltaX1 = 588 - mouseX;
//       let deltaY1 = 382 - mouseY;

//       var angle1 = Math.atan2(deltaY1, deltaX1) * (180 / Math.PI);
//       setRotate1(angle1);

//       let deltaX2 = 845 - mouseX;
//       let deltaY2 = 382 - mouseY;

//       var angle2 = Math.atan2(deltaY2, deltaX2) * (180 / Math.PI);
//       setRotate2(angle2);
//     });
//   }, []);

//   // style={{transform:`translate(-50%, -50%) rotate(${rotate}deg)`}}
//   return (
//     <div className="relative w-full h-screen overflow-hidden bg-blue-500">
//       <div className="relative w-full bg-cover bg-center h-full top-20 ]">
//         <div className="flex flex-col justify-center items-center">
//           <div>
//             <h1 className="text-[#212121] text text-[30vh] ">READY</h1>
//           </div>
//           <div>
//             <h1 className="text-[#212121] leading-[0.2vh] text text-[30vh] ">
//               TO START
//             </h1>
//           </div>
//           <div>
//             <h1 className="text-[#212121] text text-[30vh] ">THE PROJECT</h1>
//           </div>
//         </div>
//         <div className="flex gap-10 justify-center absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[85%] ">
//           <div className="flex justify-center items-center bg-[#F1F1F1] h-[15vw] w-[15vw] rounded-full">
//             <div className="relative  h-5/9 w-5/9 bg-[#212121]  rounded-full">
//               <div
//                 style={{ transform: `rotate(${rotate1}deg)` }}
//                 className="absolute rotate-[${rotate}deg] line top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full rotate  h-[1.5vw]"
//               >
//                 <div className=" h-[1.5vw] w-[1.5vw] bg-[#F1F1F1] rounded-full"></div>
//               </div>
//             </div>
//           </div>
//           <div className="flex justify-center items-center bg-[#F1F1F1] h-[15vw] w-[15vw] rounded-full">
//             <div className="flex justify-center items-center bg-[#F1F1F1] h-[15vw] w-[15vw] rounded-full">
//               <div className="relative  h-5/9 w-5/9 bg-[#212121]  rounded-full">
//                 <div
//                   style={{ transform: `rotate(${rotate2}deg)` }}
//                   className="absolute rotate-[${rotate}deg] line top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full rotate  h-[1.5vw]"
//                 >
//                   <div className=" h-[1.5vw] w-[1.5vw] bg-[#F1F1F1] rounded-full"></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Playful;



import React, { useEffect, useState, useRef } from "react";

const Playful = () => {
  const [rotate1, setRotate1] = useState(0);
  const [rotate2, setRotate2] = useState(0);
  const eye1Ref = useRef(null);
  const eye2Ref = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      // Get dynamic positions of the eyes
      if (eye1Ref.current && eye2Ref.current) {
        const eye1Rect = eye1Ref.current.getBoundingClientRect();
        const eye2Rect = eye2Ref.current.getBoundingClientRect();

        const eye1CenterX = eye1Rect.left + eye1Rect.width / 2;
        const eye1CenterY = eye1Rect.top + eye1Rect.height / 2;

        const eye2CenterX = eye2Rect.left + eye2Rect.width / 2;
        const eye2CenterY = eye2Rect.top + eye2Rect.height / 2;

        let deltaX1 = eye1CenterX - mouseX;
        let deltaY1 = eye1CenterY - mouseY;
        var angle1 = Math.atan2(deltaY1, deltaX1) * (180 / Math.PI);
        setRotate1(angle1);

        let deltaX2 = eye2CenterX - mouseX;
        let deltaY2 = eye2CenterY - mouseY;
        var angle2 = Math.atan2(deltaY2, deltaX2) * (180 / Math.PI);
        setRotate2(angle2);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div 
    
    className="text relative w-full min-h-[50vh] sm:h-[60vh] md:h-[60vh] lg:h-screen overflow-hidden bg-blue-500">
      <div
     className="relative w-full bg-cover bg-center h-full pt-8 sm:pt-12 md:pt-16 lg:pt-20">
        <div className="flex flex-col justify-center items-center px-2 sm:px-4">
          <div className="text-center">
            <h1 className="text-[#212121] text-[12vh] sm:text-[15vh] md:text-[20vh] lg:text-[25vh] xl:text-[30vh] font-bold leading-none sm:leading-[0.85] md:leading-none">
              READY
            </h1>
          </div>
          <div className="text-center">
            <h1 className="text-[#212121] text-[12vh] sm:text-[15vh] md:text-[20vh] lg:text-[25vh] xl:text-[30vh] font-bold leading-[0.7] sm:leading-[0.85] md:leading-[0.7]">
              TO START
            </h1>
          </div>
          <div className="text-center">
            <h1 className="text-[#212121] text-[12vh] sm:text-[15vh] md:text-[20vh] lg:text-[25vh] xl:text-[30vh] font-bold leading-[0.7] sm:leading-[0.85] md:leading-[0.9]">
              THE PROJECT
            </h1>
          </div>
        </div>
        
        <div className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-10 justify-center absolute top-[60%] left-1/2 -translate-x-[50%] -translate-y-[50%] sm:-translate-y-[80%] md:-translate-y-[85%]">
          {/* First Eye */}
          <div 
            ref={eye1Ref}
            className="flex justify-center items-center bg-[#F1F1F1] h-[20vw] w-[20vw] sm:h-[18vw] sm:w-[18vw] md:h-[16vw] md:w-[16vw] lg:h-[15vw] lg:w-[15vw] xl:h-[15vw] xl:w-[15vw] rounded-full"
            style={{
              minHeight: "80px",
              minWidth: "80px",
              maxHeight: "200px",
              maxWidth: "200px"
            }}
          >
            <div className="relative h-[55%] w-[55%] bg-[#212121] rounded-full">
              <div
                className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full"
                style={{
                  transform: `rotate(${rotate1}deg)`,
                  height: "2vw",
                  minHeight: "12px",
                  maxHeight: "25px"
                }}
              >
                <div 
                  className="bg-[#F1F1F1] rounded-full"
                  style={{
                    height: "2vw",
                    width: "2vw",
                    minHeight: "12px",
                    minWidth: "12px",
                    maxHeight: "25px",
                    maxWidth: "25px"
                  }}
                />
              </div>
            </div>
          </div>

          {/* Second Eye */}
          <div 
            ref={eye2Ref}
            className="flex justify-center items-center bg-[#F1F1F1] h-[20vw] w-[20vw] sm:h-[18vw] sm:w-[18vw] md:h-[16vw] md:w-[16vw] lg:h-[15vw] lg:w-[15vw] xl:h-[15vw] xl:w-[15vw] rounded-full"
            style={{
              minHeight: "80px",
              minWidth: "80px",
              maxHeight: "200px",
              maxWidth: "200px"
            }}
          >
            <div className="relative h-[55%] w-[55%] bg-[#212121] rounded-full">
              <div
                className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full"
                style={{
                  transform: `rotate(${rotate2}deg)`,
                  height: "2vw",
                  minHeight: "12px",
                  maxHeight: "25px"
                }}
              >
                <div 
                  className="bg-[#F1F1F1] rounded-full"
                  style={{
                    height: "2vw",
                    width: "2vw",
                    minHeight: "12px",
                    minWidth: "12px",
                    maxHeight: "25px",
                    maxWidth: "25px"
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playful;