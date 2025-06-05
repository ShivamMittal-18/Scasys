import React, { useEffect, useState, useCallback, useRef } from "react";

const Eyes = () => {
  const [rotate1, setRotate1] = useState(0);
  const [rotate2, setRotate2] = useState(0);
  const [offset1, setOffset1] = useState({ x: 0, y: 0 });
  const [offset2, setOffset2] = useState({ x: 0, y: 0 });

  const eye1Ref = useRef(null);
  const eye2Ref = useRef(null);
  const animationFrameId = useRef(null);

  // Function to get the current center of an eye in viewport coordinates
  // This is crucial for eyes to correctly track the pointer relative to their *actual* position.
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
    // If an animation frame is already pending, cancel it to avoid redundant updates
    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
    }

    // Request a new animation frame to ensure updates happen at browser's refresh rate
    animationFrameId.current = requestAnimationFrame(() => {
      const center1 = getEyeCenter(eye1Ref);
      const center2 = getEyeCenter(eye2Ref);

      // --- Eye 1 Calculations ---
      const deltaX1 = center1.x - clientX;
      const deltaY1 = center1.y - clientY;
      const angle1 = Math.atan2(deltaY1, deltaX1) * (180 / Math.PI) + 180; // +180 to orient the line from eye to cursor

      const maxPupilMove = 10; // Max pixels the pupil can move from its center
      const dist1 = Math.sqrt(deltaX1 * deltaX1 + deltaY1 * deltaY1);
      const moveFactor1 = dist1 > 0 ? Math.min(dist1, maxPupilMove) / dist1 : 0; // Avoid division by zero
      const offsetX1 = -deltaX1 * moveFactor1;
      const offsetY1 = -deltaY1 * moveFactor1;

      // --- Eye 2 Calculations ---
      const deltaX2 = center2.x - clientX;
      const deltaY2 = center2.y - clientY;
      const angle2 = Math.atan2(deltaY2, deltaX2) * (180 / Math.PI) + 180; // +180 to orient the line from eye to cursor

      const dist2 = Math.sqrt(deltaX2 * deltaX2 + deltaY2 * delta2);
      const moveFactor2 = dist2 > 0 ? Math.min(dist2, maxPupilMove) / dist2 : 0; // Avoid division by zero
      const offsetX2 = -deltaX2 * moveFactor2;
      const offsetY2 = -deltaY2 * moveFactor2;

      // Update state
      setRotate1(angle1);
      setOffset1({ x: offsetX1, y: offsetY1 });
      setRotate2(angle2);
      setOffset2({ x: offsetX2, y: offsetY2 });
    });
  }, [getEyeCenter]);

  useEffect(() => {
    const handlePointerMove = (e) => {
      // Use PointerEvent for unified mouse/touch handling.
      // e.isPrimary ensures we only track the dominant pointer for simplicity.
      if (e.pointerType === 'mouse' || e.isPrimary) {
        updateEyes(e.clientX, e.clientY);
      }
    };

    // Attach event listener to the element that contains the eyes.
    // This is better than `window` for mobile scrolling performance,
    // as it limits the scope of pointer tracking.
    const eyeContainer = document.querySelector('.eyes-container'); 
    if (eyeContainer) {
      // Use { passive: true } for touch/wheel events if you don't call preventDefault()
      // to improve scroll performance. For pointermove, it's generally safe.
      eyeContainer.addEventListener("pointermove", handlePointerMove, { passive: true });
    }

    return () => {
      if (eyeContainer) {
        eyeContainer.removeEventListener("pointermove", handlePointerMove);
      }
      // Clean up any pending animation frame when component unmounts
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [updateEyes]); // `updateEyes` is a dependency as it's a useCallback function

  // Recalculate eye positions on window resize to ensure correct tracking
  useEffect(() => {
    const handleResize = () => {
      // Trigger an update with the current pointer position if possible, or center of screen
      // A more robust solution might store the last valid clientX/Y.
      updateEyes(window.innerWidth / 2, window.innerHeight / 2); // Default to center for recalculation
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [updateEyes]);

  return (
    <div className="relative w-full min-h-[100vh] overflow-hidden bg-[#FEFEFE]">
      {/* This div is intended to be controlled by your scroll library for parallax */}
      <div
        data-scroll // This is the hook for your scroll library
        data-scroll-speed="-0.7" // This determines the parallax speed
        className='absolute w-full bg-cover bg-center h-full top-0 bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'
        style={{
          // These are often added by scroll libraries for performance (hardware acceleration)
          transform: 'translate3d(0, 0, 0)',
          backfaceVisibility: 'hidden',
          perspective: '1000px'
        }}
      >
        {/* The eyes themselves */}
        <div className="flex gap-10 justify-center absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[85%] eyes-container"> {/* Added 'eyes-container' class for event listener */}
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