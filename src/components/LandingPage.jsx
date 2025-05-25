import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { FaArrowUpLong } from "react-icons/fa6";
import { easeInOut, motion } from "framer-motion";
import { ScrollSmoother } from "gsap/ScrollSmoother";

const LandingPage = () => {
  return (
    <div 
    className="z-10 min-h-screen w-full pt-2 sm:pt-1 md:pt-0.5 bg-[#F1F1F1]">
      <div className="textstructure mt-[30vh] sm:mt-[30vh] md:mt-[30vh] lg:mt-[10vw] px-4 sm:px-6 md:px-8 lg:px-[2.5vw]">
        {["We Create", "We Innovate", "We Revolutionize"].map((item, idx) => {
          return (
            <div key={idx} className="masker">
              <div className="w-fit flex items-center overflow-hidden">
                {idx === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "10vw"}}
                    transition={{ ease:[0.76, 0, 0.24, 1], duration: 1.5 }}
                    className="w-[90px] sm:w-[90px] md:w-[100px] lg:w-[9vw] h-[50px] sm:h-[40px] md:h-[50px] lg:h-[5vw] relative bottom-[3px] sm:bottom-[4px] md:bottom-[6px] lg:bottom-[0.6vw] mr-2 sm:mr-3 md:mr-4 lg:mr-[0.7vw] bg-blue-900 rounded-lg sm:rounded-xl"
                  />
                )}
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
      
      <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.2, ease: "easeOut", delay: 0.2 }}
  viewport={{ once: true }}
  className="landing-text border-t border-gray-300 mt-[10vh] py-[7vh] sm:mt-16 md:mt-20 lg:mt-32 xl:mt-38 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 sm:py-6 md:py-8 lg:py-2 px-4 sm:px-6 md:px-8 lg:px-13"
>
  <motion.div
    className="flex flex-col sm:flex-row gap-[4vh] sm:gap-8 md:gap-12 lg:gap-16"
    initial="hidden"
    whileInView="visible"
    variants={{
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.2,
        },
      },
    }}
    viewport={{ once: true }}
  >
    {["Power Your Growth", "Automate and Thrive", "Embrace your future"].map(
      (item, idx) => (
        <motion.p
          key={idx}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="text-sm sm:text-base md:text-lg font-medium tracking-tight leading-none text-gray-700"
        >
          {item}
        </motion.p>
      )
    )}
  </motion.div>

  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.2, ease: "easeOut", delay: 0.1 }}
    viewport={{ once: true }}
    onClick={() => {
      const ele = document.getElementById("Contact");
      ele.scrollIntoView({ behavior: "smooth" });
    }}
    className="start group flex justify-center items-center gap-2 relative mt-7 sm:mt-0"
  >
    {/* Text Button */}
    <div className="relative overflow-hidden px-3 sm:px-4 md:px-5 lg:px-6 uppercase py-2 sm:py-2.5 md:py-3 lg:py-1 border border-gray-400 rounded-full transition-all duration-300 text-black group-hover:text-white text-xs sm:text-sm md:text-base">
      <span className="relative z-10">Start the project</span>
      <div className="absolute inset-0 z-0 bg-blue-900 origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out rounded-full"></div>
    </div>

    {/* Arrow Button */}
    <div className="relative overflow-hidden w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-8 lg:h-8 rotate-45 border border-gray-400 flex items-center justify-center p-1.5 sm:p-2 md:p-2.5 lg:p-1.5 rounded-full transition-all duration-300 text-black group-hover:text-white">
      <span className="relative z-10 text-xs sm:text-sm md:text-base lg:text-sm">
        <FaArrowUpLong />
      </span>
      <div className="absolute inset-0 z-0 bg-blue-900 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out rounded-full"></div>
    </div>
  </motion.div>
</motion.div>
    </div>
  );
};

export default LandingPage;