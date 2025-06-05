import React, { useEffect, useState, useRef, useCallback } from "react";

const Playful = () => {
  const [rotate1, setRotate1] = useState(0);
  const [rotate2, setRotate2] = useState(0);
  const [offset1, setOffset1] = useState({ x: 0, y: 0 });
  const [offset2, setOffset2] = useState({ x: 0, y: 0 });

  const eye1Ref = useRef(null);
  const eye2Ref = useRef(null);
  const animationRef = useRef(null);
  const lastUpdateRef = useRef(0);

  const updateEyes = useCallback((clientX, clientY) => {
    const now = Date.now();
    if (now - lastUpdateRef.current < 16) return;
    lastUpdateRef.current = now;

    if (eye1Ref.current && eye2Ref.current) {
      const eye1Rect = eye1Ref.current.getBoundingClientRect();
      const eye2Rect = eye2Ref.current.getBoundingClientRect();

      const eye1CenterX = eye1Rect.left + eye1Rect.width / 2;
      const eye1CenterY = eye1Rect.top + eye1Rect.height / 2;
      const eye2CenterX = eye2Rect.left + eye2Rect.width / 2;
      const eye2CenterY = eye2Rect.top + eye2Rect.height / 2;

      // Eye 1 rotation and offset
      const deltaX1 = eye1CenterX - clientX;
      const deltaY1 = eye1CenterY - clientY;
      const angle1 = Math.atan2(deltaY1, deltaX1) * (180 / Math.PI);
      // offsetX and offsetY: move pupil max ±10px, normalized by 40px distance
      const offsetX1 = Math.min(Math.max((clientX - eye1CenterX) / 40, -10), 10);
      const offsetY1 = Math.min(Math.max((clientY - eye1CenterY) / 40, -10), 10);

      // Eye 2 rotation and offset
      const deltaX2 = eye2CenterX - clientX;
      const deltaY2 = eye2CenterY - clientY;
      const angle2 = Math.atan2(deltaY2, deltaX2) * (180 / Math.PI);
      const offsetX2 = Math.min(Math.max((clientX - eye2CenterX) / 40, -10), 10);
      const offsetY2 = Math.min(Math.max((clientY - eye2CenterY) / 40, -10), 10);

      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }

      animationRef.current = requestAnimationFrame(() => {
        setRotate1(angle1);
        setOffset1({ x: offsetX1, y: offsetY1 });
        setRotate2(angle2);
        setOffset2({ x: offsetX2, y: offsetY2 });
      });
    }
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      updateEyes(e.clientX, e.clientY);
    };
    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        updateEyes(e.touches[0].clientX, e.touches[0].clientY);
      }
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [updateEyes]);

  return (
    <div
      className="text relative w-full min-h-[50vh] sm:h-[60vh] md:h-[60vh] lg:h-screen overflow-hidden bg-blue-500"
    >
      <div
        className="relative w-full bg-cover bg-center h-full pt-8 sm:pt-12 md:pt-16 lg:pt-20"
      >
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

        <div
          className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-10 justify-center absolute top-[60%] left-1/2 -translate-x-[50%] -translate-y-[50%] sm:-translate-y-[80%] md:-translate-y-[85%]"
        >
          {/* First Eye */}
          <div
            ref={eye1Ref}
            className="flex justify-center items-center bg-[#FEFEFE] h-[20vw] w-[20vw] sm:h-[18vw] sm:w-[18vw] md:h-[16vw] md:w-[16vw] lg:h-[15vw] lg:w-[15vw] xl:h-[15vw] xl:w-[15vw] rounded-full"
            style={{
              minHeight: "80px",
              minWidth: "80px",
              maxHeight: "200px",
              maxWidth: "200px",
            }}
          >
            <div
              className="relative h-[55%] w-[55%] bg-[#212121] rounded-full"
              style={{
                transform: `translate(${offset1.x}px, ${offset1.y}px)`,
              }}
            >
              <div
                className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full"
                style={{
                  transform: `rotate(${rotate1}deg)`,
                  height: "2vw",
                  minHeight: "12px",
                  maxHeight: "25px",
                }}
              >
                <div
                  className="bg-[#FEFEFE] rounded-full"
                  style={{
                    height: "2vw",
                    width: "2vw",
                    minHeight: "12px",
                    minWidth: "12px",
                    maxHeight: "25px",
                    maxWidth: "25px",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Second Eye */}
          <div
            ref={eye2Ref}
            className="flex justify-center items-center bg-[#FEFEFE] h-[20vw] w-[20vw] sm:h-[18vw] sm:w-[18vw] md:h-[16vw] md:w-[16vw] lg:h-[15vw] lg:w-[15vw] xl:h-[15vw] xl:w-[15vw] rounded-full"
            style={{
              minHeight: "80px",
              minWidth: "80px",
              maxHeight: "200px",
              maxWidth: "200px",
            }}
          >
            <div
              className="relative h-[55%] w-[55%] bg-[#212121] rounded-full"
              style={{
                transform: `translate(${offset2.x}px, ${offset2.y}px)`,
              }}
            >
              <div
                className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full"
                style={{
                  transform: `rotate(${rotate2}deg)`,
                  height: "2vw",
                  minHeight: "12px",
                  maxHeight: "25px",
                }}
              >
                <div
                  className="bg-[#FEFEFE] rounded-full"
                  style={{
                    height: "2vw",
                    width: "2vw",
                    minHeight: "12px",
                    minWidth: "12px",
                    maxHeight: "25px",
                    maxWidth: "25px",
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
