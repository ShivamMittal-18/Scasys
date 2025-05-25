import React, { useEffect, useState, useCallback, useRef } from "react";

const Eyes = () => {
  const [rotate1, setRotate1] = useState(0);
  const [rotate2, setRotate2] = useState(0);
  const [offset1, setOffset1] = useState({ x: 0, y: 0 });
  const [offset2, setOffset2] = useState({ x: 0, y: 0 });

  const animationRef = useRef();
  const lastUpdateRef = useRef(0);

  const updateEyes = useCallback((clientX, clientY) => {
    const now = Date.now();
    if (now - lastUpdateRef.current < 16) return;
    lastUpdateRef.current = now;

    // Eye 1
    const deltaX1 = 588 - clientX;
    const deltaY1 = 382 - clientY;
    const angle1 = Math.atan2(deltaY1, deltaX1) * (180 / Math.PI);
    const offsetX1 = Math.min(Math.max((clientX - 588) / 40, -10), 10);
    const offsetY1 = Math.min(Math.max((clientY - 382) / 40, -10), 10);

    // Eye 2
    const deltaX2 = 845 - clientX;
    const deltaY2 = 382 - clientY;
    const angle2 = Math.atan2(deltaY2, deltaX2) * (180 / Math.PI);
    const offsetX2 = Math.min(Math.max((clientX - 845) / 40, -10), 10);
    const offsetY2 = Math.min(Math.max((clientY - 382) / 40, -10), 10);

    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    
    animationRef.current = requestAnimationFrame(() => {
      setRotate1(angle1);
      setOffset1({ x: offsetX1, y: offsetY1 });
      setRotate2(angle2);
      setOffset2({ x: offsetX2, y: offsetY2 });
    });
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
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [updateEyes]);

  return (
    <div className="relative w-full min-h-[100vh] overflow-hidden bg-[#F1F1F1]">
      <div
        data-scroll
        data-scroll-speed="-0.7"
        className='absolute w-full bg-cover bg-center h-full top-0 bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'
        style={{
          transform: 'translate3d(0, 0, 0)',
          backfaceVisibility: 'hidden',
          perspective: '1000px'
        }}
      >
        <div className="flex gap-10 justify-center absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[85%] ">
          {/* Eye 1 */}
          <div className="flex justify-center items-center bg-[#F1F1F1] h-[15vw] w-[15vw] min-h-[100px] min-w-[100px] max-h-[180px] max-w-[180px] rounded-full">
            <div
              style={{
                transform: `translate(${offset1.x}px, ${offset1.y}px)`,
              }}
              className="black-eyes relative h-5/9 w-5/9 bg-[#212121] rounded-full"
            >
              <div
                style={{ transform: `rotate(${rotate1}deg)` }}
                className="absolute line top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-[1.5vw]"
              >
                <div className="h-[1.5vw] w-[1.5vw] bg-[#F1F1F1] rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Eye 2 */}
          <div className="flex justify-center items-center bg-[#F1F1F1] h-[15vw] w-[15vw] min-h-[100px] min-w-[100px] max-h-[180px] max-w-[180px] rounded-full">
            <div
              style={{
                transform: `translate(${offset2.x}px, ${offset2.y}px)`,
              }}
              className="black-eyes relative h-5/9 w-5/9 bg-[#212121] rounded-full"
            >
              <div
                style={{ transform: `rotate(${rotate2}deg)` }}
                className="absolute line top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-[1.5vw]"
              >
                <div className="h-[1.5vw] w-[1.5vw] bg-[#F1F1F1] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;