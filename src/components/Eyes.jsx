import React, { useEffect, useState, useCallback, useRef } from "react";

const Eyes = () => {
  const [rotate1, setRotate1] = useState(0);
  const [rotate2, setRotate2] = useState(0);
  const [offset1, setOffset1] = useState({ x: 0, y: 0 });
  const [offset2, setOffset2] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [floatOffset, setFloatOffset] = useState(0);

  const eye1Ref = useRef(null);
  const eye2Ref = useRef(null);
  const animationFrameId = useRef(null);
  const floatAnimationId = useRef(null);

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

  // Cool floating animation for mobile
  useEffect(() => {
    if (isMobile) {
      let startTime = Date.now();
      
      const animateFloat = () => {
        const elapsed = Date.now() - startTime;
        const offset = Math.sin(elapsed * 0.001) * 20; // Smooth sine wave motion
        setFloatOffset(offset);
        floatAnimationId.current = requestAnimationFrame(animateFloat);
      };
      
      floatAnimationId.current = requestAnimationFrame(animateFloat);
      
      return () => {
        if (floatAnimationId.current) {
          cancelAnimationFrame(floatAnimationId.current);
        }
      };
    }
  }, [isMobile]);

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

  const updateEyes = useCallback((clientX, clientY) => {
    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
    }

    animationFrameId.current = requestAnimationFrame(() => {
      const center1 = getEyeCenter(eye1Ref);
      const center2 = getEyeCenter(eye2Ref);

      // Eye 1 Calculations
      const deltaX1 = center1.x - clientX;
      const deltaY1 = center1.y - clientY;
      const angle1 = Math.atan2(deltaY1, deltaX1) * (180 / Math.PI) + 180;

      const maxPupilMove = 10;
      const dist1 = Math.sqrt(deltaX1 * deltaX1 + deltaY1 * deltaY1);
      const moveFactor1 = dist1 > 0 ? Math.min(dist1, maxPupilMove) / dist1 : 0;
      const offsetX1 = -deltaX1 * moveFactor1;
      const offsetY1 = -deltaY1 * moveFactor1;

      // Eye 2 Calculations
      const deltaX2 = center2.x - clientX;
      const deltaY2 = center2.y - clientY;
      const angle2 = Math.atan2(deltaY2, deltaX2) * (180 / Math.PI) + 180;

      const dist2 = Math.sqrt(deltaX2 * deltaX2 + deltaY2 * deltaY2);
      const moveFactor2 = dist2 > 0 ? Math.min(dist2, maxPupilMove) / dist2 : 0;
      const offsetX2 = -deltaX2 * moveFactor2;
      const offsetY2 = -deltaY2 * moveFactor2;

      setRotate1(angle1);
      setOffset1({ x: offsetX1, y: offsetY1 });
      setRotate2(angle2);
      setOffset2({ x: offsetX2, y: offsetY2 });
    });
  }, [getEyeCenter]);

  useEffect(() => {
    const handlePointerMove = (e) => {
      if (e.pointerType === 'mouse' || e.isPrimary) {
        updateEyes(e.clientX, e.clientY);
      }
    };

    const eyeContainer = document.querySelector('.eyes-container'); 
    if (eyeContainer) {
      eyeContainer.addEventListener("pointermove", handlePointerMove, { passive: true });
    }

    return () => {
      if (eyeContainer) {
        eyeContainer.removeEventListener("pointermove", handlePointerMove);
      }
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
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
            ? `translate3d(0, ${floatOffset}px, 0) scale(1.05)` // Cool floating + slight scale for mobile
            : 'translate3d(0, 0, 0)', // Default for desktop
          backfaceVisibility: 'hidden',
          perspective: '1000px',
          transition: isMobile ? 'none' : 'transform 0.1s ease-out', // Smooth transition for desktop
          filter: isMobile ? 'brightness(1.1) contrast(1.05)' : 'none' // Subtle enhancement for mobile
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