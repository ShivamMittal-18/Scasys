import React, { useEffect, useState, useCallback, useRef } from "react";

const Eyes = () => {
  const [rotate1, setRotate1] = useState(0);
  const [rotate2, setRotate2] = useState(0);
  const [offset1, setOffset1] = useState({ x: 0, y: 0 });
  const [offset2, setOffset2] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  const eye1Ref = useRef(null);
  const eye2Ref = useRef(null);
  const animationFrameId = useRef(null);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768;
      setIsMobile(isMobileDevice);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Function to get the current center of an eye in viewport coordinates
  const getEyeCenter = useCallback((ref) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      return {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      };
    }
    return { x: 0, y: 0 };
  }, []);

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

      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }

      animationFrameId.current = requestAnimationFrame(() => {
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
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    };
  }, [updateEyes]);

  useEffect(() => {
    const handleResize = () => {
      updateEyes(window.innerWidth / 2, window.innerHeight / 2);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [updateEyes]);

  return (
    <div className="relative w-full min-h-[100vh] overflow-hidden bg-[#FEFEFE]">
      <div
        // Conditionally add data-scroll attributes only for non-mobile devices
        {...(!isMobile && {
          'data-scroll': true,
          'data-scroll-speed': '-0.7'
        })}
        className='absolute w-full bg-cover bg-center h-full top-0 bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'
        style={{
          transform: isMobile 
            ? 'translate3d(0, 0, 0)' // No animation for mobile to prevent jittering
            : 'translate3d(0, 0, 0)', // Default for desktop
          backfaceVisibility: 'hidden',
          perspective: '1000px',
          transition: isMobile ? 'none' : 'transform 0.1s ease-out', // Smooth transition for desktop
        }}
      >
        <div className="flex gap-10 justify-center absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[85%] eyes-container">
          {/* Eye 1 */}
          <div ref={eye1Ref} className="flex justify-center items-center bg-[#FEFEFE] h-[15vw] w-[15vw] min-h-[100px] min-w-[100px] max-h-[180px] max-w-[180px] rounded-full">
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
                <div className="h-[1.5vw] w-[1.5vw] bg-[#FEFEFE] rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Eye 2 */}
          <div ref={eye2Ref} className="flex justify-center items-center bg-[#FEFEFE] h-[15vw] w-[15vw] min-h-[100px] min-w-[100px] max-h-[180px] max-w-[180px] rounded-full">
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
                <div className="h-[1.5vw] w-[1.5vw] bg-[#FEFEFE] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;