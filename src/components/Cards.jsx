// import React from "react";
// import { motion } from "framer-motion";
// import { Lightbulb, Code2, Cpu, Rocket } from "lucide-react";

//   return (
//     <div className="flex gap-10 px-[7vh] h-[80vh] items-center">
//       <div className="cardcontainer   h-[50vh] w-1/2">
//         <div className="card relative w-full flex items-center justify-center rounded-xl h-full bg-[#CEEA68]">
//             <img className=" h-[20vh]" src="src\assets\images\reverse-logo.png" alt="" />
//             <button className="absolute left-10 text-[#4F9872] bottom-10 px-5 py-1 rounded-full border-2"><h1 className=" uppercase">&copy; see demo</h1></button>
//         </div>
//       </div>
//       <div className="flex gap-10 cardcontainer h-96 w-1/2">
//         <div className="relative card w-1/2 rounded-xl h-full bg-[#212121] flex items-center justify-center">
//             <img className="h-[20vh] " src="src\assets\images\resumegenie.png" alt="" />
//             <button className="absolute left-10 text-[#F5F5F1] bottom-10 px-5 py-1 rounded-full border-2"><h1 className=" uppercase">&copy;see demo</h1></button>
//         </div>
//         <div className="relative card w-1/2 rounded-xl h-full bg-[#212121] flex items-center justify-center">
//             <img className="h-[20vh] " src="src\assets\images\evolvx.png" alt="" />
//             <button className="absolute left-10 text-[#FE6B03] bottom-10 px-5 py-1 rounded-full border-2"><h1 className=" uppercase">&copy;see demo</h1></button>
//         </div>
        
//       </div>
//     </div>
//   );
// };
import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Code2, Cpu, Rocket } from "lucide-react";

const steps = [
  { label: "Idea", icon: <Lightbulb /> },
  { label: "Design", icon: <Code2 /> },
  { label: "Code", icon: <Cpu /> },
  { label: "Deploy", icon: <Rocket /> },
];

const Cards = () => {
  return (
    <div className="w-full bg-blue-800  flex flex-col justify-center items-center py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      {/* Header */}
      <motion.div 
        className="text-center mb-12 sm:mb-16 md:mb-20"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          Our Process
        </h1>
        <p className="text-blue-200 text-lg sm:text-xl md:text-2xl font-light max-w-2xl">
          From concept to deployment, we follow a proven methodology
        </p>
      </motion.div>

      {/* Progress Bar */}
      <div className="relative w-full max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl mb-16 sm:mb-20 md:mb-24">
        <div className="w-full h-1 sm:h-1.5 md:h-2 bg-blue-900/50 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-400 via-blue-300 to-indigo-400 rounded-full shadow-lg"
            initial={{ width: 0 }}
            animate={{ width: "75%" }}
            transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
          />
        </div>
        <div className="absolute -top-1 sm:-top-1.5 md:-top-2 left-3/4 w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5 bg-cyan-400 rounded-full shadow-lg animate-pulse" />
      </div>

      {/* Steps */}
      <div className="grid grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16 w-full max-w-6xl">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="relative group"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              delay: index * 0.2 + 1,
              duration: 0.6,
              type: "spring",
              stiffness: 100
            }}
          >
            {/* Connection Line */}
            {index < steps.length - 1 && (
              <motion.div
                className="absolute top-8 sm:top-10 md:top-12 lg:top-14 -right-2 sm:-right-3 md:-right-4 lg:-right-6 xl:-right-8 w-4 sm:w-6 md:w-8 lg:w-12 xl:w-16 h-0.5 bg-gradient-to-r from-blue-300 to-blue-400"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: index * 0.2 + 1.5, duration: 0.5 }}
              />
            )}
            
            {/* Card */}
            <div className="flex flex-col items-center text-center group-hover:transform group-hover:scale-105 transition-all duration-300">
              {/* Icon Container */}
              <motion.div
                className="relative mb-4 sm:mb-5 md:mb-6"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-white to-blue-50 rounded-full shadow-2xl flex items-center justify-center border border-blue-100 group-hover:shadow-cyan-400/20 group-hover:shadow-2xl transition-all duration-300">
                  <div className="text-blue-800 [&>svg]:w-6 [&>svg]:h-6 sm:[&>svg]:w-7 sm:[&>svg]:h-7 md:[&>svg]:w-8 md:[&>svg]:h-8 lg:[&>svg]:w-10 lg:[&>svg]:h-10">
                    {step.icon}
                  </div>
                </div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>

              {/* Step Number */}
              <motion.div
                className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base md:text-lg mb-3 sm:mb-4 shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.2 + 1.3, type: "spring" }}
              >
                {index + 1}
              </motion.div>

              {/* Label */}
              <h3 className="text-white font-semibold text-sm sm:text-base md:text-lg lg:text-xl mb-2">
                {step.label}
              </h3>
              
              {/* Description */}
              <p className="text-blue-200 text-xs sm:text-sm md:text-base font-light opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                {index === 0 && "Conceptualize"}
                {index === 1 && "Plan & Create"}
                {index === 2 && "Develop & Build"}
                {index === 3 && "Launch & Scale"}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        className="mt-16 sm:mt-20 md:mt-24 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.8 }}
      >
        <button className="px-8 sm:px-10 md:px-12 py-3 sm:py-4 bg-gradient-to-r from-cyan-400 to-blue-400 text-white font-semibold rounded-full shadow-2xl hover:shadow-cyan-400/30 hover:scale-105 transition-all duration-300 text-sm sm:text-base md:text-lg">
          Start Your Project
        </button>
      </motion.div>
    </div>
  );
};

export default Cards;