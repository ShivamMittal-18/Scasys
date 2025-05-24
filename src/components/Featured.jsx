import React, { useState } from "react";
import { ExternalLink } from "lucide-react";

const Featured = () => {
  const [hovering1, sethovering1] = useState(false);
  const [hovering2, sethovering2] = useState(false);
  const [hovering3, sethovering3] = useState(false);

  return (
    <div id="Our Projects" className="w-full py-4 sm:py-6 md:py-8 lg:py-[5vh]">
      <div className="px-3 sm:px-4 md:px-6 lg:px-[7vh] border-b pb-6 sm:pb-8 md:pb-10">
        <h1 className="uppercase start text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[8vh] leading-none font-bold">
          Featured Projects
        </h1>
      </div>

      {/* Row 1 */}
      <div className="px-3 sm:px-4 md:px-6 lg:px-[7vh] py-6 sm:py-8 md:py-10 lg:py-[9vh]">
        <div className="relative cards w-full flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {/* Card 1 */}
          <div
            className="p-3 xs:p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] lg:hover:scale-105 cursor-pointer group border border-gray-100 relative rounded-lg sm:rounded-xl w-full lg:w-1/2 h-[50vh] xs:h-[55vh] sm:h-[60vh] md:h-[70vh] lg:h-[90vh]"
            onMouseEnter={() => sethovering1(true)}
            onMouseLeave={() => sethovering1(false)}
          >
            <h1 className="absolute text text-2xl xs:text-3xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-[16vh] font-semibold overflow-hidden text-blue-800 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[40] pointer-events-none whitespace-nowrap">
              {"RE-VERSE.IN".split("").map((item, idx) => (
                <span
                  key={idx}
                  className={`inline-block z-50 transition-transform duration-300 ${
                    hovering1 ? 'transform translate-y-0' : 'transform translate-y-full'
                  }`}
                  style={{ 
                    transitionDelay: `${idx * 30}ms`,
                    transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                  }}
                >
                  {item}
                </span>
              ))}
            </h1>
            <div className="card w-full h-full overflow-hidden flex flex-col">
              <div className="w-full h-[50%] sm:h-[55%] md:h-[60%] overflow-hidden rounded-lg">
                <img
                  className={`w-full h-full object-cover transition-all duration-300 ${
                    hovering1 ? "scale-105" : "scale-100"
                  }`}
                  src="src\assets\images\reverse.png"
                  alt="E-Commerce Platform"
                />
              </div>
              <div className="p-2 xs:p-3 sm:p-4 md:p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-blue-900 mb-2 sm:mb-3 md:mb-4">
                    E-Commerce Platform
                  </h2>
                  <p className="text-xs xs:text-sm sm:text-base text-gray-600 mb-2 sm:mb-3 md:mb-4 leading-relaxed">
                    A fully responsive e-commerce solution with integrated
                    payment processing and inventory management.
                  </p>
                </div>
                <button className="mt-auto inline-flex items-center justify-center px-3 xs:px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 border-2 border-blue-900 text-blue-900 rounded-lg font-medium hover:bg-blue-900 hover:text-white transition-all duration-300 group text-xs xs:text-sm sm:text-base">
                  View Demo
                  <ExternalLink className="ml-2 w-3 h-3 xs:w-4 xs:h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="relative p-3 xs:p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] lg:hover:scale-105 cursor-pointer group border border-gray-100 rounded-lg sm:rounded-xl w-full lg:w-1/2 h-[50vh] xs:h-[55vh] sm:h-[60vh] md:h-[70vh] lg:h-[90vh]"
            onMouseEnter={() => sethovering2(true)}
            onMouseLeave={() => sethovering2(false)}
          >
            <h1 className="absolute text text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-[16vh] font-semibold overflow-hidden text-[#CEEA68] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[40] pointer-events-none whitespace-nowrap">
              {"RESUME-GENIE".split("").map((item, idx) => (
                <span
                  key={idx}
                  className={`inline-block transition-transform duration-300 ${
                    hovering2 ? 'transform translate-y-0' : 'transform translate-y-full'
                  }`}
                  style={{ 
                    transitionDelay: `${idx * 30}ms`,
                    transitionTimingFunction: 'cubic-bezier(0.61, 1, 0.88, 1)'
                  }}
                >
                  {item}
                </span>
              ))}
            </h1>
            <div className="card w-full h-full overflow-hidden flex flex-col">
              <div className="w-full h-[50%] sm:h-[55%] md:h-[60%] overflow-hidden rounded-lg">
                <img
                  className={`w-full h-full object-cover transition-all duration-300 ${
                    hovering2 ? "scale-105" : "scale-100"
                  }`}
                  src="src\assets\images\resumegenieweb.png"
                  alt="Resume Genie"
                />
              </div>
              <div className="p-2 xs:p-3 sm:p-4 md:p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-blue-900 mb-2 sm:mb-3 md:mb-4">
                    AI-Based Resume Creation, Management & Verification System
                  </h2>
                  <p className="text-xs xs:text-sm sm:text-base text-gray-600 mb-2 sm:mb-3 md:mb-4 leading-relaxed">
                    A smart and secure dashboard for generating, organizing, and
                    verifying resumes using AI—built with a seamless Next.js
                    frontend, Express backend, and MongoDB for persistent
                    storage.
                  </p>
                </div>
                <button className="mt-auto inline-flex items-center justify-center px-3 xs:px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 border-2 border-blue-900 text-blue-900 rounded-lg font-medium hover:bg-blue-900 hover:text-white transition-all duration-300 group text-xs xs:text-sm sm:text-base">
                  View Demo
                  <ExternalLink className="ml-2 w-3 h-3 xs:w-4 xs:h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="px-3 sm:px-4 md:px-6 lg:px-[7vh] py-6 sm:py-8 md:py-10 lg:py-[9vh]">
        <div className="cards w-full flex">
          {/* Card 3 */}
          <div
            className="p-3 xs:p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] lg:hover:scale-105 cursor-pointer group border border-gray-100 relative rounded-lg sm:rounded-xl w-full lg:w-1/2 h-[50vh] xs:h-[55vh] sm:h-[60vh] md:h-[70vh] lg:h-[90vh]"
            onMouseEnter={() => sethovering3(true)}
            onMouseLeave={() => sethovering3(false)}
          >
            <h1 className="absolute text text-2xl xs:text-3xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-[16vh] font-semibold overflow-hidden text-emerald-500 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[40] pointer-events-none whitespace-nowrap">
              {"EVOLV-X".split("").map((item, idx) => (
                <span
                  key={idx}
                  className={`inline-block z-50 transition-transform duration-300 ${
                    hovering3 ? 'transform translate-y-0' : 'transform translate-y-full'
                  }`}
                  style={{ 
                    transitionDelay: `${idx * 30}ms`,
                    transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                  }}
                >
                  {item}
                </span>
              ))}
            </h1>
            <div className="card w-full h-full overflow-hidden flex flex-col">
              <div className="w-full h-[50%] sm:h-[55%] md:h-[60%] overflow-hidden rounded-lg">
                <img
                  className={`w-full h-full object-cover transition-all duration-300 ${
                    hovering3 ? "scale-105" : "scale-100"
                  }`}
                  src="src\assets\images\evolvxweb.png"
                  alt="Evolv-X"
                />
              </div>
              <div className="p-2 xs:p-3 sm:p-4 md:p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-blue-900 mb-2 sm:mb-3 md:mb-4">
                    Evolvx – An Entrepreneurial Bootcamp
                  </h2>
                  <p className="text-xs xs:text-sm sm:text-base text-gray-600 mb-2 sm:mb-3 md:mb-4 leading-relaxed">
                    A web-based platform that empowers future entrepreneurs through structured bootcamps, real-world mentorship, and collaborative learning experiences.
                  </p>
                </div>
                <button className="mt-auto inline-flex justify-center items-center px-3 xs:px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 border-2 border-blue-900 text-blue-900 rounded-lg font-medium hover:bg-blue-900 hover:text-white transition-all duration-300 group text-xs xs:text-sm sm:text-base">
                  View Demo
                  <ExternalLink className="ml-2 w-3 h-3 xs:w-4 xs:h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;